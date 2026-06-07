/**
 * app/executive-driver-londrina/page.tsx
 *
 * LANGUAGE: English (100%)
 * KEYWORD: executive driver londrina
 * INTENT: transactional — C-level executives, investors and corporate visitors
 *
 * HREFLANG:
 *   en    → /executive-driver-londrina (this page)
 *   pt-BR → /transfer-corporativo-londrina (closest PT equivalent)
 *   x-default → /executive-driver-londrina
 *
 * ANTI-CANNIBALIZATION:
 *   ✅ /airport-transfer-londrina (EN) — airport context only
 *   ✅ /private-driver-londrina (EN) — tourism, day trips, broader scope
 *   ✅ /transfer-corporativo-londrina (PT) — B2B PT language
 *   ✅ /motorista-executivo-londrina (PT) — hourly packages, PT language
 *   This page: EN, C-suite, premium, discretion, investors, agribusiness
 *
 * EXCLUSIVE CONTENT: C-level service, due diligence, agro visits, confidentiality
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
  ...pageMetadata.executiveDriver,
  alternates: {
    canonical: `${business.url}/executive-driver-londrina`,
    languages: {
      "pt-BR": `${business.url}/transfer-corporativo-londrina`,
      "en":    `${business.url}/executive-driver-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Executive Driver in Londrina — Premium Corporate Service",
  description:
    "Premium executive driver service in Londrina for C-level executives, investors " +
    "and international corporate visitors. Full discretion, bilingual driver (EN/PT), " +
    "premium vehicle and corporate invoice for any company worldwide.",
  serviceType: "Executive Driver Service",
  url: `${business.url}/executive-driver-londrina`,
  areaServed: ["Londrina", "Paraná", "Brazil"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "What makes an executive driver different from a private driver in Londrina?",
    answer:
      "An executive driver service is specifically designed for C-level professionals — " +
      "CEOs, directors, investors and senior executives. The key differences are: " +
      "full confidentiality guarantee, premium black vehicle, driver who understands " +
      "corporate protocol, and service tailored to high-stakes business agendas. " +
      "A private driver covers broader needs including tourism and city tours. " +
      "The executive driver is focused exclusively on corporate and high-profile use.",
  },
  {
    question: "Can I get a corporate invoice for the executive driver service in Londrina?",
    answer:
      "Yes. We issue corporate invoices for any company — Brazilian CNPJ or international " +
      "companies from any country. The invoice includes service description, date, " +
      "route and total amount. Request the invoice details at the time of booking.",
  },
  {
    question: "Does the executive driver maintain confidentiality?",
    answer:
      "Yes. Full discretion is guaranteed. Routes, destinations, meeting locations " +
      "and any conversations during the ride are kept strictly confidential. " +
      "Our driver does not disclose client information under any circumstances.",
  },
  {
    question: "Can the executive driver take me to agribusiness companies and farms in Paraná?",
    answer:
      "Yes. Londrina is the capital of northern Paraná's agribusiness region. " +
      "We regularly transport investors and executives to cooperatives, grain trading companies, " +
      "farms and agro-industrial facilities in the region — including COCAMAR, Coamo, " +
      "Copavel and other major agricultural operators. Inform the destination and " +
      "we plan the full itinerary.",
  },
  {
    question: "How do I book an executive driver in Londrina for a full corporate agenda?",
    answer:
      "Send your agenda via WhatsApp — meeting times, locations and any special requirements. " +
      "We plan the itinerary, confirm availability and assign your driver. " +
      "For multi-day corporate visits, we coordinate the full schedule in advance " +
      "so each transfer happens exactly when you need it.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Executive Driver Londrina", url: "/executive-driver-londrina" },
])

const waExecutive = whatsappUrl(
  "Hello! I need to book an executive driver service in Londrina for a corporate visit and would like to get a quote."
)

const whoWeServe = [
  { icon: "👔", title: "CEOs & Directors", desc: "Visiting executives from São Paulo, Brasília, Rio or international HQs. Seamless corporate-level service." },
  { icon: "💰", title: "Investors & VCs", desc: "Due diligence visits to companies, farms, cooperatives and agro-industrial facilities in northern Paraná." },
  { icon: "⚖️", title: "Corporate Lawyers", desc: "International arbitration, board meetings and legal proceedings requiring discreet, reliable transport." },
  { icon: "🌐", title: "International Executives", desc: "Foreign C-level visiting Brazilian subsidiaries or partners. Full English service throughout." },
  { icon: "🏦", title: "Investment Bankers", desc: "Road shows, due diligence trips and M&A visits to Londrina's business and agricultural sector." },
  { icon: "🌾", title: "Agribusiness Leaders", desc: "Executives visiting COCAMAR, Coamo, Copavel and other agricultural cooperatives in the region." },
]

const serviceFeatures = [
  { icon: "🔒", title: "Full confidentiality", desc: "Routes, destinations and conversations are strictly confidential. Guaranteed discretion at all times." },
  { icon: "🚗", title: "Premium black vehicle", desc: "Toyota Corolla black, immaculately clean, air-conditioned with USB charging and ample space for documents." },
  { icon: "🗣️", title: "Bilingual EN/PT driver", desc: "Fluent in English and Portuguese — no language barrier for international executives." },
  { icon: "📋", title: "Multi-stop itinerary", desc: "Driver manages your full corporate agenda — waits between meetings, adapts in real time." },
  { icon: "📄", title: "Corporate invoice worldwide", desc: "Invoice issued for any CNPJ or international company. Full documentation for expense reporting." },
  { icon: "⏰", title: "Punctuality guaranteed", desc: "Driver arrives before you need to leave. No delays, no surprises on your corporate schedule." },
]

const corporateUseCases = [
  {
    icon: "🏭",
    title: "Factory & facility visits",
    desc: "Executive transported to industrial plants, distribution centers or agro-industrial facilities in the Londrina region with full itinerary coordination.",
  },
  {
    icon: "🤝",
    title: "Board meetings & negotiations",
    desc: "Multi-stop corporate day — driver waits between each meeting, maintains schedule precision and handles last-minute changes silently.",
  },
  {
    icon: "🌾",
    title: "Agribusiness due diligence",
    desc: "Investor visits to cooperatives (COCAMAR, Coamo), grain terminals, farms and agro-industrial facilities across northern Paraná.",
  },
  {
    icon: "⚖️",
    title: "Legal proceedings",
    desc: "Discreet transport to Londrina's courts, arbitration centers and law firms. Strict confidentiality protocol maintained.",
  },
]

export default function ExecutiveDriverLondrinaPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main lang="en">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb navigation"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Executive Driver Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Executive driver in Londrina — premium corporate"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>

          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(50,200,100,0.1)", border: "1px solid rgba(50,200,100,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#50c878", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  💼 Executive Driver · Londrina · Premium Corporate · C-Level
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Executive Driver in Londrina
                <span style={{ display: "block", color: "#50c878", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Premium · Discretion · Corporate Agenda · Bilingual
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Premium executive driver service in Londrina for C-suite executives,
                investors and international corporate visitors. Full discretion guaranteed.
                Corporate invoice for any company worldwide.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waExecutive} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Book executive service
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#50c878", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #50c878", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ Full discretion", "✅ C-level service", "✅ Corporate invoice", "✅ Bilingual EN/PT", "✅ Premium vehicle"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                  🇧🇷 Versão em português:{" "}
                  <Link href="/transfer-corporativo-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                    Transfer Corporativo Londrina →
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #50c878",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#50c878", margin: 0 }}>Executive Driver · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>Premium · Discretion · C-Level · Bilingual EN/PT</p>
          </div>
          <a href={waExecutive} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Book now
          </a>
        </div>

        {/* ════════ WHO WE SERVE ════════ */}
        <section aria-labelledby="who-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="who-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Who uses our executive driver service in Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
                Senior professionals who require a higher standard of service, discretion and reliability.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {whoWeServe.map((w) => (
                <div key={w.title} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #50c878",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{w.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FEATURES ════════ */}
        <section aria-labelledby="features-exec-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="features-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                What sets our executive driver apart in Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Every detail designed for C-suite professionals.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {serviceFeatures.map((f) => (
                <div key={f.title} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.75rem", border: "1px solid #2a2a2a",
                  borderTop: "3px solid #50c878",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{f.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CORPORATE USE CASES ════════ */}
        <section aria-labelledby="usecases-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="usecases-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Executive driver use cases in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Real scenarios where our executive driver service delivers results
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {corporateUseCases.map((u) => (
                <div key={u.title} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.75rem", border: "1px solid #E8E8E8",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{u.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{u.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ BOOKING FORM ════════ */}
        <section aria-labelledby="book-exec-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="book-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Book your executive driver in Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Send your corporate agenda and we will plan the full itinerary.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="executive-driver-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-exec-en-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-exec-en-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Frequently asked questions — Executive Driver Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Everything you need to know before booking
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#50c878", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Book executive driver" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#50c878", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Executive Driver · Londrina · Premium Corporate Service
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Your executive driver is ready in Londrina
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Full discretion. Corporate invoice. Bilingual EN/PT.
              Premium vehicle. Send your agenda via WhatsApp.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waExecutive} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Book via WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#50c878", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #50c878", textDecoration: "none" }}>
                📞 Call us
              </a>
            </div>
          </div>
        </section>

        {/* LINKS PT ↔ EN */}
        <section aria-label="Related services" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.5rem", textAlign: "center" }}>
              Related executive services in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Also available in Portuguese — serviços em português
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/airport-transfer-londrina",             label: "🇬🇧 Airport Transfer (EN)" },
                { href: "/private-driver-londrina",              label: "🇬🇧 Private Driver (EN)" },
                { href: "/transfer-corporativo-londrina",        label: "🇧🇷 Transfer Corporativo (PT)" },
                { href: "/motorista-executivo-londrina",         label: "🇧🇷 Motorista Executivo (PT)" },
                { href: "/transporte-executivo-eventos-londrina",label: "🇧🇷 Transporte para Eventos (PT)" },
                { href: "/contato",                             label: "Contact us" },
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

        {/* FOOTER */}
        <footer aria-label="Footer" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Executive Driver Londrina · {business.address.city}, {business.address.stateCode}, Brazil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#50c878", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/transfer-corporativo-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#50c878", textDecoration: "none" }}>Contact →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
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
