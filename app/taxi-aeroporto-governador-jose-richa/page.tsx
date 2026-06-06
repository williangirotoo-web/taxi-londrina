/**
 * app/taxi-aeroporto-governador-jose-richa/page.tsx
 *
 * KEYWORDS ALVO:
 *   - táxi aeroporto governador josé richa
 *   - taxi aeroporto governador jose richa londrina
 *   - aeroporto governador josé richa londrina táxi
 *
 * DIFERENCIAÇÃO vs /taxi-aeroporto-londrina:
 *   /taxi-aeroporto-londrina  → serviço de táxi genérico para/do aeroporto
 *   ESTA PÁGINA → foco na ENTIDADE (o aeroporto em si): localização,
 *                 terminal, estacionamento, acesso + CTA de táxi embutido
 *
 * H1: "Táxi Aeroporto Governador José Richa" (nome oficial completo)
 * serviceType: "Táxi Aeroportuário — Aeroporto Governador José Richa"
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

export const metadata: Metadata = pageMetadata.taxiAeroportoJoseRicha

const serviceSchema = buildServiceSchema({
  name: "Táxi Aeroporto Governador José Richa",
  description:
    "Serviço de táxi no Aeroporto Governador José Richa (LDB) em Londrina, Paraná. " +
    "Atendimento no terminal de passageiros para embarque e desembarque. " +
    "Transfer para o Centro, hotéis, hospitais e cidades da região.",
  serviceType: "Táxi Aeroportuário — Aeroporto Governador José Richa",
  url: `${business.url}/taxi-aeroporto-governador-jose-richa`,
  areaServed: ["Londrina", "Aeroporto Governador José Richa", "Paraná", "Norte do Paraná"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

const faqItems = [
  {
    question: "Onde fica o Aeroporto Governador José Richa em Londrina?",
    answer:
      "O Aeroporto Governador José Richa (IATA: LDB) fica na Rodovia PR-445, km 03, " +
      "Bairro Esperança, Londrina — PR. Está a aproximadamente 5 km do Centro da cidade, " +
      "com acesso fácil pela Avenida dos Aviadores.",
  },
  {
    question: "Como chamar um táxi no Aeroporto Governador José Richa?",
    answer:
      "Você pode agendar pelo WhatsApp antes do voo ou ligar no momento do desembarque. " +
      "O motorista aguarda no terminal de chegadas com plaquinha com seu nome. " +
      "Nenhum aplicativo necessário.",
  },
  {
    question: "Quanto tempo leva do Aeroporto José Richa ao Centro de Londrina?",
    answer:
      "Aproximadamente 15 a 20 minutos em trânsito normal, percorrendo cerca de 14 km. " +
      "Para a Gleba Palhano, principal região de hotéis, são cerca de 12 km e 18 minutos.",
  },
  {
    question: "O táxi atende voos noturnos no Aeroporto de Londrina?",
    answer:
      "Sim. O serviço funciona 24 horas, 7 dias por semana, incluindo madrugada, " +
      "feriados e finais de semana. Recomendamos agendamento antecipado para voos noturnos.",
  },
  {
    question: "O táxi no Aeroporto José Richa cobre cidades da região como Maringá?",
    answer:
      "Sim. Fazemos transfer do Aeroporto José Richa para Maringá (~118 km, 1h20 pela PR-317), " +
      "Apucarana, Arapongas, Rolândia e outras cidades do norte do Paraná. " +
      "Solicite orçamento pelo WhatsApp.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Aeroporto Governador José Richa", url: "/taxi-aeroporto-governador-jose-richa" },
])

const waTaxiRicha = whatsappUrl(
  "Olá! Preciso de táxi no Aeroporto Governador José Richa em Londrina."
)

const infoAeroporto = [
  { icon: "📍", label: "Endereço", valor: "Rodovia PR-445, km 03 — Esperança, Londrina PR" },
  { icon: "✈️", label: "Código IATA", valor: "LDB" },
  { icon: "🏛️", label: "Administração", valor: "Fraport Brasil" },
  { icon: "🚗", label: "Distância ao Centro", valor: "≈ 14 km · ~20 min" },
  { icon: "🏨", label: "Gleba Palhano (hotéis)", valor: "≈ 12 km · ~18 min" },
  { icon: "⏰", label: "Funcionamento", valor: "Conforme malha aérea" },
]

const destinos = [
  { icon: "🏙️", nome: "Centro de Londrina",    dist: "14 km", tempo: "~20 min" },
  { icon: "🏨", nome: "Gleba Palhano",          dist: "12 km", tempo: "~18 min" },
  { icon: "🏥", nome: "Hospital Evangélico",    dist: "15 km", tempo: "~22 min" },
  { icon: "🏢", nome: "Zona Industrial Norte",  dist: "8 km",  tempo: "~15 min" },
  { icon: "🛣️", nome: "Maringá — PR-317",       dist: "118 km",tempo: "~1h20" },
  { icon: "🛣️", nome: "Curitiba — BR-376",      dist: "398 km",tempo: "~4h30" },
]

export default function TaxiAeroportoJoseRichaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Aeroporto Governador José Richa</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Táxi Aeroporto Governador José Richa Londrina"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0a0f0a 100%)", position: "relative", overflow: "hidden" }}>

          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.55) 40%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(80,200,120,0.12)", border: "1px solid rgba(80,200,120,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem" }}>
                <span style={{ color: "#50c878", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🏛️ Aeroporto Oficial · Londrina — LDB
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Táxi Aeroporto Governador José Richa
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem" }}>
                  Londrina · Embarque e Desembarque · 24 Horas
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0",
                lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Táxi autorizado no Aeroporto Governador José Richa (LDB). Atendemos
                embarques e desembarques, com monitoramento de voo e motorista
                aguardando no terminal.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waTaxiRicha} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Chamar táxi agora
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00",
                    textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Terminal de passageiros", "✅ Monitoramento de voo", "✅ 24 horas", "✅ Bilíngue PT/EN"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* CTA STICKY */}
        <div style={{ background: "#FFCC00", padding: "1rem 1.5rem", display: "flex",
          flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#0A0A0A", margin: 0 }}>
              Táxi Aeroporto Governador José Richa
            </p>
            <p style={{ fontSize: "0.8rem", color: "#1A1A1A", margin: 0 }}>
              Embarque · Desembarque · 24h
            </p>
          </div>
          <a href={waTaxiRicha} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem",
              padding: "0.7rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={18} />
            Chamar agora
          </a>
        </div>

        {/* INFO DO AEROPORTO */}
        <section aria-labelledby="info-aero-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="info-aero-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Aeroporto Governador José Richa — informações
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Tudo sobre o aeroporto de Londrina para planejar seu traslado
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              {infoAeroporto.map((info) => (
                <div key={info.label} style={{ background: "#F9F9F9", borderRadius: "10px",
                  padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start",
                  border: "1px solid #E8E8E8" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "#9a9a9a",
                      textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 2px" }}>{info.label}</p>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0A0A0A", margin: 0 }}>{info.valor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section aria-labelledby="destinos-richa-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-richa-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Destinos atendidos a partir do aeroporto
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Do Aeroporto José Richa para qualquer destino em Londrina e região
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
              {destinos.map((d) => (
                <div key={d.nome} style={{ background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", borderLeft: "4px solid #FFCC00", border: "1px solid #E8E8E8",
                  borderLeftWidth: "4px", borderLeftColor: "#FFCC00" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.3rem" }}>{d.nome}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem" }}>📍 {d.dist} · ⏱️ {d.tempo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO EM INGLÊS */}
        <section aria-labelledby="english-richa-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,0.08)", borderRadius: "999px",
                padding: "5px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#9a9a9a" }}>
                  🇬🇧 English service available
                </span>
              </div>
              <h2 id="english-richa-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Taxi at Londrina Airport (LDB)
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Need a taxi at Governador José Richa Airport in Londrina, Brazil?
                English-speaking driver available. Book via WhatsApp before landing
                for guaranteed service with name sign at arrivals.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem", maxWidth: "860px", margin: "0 auto 2.5rem" }}>
              {[
                { icon: "🗣️", title: "English-speaking driver", desc: "Full communication in English for international passengers." },
                { icon: "📡", title: "Flight monitoring", desc: "We track your flight. No need to update us on delays." },
                { icon: "🪧", title: "Name sign at arrivals", desc: "Driver waits at baggage claim with your name displayed." },
                { icon: "🕐", title: "24/7 service", desc: "Available for early morning and late night arrivals." },
              ].map((item) => (
                <div key={item.title} style={{ background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.5rem", borderTop: "3px solid #FFCC00" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.825rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href={waTaxiRicha} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem",
                  padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#0A0A0A" />
                Book taxi via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-richa-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-richa-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Agende seu táxi no Aeroporto José Richa
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe data, horário e destino. Motorista confirmado em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="taxi-aeroporto-governador-jose-richa" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-richa-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-richa-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Aeroporto Governador José Richa
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre o aeroporto de Londrina e serviço de táxi
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px",
                  border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.875rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Chamar táxi aeroporto José Richa" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900,
              color: "#0A0A0A", marginBottom: "1rem" }}>
              Táxi no Aeroporto Governador José Richa
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Agende pelo WhatsApp informando o número do voo, data e destino.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTaxiRicha} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar táxi
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A",
                  textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A",
              marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi e transfer no aeroporto de Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-aeroporto-londrina",                      label: "Táxi Aeroporto Londrina" },
                { href: "/transfer-aeroporto-londrina",                  label: "Transfer Receptivo" },
                { href: "/motorista-particular-aeroporto-londrina",      label: "Motorista Particular" },
                { href: "/taxi-executivo-londrina",                      label: "Táxi Executivo" },
                { href: "/taxi-24-horas-londrina",                       label: "Táxi 24 Horas" },
                { href: "/taxi-londrina-curitiba",                       label: "Londrina → Curitiba" },
                { href: "/contato",                                      label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: "inline-block",
                  background: "#FFFFFF", color: "#1A1A1A", fontSize: "0.8rem", fontWeight: 600,
                  padding: "8px 16px", borderRadius: "999px", border: "1px solid #E8E8E8",
                  textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex",
            flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                {business.shortName}
              </Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Táxi Aeroporto José Richa · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Agendar →</Link>
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
