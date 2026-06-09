/**
 * app/chofer-ejecutivo-londrina/page.tsx
 *
 * IDIOMA: Español (100%)
 * KEYWORD: chofer ejecutivo londrina
 * INTENCIÓN: transaccional — empresarios y ejecutivos hispanohablantes (AR, PY, CL)
 *             que necesitan un chofer a disposición por horas o jornada completa
 *
 * HREFLANG TRILÍNGUE:
 *   es    → /chofer-ejecutivo-londrina (esta página)
 *   pt-BR → /motorista-executivo-londrina
 *   en    → /executive-driver-londrina
 *   x-default → /executive-driver-londrina
 *
 * ANTI-CANIBALIZACIÓN:
 *   ✅ /transfer-aeropuerto-londrina (ES) — viaje puntual aeropuerto
 *   ✅ /executive-driver-londrina (EN) — idioma EN, público internacional
 *   ✅ /motorista-executivo-londrina (PT) — idioma PT, público brasileño
 *   Esta página: ES, agenda corporativa completa, espera entre reuniones
 *
 * DIFERENCIACIÓN VS /transfer-aeropuerto-londrina:
 *   Transfer: punto A → punto B · Una sola viaje · Aeropuerto al hotel
 *   Chofer ejecutivo: a disposición todo el día · Agenda completa · Espera incluida
 *
 * CONTENIDO EXCLUSIVO:
 *   - Paquetes 4h / 8h / 12h en español
 *   - Empresarios AR/PY visitando COCAMAR, Coamo y tradings
 *   - Factura para empresa (nota fiscal PJ)
 *   - Tabla chofer vs transfer vs taxi en español
 *   - FAQ 100% en español sin overlap
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
  ...pageMetadata.choferEjecutivo,
  alternates: {
    canonical: `${business.url}/chofer-ejecutivo-londrina`,
    languages: {
      "es":    `${business.url}/chofer-ejecutivo-londrina`,
      "pt-BR": `${business.url}/motorista-executivo-londrina`,
      "en":    `${business.url}/executive-driver-londrina`,
    },
  },
}

const serviceSchema = buildServiceSchema({
  name: "Servicio de Chofer Ejecutivo en Londrina, Brasil",
  description:
    "Chofer ejecutivo bilingüe (español/portugués) en Londrina a disposición por horas o jornada completa. " +
    "El conductor espera entre reuniones sin costo adicional. " +
    "Paquetes de 4h, 8h y 12h para empresarios y ejecutivos de Argentina y Paraguay.",
  serviceType: "Servicio de Chofer Ejecutivo",
  url: `${business.url}/chofer-ejecutivo-londrina`,
  areaServed: ["Londrina", "Paraná", "Brasil"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "¿El chofer ejecutivo espera entre reuniones en Londrina?",
    answer:
      "Sí. En los paquetes de 4h, 8h o 12h, el conductor permanece disponible " +
      "durante todo el período contratado — espera entre cada reunión, " +
      "adapta el itinerario en tiempo real y garantiza la puntualidad " +
      "en cada compromiso de su agenda. No hay costo adicional por el tiempo de espera " +
      "dentro del paquete contratado.",
  },
  {
    question: "¿Cuál es la diferencia entre chofer ejecutivo y transfer en Londrina?",
    answer:
      "El transfer es un viaje puntual de un punto A a un punto B — " +
      "por ejemplo, del aeropuerto a su hotel. El servicio termina al llegar. " +
      "El chofer ejecutivo, en cambio, queda a disposición durante todo el día: " +
      "lo lleva a la primera reunión, espera mientras usted trabaja, " +
      "lo traslada a la siguiente reunión y así sucesivamente. " +
      "Es el servicio ideal para quien tiene agenda corporativa completa en Londrina.",
  },
  {
    question: "¿El chofer habla español en Londrina?",
    answer:
      "Sí. Nuestro conductor es bilingüe en español y portugués. " +
      "Toda la comunicación — desde la reserva por WhatsApp hasta el traslado final — " +
      "puede realizarse íntegramente en español. " +
      "Atendemos regularmente a empresarios y ejecutivos de Argentina, Paraguay y Chile " +
      "que visitan Londrina por negocios.",
  },
  {
    question: "¿Emiten factura para empresas argentinas o paraguayas?",
    answer:
      "Sí. El servicio de chofer ejecutivo se presta con documentación fiscal completa " +
      "para personas jurídicas — empresas argentinas, paraguayas, chilenas " +
      "o cualquier CNPJ brasileiro. Informe los datos de su empresa al momento de la reserva " +
      "para que preparemos la factura correspondiente.",
  },
  {
    question: "¿El chofer ejecutivo puede llevarme a cooperativas y empresas agrícolas en el Paraná?",
    answer:
      "Sí. Londrina es el polo del agronegocio del norte del Paraná. " +
      "Realizamos traslados de ejecutivos e inversores a cooperativas como COCAMAR y Coamo, " +
      "a tradings de granos, a plantas industriales y a otras empresas del sector agropecuario " +
      "en la región. Informe el itinerario completo al reservar para que planifiquemos " +
      "los tiempos y rutas con anticipación.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Inicio", url: "/" },
  { name: "Chofer Ejecutivo Londrina", url: "/chofer-ejecutivo-londrina" },
])

const waChofer = whatsappUrl(
  "¡Hola! Necesito contratar un chofer ejecutivo en Londrina por el día y quisiera recibir un presupuesto."
)

const paquetes = [
  { label: "Medio día", horas: "4h", popular: false, desc: "Mañana o tarde. Reuniones puntuales o visitas cortas a empresas." },
  { label: "Jornada completa", horas: "8h", popular: true,  desc: "Día de trabajo completo con múltiples reuniones. El más contratado." },
  { label: "Jornada ejecutiva", horas: "12h", popular: false, desc: "Día extenso con cenas de negocios o compromisos nocturnos." },
]

const quienContrata = [
  { icon: "🇦🇷", titulo: "Empresarios argentinos", desc: "Ejecutivos de Buenos Aires, Córdoba y Rosario que visitan socios comerciales en Londrina." },
  { icon: "🇵🇾", titulo: "Visitantes paraguayos", desc: "Empresarios de Asunción que negocian con cooperativas y empresas agrícolas del Paraná." },
  { icon: "🌾", titulo: "Inversores del agronegocio", desc: "Due diligence en COCAMAR, Coamo, Copavel y tradings de granos en la región norte del Paraná." },
  { icon: "💰", titulo: "Inversores y socios", desc: "Visitas a empresas, startups del PaTLon y reuniones con gestores locales en Londrina." },
  { icon: "⚖️", titulo: "Abogados corporativos", desc: "Audiencias, arbitrajes y reuniones con clientes en Londrina que requieren transporte discreto." },
  { icon: "🏭", titulo: "Ejecutivos de industria", desc: "Visitas a plantas industriales y parques industriales en Londrina y la región." },
]

const comparacion = [
  { tipo: "Chofer ejecutivo", modelo: "A disposición todo el día", espera: "Sí — sin costo extra", ideal: "Agenda completa, múltiples reuniones" },
  { tipo: "Transfer aeropuerto", modelo: "Un viaje puntual (A→B)", espera: "No", ideal: "Llegada al aeropuerto o traslado único" },
  { tipo: "Taxi convencional", modelo: "Llamada por demanda", espera: "No — libre al terminar", ideal: "Viajes esporádicos sin planificación" },
]

const diferenciales = [
  { icon: "⏰", titulo: "A disposición todo el día", desc: "El conductor permanece disponible durante todo el período contratado — 4, 8 o 12 horas." },
  { icon: "🗣️", titulo: "Conductor bilingüe ES/PT", desc: "Atención completa en español. Sin barreras de idioma en ningún momento del servicio." },
  { icon: "📋", titulo: "Itinerario flexible", desc: "¿Cambió la agenda? El conductor adapta el recorrido en tiempo real sin complicaciones." },
  { icon: "🔒", titulo: "Discreción garantizada", desc: "Rutas, destinos y conversaciones en total confidencialidad durante toda la jornada." },
  { icon: "📄", titulo: "Factura para empresas", desc: "Documentación fiscal completa para empresas argentinas, paraguayas o cualquier CNPJ." },
  { icon: "🚗", titulo: "Vehículo premium", desc: "Toyota Corolla negro, climatizado, con cargadores USB y espacio para documentos y equipaje." },
]

export default function ChoferEjecutivoLondrinaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Chofer Ejecutivo Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Chofer ejecutivo en Londrina — servicio por horas"
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
                background: "rgba(192,147,42,0.1)", border: "1px solid rgba(192,147,42,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#e8b84b", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  💼 Chofer Ejecutivo · Londrina · Brasil · Servicio en Español
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Chofer Ejecutivo en Londrina
                <span style={{ display: "block", color: "#e8b84b", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  A Disposición por 4h, 8h o Jornada Completa · Conductor Bilingüe
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Chofer ejecutivo bilingüe en Londrina, Brasil. Su conductor espera entre
                cada reunión, adapta el itinerario a su agenda y garantiza puntualidad
                en todos sus compromisos. Ideal para empresarios y ejecutivos de Argentina y Paraguay.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waChofer} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Contratar por WhatsApp
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#e8b84b", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #e8b84b", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1.5rem" }}>
                {["✅ Espera entre reuniones", "✅ Conductor bilingüe ES/PT", "✅ Factura empresa", "✅ Paquetes 4h / 8h / 12h", "✅ Agronegocio AR/PY"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                    🇧🇷 Em português:{" "}
                    <Link href="/motorista-executivo-londrina" style={{ color: "#FFCC00", textDecoration: "none", fontWeight: 600 }}>
                      Motorista Executivo →
                    </Link>
                  </span>
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", padding: "6px 12px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#9a9a9a" }}>
                    🇬🇧 In English:{" "}
                    <Link href="/executive-driver-londrina" style={{ color: "#8ab4ff", textDecoration: "none", fontWeight: 600 }}>
                      Executive Driver →
                    </Link>
                  </span>
                </div>
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
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #e8b84b",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#e8b84b", margin: 0 }}>Chofer Ejecutivo · Londrina, Brasil</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>A disposición por horas · Espera entre reuniones · Bilingüe ES/PT</p>
          </div>
          <a href={waChofer} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Contratar ahora
          </a>
        </div>

        {/* ════════ PAQUETES ════════ */}
        <section aria-labelledby="paquetes-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="paquetes-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Paquetes de chofer ejecutivo en Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Elija el período que se adapta a su agenda. El conductor queda disponible durante todo el tiempo contratado.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
              {paquetes.map((p) => (
                <div key={p.horas} style={{
                  background: "#1a1a1a", borderRadius: "16px", padding: "2rem 1.5rem",
                  border: p.popular ? "2px solid #e8b84b" : "1px solid #2a2a2a",
                  position: "relative", textAlign: "center",
                }}>
                  {p.popular && (
                    <div style={{
                      position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                      background: "#e8b84b", color: "#0A0A0A", fontWeight: 800,
                      fontSize: "0.7rem", padding: "4px 14px", borderRadius: "999px", whiteSpace: "nowrap",
                    }}>
                      MÁS CONTRATADO
                    </div>
                  )}
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{p.label}</p>
                  <p style={{ color: "#e8b84b", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.5rem" }}>{p.horas}</p>
                  <p style={{ color: "#FFFFFF", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                  <a href={waChofer} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      background: p.popular ? "#e8b84b" : "transparent",
                      color: p.popular ? "#0A0A0A" : "#e8b84b",
                      fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem",
                      borderRadius: "8px", textDecoration: "none",
                      border: p.popular ? "none" : "2px solid #e8b84b",
                    }}>
                    <WhatsAppIcon color={p.popular ? "#0A0A0A" : "#e8b84b"} size={16} />
                    Reservar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ QUIÉN CONTRATA ════════ */}
        <section aria-labelledby="quien-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="quien-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                ¿Quién contrata chofer ejecutivo en Londrina?
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
                Profesionales hispanohablantes que visitan Londrina por negocios y necesitan movilidad durante toda la jornada.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {quienContrata.map((q) => (
                <div key={q.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #e8b84b",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{q.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{q.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ COMPARACIÓN ════════ */}
        <section aria-labelledby="comparacion-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="comparacion-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Chofer ejecutivo vs transfer vs taxi — ¿cuál necesita?
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Cada servicio tiene su propósito. Elija el que se adapta a su agenda.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", margin: "0 auto" }}>
              {comparacion.map((row) => (
                <div key={row.tipo} style={{
                  display: "grid", gridTemplateColumns: "150px 1fr 1fr 1fr",
                  gap: "1rem", alignItems: "center",
                  background: row.tipo === "Chofer ejecutivo" ? "#0A0A0A" : "#FFFFFF",
                  borderRadius: "12px", padding: "1.25rem 1.5rem",
                  border: row.tipo === "Chofer ejecutivo" ? "2px solid #e8b84b" : "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 800, fontSize: "0.9rem", color: row.tipo === "Chofer ejecutivo" ? "#e8b84b" : "#0A0A0A", margin: 0 }}>{row.tipo}</p>
                  <p style={{ fontSize: "0.8rem", color: row.tipo === "Chofer ejecutivo" ? "#D0D0D0" : "#3A3A3A", margin: 0 }}>{row.modelo}</p>
                  <p style={{ fontSize: "0.8rem", color: row.tipo === "Chofer ejecutivo" ? "#D0D0D0" : "#3A3A3A", margin: 0 }}>{row.espera}</p>
                  <p style={{ fontSize: "0.8rem", color: row.tipo === "Chofer ejecutivo" ? "#9a9a9a" : "#6B6B6B", margin: 0, fontStyle: "italic" }}>{row.ideal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DIFERENCIALES ════════ */}
        <section aria-labelledby="diferenciales-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="diferenciales-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              Por qué elegir nuestro chofer ejecutivo en Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>
              Cada detalle pensado para el ejecutivo hispanohablante en visita de negocios.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {diferenciales.map((d) => (
                <div key={d.titulo} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.75rem", border: "1px solid #2a2a2a",
                  borderTop: "3px solid #e8b84b",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{d.titulo}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FORMULARIO ════════ */}
        <section aria-labelledby="reserva-ch-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="reserva-ch-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Contratar chofer ejecutivo en Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Complete el formulario o envíe su itinerario por WhatsApp. Confirmamos disponibilidad en minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="chofer-ejecutivo-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-chofer-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-chofer-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Preguntas frecuentes — Chofer Ejecutivo Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Todo lo que necesita saber antes de contratar su chofer ejecutivo
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
                    <span aria-hidden="true" style={{ color: "#e8b84b", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
        <section aria-label="Contratar chofer ejecutivo" style={{ background: "#e8b84b", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Su chofer ejecutivo está listo en Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              A disposición por 4h, 8h o jornada completa. Espera entre reuniones.
              Conductor bilingüe ES/PT. Factura para su empresa.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waChofer} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#e8b84b", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#e8b84b" />
                Contratar por WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Llamar ahora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS ES ↔ PT ↔ EN */}
        <section aria-label="Servicios relacionados" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.5rem", textAlign: "center" }}>
              Otros servicios ejecutivos en Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              También disponibles en portugués e inglés
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/transfer-aeropuerto-londrina",  label: "🇪🇸 Transfer Aeropuerto (ES)" },
                { href: "/executive-driver-londrina",     label: "🇬🇧 Executive Driver (EN)" },
                { href: "/motorista-executivo-londrina",  label: "🇧🇷 Motorista Executivo (PT)" },
                { href: "/transfer-corporativo-londrina", label: "🇧🇷 Transfer Corporativo (PT)" },
                { href: "/chauffeur-londrina",            label: "🇬🇧 Chauffeur Service (EN)" },
                { href: "/contato",                      label: "Contacto" },
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
                Chofer Ejecutivo Londrina · {business.address.city}, {business.address.stateCode}, Brasil ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#e8b84b", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Inicio</Link>
              <Link href="/motorista-executivo-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇧🇷 Português</Link>
              <Link href="/executive-driver-londrina" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>🇬🇧 English</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#e8b84b", textDecoration: "none" }}>Contacto →</Link>
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
