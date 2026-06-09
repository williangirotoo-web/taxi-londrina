/**
 * app/taxi-londrina-ourinhos/page.tsx
 *
 * KEYWORD PRINCIPAL: táxi londrina ourinhos
 * INTENÇÃO: transacional — passageiro indo a Ourinhos (SP) por negócios, saúde ou regional
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-londrina-sao-paulo → 450 km, destino SP capital e Grande SP
 *      Esta página → 130 km, destino Ourinhos cidade (polo regional sudoeste paulista)
 *   ✅ /transfer-londrina-guarulhos → aeroporto GRU
 *   ✅ /taxi-londrina-curitiba → BR-376, sentido oposto
 *   NOTA: Ourinhos aparece como ponto de passagem em SP e GRU — não como destino
 *         Esta é a única página do projeto com Ourinhos como DESTINO FINAL
 *
 * CONTEÚDO EXCLUSIVO:
 *   - Rota PR-218 (Londrina → Bandeirantes) + SP-425 (→ Ourinhos)
 *   - Cidades intermediárias: Bandeirantes, Jacarezinho, Ribeirão Claro
 *   - Destinos em Ourinhos: Hospital Regional, UNOESTE, polo industrial
 *   - Ourinhos como hub do sudoeste paulista
 *
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"
import FormularioAgendamento from "@/app/components/FormularioAgendamento"

export const metadata: Metadata = {
  ...pageMetadata.taxiOurinhos,
  alternates: { canonical: `${business.url}/taxi-londrina-ourinhos` },
}

const serviceSchema = buildServiceSchema({
  name: "Táxi Londrina → Ourinhos — Transfer Direto",
  description:
    "Transfer de táxi de Londrina a Ourinhos (SP) pela PR-218 e SP-425. " +
    "130 km com hora marcada. Atendemos hospital regional, UNOESTE, " +
    "empresas industriais e cidades do sudoeste paulista.",
  serviceType: "Transfer Intermunicipal Ourinhos",
  url: `${business.url}/taxi-londrina-ourinhos`,
  areaServed: ["Londrina", "Ourinhos", "Paraná", "São Paulo"],
  image: `${business.url}/og-taxi-londrina-curitiba.jpg`,
})

const faqItems = [
  {
    question: "Qual a distância e o tempo de Londrina a Ourinhos de táxi?",
    answer:
      "A distância é de aproximadamente 130 km pela PR-218 até Bandeirantes (PR) " +
      "e depois pela SP-425 até Ourinhos (SP). " +
      "O tempo médio de viagem é de 1h30 a 1h45 em condições normais de tráfego. " +
      "É uma das rotas intermunicipais mais rápidas partindo de Londrina " +
      "em direção ao estado de São Paulo.",
  },
  {
    question: "O táxi atende o Hospital Regional de Ourinhos?",
    answer:
      "Sim. O Hospital Regional de Ourinhos é um dos destinos mais frequentes nessa rota. " +
      "Atendemos pacientes, acompanhantes e profissionais de saúde que se deslocam " +
      "entre Londrina e Ourinhos para consultas, procedimentos e internações. " +
      "O agendamento com hora marcada garante que você chegue com antecedência.",
  },
  {
    question: "Quais cidades o táxi passa entre Londrina e Ourinhos?",
    answer:
      "A rota principal passa por Bandeirantes (PR), Jacarezinho (PR) e Ribeirão Claro (PR) " +
      "antes de cruzar a divisa para São Paulo e chegar a Ourinhos. " +
      "Podemos fazer paradas em qualquer uma dessas cidades mediante solicitação no agendamento.",
  },
  {
    question: "É possível continuar de Ourinhos para São Paulo no mesmo transfer?",
    answer:
      "Sim. Ourinhos fica na SP-425, com acesso direto à SP-270 (Rodovia Raposo Tavares) " +
      "que leva a São Paulo. Para quem precisa ir de Londrina até São Paulo passando por Ourinhos, " +
      "oferecemos o transfer estendido com parada em Ourinhos e continuidade para a capital. " +
      "Informe o roteiro completo ao agendar para precificação adequada.",
  },
  {
    question: "Com quanto tempo de antecedência devo agendar o táxi para Ourinhos?",
    answer:
      "Para a rota Londrina–Ourinhos recomendamos agendamento com pelo menos 12 horas de antecedência " +
      "em dias normais. Para consultas médicas com horário fixo ou viagens de negócios, " +
      "48 horas de antecedência garantem disponibilidade e planejamento adequado do horário de saída.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Londrina → Ourinhos", url: "/taxi-londrina-ourinhos" },
])

const waOurinhos = whatsappUrl(
  "Olá! Preciso de um táxi de Londrina para Ourinhos (SP) e gostaria de agendar."
)

const dadosRota = [
  { label: "Distância total", valor: "130 km" },
  { label: "Tempo médio", valor: "1h30 – 1h45" },
  { label: "Pedágios estimados", valor: "~R$ 15–25" },
  { label: "Rodovias principais", valor: "PR-218 + SP-425" },
  { label: "Divisa PR/SP", valor: "Próximo a Ribeirão Claro" },
  { label: "Ticket médio", valor: "R$ 250 – 380" },
]

const destinosOurinhos = [
  { icon: "🏥", nome: "Hospital Regional de Ourinhos", desc: "Principal referência hospitalar da região sudoeste paulista." },
  { icon: "🎓", nome: "UNOESTE — Campus Ourinhos", desc: "Universidade do Oeste Paulista com cursos presenciais." },
  { icon: "🏭", nome: "Polo industrial de Ourinhos", desc: "Empresas dos setores alimentício, têxtil e metalmecânico." },
  { icon: "🌾", nome: "Empresas do agronegócio", desc: "Cooperativas e tradings da região canavieira do sudoeste paulista." },
  { icon: "🏛️", nome: "Fórum e órgãos públicos", desc: "Audiências e atendimentos em órgãos do judiciário e governo estadual." },
  { icon: "🛣️", nome: "Conexão para São Paulo", desc: "Ourinhos conecta à SP-270 (Raposo Tavares) para quem segue para a capital." },
]

const cidadesIntermed = [
  { nome: "Bandeirantes (PR)", km: "65 km de Londrina", nota: "Polo regional do norte pioneiro paranaense" },
  { nome: "Jacarezinho (PR)", km: "95 km de Londrina", nota: "Cidade universitária e industrial" },
  { nome: "Ribeirão Claro (PR)", km: "110 km de Londrina", nota: "Próxima à divisa PR/SP — SP-425" },
  { nome: "Ourinhos (SP)", km: "130 km de Londrina", nota: "Destino final — polo do sudoeste paulista" },
]

export default function TaxiLondrinaOurinhosPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Londrina → Ourinhos</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Táxi Londrina Ourinhos transfer direto"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-londrina-curitiba.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Táxi Londrina → Ourinhos · 130 km · PR-218 + SP-425
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi Londrina → Ourinhos
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  130 km · 1h30 com hora marcada · Sudoeste Paulista
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Transfer direto de Londrina a Ourinhos pela PR-218 e SP-425.
                Hospital Regional, UNOESTE, empresas industriais e agronegócio
                do sudoeste paulista. Agendamento com hora marcada.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waOurinhos} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar para Ourinhos
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ 130 km com hora marcada", "✅ Hospital Regional", "✅ UNOESTE", "✅ Agronegócio regional", "✅ Paradas intermediárias"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-londrina-curitiba.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY */}
        <div style={{
          background: "#FFCC00", padding: "0.875rem 1.5rem",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", margin: 0 }}>Táxi Londrina → Ourinhos · 130 km</p>
            <p style={{ fontSize: "0.75rem", color: "#1A1A1A", margin: 0 }}>PR-218 + SP-425 · Hospital Regional · UNOESTE · Agronegócio</p>
          </div>
          <a href={waOurinhos} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={16} />
            Agendar agora
          </a>
        </div>

        {/* DADOS DA ROTA */}
        <section aria-labelledby="rota-ourinhos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rota-ourinhos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Rota Londrina → Ourinhos de táxi
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              PR-218 (Londrina → Bandeirantes) + SP-425 (Bandeirantes → Ourinhos)
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto 3rem" }}>
              {dadosRota.map((d) => (
                <div key={d.label} style={{
                  background: "#F9F9F9", borderRadius: "10px",
                  padding: "1.25rem", border: "1px solid #E8E8E8", textAlign: "center",
                }}>
                  <p style={{ color: "#6B6B6B", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{d.label}</p>
                  <p style={{ color: "#0A0A0A", fontSize: "1rem", fontWeight: 800, margin: 0 }}>{d.valor}</p>
                </div>
              ))}
            </div>

            {/* Cidades intermediárias */}
            <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.5rem", textAlign: "center" }}>
              Cidades na rota Londrina → Ourinhos
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "680px", margin: "0 auto" }}>
              {cidadesIntermed.map((c, i) => (
                <div key={c.nome} style={{
                  display: "grid", gridTemplateColumns: "32px 1fr auto",
                  alignItems: "center", gap: "1rem",
                  background: "#F9F9F9", borderRadius: "10px",
                  padding: "1rem 1.5rem", border: "1px solid #E8E8E8",
                }}>
                  <span style={{ background: i === 3 ? "#FFCC00" : "#0A0A0A", color: i === 3 ? "#0A0A0A" : "#FFCC00", fontWeight: 800, fontSize: "0.75rem", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", margin: "0 0 0.2rem" }}>{c.nome}</p>
                    <p style={{ fontSize: "0.8rem", color: "#6B6B6B", margin: 0 }}>{c.nota}</p>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#9a9a9a", whiteSpace: "nowrap" }}>{c.km}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section aria-labelledby="destinos-ourinhos-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-ourinhos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Destinos atendidos em Ourinhos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Polo regional do sudoeste paulista — saúde, educação, indústria e agronegócio
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {destinosOurinhos.map((d) => (
                <div key={d.nome} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{d.nome}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-ourinhos-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-ourinhos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Agendar táxi para Ourinhos
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o endereço de destino em Ourinhos e o horário desejado.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="taxi-londrina-ourinhos" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-ourinhos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-ourinhos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Táxi Londrina Ourinhos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Rota, tempo, destinos e conexões</p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Agendar táxi Ourinhos" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Táxi de Londrina para Ourinhos com hora marcada
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              130 km pela PR-218 + SP-425. Hospital Regional, UNOESTE e empresas da região.
              Paradas intermediárias disponíveis.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waOurinhos} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outras rotas" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outras rotas intermunicipais
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-londrina-sao-paulo",      label: "Táxi Londrina → São Paulo" },
                { href: "/transfer-londrina-guarulhos",  label: "Transfer Londrina → Guarulhos (GRU)" },
                { href: "/taxi-londrina-curitiba",       label: "Táxi Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",        label: "Táxi Londrina → Maringá" },
                { href: "/taxi-executivo-londrina",      label: "Táxi Executivo Londrina" },
                { href: "/contato",                     label: "Solicitar orçamento" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block", background: "#FFFFFF", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px",
                  borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none",
                }}>{link.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Táxi Londrina → Ourinhos · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Orçamento →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
