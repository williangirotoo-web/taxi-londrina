/**
 * app/api/agendamento/route.ts
 *
 * Route Handler para envio de agendamentos via Resend.
 * Recebe POST com os dados do formulário e envia e-mail
 * para williangirotoo@gmail.com.
 *
 * Variável de ambiente obrigatória na Vercel:
 *   RESEND_API_KEY = re_xxxxxxxxxxxxxxxxxxxxxx
 *
 * Plano gratuito Resend: 3.000 e-mails/mês, 100/dia.
 */

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      nome,
      whatsapp,
      origem,
      destino,
      data,
      horario,
      passageiros,
      malas,
      observacoes,
      pagina,
    } = body

    // Validação mínima
    if (!nome || !whatsapp) {
      return NextResponse.json(
        { error: "Nome e WhatsApp são obrigatórios." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // Em desenvolvimento sem chave: retornar sucesso simulado
      console.warn("RESEND_API_KEY não configurada — e-mail não enviado (modo dev)")
      return NextResponse.json({ ok: true, dev: true })
    }

    // Montar HTML do e-mail
    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Novo agendamento — Táxi Londrina</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f5f5f5">
  <div style="background:#0A0A0A;border-radius:12px;padding:24px;margin-bottom:20px">
    <h1 style="color:#FFCC00;font-size:20px;margin:0 0 6px">Novo agendamento recebido</h1>
    <p style="color:#9a9a9a;font-size:13px;margin:0">Táxi Londrina — londrinataxi.com.br</p>
  </div>
  <div style="background:#ffffff;border-radius:12px;padding:24px;border:1px solid #e8e8e8">
    <table style="width:100%;border-collapse:collapse">
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px;width:40%">Nome</td>
        <td style="padding:10px 8px;font-size:14px;font-weight:bold;color:#0A0A0A">${nome}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">WhatsApp</td>
        <td style="padding:10px 8px;font-size:14px;font-weight:bold;color:#0A0A0A">${whatsapp}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Origem</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${origem}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Destino</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${destino}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Data</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${data}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Horário</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${horario}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Passageiros</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${passageiros}</td>
      </tr>
      <tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Quantidade de malas</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${malas}</td>
      </tr>
      ${observacoes ? `
      <tr>
        <td style="padding:10px 8px;color:#6B6B6B;font-size:13px">Observações</td>
        <td style="padding:10px 8px;font-size:14px;color:#0A0A0A">${observacoes}</td>
      </tr>` : ""}
    </table>
  </div>
  ${pagina ? `<p style="text-align:center;color:#9a9a9a;font-size:11px;margin-top:12px">Enviado da página: ${pagina}</p>` : ""}
  <div style="background:#FFCC00;border-radius:8px;padding:14px;margin-top:16px;text-align:center">
    <a href="https://wa.me/5544998913040?text=Olá%20${encodeURIComponent(nome)}%2C%20vi%20seu%20agendamento!"
       style="color:#0A0A0A;font-weight:bold;font-size:14px;text-decoration:none">
      Responder pelo WhatsApp →
    </a>
  </div>
</body>
</html>`

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Táxi Londrina <onboarding@resend.dev>",
        to: ["williangirotoo@gmail.com"],
        subject: `Agendamento: ${nome} — ${origem} → ${destino} em ${data}`,
        html,
        reply_to: whatsapp ? undefined : undefined,
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error("Resend error:", err)
      return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("API agendamento error:", err)
    return NextResponse.json({ error: "Erro interno." }, { status: 500 })
  }
}
