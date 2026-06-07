/**
 * app/private-driver-londrina/page.tsx
 *
 * LANGUAGE: English (100%)
 * KEYWORD: private driver londrina
 * INTENT: transactional — tourists and executives seeking private driver for city tours,
 *         business meetings or day trips in Londrina, Brazil
 *
 * HREFLANG:
 *   en    → /private-driver-londrina (this page)
 *   pt-BR → /motorista-executivo-londrina (closest PT equivalent)
 *   x-default → /private-driver-londrina
 *
 * ANTI-CANNIBALIZATION:
 *   ✅ /motorista-particular-aeroporto-londrina (PT) — airport context, PT language
 *   ✅ /motorista-executivo-londrina (PT) — hourly packages, PT language
 *   ✅ /airport-transfer-londrina (EN) — airport context only
 *   This page: EN, broader scope (city tours, day trips, tourism, meetings)
 *
 * EXCLUSIVE CONTENT: city tour highlights, Londrina attractions, day trips to region
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 * OG IMAGE: og-taxi-executivo-londrina.jpg
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
  ...pageMetadata.privateDriver,
  alternates: {
    canonical: `${business.url}/private-driver-londrina`,
    languages: {
      "pt-BR": `${business.url}/motorista-executivo-londrina`,
      "en":    `${business.url}/private-driver-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Private Driver in Londrina — English Service",
  description:
    "English-speaking private driver in Londrina, Brazil. " +
    "City tours, business meetings, day trips and hourly hire. " +
    "Bilingual driver (Portuguese & English), premium vehicle, flexible schedule.",
  serviceType: "Private Driver Service",
  url: `${business.url}/private-driver-londrina`,
  areaServed: ["Londrina", "Paraná", "Brazil"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "Can I hire a private driver for a full day in Londrina?",
    answer:
      "Yes. We offer half-day (4 hours), full day (8 hours) and extended day (12 hours) packages. " +
      "Your driver stays available throughout the hired period — waiting between appointments " +
      "and adapting the route as your schedule changes. Book via WhatsApp with your planned itinerary.",
  },
  {
    question: "Does the private driver speak English in Londrina?",
    answer:
      "Yes. Our driver is fully bilingual in Portuguese and English. " +
      "All communication — booking, route planning and in-car — can be done entirely in English. " +
      "We also assist international passengers who need help navigating the city for the first time.",
  },
  {
    question: "Is there a private driver for city tours in Londrina?",
    answer:
      "Yes. We offer guided city tours covering Londrina's main attractions: " +
      "the Metropolitan Cathedral, Igapó Lake (the largest artificial urban lake in Brazil), " +
      "Gleba Palhano district, Museu Histórico de Londrina and the Parque Arthur Thomas. " +
      "Tours can be customized to your interests and time available.",
  },
  {
    question: "Can I use a private driver for day trips from Londrina?",
    answer:
      "Yes. We cover day trips to cities in the northern Paraná region: " +
      "Maringá (118 km · ~1h20), Apucarana (70 km · ~55 min), " +
      "and longer trips to Curitiba (398 km · ~4h30) or Foz do Iguaçu (600 km · ~6h). " +
      "For longer trips, we recommend booking with at least 24 hours in advance.",
  },
  {
    question: "How do I book a private driver in Londrina?",
    answer:
      "Booking is simple via WhatsApp. Send your desired date, time, planned itinerary " +
      "and number of passengers. We confirm availability and details within minutes. " +
      "No app required, no registration — just a message.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Private Driver Londrina", url: "/private-driver-londrina" },
])

const waPrivate = whatsappUrl(
  "Hello! I need to hire a private driver in Londrina and would like to get a quote."
)

const services = [
  { icon: "🏙️", title: "City tour Londrina", desc: "Full guided tour of Londrina's main landmarks with bilingual driver. Customizable itinerary." },
  { icon: "🤝", title: "Business meetings", desc: "Driver waits between each appointment. Adapts the route as your schedule changes." },
  { icon: "⏰", title: "Hourly hire", desc: "4h, 8h or 12h packages. Driver available throughout — no extra cost for waiting time." },
  { icon: "🛣️", title: "Day trips & excursions", desc: "Maringá, Curitiba, Foz do Iguaçu and other destinations in the region." },
  { icon: "🌾", title: "Agribusiness visits", desc: "Cooperatives, farms and agro companies in northern Paraná (COCAMAR, Coamo, tradings)." },
  { icon: "👨‍👩‍👧", title: "Family & group transfers", desc: "Spacious vehicle, USB charging, air conditioning. Up to 4 passengers comfortably." },
]

const cityTourAttractions = [
  { icon: "⛪", name: "Metropolitan Cathedral of Londrina", desc: "Iconic landmark in the city center — one of the largest cathedrals in southern Brazil." },
  { icon: "🌊", name: "Igapó Lake", desc: "Largest artificial urban lake in Brazil — perfect for a morning walk or sunset visit." },
  { icon: "🏙️", name: "Gleba Palhano", desc: "Upscale district with restaurants, shopping and the best hotels in Londrina." },
  { icon: "🎨", name: "Museu Histórico de Londrina", desc: "History and culture of Londrina's founding and development since 1934." },
  { icon: "🌿", name: "Parque Arthur Thomas", desc: "Urban forest and botanical garden in the heart of the city." },
  { icon: "🏛️", name: "Museu de Arte de Londrina (MAL)", desc: "Contemporary and modern art exhibitions in the cultural district." },
]

const dayTrips = [
  { dest: "Maringá", km: "118 km", time: "~1h20", via: "PR-317", desc: "Second largest city in Paraná. Cathedral basilica, parks and gastronomy." },
  { dest: "Apucarana", km: "70 km", time: "~55 min", via: "PR-317", desc: "Hat-making capital of Brazil. Scenic routes and agro-industrial visits." },
  { dest: "Curitiba", km: "398 km", time: "~4h30", via: "BR-376", desc: "Capital of Paraná. Museums, Botanical Garden and Oscar Niemeyer Museum." },
  { dest: "Foz do Iguaçu", km: "600 km", time: "~6h", via: "BR-369", desc: "Iguaçu Falls — one of the Seven Wonders of Nature. UNESCO World Heritage." },
]

const packages = [
  { label: "Half day", hours: "4h", popular: false, desc: "Morning or afternoon. City tour or a few business meetings." },
  { label: "Full day", hours: "8h", popular: true, desc: "Complete day. Full city tour, business meetings and lunch included." },
  { label: "Extended day", hours: "12h", popular: false, desc: "Long day with evening commitments or extended day trip." },
]

export default function PrivateDriverLondrinaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Private Driver Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Private driver in Londrina — English service"
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
                background: "rgba(160,100,255,0.1)", border: "1px solid rgba(160,100,255,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#c088ff", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Private Driver · Londrina · Brazil · English Service
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Private Driver in Londrina
                <span style={{ display: "block", color: "#c088ff", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  City Tours · Business Meetings · Day Trips · Hourly Hire
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                English-speaking private driver in Londrina, Brazil. Whether you need a city tour,
                a driver for business meetings or a day trip to Maringá or Curitiba —
                we have flexible hourly and daily packages to fit your schedule.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waPrivate} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Hire via WhatsApp
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#c088ff", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #c088ff", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ English-speaking driver", "✅ City tours & day trips", "✅ Hourly or daily hire", "✅ Driver waits between stops", "✅ No app required"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                  🇧🇷 Versão em português:{" "}
                  <Link href="/motorista-executivo-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                    Motorista Executivo Londrina →
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
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #c088ff",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#c088ff", margin: 0 }}>Private Driver · Londrina, Brazil</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>City tours · Business · Day trips · Bilingual driver</p>
          </div>
          <a href={waPrivate} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Hire now
          </a>
        </div>

        {/* ════════ SERVICES ════════ */}
        <section aria-labelledby="services-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="services-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                What your private driver can do for you in Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                From city sightseeing to corporate meetings — flexible and in English.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {services.map((s) => (
                <div key={s.title} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #c088ff",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{s.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PACKAGES ════════ */}
        <section aria-labelledby="packages-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="packages-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Private driver packages in Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Choose the package that fits your schedule. Driver available throughout.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
              {packages.map((p) => (
                <div key={p.hours} style={{
                  background: "#1a1a1a", borderRadius: "16px", padding: "2rem 1.5rem",
                  border: p.popular ? "2px solid #c088ff" : "1px solid #2a2a2a",
                  position: "relative", textAlign: "center",
                }}>
                  {p.popular && (
                    <div style={{
                      position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                      background: "#c088ff", color: "#0A0A0A", fontWeight: 800,
                      fontSize: "0.7rem", padding: "4px 14px", borderRadius: "999px", whiteSpace: "nowrap",
                    }}>
                      MOST POPULAR
                    </div>
                  )}
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{p.label}</p>
                  <p style={{ color: "#c088ff", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.5rem" }}>{p.hours}</p>
                  <p style={{ color: "#FFFFFF", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                  <a href={waPrivate} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      background: p.popular ? "#c088ff" : "transparent",
                      color: p.popular ? "#0A0A0A" : "#c088ff",
                      fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem",
                      borderRadius: "8px", textDecoration: "none",
                      border: p.popular ? "none" : "2px solid #c088ff",
                    }}>
                    <WhatsAppIcon color={p.popular ? "#0A0A0A" : "#c088ff"} size={16} />
                    Book now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CITY TOUR ════════ */}
        <section aria-labelledby="citytour-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="citytour-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Londrina city tour with private driver
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
                Explore Londrina's best attractions with your English-speaking driver as guide.
                Flexible itinerary — you choose what to visit.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {cityTourAttractions.map((a) => (
                <div key={a.name} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: "3px solid #c088ff",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{a.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{a.name}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DAY TRIPS ════════ */}
        <section aria-labelledby="daytrips-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="daytrips-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Day trips from Londrina with private driver
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Explore the best of southern Brazil on a day trip from Londrina
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {dayTrips.map((d) => (
                <div key={d.dest} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>{d.dest}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.85rem", marginBottom: "0.25rem" }}>📍 {d.km} · ⏱️ {d.time} via {d.via}</p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href={waPrivate} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#c088ff", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#c088ff" />
                Book a day trip via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ════════ BOOKING FORM ════════ */}
        <section aria-labelledby="book-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="book-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Book your private driver in Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Fill in the form and we will confirm via WhatsApp in minutes.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="private-driver-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-private-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-private-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Frequently asked questions — Private Driver Londrina
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
                    <span aria-hidden="true" style={{ color: "#c088ff", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
        <section aria-label="Hire private driver" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#c088ff", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Private Driver · Londrina, Paraná, Brazil
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Your English-speaking driver is ready
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              City tours, business meetings, day trips or hourly hire.
              Flexible, bilingual, and available now.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waPrivate} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Hire via WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#c088ff", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #c088ff", textDecoration: "none" }}>
                📞 Call us
              </a>
            </div>
          </div>
        </section>

        {/* LINKS PT ↔ EN */}
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
                { href: "/airport-transfer-londrina",             label: "🇬🇧 Airport Transfer (EN)" },
                { href: "/motorista-executivo-londrina",          label: "🇧🇷 Motorista Executivo (PT)" },
                { href: "/motorista-particular-aeroporto-londrina", label: "🇧🇷 Motorista Particular Aeroporto (PT)" },
                { href: "/transfer-corporativo-londrina",         label: "🇧🇷 Transfer Corporativo (PT)" },
                { href: "/taxi-executivo-londrina",               label: "🇧🇷 Táxi Executivo (PT)" },
                { href: "/contato",                              label: "Contact us" },
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
                Private Driver Londrina · {business.address.city}, {business.address.stateCode}, Brazil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#c088ff", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/motorista-executivo-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#c088ff", textDecoration: "none" }}>Contact →</Link>
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
