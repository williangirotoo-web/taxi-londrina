"use client"

/**
 * app/components/FormularioAgendamento.tsx
 *
 * Formulário premium de agendamento.
 * - Envia via POST /api/agendamento (Resend)
 * - Dispara gtag('event','agendamento_enviado') para GA4/Google Ads
 * - Componente 'use client' — page.tsx permanece Server Component
 *
 * Props:
 *   paginaOrigem: string — identifica de qual página veio (home, transfer, etc.)
 */

import { useState, FormEvent } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface FormularioAgendamentoProps {
  paginaOrigem?: string
}

const origensOpcoes = [
  "Aeroporto Londrina (LDB)",
  "Rodoviária de Londrina",
  "Hotel",
  "Hospital",
  "Outro",
]

export default function FormularioAgendamento({ paginaOrigem = "home" }: FormularioAgendamentoProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({
    nome: "", whatsapp: "", origem: "", destino: "",
    data: "", horario: "", passageiros: "1", malas: "0", observacoes: "",
  })

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.nome || !form.whatsapp) return

    // Montar mensagem WhatsApp com todos os campos
    const msg = [
      `📅 *Novo agendamento — Táxi Londrina*`,
      ``,
      `👤 *Nome:* ${form.nome}`,
      `📱 *WhatsApp:* ${form.whatsapp}`,
      `📍 *Origem:* ${form.origem}`,
      `🏁 *Destino:* ${form.destino}`,
      `📆 *Data:* ${form.data}`,
      `⏰ *Horário:* ${form.horario}`,
      `👥 *Passageiros:* ${form.passageiros}`,
      `🧳 *Malas:* ${form.malas}`,
      form.observacoes ? `📝 *Obs:* ${form.observacoes}` : ``,
    ].filter(Boolean).join('\n')

    // Evento de conversão GA4 + Google Ads
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "agendamento_enviado", {
        event_category: "formulario",
        event_label: paginaOrigem,
        origem: form.origem,
        destino: form.destino,
        value: 1,
      })
    }

    // Abrir WhatsApp com mensagem pré-preenchida
    window.open(
      `https://wa.me/5544998913040?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    )

    setStatus("success")
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.75rem 1rem",
    background: "#1a1a1a", border: "1.5px solid #2a2a2a",
    borderRadius: "8px", color: "#FFFFFF", fontSize: "0.875rem",
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  }

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.75rem", fontWeight: 600,
    color: "#9a9a9a", marginBottom: "0.4rem",
    textTransform: "uppercase", letterSpacing: "0.05em",
  }

  if (status === "success") {
    return (
      <div style={{
        background: "#0A0A0A", border: "2px solid #FFCC00",
        borderRadius: "12px", padding: "2.5rem", textAlign: "center",
      }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
        <h3 style={{ color: "#FFCC00", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Agendamento recebido!
        </h3>
        <p style={{ color: "#D0D0D0", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Você receberá confirmação pelo WhatsApp em breve.
        </p>
        <a
          href={`https://wa.me/5544998913040?text=${encodeURIComponent(`Olá! Acabei de preencher o formulário de agendamento no site. Nome: ${form.nome}`)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#25D366", color: "#FFFFFF",
            fontWeight: 700, fontSize: "0.9rem",
            padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none",
          }}
        >
          <WhatsAppIcon size={18} />
          Confirmar pelo WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Grid 2 colunas no desktop, 1 no mobile */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {/* Nome */}
        <div>
          <label htmlFor="ag-nome" style={labelStyle}>Nome completo *</label>
          <input
            id="ag-nome" name="nome" type="text" required
            placeholder="Seu nome" value={form.nome} onChange={handle}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="ag-whatsapp" style={labelStyle}>WhatsApp *</label>
          <input
            id="ag-whatsapp" name="whatsapp" type="tel" required
            placeholder="(44) XXXXX-XXXX" value={form.whatsapp} onChange={handle}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {/* Origem — select */}
        <div>
          <label htmlFor="ag-origem" style={labelStyle}>Origem *</label>
          <select
            id="ag-origem" name="origem" required value={form.origem} onChange={handle}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          >
            <option value="">Selecione...</option>
            {origensOpcoes.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Destino */}
        <div>
          <label htmlFor="ag-destino" style={labelStyle}>Destino *</label>
          <input
            id="ag-destino" name="destino" type="text" required
            placeholder="Hotel, bairro ou cidade" value={form.destino} onChange={handle}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
        {/* Data */}
        <div>
          <label htmlFor="ag-data" style={labelStyle}>Data *</label>
          <input
            id="ag-data" name="data" type="date" required
            value={form.data} onChange={handle}
            style={{ ...inputStyle, colorScheme: "dark" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>

        {/* Horário */}
        <div>
          <label htmlFor="ag-horario" style={labelStyle}>Horário *</label>
          <input
            id="ag-horario" name="horario" type="time" required
            value={form.horario} onChange={handle}
            style={{ ...inputStyle, colorScheme: "dark" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          />
        </div>

        {/* Passageiros */}
        <div>
          <label htmlFor="ag-passageiros" style={labelStyle}>Passageiros</label>
          <select
            id="ag-passageiros" name="passageiros" value={form.passageiros} onChange={handle}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          >
            {["1","2","3","4","5","6+"].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        {/* Malas */}
        <div>
          <label htmlFor="ag-malas" style={labelStyle}>Malas</label>
          <select
            id="ag-malas" name="malas" value={form.malas} onChange={handle}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          >
            {["0","1","2","3","4","5+"].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      {/* Observações */}
      <div>
        <label htmlFor="ag-obs" style={labelStyle}>Observações</label>
        <textarea
          id="ag-obs" name="observacoes" rows={3}
          placeholder="Voo atrasado, bebê, bagagem extra, cadeirinha..."
          value={form.observacoes} onChange={handle}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#FFCC00")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </div>

      {/* Botão */}
      <button
        type="submit"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
          width: "100%", background: "#25D366",
          color: "#FFFFFF", fontWeight: 800, fontSize: "1rem",
          padding: "1rem", borderRadius: "8px",
          border: "none", cursor: "pointer",
          transition: "filter 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
        onMouseOut={(e) => (e.currentTarget.style.filter = "brightness(1)")}
      >
        <WhatsAppIcon size={20} />
        Enviar agendamento pelo WhatsApp
      </button>

      <p style={{ color: "#555", fontSize: "0.75rem", textAlign: "center", lineHeight: 1.5 }}>
        Nenhum dado é armazenado neste site. Você receberá retorno pelo WhatsApp.
      </p>
    </form>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
