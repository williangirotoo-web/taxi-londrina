/**
 * app/taxi-aeroporto-londrina/page.tsx
 *
 * KEYWORDS ALVO (PT):
 *   - taxi aeroporto londrina
 *   - transfer aeroporto londrina
 *   - taxi aeroporto josé richa
 *   - transfer aeroporto josé richa londrina
 *
 * KEYWORDS ALVO (EN — Decisão 4 aprovada):
 *   - taxi Londrina airport
 *   - airport transfer Londrina
 *   - english speaking driver Londrina
 *   - taxi Londrina english
 *
 * ANTI-CANIBALIZAÇÃO aplicada:
 *   ✅ PRESENTE: Aeroporto José Richa, voo, terminal, embarque, desembarque,
 *               check-in, monitoramento de voo, atraso, motorista aguardando
 *   ✅ AUSENTE:  contrato, frota, CNPJ, faturamento, RH (→ /empresarial)
 *   ✅ AUSENTE:  corrida avulsa, pet, van executiva (→ /executivo)
 *   ✅ AUSENTE:  hospital, cadeirinha, madrugada/plantão (→ outras páginas)
 *   ✅ DISTINÇÃO vs /executivo: foco em VOO e TERMINAL, não em conforto pessoal
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
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = pageMetadata.taxiAeroporto

// ─── Schemas ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Transfer Aeroporto Londrina — Aeroporto Governador José Richa",
  description:
    "Serviço de transfer para o Aeroporto Governador José Richa (LDB) em Londrina. " +
    "Motorista aguarda no terminal, monitoramento do horário do voo, atendimento " +
    "24 horas em português e inglês. Embarque e desembarque com pontualidade garantida.",
  serviceType: "Transfer Aeroportuário",
  url: `${business.url}/taxi-aeroporto-londrina`,
  areaServed: ["Londrina", "Aeroporto Governador José Richa"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

// FAQ exclusiva — perguntas sobre voo, terminal e transfer
const faqItems = [
  {
    question: "O motorista aguarda no terminal do Aeroporto José Richa se o voo atrasar?",
    answer:
      "Sim. Monitoramos o número do voo em tempo real. Se houver atraso, o motorista " +
      "se ajusta automaticamente ao novo horário de chegada e aguarda no terminal de " +
      "desembarque sem custo adicional. Você não precisa avisar — nós acompanhamos.",
  },
  {
    question: "Com quanto tempo de antecedência devo agendar o transfer para o aeroporto?",
    answer:
      "Recomendamos agendar com pelo menos 2 horas de antecedência para voos nacionais " +
      "e 3 horas para voos internacionais com conexão. Para garantir disponibilidade " +
      "em horários de pico, o ideal é agendar pelo WhatsApp com 24 horas de antecedência.",
  },
  {
    question: "O táxi faz transfer do Aeroporto José Richa para qualquer bairro de Londrina?",
    answer:
      "Sim. Atendemos desembarque no Aeroporto Governador José Richa com destino a " +
      "qualquer ponto de Londrina — Centro, Gleba Palhano, Jardim Bandeirantes, " +
      "Igapó, Shopping Catuaí, hotéis e demais endereços. Informe o destino no agendamento.",
  },
  {
    question: "Quanto custa o transfer do Centro de Londrina ao Aeroporto José Richa?",
    answer:
      "O valor varia conforme o ponto de partida e o horário. Do Centro ao aeroporto, " +
      "o valor estimado parte de R$60. Da Gleba Palhano, em torno de R$50. Para valor " +
      "exato, informe seu endereço pelo WhatsApp e receba o orçamento em minutos.",
  },
  {
    question: "O motorista fala inglês no transfer do aeroporto de Londrina?",
    answer:
      "Sim. Nosso motorista tem atendimento em inglês, o que facilita o traslado de " +
      "estrangeiros, executivos internacionais e visitantes que não falam português. " +
      "Informe no agendamento se precisar de atendimento em inglês.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Aeroporto Londrina", url: "/taxi-aeroporto-londrina" },
])

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
const waAeroporto = whatsappUrl(whatsappMessages.aeroporto)

// ─── Diferenciais exclusivos do transfer ──────────────────────────────────────
const diferenciais = [
  {
    icon: "📡",
    title: "Monitoramento de voo em tempo real",
    desc: "Acompanhamos o número do seu voo. Atraso na decolagem ou na chegada? O motorista já sabe e ajusta o horário automaticamente.",
  },
  {
    icon: "🪧",
    title: "Motorista aguarda no terminal",
    desc: "No desembarque, o motorista espera com identificação no terminal de chegada do Aeroporto Governador José Richa.",
  },
  {
    icon: "⏱️",
    title: "Calculamos o horário de saída por você",
    desc: "Informando o horário do check-in, calculamos a hora ideal de saída do seu endereço considerando o trânsito de Londrina.",
  },
  {
    icon: "🌐",
    title: "Atendimento em português e inglês",
    desc: "Transfer bilíngue para executivos estrangeiros, turistas internacionais e visitantes que não falam português.",
  },
  {
    icon: "🧳",
    title: "Espaço para bagagem",
    desc: "Veículo com porta-malas amplo para malas de viagem. Informe o número de malas no agendamento para garantir conforto.",
  },
  {
    icon: "🔁",
    title: "Ida e volta agendadas juntas",
    desc: "Agende o transfer de ida ao embarque e já combine o retorno no desembarque. Garanta os dois trajetos com um único contato.",
  },
]

// ─── Rotas comuns do aeroporto ────────────────────────────────────────────────
const rotas = [
  { origem: "Centro de Londrina", destino: "Aeroporto José Richa", tempo: "~20 min", referencia: "Saindo da Praça Marechal Floriano" },
  { origem: "Gleba Palhano", destino: "Aeroporto José Richa", tempo: "~15 min", referencia: "Região dos hotéis executivos" },
  { origem: "Jardim Bandeirantes", destino: "Aeroporto José Richa", tempo: "~25 min", referencia: "Via Av. Saul Elkind" },
  { origem: "Shopping Catuaí", destino: "Aeroporto José Richa", tempo: "~30 min", referencia: "Saída da BR-369" },
  { origem: "Aeroporto José Richa", destino: "Rodoviária de Londrina", tempo: "~30 min", referencia: "Conexão aeroporto + rodoviária" },
  { origem: "Aeroporto José Richa", destino: "UEL / Hospital Universitário", tempo: "~25 min", referencia: "Via Rodovia Celso Garcia Cid" },
]

// ─── Como funciona o transfer ─────────────────────────────────────────────────
const passos = [
  { n: "1", title: "Agende pelo WhatsApp", desc: "Informe data, horário do voo ou check-in, endereço de origem ou destino e número de passageiros." },
  { n: "2", title: "Confirmação imediata", desc: "Receba confirmação com o nome do motorista, placa do veículo e horário de saída calculado." },
  { n: "3", title: "Motorista no horário certo", desc: "Chegamos no endereço combinado com tempo calculado para o check-in. Zero stress com trânsito." },
  { n: "4", title: "No desembarque, aguardamos você", desc: "No retorno, o motorista monitora o voo e espera no terminal. Você não precisa se preocupar." },
]

export default function TaxiAeroportoPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Aeroporto Londrina</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO — foco em VOO, TERMINAL e PONTUALIDADE
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Transfer para o Aeroporto de Londrina"
          style={{
            background: "linear-gradient(150deg, #0A0A0A 0%, #0f1a2e 60%, #0A0A0A 100%)",
            position: "relative", overflow: "hidden",
          }}>
                    {/* Hero image — desktop/tablet only, oculta no mobile via CSS */}
          <div
            aria-hidden="true"
            className="hero-image-wrapper"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <Image
              src="/og-taxi-aeroporto-londrina.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.5) 40%, transparent 100%)",
            }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "700px" }}>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Transfer Aeroporto · Londrina, PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Táxi Aeroporto Londrina
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  Transfer para o Aeroporto Governador José Richa — 24h
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Motorista pontual, monitoramento do voo em tempo real e espera no terminal.
                Embarque e desembarque no Aeroporto José Richa com hora marcada,
                atendimento em português e inglês.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waAeroporto} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                  }}
                  aria-label="Agendar transfer aeroporto pelo WhatsApp">
                  <WhatsAppIcon />
                  Agendar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "transparent", color: "#FFCC00",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px",
                    border: "2px solid #FFCC00", textDecoration: "none",
                  }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Monitoramento de voo", "✅ Aguarda no terminal", "✅ Atendimento em inglês", "✅ Bagagem incluída", "✅ 24 horas"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            DIFERENCIAIS DO TRANSFER
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="diferenciais-aero-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="diferenciais-aero-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Por que agendar o transfer para o Aeroporto José Richa
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Cada detalhe pensado para quem não pode perder o voo
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {diferenciais.map((d) => (
                <div key={d.title} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{d.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            COMO FUNCIONA — fluxo de embarque e desembarque
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="como-funciona-aero-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="como-funciona-aero-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Como funciona o transfer para o aeroporto de Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              Do agendamento ao desembarque, sem surpresas
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "2rem", maxWidth: "960px", margin: "0 auto 3rem",
            }}>
              {passos.map((p) => (
                <div key={p.n} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    background: "#FFCC00", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1.3rem", color: "#0A0A0A",
                    margin: "0 auto 1rem",
                  }}>{p.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.825rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href={waAeroporto} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#0A0A0A" />
                Agendar transfer agora
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            ROTAS — pontos de origem e destino comuns
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="rotas-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rotas-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Rotas de transfer mais solicitadas em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Atendemos qualquer endereço em Londrina — veja os destinos mais frequentes
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}>
              {rotas.map((r) => (
                <div key={r.origem + r.destino} style={{
                  background: "#FFFFFF", borderRadius: "10px", padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  display: "flex", flexDirection: "column", gap: "0.5rem",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "#FFCC00", fontSize: "1.25rem" }}>✈️</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A" }}>
                        {r.origem} → {r.destino}
                      </div>
                      <div style={{ fontSize: "0.775rem", color: "#6B6B6B", marginTop: "2px" }}>{r.referencia}</div>
                    </div>
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: "#F5F5F5", borderRadius: "6px",
                    padding: "4px 10px", fontSize: "0.75rem",
                    fontWeight: 600, color: "#1A1A1A", width: "fit-content",
                  }}>
                    ⏱️ {r.tempo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CTA INTERMEDIÁRIO
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Agendar transfer aeroporto"
          style={{ background: "#FFCC00", padding: "3.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "0.75rem",
            }}>
              Não perca seu voo por falta de transporte pontual
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Agende o transfer com hora marcada. Monitore seu voo, aguarde no terminal,
              leve sua bagagem com tranquilidade.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waAeroporto} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#0A0A0A",
                  fontWeight: 700, fontSize: "1rem",
                  padding: "0.875rem 1.75rem", borderRadius: "8px",
                  border: "2px solid #0A0A0A", textDecoration: "none",
                }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SEÇÃO EM INGLÊS — Decisão 4 aprovada
            Captura buscas: "taxi Londrina airport", "english speaking driver",
            "airport transfer Londrina", "taxi Londrina english"
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="english-section-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

            {/* Divider visual */}
            <div style={{
              display: "flex", alignItems: "center", gap: "1rem",
              marginBottom: "3rem",
            }}>
              <div style={{ flex: 1, height: "1px", background: "#E8E8E8" }} />
              <span style={{
                background: "#FFCC00", color: "#0A0A0A",
                fontSize: "0.7rem", fontWeight: 800,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 14px", borderRadius: "999px",
                whiteSpace: "nowrap",
              }}>
                🌐 English
              </span>
              <div style={{ flex: 1, height: "1px", background: "#E8E8E8" }} />
            </div>

            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              <h2 id="english-section-heading" style={{
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A",
                marginBottom: "1rem",
              }}>
                English-Speaking Taxi — Londrina Airport Transfer
              </h2>

              <p style={{ color: "#1A1A1A", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "1rem" }}>
                Looking for a reliable <strong>airport transfer in Londrina</strong>? We provide
                professional taxi service to and from <strong>Aeroporto Governador José Richa (LDB)</strong>
                {" "}with an English-speaking driver.
              </p>

              <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Our driver monitors your flight in real time. Whether your flight is delayed or
                arrives early, we adjust automatically — <strong>no extra charge</strong> for
                waiting at the terminal. We hold a sign with your name at the arrivals hall.
              </p>

              <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                We accept payment in cash (BRL) or by card. For departure, we calculate
                the exact pick-up time based on your check-in deadline and current Londrina traffic.
                Book via WhatsApp — we reply in English.
              </p>

              {/* English trust signals */}
              <div style={{
                background: "#F5F5F5", borderRadius: "12px", padding: "1.5rem",
                display: "flex", flexWrap: "wrap", gap: "1rem",
                marginBottom: "2rem",
              }}>
                {[
                  "✅ English-speaking driver",
                  "✅ Flight tracking included",
                  "✅ Meet & greet at arrivals",
                  "✅ Available 24/7",
                  "✅ Fixed price, no surprises",
                  "✅ WhatsApp in English",
                ].map((item) => (
                  <span key={item} style={{ color: "#1A1A1A", fontSize: "0.85rem", fontWeight: 500 }}>{item}</span>
                ))}
              </div>

              {/* English CTA */}
              <a href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hi! I need an airport transfer in Londrina. Can you help me?")}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#25D366", color: "#FFFFFF",
                  fontWeight: 700, fontSize: "1rem",
                  padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                }}
                aria-label="Book airport transfer via WhatsApp in English">
                <WhatsAppIcon />
                Book via WhatsApp (English)
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ — exclusiva sobre voo, terminal e transfer
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-aero-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-aero-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas frequentes — transfer Aeroporto Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre embarque, desembarque e Aeroporto Governador José Richa
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{
                  background: "#FFFFFF", borderRadius: "10px",
                  border: "1.5px solid #E8E8E8", overflow: "hidden",
                }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem",
                    fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A",
                    cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    userSelect: "none",
                  }}>
                    {faq.question}
                    <span aria-hidden="true"
                      style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.875rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            LINKS INTERNOS + FOOTER
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Outros serviços de táxi em Londrina"
          style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A",
              marginBottom: "1.25rem", textAlign: "center",
            }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-executivo-londrina", label: "Táxi Executivo Londrina" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/taxi-24-horas-londrina", label: "Táxi 24 Horas" },
                { href: "/taxi-hospital-londrina", label: "Táxi para Hospitais" },
                { href: "/taxi-com-cadeirinha-londrina", label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba", label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa", label: "Londrina → Maringá" },
                { href: "/contato", label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block",
                  background: "#F5F5F5", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600,
                  padding: "8px 16px", borderRadius: "999px",
                  border: "1px solid #E8E8E8", textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer aria-label="Rodapé"
          style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{
            maxWidth: "72rem", margin: "0 auto",
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center", gap: "1.5rem",
          }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                {business.shortName}
              </Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transfer Aeroporto · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Agendar transfer →</Link>
            </div>
          </div>

            {/* ── Transporte Executivo Premium ── */}
            <div style={{
              width: "100%",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "1.25rem",
              marginTop: "0.5rem",
            }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#5a5a5a", marginBottom: "0.4rem" }}>
                Transporte Executivo Premium
              </p>
              <p style={{ fontSize: "0.78rem", color: "#5a5a5a", lineHeight: 1.6, marginBottom: "0.5rem", maxWidth: "460px" }}>
                Para transfer corporativo, aeroportos e mobilidade executiva premium, conheça a Londrina Executivo.
              </p>
              <a href="https://londrinaexecutivo.com.br" rel="noopener"
                style={{ color: "#FFCC00", fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}>
                Conhecer Londrina Executivo →
              </a>
            </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width="20" height="20" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
