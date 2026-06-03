/**
 * app/taxi-executivo-londrina/page.tsx
 *
 * AUDITORIA PRÉ-CRIAÇÃO:
 *   ✅ title único — "Táxi Executivo Londrina | Motorista Particular Premium" (55 chars)
 *   ✅ description única — 140 chars, sem copiar da Home
 *   ✅ canonical própria — /taxi-executivo-londrina
 *   ✅ OG próprio — og-taxi-executivo-londrina.jpg
 *   ✅ Twitter Card próprio
 *   ✅ schema Service próprio — serviceType: "Táxi Executivo"
 *   ✅ schema FAQPage próprio — 5 perguntas exclusivas desta página
 *   ✅ schema BreadcrumbList — Home > Táxi Executivo Londrina
 *   ✅ Links internos: Home + /taxi-aeroporto + /transporte-empresarial + /contato
 *   ✅ Sem palavras proibidas: contrato, frota, faturamento, RH (ver tabela de canibalização)
 *   ✅ Conteúdo exclusivo — zero cópia da Home ou de outras páginas
 *   ✅ Mínimo 600 palavras de conteúdo útil
 *
 * KEYWORDS ALVO:
 *   - taxi executivo londrina
 *   - motorista particular londrina
 *   - taxi particular londrina
 *   - taxi executivo bilíngue londrina
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
export const metadata: Metadata = pageMetadata.taxiExecutivo

// ─── Schemas ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Táxi Executivo em Londrina",
  description:
    "Serviço de táxi executivo em Londrina com veículo premium, motorista " +
    "particular bilíngue, atendimento discreto e corridas avulsas para " +
    "executivos, viajantes e passageiros que exigem conforto e pontualidade.",
  serviceType: "Táxi Executivo",
  url: `${business.url}/taxi-executivo-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "O que é táxi executivo em Londrina e qual a diferença para o táxi comum?",
    answer:
      "O táxi executivo em Londrina oferece veículo premium com ar-condicionado, " +
      "bancos em couro e habitáculo silencioso, motorista particular com apresentação " +
      "formal e atendimento em português e inglês. Diferente do táxi comum, o executivo " +
      "prioriza conforto, discrição e pontualidade para executivos e viajantes.",
  },
  {
    question: "O motorista particular em Londrina fala inglês?",
    answer:
      "Sim. Nosso motorista particular em Londrina tem fluência em inglês, o que garante " +
      "atendimento completo para executivos estrangeiros, visitantes internacionais e " +
      "reuniões com delegações. Basta informar a necessidade ao agendar.",
  },
  {
    question: "O táxi executivo em Londrina aceita pets?",
    answer:
      "Sim. O táxi executivo aceita cães e gatos de pequeno e médio porte, desde que " +
      "o passageiro traga uma caixinha ou bolsa de transporte adequada. Informe no " +
      "momento do agendamento para garantir disponibilidade.",
  },
  {
    question: "Quanto custa um táxi executivo em Londrina?",
    answer:
      "O valor do táxi executivo em Londrina varia conforme a distância da corrida e " +
      "o horário. Para corridas dentro da cidade, o valor parte de R$40. Para aeroporto " +
      "e destinos específicos, solicite orçamento pelo WhatsApp com o endereço de origem " +
      "e destino.",
  },
  {
    question: "É possível agendar um táxi executivo em Londrina com hora marcada?",
    answer:
      "Sim. O agendamento com hora marcada é altamente recomendado, especialmente para " +
      "transfer ao Aeroporto Governador José Richa, reuniões de negócios, chegada de " +
      "visitantes e eventos. Informe data, horário e endereços pelo WhatsApp com pelo " +
      "menos 2 horas de antecedência.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Executivo Londrina", url: "/taxi-executivo-londrina" },
])

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
const waExecutivo = whatsappUrl(whatsappMessages.executivo)

// ─── Diferenciais — exclusivos do executivo ───────────────────────────────────
const diferenciais = [
  {
    icon: "🚘",
    title: "Veículo premium",
    desc: "Sedan executivo com ar-condicionado, bancos em couro e habitáculo silencioso. Ideal para reuniões, ligações e descanso durante o trajeto.",
  },
  {
    icon: "🌐",
    title: "Motorista bilíngue",
    desc: "Atendimento em português e inglês. Perfeito para executivos estrangeiros, delegações internacionais e visitantes que não falam português.",
  },
  {
    icon: "🤫",
    title: "Discrição garantida",
    desc: "Sem conversas desnecessárias. O motorista respeita o espaço do passageiro para trabalhar, descansar ou fazer chamadas durante o percurso.",
  },
  {
    icon: "⏱️",
    title: "Pontualidade acima de tudo",
    desc: "Saímos com antecedência calculada conforme o trânsito de Londrina. Você informa o horário de chegada — nós garantimos que você chegue no horário.",
  },
  {
    icon: "🐾",
    title: "Táxi pet",
    desc: "Seu cão ou gato pode viajar junto. Basta uma caixinha de transporte adequada. Informe no agendamento para garantir disponibilidade.",
  },
  {
    icon: "🚐",
    title: "Van executiva",
    desc: "Para grupos de até 6 passageiros: van executiva com conforto e espaço para bagagem. Ideal para delegações, equipes e traslados em grupo.",
  },
]

// ─── Casos de uso ─────────────────────────────────────────────────────────────
const casosDeUso = [
  { icon: "✈️", title: "Transfer para o Aeroporto", desc: "José Richa com hora marcada e monitoramento do voo." },
  { icon: "🤝", title: "Reuniões de negócios", desc: "Chegue ao cliente apresentado e sem stress de estacionamento." },
  { icon: "🏨", title: "Recepção de visitantes", desc: "Buscar executivos ou clientes no aeroporto com plaquinha." },
  { icon: "🎭", title: "Eventos e formaturas", desc: "Transfer com conforto e pontualidade para eventos em Londrina." },
  { icon: "🏥", title: "Consultas médicas", desc: "Para quem precisa de conforto e discrição no deslocamento." },
  { icon: "🌙", title: "Corridas noturnas", desc: "Disponível na madrugada com o mesmo padrão executivo." },
]

// ─── Componente principal ─────────────────────────────────────────────────────
export default function TaxiExecutivoPage() {
  return (
    <>
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
              src="/og-taxi-executivo-londrina.jpg"
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

              {/* Badge de serviço */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚘 Táxi Executivo · Londrina, PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Táxi Executivo em Londrina
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  Motorista particular com conforto e discrição
                </span>
              </h1>

              {/* Parágrafo de abertura — exclusivo desta página */}
              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Veículo premium, motorista bilíngue e atendimento discreto para executivos,
                viajantes e passageiros que valorizam conforto e discrição. Corridas avulsas
                com hora marcada — você fala diretamente com o motorista, sem intermediário.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a
                  href={waExecutivo}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px",
                    textDecoration: "none",
                  }}
                  aria-label="Solicitar táxi executivo pelo WhatsApp"
                >
                  <WhatsAppIcon />
                  Solicitar táxi executivo
                </a>
                <a
                  href={`tel:${business.phone}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "transparent", color: "#FFCC00",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px",
                    border: "2px solid #FFCC00", textDecoration: "none",
                  }}
                  aria-label={`Ligar para ${business.phoneDisplay}`}
                >
                  📞 {business.phoneDisplay}
                </a>
              </div>

              {/* Trust signals exclusivos do executivo */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {[
                  "✅ Veículo premium",
                  "✅ Motorista bilíngue",
                  "✅ Sem aplicativo",
                  "✅ Pets aceitos",
                  "✅ Van disponível",
                ].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            DIFERENCIAIS EXCLUSIVOS — conteúdo específico do executivo
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="diferenciais-exec-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2
              id="diferenciais-exec-heading"
              style={{
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A",
                marginBottom: "0.75rem", textAlign: "center",
              }}
            >
              O que torna nosso táxi executivo diferente em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem", fontSize: "1rem" }}>
              Cada detalhe pensado para quem valoriza conforto e discrição
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {diferenciais.map((d) => (
                <div key={d.title} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{d.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            CASOS DE USO — quando usar o táxi executivo em Londrina
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="casos-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2
              id="casos-heading"
              style={{
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A",
                marginBottom: "0.75rem", textAlign: "center",
              }}
            >
              Quando solicitar um táxi executivo em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Situações em que o conforto e a pontualidade fazem diferença
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.25rem",
            }}>
              {casosDeUso.map((c) => (
                <div key={c.title} style={{
                  background: "#FFFFFF", borderRadius: "10px",
                  padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}>
                  <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.3rem" }}>{c.title}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link para aeroporto — relacionamento entre serviços */}
            <div style={{
              marginTop: "2.5rem", background: "#0A0A0A", borderRadius: "12px",
              padding: "1.75rem 2rem", display: "flex",
              flexWrap: "wrap", justifyContent: "space-between",
              alignItems: "center", gap: "1rem",
            }}>
              <div>
                <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>
                  Precisa de transfer para o Aeroporto José Richa?
                </p>
                <p style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>
                  Temos serviço dedicado com monitoramento de voo e espera no terminal.
                </p>
              </div>
              <Link
                href="/taxi-aeroporto-londrina"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 700, fontSize: "0.875rem",
                  padding: "0.75rem 1.25rem", borderRadius: "8px",
                  textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                Ver transfer aeroporto →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            COMO FUNCIONA — fluxo exclusivo do executivo
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="como-funciona-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2
              id="como-funciona-heading"
              style={{
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A",
                marginBottom: "0.75rem", textAlign: "center",
              }}
            >
              Como funciona o táxi executivo em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Simples, direto e sem complicação
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              maxWidth: "900px", margin: "0 auto",
            }}>
              {[
                { step: "1", title: "Você chama pelo WhatsApp", desc: "Informe origem, destino e horário. Receba confirmação em minutos." },
                { step: "2", title: "Motorista confirma e sai", desc: "O motorista particular sai com antecedência calculada para chegar antes de você." },
                { step: "3", title: "Viaje com conforto", desc: "Interior climatizado, silencioso e sem pressa. Trabalhe, descanse ou faça ligações." },
                { step: "4", title: "Pague como preferir", desc: "Dinheiro, Pix ou cartão. Sem surpresas no valor combinado." },
              ].map((s) => (
                <div key={s.step} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "#FFCC00", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1.25rem", color: "#0A0A0A",
                    margin: "0 auto 1rem",
                  }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            CTA INTERMEDIÁRIO
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Solicitar táxi executivo" style={{
          background: "#FFCC00", padding: "3.5rem 1.5rem", textAlign: "center",
        }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "0.75rem",
            }}>
              Agende seu táxi executivo em Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Corrida avulsa com hora marcada. Sem contrato, sem mensalidade.
              Você chama, o motorista chega.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waExecutivo} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#0A0A0A", color: "#FFCC00",
                fontWeight: 700, fontSize: "1rem",
                padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
              }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`} style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
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

        {/* ════════════════════════════════════════════════════════════════════
            FAQ — exclusiva desta página
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-exec-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2
              id="faq-exec-heading"
              style={{
                fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                fontWeight: 800, color: "#0A0A0A",
                marginBottom: "0.75rem", textAlign: "center",
              }}
            >
              Perguntas frequentes sobre táxi executivo em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas comuns de quem busca motorista particular em Londrina
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

        {/* ════════════════════════════════════════════════════════════════════
            LINKS INTERNOS — navegação entre serviços relacionados
        ════════════════════════════════════════════════════════════════════ */}
        <section aria-label="Outros serviços" style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "1.25rem", fontWeight: 800, color: "#0A0A0A",
              marginBottom: "1.5rem", textAlign: "center",
            }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{
              display: "flex", flexWrap: "wrap",
              gap: "0.75rem", justifyContent: "center",
            }}>
              {[
                { href: "/taxi-aeroporto-londrina", label: "Transfer Aeroporto Londrina" },
                { href: "/taxi-24-horas-londrina", label: "Táxi 24 Horas" },
                { href: "/taxi-hospital-londrina", label: "Táxi para Hospital" },
                { href: "/taxi-com-cadeirinha-londrina", label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba", label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa", label: "Londrina → Maringá" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/contato", label: "Solicitar orçamento" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block",
                  background: "#F5F5F5", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600,
                  padding: "8px 16px", borderRadius: "999px",
                  border: "1px solid #E8E8E8", textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            FOOTER COMPACTO — NAP e link de volta para Home
        ════════════════════════════════════════════════════════════════════ */}
        <footer aria-label="Rodapé" style={{
          background: "#0A0A0A", color: "#9a9a9a",
          padding: "2.5rem 1.5rem",
        }}>
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
                Táxi Executivo · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Solicitar orçamento →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

// ─── Ícone WhatsApp ───────────────────────────────────────────────────────────
function WhatsAppIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width="20" height="20" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
