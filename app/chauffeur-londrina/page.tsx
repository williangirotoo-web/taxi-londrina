/**
 * app/chauffeur-londrina/page.tsx
 *
 * LANGUAGE: English (100%)
 * KEYWORD: chauffeur londrina
 * INTENT: transactional — UK, Australian, French and Canadian visitors
 *         seeking formal chauffeur service (not "taxi" or "driver")
 *
 * HREFLANG:
 *   en    → /chauffeur-londrina (this page)
 *   pt-BR → /taxi-executivo-londrina (closest PT equivalent)
 *   x-default → /chauffeur-londrina
 *
 * ANTI-CANNIBALIZATION:
 *   ✅ "chauffeur" absent from ALL 31 existing pages — confirmed
 *   ✅ /private-driver-londrina → American/Canadian informal-premium style
 *   ✅ /executive-driver-londrina → C-level, corporate, discretion
 *   ✅ /airport-transfer-londrina → point-to-point airport transfer
 *   This page: formal chauffeur protocol, uniformed driver, UK/AU/FR standard
 *
 * EXCLUSIVE CONTENT:
 *   - Chauffeur vs driver distinction (UK/AU/FR terminology)
 *   - Uniformed service protocol
 *   - Formal etiquette and discretion
 *   - Chauffeur hire by the hour or full day
 *   - FAQ on what "chauffeur" means in Brazil
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
  ...pageMetadata.chauffeur,
  alternates: {
    canonical: `${business.url}/chauffeur-londrina`,
    languages: {
      "pt-BR": `${business.url}/taxi-executivo-londrina`,
      "en":    `${business.url}/chauffeur-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Chauffeur Service in Londrina, Brazil",
  description:
    "Professional chauffeur service in Londrina. Uniformed driver, premium black vehicle, " +
    "formal etiquette and punctuality to UK and Australian standards. " +
    "Airport transfers, corporate hire, hourly and full-day chauffeur available.",
  serviceType: "Chauffeur Service",
  url: `${business.url}/chauffeur-londrina`,
  areaServed: ["Londrina", "Paraná", "Brazil"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "What is a chauffeur service in Londrina, Brazil?",
    answer:
      "A chauffeur service in Londrina means a professional, uniformed driver " +
      "with a premium black vehicle who follows formal protocol — no casual conversation " +
      "unless initiated by the passenger, punctual arrival, assistance with luggage " +
      "and full discretion. It is the same standard expected in London, Sydney or Toronto, " +
      "adapted to Brazil's regulations and local routes.",
  },
  {
    question: "What is the difference between a chauffeur and a private driver in Londrina?",
    answer:
      "The key difference is formality and protocol. A chauffeur wears formal attire, " +
      "follows strict etiquette and treats the service as a professional engagement. " +
      "A private driver offers flexible, less formal service — great for city tours or casual trips. " +
      "Visitors from the UK, Australia, France and Canada typically expect the chauffeur standard " +
      "when searching for premium transport.",
  },
  {
    question: "Can I book a chauffeur in Londrina for airport pickup?",
    answer:
      "Yes. Our chauffeur service covers airport pickup at Governador José Richa Airport (LDB). " +
      "Your chauffeur arrives at the arrivals hall before your flight lands, monitors your flight " +
      "in real time and waits with a name sign. Delays are handled automatically at no extra charge.",
  },
  {
    question: "Can I hire a chauffeur in Londrina for the full day?",
    answer:
      "Yes. We offer half-day (4 hours), full-day (8 hours) and extended-day (12 hours) " +
      "chauffeur hire in Londrina. Your chauffeur manages your full itinerary — " +
      "corporate meetings, site visits, airport pickups and any other appointments — " +
      "waiting between each stop and ensuring punctual departures.",
  },
  {
    question: "Does the chauffeur in Londrina speak English?",
    answer:
      "Yes. Our chauffeur is fully bilingual — Portuguese and English. " +
      "All communication, booking confirmation and in-car interaction can be " +
      "conducted entirely in English. We serve British, Australian, Canadian " +
      "and European visitors regularly.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Chauffeur Londrina", url: "/chauffeur-londrina" },
])

const waChauffeur = whatsappUrl(
  "Hello! I would like to book a chauffeur service in Londrina and get a quote."
)

const chauffeurFeatures = [
  { icon: "🎩", title: "Uniformed driver", desc: "Professional formal attire to UK and Australian chauffeur standards. First impression guaranteed." },
  { icon: "🚗", title: "Premium black vehicle", desc: "Spotless black Toyota Corolla, air-conditioned with USB charging and ample space." },
  { icon: "⏰", title: "Punctuality protocol", desc: "Your chauffeur arrives before you need to leave. Never late, never rushed." },
  { icon: "🤫", title: "Discretion and etiquette", desc: "No unsolicited conversation. Confidential routes and appointments. Full professional protocol." },
  { icon: "🗣️", title: "Bilingual EN/PT", desc: "Fluent English for British, Australian, Canadian and French visitors." },
  { icon: "📄", title: "Corporate invoice", desc: "Formal invoice for any company — UK, Australian, Brazilian or international CNPJ." },
]

const chauffeurUseCases = [
  { icon: "✈️", title: "Chauffeur airport transfer", desc: "Pickup at Londrina Governador José Richa Airport (LDB). Name sign, flight monitoring, no delays." },
  { icon: "🏢", title: "Corporate chauffeur hire", desc: "Full-day corporate service — board meetings, site visits, business dinners. Driver waits throughout." },
  { icon: "🤝", title: "Client entertainment", desc: "Impress international clients with a professional chauffeur for their entire stay in Londrina." },
  { icon: "🌾", title: "Agribusiness visits", desc: "Chauffeur hire for grain trading, cooperative visits and farm tours in northern Paraná." },
]

const comparisonRows = [
  { term: "Chauffeur", regions: "🇬🇧 UK · 🇦🇺 AU · 🇫🇷 FR · 🇨🇦 CA", meaning: "Formal uniformed driver, protocol-driven, premium vehicle. The highest standard of hired transport." },
  { term: "Private Driver", regions: "🇺🇸 US · 🇧🇷 BR", meaning: "Dedicated driver for flexible use — city tours, day trips, meetings. Less formal than chauffeur." },
  { term: "Executive Driver", regions: "🇺🇸 US · 🇧🇷 BR", meaning: "C-level focus, corporate agenda, full discretion. Similar to chauffeur but the term is American." },
  { term: "Taxi / Transfer", regions: "Universal", meaning: "Point-to-point trip. Driver is not exclusive — next passenger after you drop off." },
]

export default function ChauffeurLondrinaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Chauffeur Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Chauffeur service in Londrina Brazil"
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
                background: "rgba(184,134,11,0.12)", border: "1px solid rgba(184,134,11,0.35)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#d4af37", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🎩 Chauffeur Service · Londrina · Brazil · UK & AU Standard
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Chauffeur in Londrina
                <span style={{ display: "block", color: "#d4af37", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Premium Chauffeur Service · Uniformed Driver · Bilingual EN/PT
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Professional chauffeur service in Londrina to British, Australian, French and
                Canadian standards. Uniformed driver, premium black vehicle and formal etiquette.
                Airport pickups, corporate hire and full-day chauffeur available.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waChauffeur} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Book your chauffeur
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#d4af37", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #d4af37", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ Uniformed driver", "✅ Premium black car", "✅ Punctuality protocol", "✅ Bilingual EN/PT", "✅ Corporate invoice"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                  🇧🇷 Versão em português:{" "}
                  <Link href="/taxi-executivo-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                    Táxi Executivo Londrina →
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
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #d4af37",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#d4af37", margin: 0 }}>Chauffeur Service · Londrina, Brazil</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>Uniformed driver · Premium vehicle · UK & AU standard</p>
          </div>
          <a href={waChauffeur} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Book now
          </a>
        </div>

        {/* ════════ CHAUFFEUR vs DRIVER ════════ */}
        <section aria-labelledby="comparison-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="comparison-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Chauffeur, private driver or taxi? Understanding the difference
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                The terminology varies by country. Here is what each term means in practice.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", margin: "0 auto" }}>
              {comparisonRows.map((row) => (
                <div key={row.term} style={{
                  display: "grid", gridTemplateColumns: "130px 1fr",
                  gap: "1.5rem", alignItems: "start",
                  background: row.term === "Chauffeur" ? "#0A0A0A" : "#F9F9F9",
                  borderRadius: "12px", padding: "1.25rem 1.5rem",
                  border: row.term === "Chauffeur" ? "2px solid #d4af37" : "1px solid #E8E8E8",
                }}>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "1rem", color: row.term === "Chauffeur" ? "#d4af37" : "#0A0A0A", margin: "0 0 0.25rem" }}>{row.term}</p>
                    <p style={{ fontSize: "0.75rem", color: row.term === "Chauffeur" ? "#9a9a9a" : "#6B6B6B", margin: 0 }}>{row.regions}</p>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: row.term === "Chauffeur" ? "#D0D0D0" : "#3A3A3A", lineHeight: 1.65, margin: 0 }}>{row.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FEATURES ════════ */}
        <section aria-labelledby="features-ch-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="features-ch-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                What our chauffeur service includes in Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Every detail to UK and Australian chauffeur standard.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {chauffeurFeatures.map((f) => (
                <div key={f.title} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.75rem", border: "1px solid #2a2a2a",
                  borderTop: "3px solid #d4af37",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{f.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ USE CASES ════════ */}
        <section aria-labelledby="usecases-ch-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="usecases-ch-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              When to book a chauffeur in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Occasions where the chauffeur standard makes a real difference
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {chauffeurUseCases.map((u) => (
                <div key={u.title} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #d4af37",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{u.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{u.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ BOOKING FORM ════════ */}
        <section aria-labelledby="book-ch-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="book-ch-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Book your chauffeur in Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Fill in the form and we will confirm your chauffeur via WhatsApp.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="chauffeur-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-ch-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-ch-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Frequently asked questions — Chauffeur Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Everything you need to know before booking your chauffeur in Brazil
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
                    <span aria-hidden="true" style={{ color: "#d4af37", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
        <section aria-label="Book chauffeur" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#d4af37", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Chauffeur Service · Londrina, Paraná, Brazil
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Your chauffeur is ready in Londrina
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Uniformed driver. Premium black vehicle. Punctuality protocol.
              Bilingual EN/PT. Corporate invoice available.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waChauffeur} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Book via WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#d4af37", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #d4af37", textDecoration: "none" }}>
                📞 Call us
              </a>
            </div>
          </div>
        </section>

        {/* LINKS PT ↔ EN */}
        <section aria-label="Related services" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.5rem", textAlign: "center" }}>
              Related premium services in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Also available in Portuguese — serviços em português
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/executive-driver-londrina",   label: "🇬🇧 Executive Driver (EN)" },
                { href: "/private-driver-londrina",     label: "🇬🇧 Private Driver (EN)" },
                { href: "/airport-transfer-londrina",   label: "🇬🇧 Airport Transfer (EN)" },
                { href: "/taxi-executivo-londrina",     label: "🇧🇷 Táxi Executivo (PT)" },
                { href: "/motorista-executivo-londrina",label: "🇧🇷 Motorista Executivo (PT)" },
                { href: "/contato",                    label: "Contact us" },
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
                Chauffeur Service Londrina · {business.address.city}, {business.address.stateCode}, Brazil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#d4af37", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/taxi-executivo-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#d4af37", textDecoration: "none" }}>Contact →</Link>
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
