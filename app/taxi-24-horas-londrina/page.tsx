/**
 * app/taxi-24-horas-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - taxi 24 horas londrina
 *   - taxi madrugada londrina
 *   - taxi agora londrina
 *   - taxi urgência londrina
 *   - taxi rodoviária londrina
 *
 * ANTI-CANIBALIZAÇÃO aplicada:
 *   ✅ PRESENTE: madrugada, urgência, plantão, rodoviária, imediato, agora,
 *               corrida de última hora, disponibilidade, feriado, emergência
 *   ✅ AUSENTE:  aeroporto, voo, terminal, embarque, desembarque
 *   ✅ AUSENTE:  contrato, CNPJ, RH, faturamento, frota
 *   ✅ AUSENTE:  executivo, premium, bilíngue, motorista particular
 *
 * CTA HIERARQUIA:
 *   1º: Ligar agora — tel: — conversão imediata em urgência
 *   2º: WhatsApp — para quem prefere mensagem
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

export const metadata: Metadata = pageMetadata.taxi24Horas

const serviceSchema = buildServiceSchema({
  name: "Táxi 24 Horas em Londrina",
  description:
    "Serviço de táxi disponível 24 horas em Londrina, incluindo madrugada, " +
    "feriados e finais de semana. Atendimento imediato para urgências, " +
    "corridas de última hora, rodoviária e situações de plantão.",
  serviceType: "Táxi 24 Horas",
  url: `${business.url}/taxi-24-horas-londrina`,
  areaServed: ["Londrina", "Norte do Paraná"],
})

const faqItems = [
  {
    question: "O táxi em Londrina funciona de madrugada?",
    answer:
      "Sim. Atendemos 24 horas, 7 dias por semana, incluindo madrugada, feriados e " +
      "datas comemorativas. Não há restrição de horário — ligue ou mande WhatsApp " +
      "a qualquer momento e o motorista sairá para o seu endereço.",
  },
  {
    question: "Qual o tempo de espera para um táxi de madrugada em Londrina?",
    answer:
      "De madrugada o trânsito é menor, então o tempo de espera tende a ser mais " +
      "curto — geralmente entre 10 e 20 minutos dependendo da região de Londrina. " +
      "Ligue diretamente para confirmar disponibilidade no horário exato.",
  },
  {
    question: "O táxi atende na Rodoviária de Londrina de madrugada?",
    answer:
      "Sim. Atendemos na Rodoviária de Londrina em qualquer horário. Se você acabou " +
      "de chegar de ônibus e precisa de táxi, ligue ou mande WhatsApp e o motorista " +
      "vai até a rodoviária buscar você.",
  },
  {
    question: "O táxi 24 horas em Londrina tem cobrança extra na madrugada?",
    answer:
      "O valor da corrida noturna segue a tabela regulamentada. Informe o endereço " +
      "de origem e destino pelo WhatsApp antes de confirmar para receber " +
      "o valor estimado sem surpresas.",
  },
  {
    question: "É possível chamar táxi de última hora em Londrina sem agendamento?",
    answer:
      "Sim. Não é necessário agendar com antecedência. Para corridas imediatas, " +
      "a forma mais rápida é ligar diretamente — a ligação é atendida na hora e " +
      "o motorista confirma a disponibilidade em segundos.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi 24 Horas Londrina", url: "/taxi-24-horas-londrina" },
])

const wa24h = whatsappUrl(whatsappMessages.h24)

const situacoes = [
  { icon: "🌙", title: "Madrugada e horários difíceis", desc: "Saindo do trabalho de madrugada, voltando de evento ou precisando se deslocar entre 0h e 6h. Disponível a qualquer momento." },
  { icon: "🚌", title: "Chegada na Rodoviária de Londrina", desc: "Chegou de ônibus tarde da noite ou de madrugada e precisa chegar ao destino final. Buscamos diretamente na rodoviária." },
  { icon: "🏥", title: "Urgência médica não-emergencial", desc: "Farmácia de plantão, consulta de urgência, UPA ou pronto-socorro. Transporte rápido sem a espera de aplicativo." },
  { icon: "🔑", title: "Situações inesperadas", desc: "Carro quebrou, bateria descarregou, perdeu o último ônibus. Para quando o plano B falhou e você precisa de solução agora." },
  { icon: "👷", title: "Profissionais de plantão", desc: "Médicos, enfermeiros, seguranças, técnicos em TI e outros profissionais com turno noturno ou escalas irregulares." },
  { icon: "🎉", title: "Retorno de eventos e festas", desc: "Saindo de show, festa, confraternização ou evento. Sem precisar se preocupar com dirigir após uma noite de celebração." },
]

const bairros = [
  "Centro", "Gleba Palhano", "Jardim Bandeirantes", "Igapó",
  "Bela Suíça", "Catuaí", "Cinco Conjuntos", "Portal do Sol",
  "Jardim das Colinas", "União da Vitória", "Rodoviária", "UEL",
  "Hospital Universitário", "Norte do Paraná",
]

export default function Taxi24HorasPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi 24 Horas Londrina</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Táxi 24 horas em Londrina"
          style={{ background: "linear-gradient(160deg, #0A0A0A 0%, #0d1117 50%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: "10%", right: "5%", width: "280px", height: "280px",
            background: "radial-gradient(circle, rgba(255,204,0,0.08) 0%, transparent 70%)",
            borderRadius: "50%", pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", flexShrink: 0 }} />
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Disponível agora · Londrina, PR
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi 24 Horas em Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Atendimento imediato — dia, noite e madrugada
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Sem agendamento, sem espera de aplicativo. Ligue agora e o motorista
                sai para o seu endereço. Atendemos toda Londrina a qualquer hora —
                incluindo madrugada, feriados e fins de semana.
              </p>

              {/* CTAs — telefone é primário */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={`tel:${business.phone}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#FFCC00", color: "#0A0A0A", fontWeight: 900, fontSize: "1.1rem",
                    padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(255,204,0,0.35)",
                  }}
                  aria-label={`Ligar agora para ${business.phoneDisplay}`}>
                  📞 Ligar agora — {business.phoneDisplay}
                </a>
                <a href={wa24h} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "transparent", color: "#25D366", fontWeight: 700, fontSize: "1rem",
                    padding: "1rem 1.5rem", borderRadius: "8px", border: "2px solid #25D366", textDecoration: "none",
                  }}>
                  <WhatsAppIcon color="#25D366" />
                  WhatsApp
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Resposta imediata", "✅ Sem agendamento", "✅ Toda Londrina", "✅ Feriados e fins de semana", "✅ Madrugada"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DISPONIBILIDADE */}
        <section aria-label="Horários disponíveis" style={{ background: "#FFCC00", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
            {[
              { icon: "🌅", periodo: "Manhã",     horario: "06h – 12h" },
              { icon: "☀️",  periodo: "Tarde",     horario: "12h – 18h" },
              { icon: "🌆", periodo: "Noite",     horario: "18h – 00h" },
              { icon: "🌙", periodo: "Madrugada", horario: "00h – 06h" },
            ].map((p) => (
              <div key={p.periodo}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>{p.icon}</div>
                <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A" }}>{p.periodo}</div>
                <div style={{ fontSize: "0.8rem", color: "#333", marginBottom: "0.25rem" }}>{p.horario}</div>
                <div style={{ display: "inline-block", background: "#0A0A0A", color: "#FFCC00", fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>Disponível</div>
              </div>
            ))}
          </div>
        </section>

        {/* SITUAÇÕES DE USO */}
        <section aria-labelledby="situacoes-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="situacoes-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Quando o táxi 24 horas faz diferença em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Situações que não esperam horário comercial</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
              {situacoes.map((s) => (
                <div key={s.title} style={{ background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem", borderLeft: "4px solid #FFCC00", transition: "box-shadow 0.2s, transform 0.2s" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{s.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RODOVIÁRIA */}
        <section aria-labelledby="rodoviaria-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
              <div>
                <span style={{ background: "#FFCC00", color: "#0A0A0A", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "4px", display: "inline-block", marginBottom: "1rem" }}>
                  Rodoviária de Londrina
                </span>
                <h2 id="rodoviaria-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.25 }}>
                  Chegou de ônibus em Londrina de madrugada?
                </h2>
                <p style={{ color: "#D0D0D0", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  A Rodoviária de Londrina recebe ônibus em horários irregulares — incluindo
                  madrugada e início da manhã. Se você chegou agora e precisa chegar ao seu
                  destino, ligue ou mande mensagem. O motorista vai até a rodoviária buscar você.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                  {["Busca na saída da rodoviária", "Qualquer hora da madrugada", "Destino: qualquer bairro de Londrina", "Sem fila, sem espera de aplicativo"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#D0D0D0", fontSize: "0.9rem" }}>
                      <span style={{ color: "#FFCC00", fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <a href={`tel:${business.phone}`}
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
                    📞 Ligar agora
                  </a>
                  <a href={wa24h} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.5rem", borderRadius: "8px", border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
                    <WhatsAppIcon />WhatsApp
                  </a>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "2rem" }}>
                <p style={{ color: "#9a9a9a", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                  Da Rodoviária de Londrina para os bairros
                </p>
                {[
                  { bairro: "Centro de Londrina", tempo: "~8 min" },
                  { bairro: "Gleba Palhano", tempo: "~18 min" },
                  { bairro: "Jardim Bandeirantes", tempo: "~22 min" },
                  { bairro: "UEL / Campus Universitário", tempo: "~15 min" },
                  { bairro: "Igapó", tempo: "~12 min" },
                  { bairro: "Catuaí / Portal do Sol", tempo: "~28 min" },
                ].map((r) => (
                  <div key={r.bairro} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "#D0D0D0", fontSize: "0.875rem" }}>{r.bairro}</span>
                    <span style={{ color: "#FFCC00", fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{r.tempo}</span>
                  </div>
                ))}
                <p style={{ color: "#6B6B6B", fontSize: "0.75rem", marginTop: "0.75rem", fontStyle: "italic" }}>* Tempos estimados em trânsito de madrugada</p>
              </div>
            </div>
          </div>
        </section>

        {/* COBERTURA */}
        <section aria-labelledby="cobertura-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="cobertura-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Táxi 24 horas em todos os bairros de Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Do centro às regiões mais afastadas — qualquer horário</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
              {bairros.map((b) => (
                <span key={b} style={{ background: "#FFFFFF", border: "1.5px solid #E8E8E8", color: "#1A1A1A", borderRadius: "999px", padding: "7px 18px", fontSize: "0.875rem", fontWeight: 500 }}>{b}</span>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#6B6B6B", marginBottom: "1.5rem", fontSize: "0.95rem" }}>Não encontrou seu bairro? Ligue e confirme a disponibilidade agora.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  📞 Ligar — {business.phoneDisplay}
                </a>
                <a href={wa24h} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />WhatsApp agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-24h-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-24h-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — táxi 24 horas em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Dúvidas sobre disponibilidade, madrugada e corridas de urgência</p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.875rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Chamar táxi agora" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", flexShrink: 0 }} />
              <span style={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 700 }}>Online agora</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, color: "#FFFFFF", marginBottom: "1rem", lineHeight: 1.2 }}>
              Precisa de táxi em Londrina agora?
            </h2>
            <p style={{ color: "#9a9a9a", fontSize: "1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
              Não espere. Uma ligação resolve. O motorista confirma a disponibilidade
              em segundos e sai para o seu endereço.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 900, fontSize: "1.2rem", padding: "1.1rem 2.25rem", borderRadius: "8px", textDecoration: "none", boxShadow: "0 4px 24px rgba(255,204,0,0.3)" }}>
                📞 Ligar agora
              </a>
              <a href={wa24h} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "1.1rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-executivo-londrina",         label: "Táxi Executivo" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/taxi-aeroporto-londrina",         label: "Transfer Aeroporto" },
                { href: "/taxi-hospital-londrina",          label: "Táxi para Hospitais" },
                { href: "/taxi-com-cadeirinha-londrina",     label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba",          label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",           label: "Londrina → Maringá" },
                { href: "/contato",                         label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "inline-block", background: "#FFFFFF", color: "#1A1A1A", fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px", borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Táxi 24h · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
              <a href={`tel:${business.phone}`} style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>📞 Ligar agora →</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width="20" height="20" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
