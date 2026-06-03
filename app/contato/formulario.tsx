"use client"

import { business } from "@/lib/business"

function WhatsAppIcon({ size = 20, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function FormularioProposta({ waEmpresarial }: { waEmpresarial: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <label htmlFor="nome" style={{ display: "block", fontWeight: 600, fontSize: "0.8rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>Nome *</label>
        <input id="nome" name="nome" type="text" placeholder="Seu nome completo"
          style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1.5px solid #E8E8E8", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
      </div>
      <div>
        <label htmlFor="empresa" style={{ display: "block", fontWeight: 600, fontSize: "0.8rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>Empresa</label>
        <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa (opcional)"
          style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1.5px solid #E8E8E8", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
      </div>
      <div>
        <label htmlFor="telefone" style={{ display: "block", fontWeight: 600, fontSize: "0.8rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>Telefone / WhatsApp *</label>
        <input id="telefone" name="telefone" type="tel" placeholder="(43) XXXXX-XXXX"
          style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1.5px solid #E8E8E8", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }} />
      </div>
      <div>
        <label htmlFor="volume" style={{ display: "block", fontWeight: 600, fontSize: "0.8rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>Volume estimado de corridas por mês</label>
        <select id="volume" name="volume"
          style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1.5px solid #E8E8E8", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", background: "#FFFFFF" }}>
          <option value="">Selecione...</option>
          <option value="1-10">1 a 10 corridas/mês</option>
          <option value="11-30">11 a 30 corridas/mês</option>
          <option value="31-60">31 a 60 corridas/mês</option>
          <option value="60+">Mais de 60 corridas/mês</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" style={{ display: "block", fontWeight: 600, fontSize: "0.8rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>Destinos principais (opcional)</label>
        <textarea id="mensagem" name="mensagem" rows={3} placeholder="Ex.: aeroporto, hotéis, clientes em Curitiba..."
          style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1.5px solid #E8E8E8", fontSize: "0.875rem", outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }} />
      </div>
      <button type="button"
        onClick={() => {
          const nome     = (document.getElementById('nome')     as HTMLInputElement)?.value || ''
          const empresa  = (document.getElementById('empresa')  as HTMLInputElement)?.value || ''
          const telefone = (document.getElementById('telefone') as HTMLInputElement)?.value || ''
          const volume   = (document.getElementById('volume')   as HTMLSelectElement)?.value || ''
          const mensagem = (document.getElementById('mensagem') as HTMLTextAreaElement)?.value || ''
          if (!nome || !telefone) { alert('Preencha nome e telefone para enviar a proposta.'); return }
          const msg = `Olá! Gostaria de solicitar uma proposta de transporte empresarial.\n\nNome: ${nome}\n${empresa ? `Empresa: ${empresa}\n` : ''}Telefone: ${telefone}\n${volume ? `Volume estimado: ${volume} corridas/mês\n` : ''}${mensagem ? `Destinos/observações: ${mensagem}\n` : ''}`
          window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
        }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem", borderRadius: "8px", border: "none", cursor: "pointer" }}>
        <WhatsAppIcon />
        Enviar proposta pelo WhatsApp
      </button>
      <p style={{ color: "#9a9a9a", fontSize: "0.75rem", textAlign: "center", lineHeight: 1.5 }}>
        Ao clicar, você será redirecionado ao WhatsApp com as informações preenchidas.
      </p>
    </div>
  )
}
