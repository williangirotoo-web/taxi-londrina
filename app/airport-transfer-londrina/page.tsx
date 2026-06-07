/**
 * app/airport-transfer-londrina/page.tsx
 *
 * LANGUAGE: English (100%)
 * KEYWORD: airport transfer londrina
 * INTENT: transactional — international passenger seeking transfer at LDB
 *
 * HREFLANG:
 *   en  → /airport-transfer-londrina  (this page)
 *   pt-BR → /transfer-aeroporto-londrina (PT version)
 *   x-default → /airport-transfer-londrina
 *
 * ANTI-CANNIBALIZATION:
 *   ✅ /transfer-aeroporto-londrina (PT) — different language, different audience
 *   ✅ /taxi-aeroporto-londrina (PT) — different language
 *   Google treats PT and EN pages as independent content for different audiences.
 *
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 * OG IMAGE: og-taxi-aeroporto-londrina.jpg
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
  ...pageMetadata.airportTransfer,
  alternates: {
    canonical: `${business.url}/airport-transfer-londrina`,
    languages: {
      "pt-BR": `${business.url}/transfer-aeroporto-londrina`,
      "en":    `${business.url}/airport-transfer-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Airport Transfer Londrina — English Service",
  description:
    "Professional airport transfer service at Londrina Governador José Richa Airport (LDB). " +
    "English-speaking driver, real-time flight monitoring, meet & greet with name sign. " +
    "Hotels, city center, Gleba Palhano and regional destinations.",
  serviceType: "Airport Transfer",
  url: `${business.url}/airport-transfer-londrina`,
  areaServed: ["Londrina", "Governador José Richa Airport", "Paraná", "Brazil"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

const faqItems = [
  {
    question: "How do I book an airport transfer in Londrina?",
    answer:
      "Booking is simple via WhatsApp. Send your flight number, arrival time and " +
      "destination address in Londrina. We confirm availability and details within minutes. " +
      "Your driver will be at the arrivals hall with a name sign before your flight lands.",
  },
  {
    question: "Does the driver speak English at Londrina airport?",
    answer:
      "Yes. Our driver is fully bilingual in Portuguese and English. " +
      "You can communicate entirely in English throughout the transfer — " +
      "from booking confirmation to arrival at your destination.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor your flight in real time using your flight number. " +
      "If your flight is delayed, your driver automatically adjusts the pickup time. " +
      "There is no extra charge for delays up to 60 minutes.",
  },
  {
    question: "Which destinations does the airport transfer cover in Londrina?",
    answer:
      "We cover all destinations in Londrina and the surrounding region — " +
      "hotels in Gleba Palhano (12 km), city center (14 km), hospitals, " +
      "business districts and regional cities including Maringá (118 km) and Curitiba (398 km).",
  },
  {
    question: "Is it safe to use a private transfer at Londrina Airport?",
    answer:
      "Yes. Our drivers are fully licensed taxi professionals registered with " +
      "the Londrina Municipal Government. The service is regulated, " +
      "insured and the vehicle is regularly inspected. Payment is made " +
      "directly to the driver upon arrival at your destination.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Airport Transfer Londrina", url: "/airport-transfer-londrina" },
])

const waAirport = whatsappUrl(
  "Hello! I need to book an airport transfer in Londrina and would like to get a quote."
)

const destinations = [
  { icon: "🏨", name: "Gleba Palhano Hotels", distance: "12 km", time: "15–20 min", note: "Holiday Inn, Inter Hotel, Quality Inn" },
  { icon: "🏙️", name: "City Center", distance: "14 km", time: "18–25 min", note: "Main square, shopping, restaurants" },
  { icon: "🏢", name: "Higienópolis", distance: "10 km", time: "13–18 min", note: "Residential and commercial district" },
  { icon: "🏥", name: "Hospital Evangélico", distance: "15 km", time: "20–28 min", note: "Main reference hospital in Londrina" },
  { icon: "🛣️", name: "Maringá", distance: "118 km", time: "~1h20", note: "Via PR-317" },
  { icon: "🛣️", name: "Curitiba", distance: "398 km", time: "~4h30", note: "Via BR-376 · International connections" },
]

const features = [
  { icon: "🪧", title: "Meet & greet service", desc: "Your driver waits at arrivals with a name sign — no searching, no stress." },
  { icon: "📡", title: "Real-time flight monitoring", desc: "We track your flight automatically. Delays handled at no extra cost." },
  { icon: "🗣️", title: "English-speaking driver", desc: "Full service in English for international passengers and business travelers." },
  { icon: "🚗", title: "Premium vehicle", desc: "Black Toyota Corolla, air-conditioned with USB charging and luggage space." },
  { icon: "⏰", title: "No delays", desc: "Your driver arrives before your flight lands. We guarantee punctuality." },
  { icon: "📱", title: "WhatsApp booking", desc: "Book in seconds via WhatsApp. No app required. No registration." },
]

export default function AirportTransferLondrinaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Airport Transfer Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Airport transfer Londrina — English service"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>

          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(100,150,255,0.1)", border: "1px solid rgba(100,150,255,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#8ab4ff", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Airport Transfer · Londrina · LDB · English Service
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Airport Transfer Londrina
                <span style={{ display: "block", color: "#8ab4ff", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Governador José Richa Airport (LDB) · Meet & Greet · 24h
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Professional airport transfer service in Londrina, Brazil.
                Your English-speaking driver waits at arrivals with a name sign,
                monitors your flight in real time and takes you directly to your destination.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waAirport} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Book via WhatsApp
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#8ab4ff", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #8ab4ff", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ English-speaking driver", "✅ Flight monitoring", "✅ Meet & greet", "✅ No extra fee for delays", "✅ 24h service"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              {/* Hreflang notice */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                  🇧🇷 Versão em português:{" "}
                  <Link href="/transfer-aeroporto-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                    Transfer Aeroporto Londrina →
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY CTA */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem",
          borderBottom: "2px solid #8ab4ff",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#8ab4ff", margin: 0 }}>Airport Transfer Londrina · LDB</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>English-speaking driver · Flight monitoring · Meet & greet</p>
          </div>
          <a href={waAirport} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Book now
          </a>
        </div>

        {/* ════════ FEATURES ════════ */}
        <section aria-labelledby="features-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="features-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Why choose our airport transfer in Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                From landing to your hotel or meeting — stress-free, in English.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {features.map((f) => (
                <div key={f.title} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #8ab4ff",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{f.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DESTINATIONS ════════ */}
        <section aria-labelledby="destinations-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinations-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Where we take you from Londrina Airport
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              All destinations in Londrina and the surrounding region
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {destinations.map((d) => (
                <div key={d.name} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: "3px solid #8ab4ff",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>{d.name}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.85rem", marginBottom: "0.25rem" }}>📍 {d.distance} · ⏱️ {d.time}</p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", margin: 0 }}>{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ HOW IT WORKS ════════ */}
        <section aria-labelledby="how-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="how-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              How to book your airport transfer in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>
              Three simple steps — no app required
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
              {[
                { step: "01", title: "Send a WhatsApp", desc: "Message us with your flight number, arrival time and destination address in Londrina." },
                { step: "02", title: "Receive confirmation", desc: "We confirm your booking and send your driver's details within minutes." },
                { step: "03", title: "Land and go", desc: "Your driver waits at arrivals with your name sign. Walk out and you're on your way." },
              ].map((item) => (
                <div key={item.step} style={{ textAlign: "center", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#8ab4ff", marginBottom: "0.75rem", opacity: 0.6 }}>{item.step}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href={waAirport} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Book via WhatsApp now
              </a>
            </div>
          </div>
        </section>

        {/* ════════ BOOKING FORM ════════ */}
        <section aria-labelledby="booking-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="booking-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Book your airport transfer
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Fill in the form below and we will confirm via WhatsApp.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="airport-transfer-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-airport-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-airport-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Frequently asked questions — Airport Transfer Londrina
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
                    <span aria-hidden="true" style={{ color: "#8ab4ff", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
        <section aria-label="Book airport transfer" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#8ab4ff", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Airport Transfer · Londrina · Governador José Richa (LDB)
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Your driver is waiting at the airport
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Name sign at arrivals. Flight monitoring. English-speaking driver.
              No delays, no stress.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waAirport} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Book via WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#8ab4ff", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #8ab4ff", textDecoration: "none" }}>
                📞 Call us
              </a>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS PT ↔ EN */}
        <section aria-label="Related services" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.5rem", textAlign: "center" }}>
              Related services in Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Also available in Portuguese — serviços em português
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/transfer-aeroporto-londrina",             label: "🇧🇷 Transfer Aeroporto (PT)" },
                { href: "/taxi-aeroporto-londrina",                 label: "🇧🇷 Táxi Aeroporto (PT)" },
                { href: "/motorista-particular-aeroporto-londrina", label: "🇧🇷 Motorista Particular Aeroporto (PT)" },
                { href: "/taxi-executivo-londrina",                 label: "🇧🇷 Táxi Executivo (PT)" },
                { href: "/contato",                                label: "Contact us" },
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
                Airport Transfer Londrina · {business.address.city}, {business.address.stateCode}, Brazil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#8ab4ff", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#8ab4ff", textDecoration: "none" }}>Contact →</Link>
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
