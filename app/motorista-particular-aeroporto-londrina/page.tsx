/**
 * app/motorista-particular-aeroporto-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - motorista particular aeroporto londrina
 *   - motorista executivo aeroporto londrina
 *   - private driver airport londrina
 *
 * DIFERENCIAÇÃO vs páginas existentes:
 *   /taxi-aeroporto-londrina  → serviço genérico, embarque/desembarque
 *   /taxi-executivo-londrina  → executivo sem foco em aeroporto
 *   /transfer-aeroporto-londrina → receptivo público, hotéis, famílias
 *   ESTA PÁGINA → motorista dedicado para EMPRESÁRIOS E EXECUTIVOS no aeroporto
 *
 * H1: "Motorista Particular no Aeroporto de Londrina" (sem "táxi" nem "transfer")
 * serviceType: "Motorista Particular Executivo"
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

export const metadata: Metadata = pageMetadata.motoristaParticularAeroporto

const serviceSchema = buildServiceSchema({
  name: "Motorista Particular no Aeroporto de Londrina",
  description:
    "Motorista particular executivo no Aeroporto Governador José Richa (LDB). " +
    "Atendimento exclusivo para empresários e executivos: aeroporto → hotel, " +
    "aeroporto → empresa, reuniões corporativas. Discrição total, veículo premium.",
  serviceType: "Motorista Particular Executivo",
  url: `${business.url}/motorista-particular-aeroporto-londrina`,
  areaServed: ["Londrina", "Aeroporto Governador José Richa", "Paraná"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "Motorista particular é diferente de táxi executivo em Londrina?",
    answer:
      "Sim. O motorista particular oferece atendimento exclusivo e dedicado: " +
      "você contrata o profissional para uma rota específica ou período, sem compartilhar " +
      "o veículo. O serviço é mais discreto e personalizado que o táxi executivo convencional, " +
      "ideal para executivos, empresários e viajantes corporativos.",
  },
  {
    question: "O motorista particular atende no Aeroporto José Richa para empresários?",
    answer:
      "Sim. O serviço inclui recepção no terminal de desembarque com identificação, " +
      "monitoramento do voo, auxílio com bagagem e translado direto para hotel, " +
      "empresa ou qualquer destino em Londrina e região.",
  },
  {
    question: "É possível contratar motorista particular para reuniões em Londrina?",
    answer:
      "Sim. Contratamos o serviço para múltiplas paradas no mesmo dia: aeroporto → hotel → " +
      "reunião → almoço → próxima reunião → aeroporto. O motorista permanece disponível " +
      "durante toda a agenda, sem custo de espera por hora.",
  },
  {
    question: "O motorista particular fala inglês para executivos internacionais?",
    answer:
      "Sim. O atendimento é bilíngue em português e inglês, adequado para executivos " +
      "internacionais ou empresas com parceiros estrangeiros que desembarcam em Londrina.",
  },
  {
    question: "Há contrato mensal para motorista particular no aeroporto de Londrina?",
    answer:
      "Sim. Para empresas com executivos que viajam frequentemente, oferecemos contrato " +
      "mensal com nota fiscal, relatório de corridas e prioridade de atendimento. " +
      "Solicite proposta pelo WhatsApp.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Motorista Particular Aeroporto Londrina", url: "/motorista-particular-aeroporto-londrina" },
])

const waMotorista = whatsappUrl(
  "Olá! Gostaria de contratar motorista particular no Aeroporto de Londrina."
)

const rotasExecutivas = [
  { icon: "✈️", rota: "Aeroporto → Hotel", desc: "Translado discreto com monitoramento de voo", tempo: "~20 min" },
  { icon: "🏢", rota: "Aeroporto → Empresa", desc: "Direto ao seu compromisso corporativo", tempo: "~25 min" },
  { icon: "🤝", rota: "Reuniões corporativas", desc: "Motorista aguarda durante toda a agenda", tempo: "Diária" },
  { icon: "🔄", rota: "Multi-paradas", desc: "Hotel → Reunião → Almoço → Aeroporto", tempo: "Sob medida" },
  { icon: "🛣️", rota: "Aeroporto → Maringá", desc: "Transfer executivo pela PR-317", tempo: "~1h20" },
  { icon: "🛣️", rota: "Aeroporto → Curitiba", desc: "Transfer executivo pela BR-376", tempo: "~4h30" },
]

const diferenciais = [
  { icon: "🔇", titulo: "Discrição total", desc: "Sem conversas desnecessárias. O executivo trabalha ou descansa durante o trajeto." },
  { icon: "📡", titulo: "Monitoramento de voo", desc: "Acompanhamos chegadas e atrasos em tempo real. Você não precisa avisar." },
  { icon: "🪧", titulo: "Recepção com identificação", desc: "Motorista aguarda no terminal com plaquinha com o nome do passageiro." },
  { icon: "🗣️", titulo: "Bilíngue — PT e EN", desc: "Atendimento em português e inglês para executivos internacionais." },
  { icon: "🧾", titulo: "Nota fiscal disponível", desc: "Emissão de nota fiscal para reembolso corporativo e prestação de contas." },
  { icon: "🚗", titulo: "Veículo premium", desc: "Toyota Corolla preto, climatizado, USB e espaço para bagagem executiva." },
]

export default function MotoristaParticularAeroportoPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Motorista Particular Aeroporto Londrina</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Motorista particular no aeroporto de Londrina"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0f0a1a 100%)", position: "relative", overflow: "hidden" }}>

          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.55) 40%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(160,120,255,0.12)", border: "1px solid rgba(160,120,255,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem" }}>
                <span style={{ color: "#b090ff", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Executivo · Aeroporto Governador José Richa — LDB
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Motorista Particular no Aeroporto de Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem" }}>
                  Atendimento Executivo · Discrição · Bilíngue
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0",
                lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Empresários e executivos que desembarcam em Londrina merecem atendimento dedicado.
                Sem filas, sem aplicativo, sem compartilhamento. Motorista esperando com plaquinha.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waMotorista} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Contratar motorista
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
                {["✅ Recepção com plaquinha", "✅ Monitoramento de voo", "✅ Nota fiscal", "✅ Bilíngue PT/EN"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
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
              Motorista Particular · Aeroporto LDB
            </p>
            <p style={{ fontSize: "0.8rem", color: "#1A1A1A", margin: 0 }}>
              Executivo · Bilíngue · Nota Fiscal
            </p>
          </div>
          <a href={waMotorista} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem",
              padding: "0.7rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={18} />
            Contratar agora
          </a>
        </div>

        {/* ROTAS EXECUTIVAS */}
        <section aria-labelledby="rotas-exec-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rotas-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Rotas e atendimentos executivos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Do Aeroporto José Richa ao seu compromisso — sem intermediários
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {rotasExecutivas.map((r) => (
                <div key={r.rota} style={{ background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", borderLeft: "4px solid #FFCC00", border: "1px solid #E8E8E8",
                  borderLeftWidth: "4px", borderLeftColor: "#FFCC00" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{r.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.3rem" }}>{r.rota}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginBottom: "0.3rem" }}>{r.desc}</p>
                  <p style={{ color: "#FFCC00", fontSize: "0.75rem", fontWeight: 600 }}>⏱️ {r.tempo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section aria-labelledby="diferenciais-exec-aero-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="diferenciais-exec-aero-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Por que contratar motorista particular no aeroporto
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Atendimento que respeita o tempo e a agenda do executivo
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map((d) => (
                <div key={d.titulo} style={{ background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.75rem", borderTop: "3px solid #FFCC00" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{d.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO EM INGLÊS */}
        <section aria-labelledby="english-exec-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
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
              <h2 id="english-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Private Driver — Londrina Airport
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Executive private driver service at Londrina Governador José Richa Airport (LDB).
                Dedicated bilingual driver, flight monitoring, name sign at arrivals,
                and direct transfer to your hotel, office or meeting.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem", maxWidth: "860px", margin: "0 auto 2.5rem" }}>
              {[
                { icon: "🗣️", title: "Bilingual driver", desc: "Full service in English. Ideal for international executives and business travelers." },
                { icon: "📡", title: "Flight monitoring", desc: "We track your flight in real time and adjust arrival accordingly." },
                { icon: "🔇", title: "Discreet service", desc: "No unnecessary conversation. You work, rest or take calls during the ride." },
                { icon: "🧾", title: "Corporate invoice", desc: "Receipt available for expense reimbursement and corporate billing." },
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
              <a href={waMotorista} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem",
                  padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#0A0A0A" />
                Book private driver via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-motorista-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-motorista-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Agende seu motorista particular no aeroporto
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o voo, destino e agenda. Confirmamos em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="motorista-particular-aeroporto-londrina" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-motorista-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-motorista-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — motorista particular aeroporto Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre o serviço executivo no aeroporto
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
        <section aria-label="Contratar motorista particular aeroporto" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900,
              color: "#0A0A0A", marginBottom: "1rem" }}>
              Motorista particular para executivos no Aeroporto de Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Discrição, pontualidade e atendimento bilíngue. Informe o voo e destino pelo WhatsApp.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waMotorista} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Contratar motorista
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

        {/* ════════ SEÇÃO EM INGLÊS ════════ */}
        <section aria-labelledby="english-motorista-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#F0F0F0", borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#1A1A1A" }}>🇬🇧 English service available</span>
              </div>
              <h2 id="english-motorista-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Private Driver — Londrina Airport
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Professional private driver service at Londrina Governador José Richa Airport (LDB).
                English-speaking driver, flight monitoring, meet & greet, and executive vehicle.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem", maxWidth: "900px", margin: "0 auto 2.5rem" }}>
              {[
                { icon: "🗣️", title: "English-speaking driver", desc: "Full service in English for international executives and corporate travelers arriving at LDB." },
                { icon: "📡", title: "Flight monitoring", desc: "We track your flight in real time. Delays handled automatically at no extra charge." },
                { icon: "🤝", title: "Meet & greet", desc: "Your driver waits at arrivals with a name sign for a seamless, professional reception." },
                { icon: "🚗", title: "Executive vehicle", desc: "Black Toyota Corolla, air-conditioned, with USB charging and ample luggage space." },
              ].map((item) => (
                <div key={item.title} style={{ background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8", borderTop: "3px solid #0A0A0A" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href={waMotorista} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "1rem",
                  padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A",
              marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de transporte em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-aeroporto-londrina",          label: "Táxi Aeroporto Londrina" },
                { href: "/transfer-aeroporto-londrina",      label: "Transfer Receptivo" },
                { href: "/taxi-executivo-londrina",          label: "Táxi Executivo" },
                { href: "/transporte-empresarial-londrina",  label: "Transporte Empresarial" },
                { href: "/taxi-londrina-curitiba",           label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",            label: "Londrina → Maringá" },
                { href: "/contato",                          label: "Fale Conosco" },
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
                Motorista Particular Aeroporto · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Contratar →</Link>
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
