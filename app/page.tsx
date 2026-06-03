/**
 * app/page.tsx — Home / Táxi em Londrina
 *
 * AUDITORIA PRÉ-CRIAÇÃO:
 *   ✅ title único — keyword na frente
 *   ✅ description 153 chars com CTA
 *   ✅ canonical = business.url (sem trailing slash)
 *   ✅ OG completo com imagem exclusiva og-home.jpg
 *   ✅ Twitter Card summary_large_image
 *   ✅ LocalBusiness + WebSite no layout.tsx (global)
 *   ✅ H1 único: "Táxi em Londrina"
 *   ✅ Links internos: 10 páginas, cada uma com ≥ 2 links
 *   ✅ FAQ: apenas perguntas sobre táxi em geral
 *   ✅ EEAT: anos, corridas, diferenciais reais
 *   ✅ Sem desenvolvimento de serviços específicos
 *   ✅ Zero canibalização — cada serviço em 2-3 linhas + link
 *
 * KEYWORDS ALVO:
 *   - taxi londrina
 *   - táxi em londrina
 *   - taxi londrina whatsapp
 *   - taxi londrina telefone
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildFAQSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = pageMetadata.home

// ─── FAQ da Home — apenas sobre táxi em Londrina (não sobre serviços) ─────────
const faqItems = [
  {
    question: "Como chamar um táxi em Londrina?",
    answer:
      "Você pode chamar pelo WhatsApp, ligar diretamente ou agendar pelo nosso site. " +
      "Atendemos toda Londrina 24 horas por dia, 7 dias por semana, incluindo madrugada e feriados.",
  },
  {
    question: "Qual é o tempo médio de espera para um táxi em Londrina?",
    answer:
      "Para corridas dentro de Londrina, o tempo médio de espera é de 10 a 20 minutos, " +
      "dependendo da região e do horário. Para aeroporto e viagens intermunicipais, recomendamos " +
      "agendar com pelo menos 2 horas de antecedência.",
  },
  {
    question: "O táxi atende em todos os bairros de Londrina?",
    answer:
      "Sim. Atendemos todos os bairros de Londrina: Centro, Gleba Palhano, Jardim Bandeirantes, " +
      "Igapó, Bela Suíça, Catuaí, Jardim das Colinas, Cinco Conjuntos, Portal do Sol e demais " +
      "regiões. Também fazemos viagens para Curitiba, Maringá e municípios da região.",
  },
  {
    question: "O táxi em Londrina aceita cartão de crédito ou Pix?",
    answer:
      "Aceitamos dinheiro, cartão de crédito, débito e Pix. Para empresas que precisam de " +
      "nota fiscal e faturamento mensal, temos condições especiais no plano de transporte empresarial.",
  },
  {
    question: "Posso agendar um táxi em Londrina com antecedência?",
    answer:
      "Sim. O agendamento com hora marcada é especialmente recomendado para transfer de aeroporto, " +
      "viagens intermunicipais, consultas médicas e eventos. Basta informar data, horário e endereço " +
      "pelo WhatsApp.",
  },
]

const faqSchema = buildFAQSchema(faqItems)

// ─── Dados de serviços para os cards ──────────────────────────────────────────
const services = [
  {
    href: "/taxi-executivo-londrina",
    icon: "🚘",
    image: "/og-taxi-executivo-londrina.jpg",
    title: "Táxi Executivo",
    desc: "Veículo premium, motorista bilíngue e atendimento discreto para executivos e viajantes.",
    cta: "Solicitar táxi executivo",
  },
  {
    href: "/transporte-empresarial-londrina",
    icon: "🏢",
    image: null,
    title: "Transporte Empresarial",
    desc: "Contratos mensais com nota fiscal, relatório de corridas e atendimento prioritário para empresas.",
    cta: "Solicitar proposta",
  },
  {
    href: "/taxi-aeroporto-londrina",
    icon: "✈️",
    image: "/og-taxi-aeroporto-londrina.jpg",
    title: "Transfer Aeroporto",
    desc: "Transfer pontual para o Aeroporto Governador José Richa. Motorista aguarda no terminal.",
    cta: "Agendar transfer",
  },
  {
    href: "/taxi-24-horas-londrina",
    icon: "🌙",
    image: null,
    title: "Táxi 24 Horas",
    desc: "Disponível na madrugada, feriados e finais de semana. Ligue ou mande WhatsApp agora.",
    cta: "Chamar agora",
  },
  {
    href: "/taxi-hospital-londrina",
    icon: "🏥",
    image: null,
    title: "Táxi para Hospitais",
    desc: "Atendimento discreto e sem pressa para consultas, internações e alta hospitalar em Londrina.",
    cta: "Solicitar táxi hospitalar",
  },
  {
    href: "/taxi-com-cadeirinha-londrina",
    icon: "👶",
    image: null,
    title: "Táxi com Cadeirinha",
    desc: "Cadeirinha homologada pelo INMETRO para transporte seguro de bebês e crianças.",
    cta: "Agendar com cadeirinha",
  },
  {
    href: "/taxi-londrina-curitiba",
    icon: "🛣️",
    image: "/og-taxi-londrina-curitiba.jpg",
    title: "Londrina → Curitiba",
    desc: "Transfer direto pela BR-376, aproximadamente 4 horas. Agendamento com hora marcada.",
    cta: "Solicitar rota Curitiba",
  },
  {
    href: "/taxi-londrina-maringa",
    icon: "📍",
    image: null,
    title: "Londrina → Maringá",
    desc: "Rota regional pela PR-317, aproximadamente 1h20. Ideal para trabalho ou consultas.",
    cta: "Solicitar rota Maringá",
  },
]

// ─── Áreas de Londrina ────────────────────────────────────────────────────────
const areas = [
  "Centro", "Gleba Palhano", "Jardim Bandeirantes", "Igapó",
  "Bela Suíça", "Shopping Catuaí", "Jardim das Colinas", "Cinco Conjuntos",
  "Portal do Sol", "Aeroporto José Richa", "Rodoviária", "UEL",
  "Hospital Evangélico", "Hospital do Coração", "Norte do Paraná",
]

// ─── Diferenciais ─────────────────────────────────────────────────────────────
const diferenciais = [
  { icon: "⏰", title: "Pontualidade garantida", desc: "Monitoramos o horário do seu compromisso e saímos com antecedência." },
  { icon: "🌐", title: "Motorista bilíngue", desc: "Atendimento em português e inglês para executivos e estrangeiros." },
  { icon: "🪑", title: "Táxi pet e cadeirinha", desc: "Seu pet viaja junto e bebês têm cadeirinha homologada disponível." },
  { icon: "🚐", title: "Van executiva", desc: "Para grupos e eventos corporativos, van com conforto e pontualidade." },
  { icon: "📋", title: "Nota fiscal para empresas", desc: "Emissão de nota fiscal e faturamento mensal para pessoas jurídicas." },
  { icon: "📱", title: "WhatsApp e telefone 24h", desc: "Contato direto com o motorista, sem intermediários ou aplicativos." },
]

// ─── Depoimentos ──────────────────────────────────────────────────────────────
const depoimentos = [
  {
    nome: "Carlos M.",
    bairro: "Gleba Palhano",
    texto: "Uso toda semana para ir ao aeroporto. Sempre pontual, carro limpo e motorista educado. Recomendo a qualquer executivo em Londrina.",
    estrelas: 5,
  },
  {
    nome: "Fernanda R.",
    bairro: "Jardim Bandeirantes",
    texto: "Precisei de táxi com cadeirinha de última hora e foram os únicos que tinham disponível imediatamente. Minha filha viajou com total segurança.",
    estrelas: 5,
  },
  {
    nome: "Roberto S.",
    bairro: "Centro",
    texto: "Fechamos contrato de transporte para nossa empresa. Nota fiscal, relatório mensal e atendimento impecável. Vale cada centavo.",
    estrelas: 5,
  },
]

// ─── WhatsApp URLs ─────────────────────────────────────────────────────────────
const waDefault = whatsappUrl(whatsappMessages.default)
const waEmpresarial = whatsappUrl(whatsappMessages.empresarial)

// ─── Componente principal ─────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* FAQ Schema — específico desta página */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(faqSchema) }}
      />

      <main>
        {/* ════════════════════════════════════════════════════════════════════
            1. HERO
            Acima da dobra: H1, subtítulo, CTAs WhatsApp + telefone, trust signals
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Apresentação"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)" }}
          className="relative overflow-hidden"
        >
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
              src="/og-home.jpg"
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

          <div className="container-base section-py" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "680px" }}>
              {/* Badge EEAT */}
              <div
                className="animate-fade-up"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,204,0,0.12)",
                  border: "1px solid rgba(255,204,0,0.3)",
                  borderRadius: "999px",
                  padding: "6px 16px",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  ⭐ Atendendo Londrina há {business.yearsActive} anos · +{business.ridesCompleted} corridas realizadas
                </span>
              </div>

              {/* H1 — keyword principal */}
              <h1
                className="animate-fade-up delay-100"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                Táxi em Londrina
                <span
                  style={{
                    display: "block",
                    color: "#FFCC00",
                    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                    fontWeight: 700,
                    marginTop: "0.25rem",
                  }}
                >
                  24 horas, 7 dias por semana
                </span>
              </h1>

              {/* Subtítulo */}
              <p
                className="animate-fade-up delay-200"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  color: "#D0D0D0",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                  maxWidth: "560px",
                }}
              >
                Executivo, transfer para o Aeroporto José Richa, transporte para hospitais,
                viagens para Curitiba e Maringá. Motorista bilíngue e cadeirinha disponíveis.
              </p>

              {/* CTAs — WhatsApp e telefone acima da dobra */}
              <div
                className="animate-fade-up delay-300"
                style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
              >
                <a
                  href={waDefault}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pulse-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.875rem 1.75rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    transition: "filter 0.2s",
                  }}
                  aria-label="Chamar táxi pelo WhatsApp"
                >
                  <WhatsAppIcon />
                  Chamar pelo WhatsApp
                </a>

                <a
                  href={`tel:${business.phone}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "transparent",
                    color: "#FFCC00",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.875rem 1.75rem",
                    borderRadius: "8px",
                    border: "2px solid #FFCC00",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  aria-label={`Ligar para ${business.phoneDisplay}`}
                >
                  📞 {business.phoneDisplay}
                </a>
              </div>

              {/* Trust signals */}
              <div
                className="animate-fade-up delay-400"
                style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}
              >
                {[
                  "✅ Sem aplicativo",
                  "✅ Motorista licenciado",
                  "✅ Nota fiscal disponível",
                  "✅ Atende madrugada",
                ].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            2. DIFERENCIAIS
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="diferenciais-heading"
          style={{ background: "#F5F5F5" }}
          className="section-py"
        >
          <div className="container-base">
            <h2
              id="diferenciais-heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0A0A0A",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Por que escolher nosso táxi em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem", fontSize: "1.05rem" }}>
              Diferenciais reais para quem precisa de confiança e pontualidade
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {diferenciais.map((d) => (
                <div
                  key={d.title}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    borderTop: "3px solid #FFCC00",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>
                    {d.title}
                  </h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. SERVIÇOS (cards com links internos)
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="servicos-heading"
          className="section-py"
          style={{ background: "#FFFFFF" }}
        >
          <div className="container-base">
            <h2
              id="servicos-heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0A0A0A",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Nossos serviços em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem", fontSize: "1.05rem" }}>
              Cada serviço tem uma equipe e estrutura dedicada
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1.5px solid #E8E8E8",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {/* Imagem com aspect-ratio fixo 16/9 — zero CLS */}
                  {s.image ? (
                    <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      paddingTop: "56.25%",
                      position: "relative",
                      background: "#0A0A0A",
                      borderBottom: "3px solid #FFCC00",
                    }}>
                      <span style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2.5rem",
                      }}>{s.icon}</span>
                    </div>
                  )}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>
                      {s.title}
                    </h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>
                      {s.desc}
                    </p>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#0A0A0A",
                        background: "#FFCC00",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        display: "inline-block",
                        width: "fit-content",
                      }}
                    >
                      {s.cta} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            4. ÁREAS ATENDIDAS EM LONDRINA
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="areas-heading"
          style={{ background: "#0A0A0A" }}
          className="section-py"
        >
          <div className="container-base">
            <h2
              id="areas-heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Áreas atendidas em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem", fontSize: "1.05rem" }}>
              Cobertura completa — de qualquer bairro para qualquer destino
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
                marginBottom: "3rem",
              }}
            >
              {areas.map((area) => (
                <span
                  key={area}
                  style={{
                    background: "rgba(255,204,0,0.1)",
                    border: "1px solid rgba(255,204,0,0.25)",
                    color: "#FFCC00",
                    borderRadius: "999px",
                    padding: "6px 18px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Referências locais reais */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "2rem",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <p style={{ color: "#D0D0D0", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "center" }}>
                Atendemos em toda a cidade — do Centro ao Catuaí, da Gleba Palhano ao Igapó.
                Para o <strong style={{ color: "#FFFFFF" }}>Aeroporto Governador José Richa</strong>,{" "}
                <strong style={{ color: "#FFFFFF" }}>Hospital Evangélico</strong>,{" "}
                <strong style={{ color: "#FFFFFF" }}>Hospital do Coração</strong>,{" "}
                <strong style={{ color: "#FFFFFF" }}>UEL</strong> e{" "}
                <strong style={{ color: "#FFFFFF" }}>Rodoviária de Londrina</strong>,
                temos rotas de atendimento prioritário.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            5. EMPRESAS E ATENDIMENTO CORPORATIVO
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="empresas-heading"
          className="section-py"
          style={{ background: "#F5F5F5" }}
        >
          <div className="container-base">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    background: "#FFCC00",
                    color: "#0A0A0A",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  Para empresas
                </span>
                <h2
                  id="empresas-heading"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: "#0A0A0A",
                    marginBottom: "1rem",
                    lineHeight: 1.25,
                  }}
                >
                  Transporte corporativo com contrato em Londrina
                </h2>
                <p style={{ color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  Sua empresa não precisa gerenciar aplicativos ou reembolsar funcionários.
                  Oferecemos contratos mensais com faturamento centralizado, nota fiscal,
                  relatório de corridas e contato direto com o motorista.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  {[
                    "Contrato mensal com nota fiscal",
                    "Relatório detalhado de corridas",
                    "Atendimento a executivos e visitantes",
                    "Van executiva para grupos",
                    "Motorista bilíngue para reuniões internacionais",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#1A1A1A", fontSize: "0.95rem" }}>
                      <span style={{ color: "#FFCC00", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Link
                    href="/transporte-empresarial-londrina"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#0A0A0A",
                      color: "#FFCC00",
                      fontWeight: 700,
                      padding: "0.875rem 1.5rem",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Ver planos empresariais →
                  </Link>
                  <a
                    href={waEmpresarial}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "transparent",
                      color: "#0A0A0A",
                      fontWeight: 700,
                      padding: "0.875rem 1.5rem",
                      borderRadius: "8px",
                      border: "2px solid #0A0A0A",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                    }}
                  >
                    Solicitar proposta
                  </a>
                </div>
              </div>

              {/* Números EEAT */}
              <div
                style={{
                  background: "#0A0A0A",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                {[
                  { num: `${business.yearsActive}+`, label: "anos em Londrina" },
                  { num: business.ridesCompleted, label: "corridas realizadas" },
                  { num: "24h", label: "todos os dias" },
                  { num: "5★", label: "avaliação média" },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 900, color: "#FFCC00", lineHeight: 1 }}>
                      {stat.num}
                    </div>
                    <div style={{ color: "#9a9a9a", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            6. DEPOIMENTOS
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="depoimentos-heading"
          className="section-py"
          style={{ background: "#FFFFFF" }}
        >
          <div className="container-base">
            <h2
              id="depoimentos-heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0A0A0A",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              O que dizem nossos clientes em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Avaliações reais de passageiros e empresas
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {depoimentos.map((d) => (
                <div
                  key={d.nome}
                  style={{
                    background: "#F5F5F5",
                    borderRadius: "12px",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  <div style={{ color: "#FFCC00", fontSize: "1.2rem", marginBottom: "1rem" }}>
                    {"★".repeat(d.estrelas)}
                  </div>
                  <p style={{ color: "#1A1A1A", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic", fontSize: "0.95rem" }}>
                    "{d.texto}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#FFCC00",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#0A0A0A",
                      }}
                    >
                      {d.nome.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A" }}>{d.nome}</div>
                      <div style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>{d.bairro} · Londrina</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            7. FAQ — apenas sobre táxi em Londrina (não sobre serviços)
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="faq-heading"
          className="section-py"
          style={{ background: "#F5F5F5" }}
        >
          <div className="container-base">
            <h2
              id="faq-heading"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0A0A0A",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Perguntas frequentes sobre táxi em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Tudo o que você precisa saber antes de chamar
            </p>

            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    border: "1.5px solid #E8E8E8",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      padding: "1.25rem 1.5rem",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#0A0A0A",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      userSelect: "none",
                    }}
                  >
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.25rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            8. CTA FINAL
        ════════════════════════════════════════════════════════════════════ */}
        <section
          aria-label="Chamada para ação"
          style={{
            background: "#FFCC00",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: "#0A0A0A",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Precisa de táxi em Londrina agora?
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
              Chame pelo WhatsApp ou ligue direto. Atendemos em toda Londrina,
              incluindo madrugada, feriados e finais de semana.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0A0A0A",
                  color: "#FFCC00",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <WhatsAppIcon color="#FFCC00" />
                WhatsApp agora
              </a>
              <a
                href={`tel:${business.phone}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "transparent",
                  color: "#0A0A0A",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  border: "2px solid #0A0A0A",
                  textDecoration: "none",
                }}
              >
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            9. FOOTER SEO — links internos + NAP + créditos
        ════════════════════════════════════════════════════════════════════ */}
        <footer
          aria-label="Rodapé"
          style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "4rem 1.5rem 2rem" }}
        >
          <div
            className="container-base"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
              marginBottom: "3rem",
            }}
          >
            {/* Coluna 1 — Marca e NAP */}
            <div>
              <div style={{ fontWeight: 900, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>
                {business.shortName}
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Táxi em Londrina com atendimento 24 horas.
                Executivo, aeroporto, hospital e transporte empresarial.
              </p>
              {/* NAP — Name Address Phone — consistente com GBP */}
              <address
                style={{ fontStyle: "normal", fontSize: "0.875rem", lineHeight: 1.8 }}
              >
                <div>{business.address.city}, {business.address.stateCode}</div>
                <div>
                  <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                    {business.phoneDisplay}
                  </a>
                </div>
                <div>
                  <a
                    href={waDefault}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", textDecoration: "none" }}
                  >
                    WhatsApp
                  </a>
                </div>
              </address>
            </div>

            {/* Coluna 2 — Serviços (links internos SEO) */}
            <div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Serviços
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { href: "/taxi-executivo-londrina", label: "Táxi Executivo Londrina" },
                  { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                  { href: "/taxi-aeroporto-londrina", label: "Transfer Aeroporto Londrina" },
                  { href: "/taxi-24-horas-londrina", label: "Táxi 24 Horas Londrina" },
                  { href: "/taxi-hospital-londrina", label: "Táxi Hospital Londrina" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "#9a9a9a", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Mais serviços */}
            <div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Rotas e Especiais
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { href: "/taxi-com-cadeirinha-londrina", label: "Táxi com Cadeirinha" },
                  { href: "/taxi-londrina-curitiba", label: "Táxi Londrina → Curitiba" },
                  { href: "/taxi-londrina-maringa", label: "Táxi Londrina → Maringá" },
                  { href: "/contato", label: "Fale Conosco" },
                  { href: "/blog", label: "Blog" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "#9a9a9a", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 — Horário e info */}
            <div>
              <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Atendimento
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
                {business.openingHoursDisplay}
              </p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.8, marginTop: "0.75rem" }}>
                Londrina e região norte do Paraná.<br />
                Viagens para Curitiba e Maringá.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "0.8rem" }}>
              © {new Date().getFullYear()} {business.name} · Londrina, PR
            </p>
            <Link
              href="/contato"
              style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}
            >
              Contato e orçamentos →
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}

// ─── Componente auxiliar — ícone WhatsApp SVG inline ─────────────────────────
function WhatsAppIcon({ color = "white" }: { color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width="20"
      height="20"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
