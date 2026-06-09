/**
 * app/transfer-aeropuerto-londrina/page.tsx
 *
 * IDIOMA: Español (100%)
 * KEYWORD: transfer aeropuerto londrina
 * INTENCIÓN: transaccional — visitantes hispanohablantes (AR, PY, CL, UY, BO)
 *             que buscan transfer desde el Aeropuerto Governador José Richa (LDB)
 *
 * HREFLANG TRILÍNGUE:
 *   es    → /transfer-aeropuerto-londrina (esta página)
 *   pt-BR → /transfer-aeroporto-londrina
 *   en    → /airport-transfer-londrina
 *   x-default → /airport-transfer-londrina
 *
 * ANTI-CANIBALIZACIÓN:
 *   ✅ /transfer-aeroporto-londrina (PT) — idioma PT, público brasileño
 *   ✅ /airport-transfer-londrina (EN) — idioma EN, público UK/US/AU
 *   ✅ /taxi-aeroporto-londrina (PT) — idioma PT
 *   Esta página: primer contenido ES del proyecto — cero overlap
 *
 * CONTENIDO EXCLUSIVO:
 *   - Rutas de vuelo AR/PY/CL → São Paulo → Londrina
 *   - Contexto agronegocio paranaense para visitantes AR/PY
 *   - Distancias y tiempos en español
 *   - Conductor bilingüe ES/PT
 *   - FAQ 100% en español sin overlap
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
  ...pageMetadata.transferAeropuerto,
  alternates: {
    canonical: `${business.url}/transfer-aeropuerto-londrina`,
    languages: {
      "es":    `${business.url}/transfer-aeropuerto-londrina`,
      "pt-BR": `${business.url}/transfer-aeroporto-londrina`,
      "en":    `${business.url}/airport-transfer-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Servicio de Transfer Aeropuerto en Londrina, Brasil",
  description:
    "Transfer privado desde el Aeropuerto Governador José Richa (LDB) en Londrina. " +
    "Conductor bilingüe español-portugués, seguimiento de vuelo en tiempo real " +
    "y recepción con cartel en la sala de llegadas. Cobertura a todos los hoteles y destinos de Londrina.",
  serviceType: "Servicio de Transfer Aeropuerto",
  url: `${business.url}/transfer-aeropuerto-londrina`,
  areaServed: ["Londrina", "Aeropuerto Governador José Richa", "Paraná", "Brasil"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

const faqItems = [
  {
    question: "¿El conductor habla español en el aeropuerto de Londrina?",
    answer:
      "Sí. Nuestro conductor es completamente bilingüe en español y portugués. " +
      "Toda la comunicación — desde la reserva hasta la llegada a su destino — " +
      "puede realizarse íntegramente en español. Atendemos regularmente a visitantes " +
      "de Argentina, Paraguay, Chile y Uruguay que llegan al Aeropuerto Governador José Richa.",
  },
  {
    question: "¿Cómo llego del aeropuerto de Londrina al centro de la ciudad?",
    answer:
      "El Aeropuerto Governador José Richa (LDB) está ubicado en la zona norte de Londrina, " +
      "a aproximadamente 14 km del centro de la ciudad. El trayecto en transfer privado " +
      "tarda entre 18 y 25 minutos dependiendo del horario. " +
      "Para la Gleba Palhano — zona hotelera más cercana al aeropuerto — " +
      "la distancia es de 12 km y el tiempo aproximado es de 15 a 20 minutos.",
  },
  {
    question: "¿Hay transfer disponible para vuelos desde Buenos Aires o Asunción con escala en São Paulo?",
    answer:
      "Sí. La mayoría de los vuelos desde Argentina y Paraguay llegan a Londrina " +
      "con escala en São Paulo (Guarulhos o Congonhas). " +
      "Monitoreamos su vuelo en tiempo real desde el aeropuerto de origen — " +
      "si hay demora en la escala, su conductor ajusta automáticamente el horario de llegada " +
      "al aeropuerto de Londrina sin costo adicional.",
  },
  {
    question: "¿Cuánto cuesta el transfer desde el aeropuerto de Londrina?",
    answer:
      "El valor del transfer varía según el destino en Londrina y el horario de llegada. " +
      "Para recibir un presupuesto exacto, envíe su número de vuelo y destino vía WhatsApp. " +
      "Confirmamos disponibilidad y valor en minutos. " +
      "El pago se realiza directamente al conductor al llegar a su destino — " +
      "se aceptan reales brasileños y también dólares o pesos en algunos casos.",
  },
  {
    question: "¿El transfer cubre hoteles en la Gleba Palhano y el centro de Londrina?",
    answer:
      "Sí. Cubrimos todos los hoteles y destinos de Londrina — " +
      "Gleba Palhano (Holiday Inn, Inter Hotel, Quality Inn), " +
      "centro histórico, zona hospitalar y barrios empresariales. " +
      "También realizamos transfers intermunicipales a Maringá (118 km), " +
      "Curitiba (398 km) y otras ciudades del Paraná.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Transfer Aeropuerto Londrina", url: "/transfer-aeropuerto-londrina" },
])

const waAeropuerto = whatsappUrl(
  "¡Hola! Necesito reservar un transfer desde el aeropuerto de Londrina y quisiera recibir un presupuesto."
)

const destinos = [
  { icon: "🏨", nombre: "Gleba Palhano", dist: "12 km", tiempo: "15–20 min", nota: "Holiday Inn, Inter Hotel, Quality Inn" },
  { icon: "🏙️", nombre: "Centro de Londrina", dist: "14 km", tiempo: "18–25 min", nota: "Plaza central, comercio, restaurantes" },
  { icon: "🏢", nombre: "Zona empresarial", dist: "12–16 km", tiempo: "15–22 min", nota: "Oficinas corporativas, PaTLon" },
  { icon: "🏥", nombre: "Hospital Evangélico", dist: "15 km", tiempo: "20–28 min", nota: "Principal hospital de referencia en Londrina" },
  { icon: "🛣️", nombre: "Maringá", dist: "118 km", tiempo: "~1h20", nota: "Vía PR-317" },
  { icon: "🛣️", nombre: "Curitiba", dist: "398 km", tiempo: "~4h30", nota: "Vía BR-376 · Conexiones internacionales" },
]

const vuelosConexion = [
  { bandera: "🇦🇷", origen: "Buenos Aires (EZE / AEP)", escala: "São Paulo (GRU o CGH)", nota: "Principal origen de visitantes argentinos" },
  { bandera: "🇵🇾", origen: "Asunción (ASU)", escala: "São Paulo (GRU)", nota: "Vuelos diarios con conexión" },
  { bandera: "🇨🇱", origen: "Santiago (SCL)", escala: "São Paulo (GRU)", nota: "Conexión en Guarulhos" },
  { bandera: "🇺🇾", origen: "Montevideo (MVD)", escala: "São Paulo (GRU o CGH)", nota: "Conexión frecuente" },
  { bandera: "🇧🇴", origen: "Santa Cruz (VVI)", escala: "São Paulo (GRU)", nota: "Vuelos con escala" },
]

const servicios = [
  { icon: "🪧", titulo: "Recepción en llegadas", desc: "Su conductor lo espera con un cartel con su nombre antes de que aterrice el vuelo." },
  { icon: "📡", titulo: "Seguimiento de vuelo", desc: "Monitoreamos su vuelo en tiempo real. Las demoras se gestionan automáticamente sin costo extra." },
  { icon: "🗣️", titulo: "Conductor bilingüe ES/PT", desc: "Atención completa en español. Sin barreras de idioma desde la reserva hasta el destino." },
  { icon: "🚗", titulo: "Vehículo premium", desc: "Toyota Corolla negro, climatizado, con cargadores USB y espacio para equipaje." },
  { icon: "⏰", titulo: "Puntualidad garantizada", desc: "Su conductor llega antes de que usted necesite salir. Sin esperas, sin improvisaciones." },
  { icon: "📱", titulo: "Reserva por WhatsApp", desc: "Envíe su número de vuelo por WhatsApp. Confirmamos en minutos. Sin app, sin registro." },
]

export default function TransferAeropuertoLondrinaPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main lang="es">
        {/* Breadcrumb */}
        <nav aria-label="Navegación estructural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Inicio</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transfer Aeropuerto Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Transfer aeropuerto Londrina — servicio en español"
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
                background: "rgba(74,158,74,0.1)", border: "1px solid rgba(74,158,74,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#6dbf6d", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Transfer Aeropuerto · Londrina · Brasil · Servicio en Español
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transfer Aeropuerto Londrina
                <span style={{ display: "block", color: "#6dbf6d", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Aeropuerto Governador José Richa (LDB) · Conductor Bilingüe · 24h
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Servicio de transfer privado desde el Aeropuerto de Londrina, Brasil.
                Su conductor bilingüe (español/portugués) lo espera en la sala de llegadas
                con un cartel con su nombre y monitorea su vuelo en tiempo real.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waAeropuerto} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Reservar por WhatsApp
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#6dbf6d", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #6dbf6d", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ Conductor bilingüe ES/PT", "✅ Seguimiento de vuelo", "✅ Recepción en llegadas", "✅ Sin costo por demoras", "✅ Servicio 24h"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              {/* Links versiones PT y EN */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                    🇧🇷 Em português:{" "}
                    <Link href="/transfer-aeroporto-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                      Transfer Aeroporto →
                    </Link>
                  </span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                    🇬🇧 In English:{" "}
                    <Link href="/airport-transfer-londrina" style={{ color: "#8ab4ff", textDecoration: "none", fontWeight: 600 }}>
                      Airport Transfer →
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #6dbf6d",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#6dbf6d", margin: 0 }}>Transfer Aeropuerto · Londrina, Brasil</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>Conductor bilingüe ES/PT · Seguimiento vuelo · Recepción en llegadas</p>
          </div>
          <a href={waAeropuerto} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Reservar ahora
          </a>
        </div>

        {/* ════════ SERVICIOS ════════ */}
        <section aria-labelledby="servicios-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="servicios-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                ¿Por qué elegir nuestro transfer en el aeropuerto de Londrina?
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                Desde el aterrizaje hasta su hotel o reunión — sin estrés y en español.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {servicios.map((s) => (
                <div key={s.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #6dbf6d",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{s.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DESTINOS ════════ */}
        <section aria-labelledby="destinos-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              ¿A dónde lo llevamos desde el aeropuerto de Londrina?
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Todos los destinos en Londrina y la región
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {destinos.map((d) => (
                <div key={d.nombre} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: "3px solid #6dbf6d",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>{d.nombre}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.85rem", marginBottom: "0.25rem" }}>📍 {d.dist} · ⏱️ {d.tiempo}</p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", margin: 0 }}>{d.nota}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ VUELOS CON CONEXIÓN ════════ */}
        <section aria-labelledby="vuelos-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="vuelos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              Vuelos desde Sudamérica con conexión a Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>
              La mayoría de los vuelos desde Argentina, Paraguay y Chile conectan en São Paulo antes de llegar a Londrina
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", maxWidth: "900px", margin: "0 auto" }}>
              {vuelosConexion.map((v) => (
                <div key={v.origen} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #2a2a2a",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{v.bandera}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.25rem" }}>{v.origen}</h3>
                  <p style={{ color: "#6dbf6d", fontSize: "0.8rem", marginBottom: "0.25rem" }}>✈️ Escala: {v.escala}</p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", margin: 0 }}>{v.nota}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#9a9a9a", fontSize: "0.875rem", marginTop: "2rem", lineHeight: 1.7 }}>
              Monitoreamos su vuelo desde el origen. Si hay demora en la escala de São Paulo,<br />
              su conductor en Londrina ajusta automáticamente el horario de llegada al aeropuerto.
            </p>
          </div>
        </section>

        {/* ════════ FORMULARIO ════════ */}
        <section aria-labelledby="reserva-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="reserva-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Reserve su transfer desde el aeropuerto
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Complete el formulario y confirmamos por WhatsApp en minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transfer-aeropuerto-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-aero-es-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-aero-es-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Preguntas frecuentes — Transfer Aeropuerto Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Todo lo que necesita saber antes de reservar su transfer
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
                    <span aria-hidden="true" style={{ color: "#6dbf6d", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
        <section aria-label="Reservar transfer aeropuerto" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#6dbf6d", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer · Aeropuerto Governador José Richa (LDB) · Londrina, Brasil
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Su conductor lo espera en el aeropuerto
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Cartel con su nombre en llegadas. Seguimiento de vuelo.
              Conductor bilingüe español-portugués. Sin demoras, sin complicaciones.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waAeropuerto} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Reservar por WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#6dbf6d", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #6dbf6d", textDecoration: "none" }}>
                📞 Llamar ahora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS ES ↔ PT ↔ EN */}
        <section aria-label="Servicios relacionados" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.5rem", textAlign: "center" }}>
              Otros servicios de transporte en Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              También disponibles en portugués e inglés
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/airport-transfer-londrina",   label: "🇬🇧 Airport Transfer (EN)" },
                { href: "/transfer-aeroporto-londrina", label: "🇧🇷 Transfer Aeroporto (PT)" },
                { href: "/taxi-aeroporto-londrina",     label: "🇧🇷 Táxi Aeroporto (PT)" },
                { href: "/executive-driver-londrina",   label: "🇬🇧 Executive Driver (EN)" },
                { href: "/chauffeur-londrina",          label: "🇬🇧 Chauffeur Service (EN)" },
                { href: "/contato",                    label: "Contacto" },
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
        <footer aria-label="Pie de página" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transfer Aeropuerto · {business.address.city}, {business.address.stateCode}, Brasil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#6dbf6d", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Inicio</Link>
              <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/airport-transfer-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇬🇧 English</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#6dbf6d", textDecoration: "none" }}>Contacto →</Link>
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
