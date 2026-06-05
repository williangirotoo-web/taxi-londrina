/**
 * app/transfer-aeroporto-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - transfer aeroporto londrina
 *   - transfer aeroporto governador jose richa
 *   - airport transfer londrina
 *   - receptivo aeroporto londrina
 *
 * ANTI-CANIBALIZAÇÃO vs /taxi-aeroporto-londrina:
 *   ✅ Keyword principal: "transfer" (não "táxi")
 *   ✅ Foco em CHEGADA/DESEMBARQUE (não embarque)
 *   ✅ Conteúdo exclusivo: plaquinha, monitoramento, receptivo, inglês
 *   ✅ Seção em inglês: airport transfer, meet & greet
 *   ✅ Destinos mapeados: hotéis, Gleba Palhano, hospitais, cidades
 *
 * SCHEMA:
 *   ✅ Service — serviceType: "Transfer Receptivo"
 *   ✅ FAQPage — 5 perguntas exclusivas de receptivo
 *   ✅ BreadcrumbList — Home > Transfer Aeroporto Londrina
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

export const metadata: Metadata = pageMetadata.transferAeroporto

const serviceSchema = buildServiceSchema({
  name: "Transfer Receptivo Aeroporto Londrina",
  description:
    "Serviço de transfer receptivo no Aeroporto Governador José Richa (LDB) em Londrina. " +
    "Motorista aguarda no desembarque com plaquinha, monitora o voo e leva ao destino. " +
    "Atendimento em português e inglês. Hotéis, Centro, Gleba Palhano e cidades da região.",
  serviceType: "Transfer Receptivo",
  url: `${business.url}/transfer-aeroporto-londrina`,
  areaServed: ["Londrina", "Aeroporto Governador José Richa", "Paraná"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

const faqItems = [
  {
    question: "Como funciona o serviço de receptivo no Aeroporto de Londrina?",
    answer:
      "Após confirmar o agendamento, o motorista monitora o seu voo e chega ao aeroporto " +
      "considerando possíveis atrasos. Ele aguarda no hall de desembarque com uma plaquinha " +
      "com o seu nome, guia você até o veículo e leva ao destino escolhido.",
  },
  {
    question: "O motorista aguarda se o voo atrasar?",
    answer:
      "Sim. Monitoramos o voo em tempo real. Se houver atraso, o motorista ajusta a chegada " +
      "automaticamente. Não há cobrança adicional por atrasos de até 60 minutos.",
  },
  {
    question: "O transfer aeroporto cobre hotéis na Gleba Palhano?",
    answer:
      "Sim. Atendemos todos os hotéis de Londrina, incluindo Gleba Palhano, Centro, " +
      "Higienópolis e demais bairros. Informe o nome do hotel no agendamento.",
  },
  {
    question: "O motorista fala inglês no transfer do aeroporto?",
    answer:
      "Sim. O motorista é bilíngue (português e inglês) e pode conduzir toda a comunicação " +
      "em inglês para passageiros internacionais ou executivos estrangeiros.",
  },
  {
    question: "O transfer do aeroporto de Londrina cobre cidades da região como Maringá?",
    answer:
      "Sim. Fazemos transfer do Aeroporto José Richa para cidades da região norte do Paraná: " +
      "Maringá (~1h20 pela PR-317), Apucarana, Arapongas e outras. Solicite orçamento pelo WhatsApp.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Aeroporto Londrina", url: "/transfer-aeroporto-londrina" },
])

const waTransfer = whatsappUrl(
  "Olá! Vi o serviço de transfer receptivo no Aeroporto de Londrina e gostaria de agendar."
)

const destinos = [
  { icon: "🏨", nome: "Hotéis — Gleba Palhano", tempo: "~18 min", dist: "12 km" },
  { icon: "🏙️", nome: "Centro de Londrina", tempo: "~20 min", dist: "14 km" },
  { icon: "🏢", nome: "Bairro Higienópolis", tempo: "~15 min", dist: "10 km" },
  { icon: "🏥", nome: "H. Evangélico / HCor", tempo: "~22 min", dist: "15 km" },
  { icon: "🛣️", nome: "Maringá — PR-317", tempo: "~1h20", dist: "118 km" },
  { icon: "🛣️", nome: "Curitiba — BR-376", tempo: "~4h30", dist: "398 km" },
]

const diferenciais = [
  { icon: "🪧", titulo: "Plaquinha com seu nome", desc: "Motorista aguarda no hall de chegadas com identificação visível." },
  { icon: "✈️", titulo: "Monitoramento de voo", desc: "Acompanhamos chegadas e atrasos em tempo real. Você não precisa avisar." },
  { icon: "⏱️", titulo: "Atraso sem custo extra", desc: "Aguardamos até 60 minutos de atraso sem cobrança adicional." },
  { icon: "🗣️", titulo: "Motorista bilíngue", desc: "Atendimento fluente em português e inglês para executivos e turistas." },
  { icon: "🧳", titulo: "Auxílio com bagagem", desc: "O motorista ajuda a carregar suas malas até o veículo." },
  { icon: "🚗", titulo: "Veículo premium", desc: "Toyota Corolla preto, climatizado, com tomadas USB e espaço para bagagem." },
]

export default function TransferAeroportoPage() {
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
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transfer Aeroporto Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO com imagem real do aeroporto ════════ */}
        <section aria-label="Transfer receptivo aeroporto Londrina"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>

          {/* Hero image — desktop */}
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image
              src="/og-taxi-aeroporto-londrina.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.5) 40%, transparent 100%)",
            }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Receptivo · Aeroporto Governador José Richa — LDB
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transfer do Aeroporto de Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Receptivo · Monitoramento de Voo · Meet & Greet
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Você desembarca. O motorista já está esperando com plaquinha.
                Monitoramos seu voo em tempo real — se atrasar, ajustamos sem custo extra.
                Português e inglês.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Plaquinha com seu nome", "✅ Monitoramento de voo", "✅ Atraso sem custo", "✅ Motorista bilíngue"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero mobile image */}
          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* ════════ CTA FIXO pós-dobra ════════ */}
        <div style={{
          background: "#FFCC00", padding: "1rem 1.5rem",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#0A0A0A", margin: 0 }}>Transfer Aeroporto José Richa</p>
            <p style={{ fontSize: "0.8rem", color: "#1A1A1A", margin: 0 }}>Plaquinha · Monitoramento de voo · 24h</p>
          </div>
          <a href={waTransfer} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem", padding: "0.7rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={18} />
            Agendar agora
          </a>
        </div>

        {/* ════════ DESTINOS ════════ */}
        <section aria-labelledby="destinos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Para onde levamos você
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Do Aeroporto José Richa direto ao seu destino em Londrina ou região
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {destinos.map((d) => (
                <div key={d.nome} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.5rem",
                  borderLeft: "4px solid #FFCC00", border: "1px solid #E8E8E8",
                  borderLeftWidth: "4px", borderLeftColor: "#FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{d.nome}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem" }}>⏱️ {d.tempo} · 📍 {d.dist}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DIFERENCIAIS ════════ */}
        <section aria-labelledby="diferenciais-transfer-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="diferenciais-transfer-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Por que escolher nosso transfer receptivo
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Do desembarque até seu destino — sem preocupação
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map((d) => (
                <div key={d.titulo} style={{ background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem", borderTop: "3px solid #FFCC00" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{d.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FORMULÁRIO DE AGENDAMENTO ════════ */}
        <section aria-labelledby="form-transfer-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-transfer-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Agende seu transfer do aeroporto
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o voo, destino e número de passageiros. Confirmamos em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transfer-aeroporto-londrina" />
          </div>
        </section>

        {/* ════════ SEÇÃO EM INGLÊS — Airport Transfer Londrina ════════ */}
        <section aria-labelledby="english-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#F0F0F0", borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1A1A" }}>
                  🇬🇧 English service available
                </span>
              </div>

              <h2 id="english-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Airport Transfer Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Professional airport transfer service at Londrina Governador José Richa Airport (LDB).
                English-speaking driver, flight monitoring, and meet & greet service.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem", maxWidth: "900px", margin: "0 auto 2.5rem" }}>
              {[
                { icon: "🗣️", title: "English-speaking driver", desc: "Full service in English for international passengers and corporate travelers." },
                { icon: "📡", title: "Flight monitoring", desc: "We track your flight in real time. Delays are automatically handled at no extra charge." },
                { icon: "🪧", title: "Meet & greet service", desc: "Your driver waits at arrivals with a name sign. No searching, no waiting outside." },
                { icon: "🚗", title: "Premium vehicle", desc: "Black Toyota Corolla, air-conditioned, with USB charging and luggage space." },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.5rem",
                  border: "1px solid #E8E8E8", borderTop: "3px solid #0A0A0A",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#3A3A3A", fontSize: "1rem", marginBottom: "1.25rem" }}>
                To book your airport transfer in Londrina, contact us via WhatsApp:
              </p>
              <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-transfer-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-transfer-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — transfer aeroporto Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre receptivo, monitoramento e destinos
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#FFFFFF", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
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
        <section aria-label="Agendar transfer aeroporto" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Agende seu transfer do Aeroporto de Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Informe data, número do voo e destino pelo WhatsApp.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar transfer
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi e transfer em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-aeroporto-londrina",         label: "Táxi Aeroporto Londrina" },
                { href: "/taxi-executivo-londrina",         label: "Táxi Executivo" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/taxi-24-horas-londrina",          label: "Táxi 24 Horas" },
                { href: "/taxi-londrina-curitiba",          label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",           label: "Londrina → Maringá" },
                { href: "/contato",                         label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block", background: "#FFFFFF", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px",
                  borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none",
                }}>
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
                Transfer Aeroporto Londrina · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
