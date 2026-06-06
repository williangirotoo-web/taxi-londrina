/**
 * app/blog/como-sair-aeroporto-governador-jose-richa/page.tsx
 *
 * ARTIGO 3 — Blog Táxi Londrina
 *
 * KEYWORD PRINCIPAL: como sair aeroporto governador jose richa
 * INTENÇÃO: informacional (opções de transporte, embarque, desembarque)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-aeroporto-londrina → transacional ("quero contratar táxi")
 *   ✅ /taxi-aeroporto-governador-jose-richa → transacional (nome oficial)
 *   ✅ Este artigo → informacional ("como sair", "onde fica o ponto", "opções")
 *   ✅ Intenção completamente diferente das páginas de serviço
 *
 * SCHEMAS: BlogPosting + BreadcrumbList + FAQPage
 * OG IMAGE: og-taxi-aeroporto-londrina.jpg
 */

import type { Metadata } from "next"
import Link from "next/link"
import { business, whatsappUrl } from "@/lib/business"
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  serializeSchema,
} from "@/lib/schemas"

const POST = {
  slug:        "como-sair-aeroporto-governador-jose-richa",
  title:       "Como sair do Aeroporto Governador José Richa?",
  description:
    "Táxi, transfer, aplicativo ou aluguel de carro: todas as opções para sair do " +
    "Aeroporto José Richa (LDB) em Londrina com tempos e destinos reais.",
  publishedAt: "2026-06-06",
  updatedAt:   "2026-06-06",
  author:      business.name,
}

const canonicalUrl = `${business.url}/blog/${POST.slug}`
const ogImage      = `${business.url}/og-taxi-aeroporto-londrina.jpg`

export const metadata: Metadata = {
  title:       `${POST.title} | Blog Táxi Londrina`,
  description: POST.description,
  alternates:  { canonical: canonicalUrl },
  openGraph: {
    title:       POST.title,
    description: POST.description,
    url:         canonicalUrl,
    siteName:    business.shortName,
    locale:      "pt_BR",
    type:        "article",
    publishedTime: POST.publishedAt,
    modifiedTime:  POST.updatedAt,
    images: [{ url: ogImage, width: 1200, height: 630, alt: POST.title }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       POST.title,
    description: POST.description,
    images:      [ogImage],
  },
}

const faqItems = [
  {
    question: "Tem táxi no Aeroporto Governador José Richa de Londrina?",
    answer:
      "Sim. O aeroporto tem ponto de táxi na saída do terminal de desembarque, " +
      "disponível para passageiros em chegada. Os táxis são regulamentados pela " +
      "Prefeitura de Londrina e operam com tabela de preços fixada por lei. " +
      "Para voos que chegam de madrugada, o serviço de táxi pré-agendado é mais confiável " +
      "pois garante veículo disponível independente do horário.",
  },
  {
    question: "Aplicativos como Uber funcionam no Aeroporto de Londrina?",
    answer:
      "Uber e 99 operam em Londrina, mas não têm acesso autorizado à área de embarque " +
      "e desembarque do Aeroporto José Richa. O passageiro precisa caminhar até a saída " +
      "do terminal e solicitar o aplicativo fora da área restrita, o que pode adicionar " +
      "10 a 15 minutos de espera dependendo da disponibilidade de motoristas no local.",
  },
  {
    question: "Onde fica o ponto de táxi no Aeroporto de Londrina?",
    answer:
      "O ponto de táxi fica na saída do terminal de chegadas, à direita de quem sai " +
      "pelo portão principal. Há sinalização indicando o corredor de táxis. " +
      "O serviço de transfer pré-agendado tem ponto de encontro no próprio hall de " +
      "desembarque, com o motorista identificado com plaquinha com o nome do passageiro.",
  },
  {
    question: "Qual o melhor transporte do aeroporto de Londrina para o centro?",
    answer:
      "Para destinos no centro de Londrina, as melhores opções são o táxi convencional " +
      "(disponível imediatamente no ponto) e o transfer pré-agendado (com motorista " +
      "aguardando no desembarque). A diferença principal é que o transfer garante " +
      "horário fixo, monitoramento do voo e motorista bilíngue.",
  },
  {
    question: "Como chegar do aeroporto de Londrina ao Hospital Evangélico?",
    answer:
      "O Hospital Evangélico de Londrina fica a aproximadamente 15 km do aeroporto, " +
      "com tempo médio de 20 a 28 minutos de carro. O trajeto vai pela Avenida dos Pioneiros " +
      "até a Avenida Robert Koch, onde fica o hospital. O transfer hospitalar pode ser " +
      "agendado com antecedência informando que o destino é o Hospital Evangélico.",
  },
]

const blogPostingSchema = buildBlogPostingSchema({
  title:         POST.title,
  description:   POST.description,
  url:           canonicalUrl,
  image:         ogImage,
  datePublished: POST.publishedAt,
  dateModified:  POST.updatedAt,
  authorName:    POST.author,
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: POST.title, url: `/blog/${POST.slug}` },
])

const waTransfer = whatsappUrl(
  "Olá! Vi o artigo sobre como sair do Aeroporto José Richa e gostaria de agendar um transfer."
)

const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)",
  fontWeight: 800, color: "#0A0A0A",
  marginBottom: "1rem", marginTop: "2.5rem",
  paddingLeft: "1rem", borderLeft: "4px solid #FFCC00",
}

const pStyle: React.CSSProperties = {
  fontSize: "1rem", lineHeight: 1.85,
  color: "#2A2A2A", marginBottom: "1.25rem",
}

export default function ArtigoComoSairAeroportoJoseRicha() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(blogPostingSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <Link href="/blog" style={{ color: "#6B6B6B", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Como sair do Aeroporto José Richa</span>
          </div>
        </nav>

        {/* Header */}
        <header style={{ background: "#0A0A0A", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
              borderRadius: "999px", padding: "4px 14px", marginBottom: "1.5rem",
            }}>
              <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                ✈️ Aeroporto Governador José Richa (LDB) · Guia 2026
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Como sair do Aeroporto Governador José Richa?
            </h1>
            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Táxi, transfer, aplicativo ou aluguel de carro: comparativo completo das opções
              de transporte disponíveis na saída do terminal, com tempos reais para os
              principais destinos em Londrina e na região.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt} style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/taxi-aeroporto-governador-jose-richa"
                style={{
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.3)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Ver táxi no José Richa →
              </Link>
            </div>
          </div>
        </header>

        {/* Corpo */}
        <article aria-label={POST.title} style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            {/* Índice */}
            <nav aria-label="Índice do artigo" style={{
              background: "#F9F9F9", border: "1px solid #E8E8E8",
              borderLeft: "4px solid #FFCC00", borderRadius: "8px",
              padding: "1.25rem 1.5rem", marginBottom: "2.5rem",
            }}>
              <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>📋 Neste guia</p>
              {[
                "Onde ficam os pontos de embarque no aeroporto",
                "Qual a melhor forma de sair do Aeroporto de Londrina",
                "Tabela comparativa das opções de transporte",
                "Tempos médios para os principais destinos",
                "Transporte para outras cidades da região",
                "Dicas para passageiros internacionais",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Seção 1 */}
            <h2 style={h2Style}>Onde ficam os pontos de embarque no Aeroporto José Richa?</h2>
            <p style={pStyle}>
              O terminal do Aeroporto Governador José Richa tem estrutura compacta e bem sinalizada.
              Ao sair pelo portão principal do desembarque — que fica no nível térreo do terminal —
              o passageiro encontra, à sua frente, a área de retirada de bagagem e, logo depois,
              a saída para o saguão de chegadas.
            </p>
            <p style={pStyle}>
              <strong>Ponto de táxi convencional:</strong> à direita de quem sai pelo portão
              principal, com fila organizada e taxistas credenciados pela Infraero. Disponível
              todos os dias, em qualquer horário de operação do aeroporto.
            </p>
            <p style={pStyle}>
              <strong>Transfer pré-agendado (meet & greet):</strong> o motorista aguarda dentro
              do próprio saguão de chegadas, com plaquinha com o nome do passageiro. Não há
              fila nem espera na calçada. O encontro acontece antes mesmo de sair do terminal.
            </p>
            <p style={pStyle}>
              <strong>Aluguel de carro:</strong> as principais locadoras — Localiza, Movida e
              Unidas — têm balcões dentro do terminal de chegadas, ao lado da esteira de bagagens.
              O processo de retirada do veículo leva em média 15 a 25 minutos para quem já tem
              reserva confirmada.
            </p>
            <p style={pStyle}>
              <strong>Aplicativos (Uber/99):</strong> não têm acesso autorizado ao terminal.
              O passageiro precisa solicitar o carro pela área externa, na saída do estacionamento
              do aeroporto. Em horários de baixo movimento, a espera pode variar de 8 a 20 minutos.
            </p>

            {/* Seção 2 */}
            <h2 style={h2Style}>Qual a melhor forma de sair do Aeroporto de Londrina?</h2>
            <p style={pStyle}>
              A resposta depende do seu destino, horário e nível de pressa. A tabela abaixo
              compara as quatro principais opções disponíveis na saída do Aeroporto José Richa:
            </p>

            {/* Tabela comparativa */}
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Opção", "Espera na saída", "Chega ao destino", "Vantagem principal", "Limitação"].map((h) => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Táxi convencional",       "Imediato",    "Qualquer local",    "Sem agendamento",          "Preço negociado na hora"],
                    ["Transfer pré-agendado",   "Zero",        "Qualquer local",    "Motorista espera no hall", "Requer agendamento prévio"],
                    ["Aplicativo (Uber/99)",    "8–20 min",    "Qualquer local",    "Preço fixo pelo app",      "Não entra no terminal"],
                    ["Aluguel de carro",        "15–25 min",   "Autonomia total",   "Liberdade de movimento",   "Custo fixo diário + seguro"],
                  ].map(([opcao, espera, chega, vant, limit]) => (
                    <tr key={opcao} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 12px", fontWeight: 600, color: "#0A0A0A" }}>{opcao}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{espera}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{chega}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A", fontSize: "0.825rem" }}>{vant}</td>
                      <td style={{ padding: "9px 12px", color: "#6B6B6B", fontSize: "0.825rem" }}>{limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={pStyle}>
              Para passageiros que chegam com bagagem volumosa, famílias com crianças ou
              executivos com compromissos em horário fixo, o <strong>transfer pré-agendado</strong>
              é a opção mais eficiente: o motorista está no terminal antes do avião pousar,
              monitorando o voo em tempo real. Se houver atraso, ele já sabe — sem telefonemas,
              sem espera desnecessária.
            </p>

            {/* CTA inline 1 */}
            <div style={{
              background: "linear-gradient(135deg,#0A0A0A,#1a1a1a)", borderRadius: "12px",
              padding: "1.75rem 2rem", border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                ✈️ Transfer receptivo · Aeroporto José Richa
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Motorista aguarda você no desembarque com plaquinha
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Monitoramento de voo em tempo real. Sem espera. Atendimento em português e inglês.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar transfer
                </a>
                <Link href="/transfer-aeroporto-londrina"
                  style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  Ver serviço →
                </Link>
              </div>
            </div>

            {/* Seção 3 — Tempos por destino */}
            <h2 style={h2Style}>Tempos médios para os principais destinos em Londrina</h2>
            <p style={pStyle}>
              A partir do terminal do Aeroporto José Richa, os tempos abaixo foram medidos em
              condições normais de tráfego, partindo pela Avenida dos Pioneiros:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Destino", "Distância", "Tempo médio", "Rota principal"].map((h) => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Centro de Londrina",         "14 km", "18–25 min", "Av. dos Pioneiros → Av. Higienópolis"],
                    ["Gleba Palhano",              "12 km", "15–20 min", "Rod. Mábio Gonçalves Palhano"],
                    ["Hospital Evangélico",        "15 km", "20–28 min", "Av. dos Pioneiros → Av. Robert Koch"],
                    ["Hospital do Coração (HCor)", "13 km", "18–24 min", "Av. dos Pioneiros → centro"],
                    ["UEL — Campus Universitário", "16 km", "22–30 min", "Av. dos Pioneiros → Av. Leste-Oeste"],
                    ["Rodoviária de Londrina",     "15 km", "20–28 min", "Via centro, Av. São Paulo"],
                    ["Shopping Catuaí",            "8 km",  "12–16 min", "Via Av. dos Pioneiros norte"],
                    ["Higienópolis",               "10 km", "14–20 min", "Rod. Mábio G. Palhano"],
                  ].map(([dest, dist, tempo, rota]) => (
                    <tr key={dest} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 12px", fontWeight: 600, color: "#0A0A0A" }}>{dest}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{dist}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{tempo}</td>
                      <td style={{ padding: "9px 12px", color: "#6B6B6B", fontSize: "0.8rem" }}>{rota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Seção 4 */}
            <h2 style={h2Style}>Transporte para outras cidades da região</h2>
            <p style={pStyle}>
              O Aeroporto José Richa serve toda a região norte do Paraná. Passageiros que
              desembarcam em Londrina com destino a outras cidades têm as seguintes
              opções de transporte:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { cidade: "Maringá", info: "118 km pela PR-317 · ~1h20 de transfer direto · sem paradas intermediárias", link: "/taxi-londrina-maringa" },
                { cidade: "Curitiba", info: "398 km pela BR-376 · ~4h30 de transfer direto · ideal para conexões de voo", link: "/taxi-londrina-curitiba" },
                { cidade: "Arapongas", info: "45 km pela PR-317 · ~40 min · polo moveleiro do norte do Paraná", link: null },
                { cidade: "Apucarana", info: "70 km pela PR-317 · ~55 min · centro de boné do Brasil", link: null },
                { cidade: "Rolândia", info: "30 km pela PR-317 · ~30 min · município industrial da região", link: null },
              ].map((item) => (
                <div key={item.cidade} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "#F9F9F9", borderRadius: "8px", padding: "1rem 1.25rem",
                  border: "1px solid #E8E8E8", flexWrap: "wrap", gap: "0.5rem",
                }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", margin: "0 0 0.2rem" }}>{item.cidade}</p>
                    <p style={{ fontSize: "0.825rem", color: "#6B6B6B", margin: 0 }}>{item.info}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link}
                      style={{ fontSize: "0.8rem", color: "#1a0dab", textDecoration: "underline", whiteSpace: "nowrap" }}>
                      Ver transfer →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA inline 2 */}
            <div style={{
              background: "#F9F9F9", borderRadius: "12px", padding: "1.5rem 1.75rem",
              border: "1px solid #E8E8E8", borderLeft: "4px solid #FFCC00", marginBottom: "2.5rem",
            }}>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>
                🚗 Precisa de táxi no Aeroporto José Richa?
              </p>
              <p style={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.65, marginBottom: "1rem" }}>
                Confira o serviço completo de táxi e transfer para embarque e desembarque
                no Aeroporto Governador José Richa.
              </p>
              <Link href="/taxi-aeroporto-londrina"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "7px", textDecoration: "none" }}>
                Ver táxi aeroporto Londrina →
              </Link>
            </div>

            {/* Seção 5 */}
            <h2 style={h2Style}>Dicas para passageiros internacionais</h2>
            <p style={pStyle}>
              O Aeroporto de Londrina recebe voos domésticos de GOL, LATAM e Azul,
              com conexões em São Paulo (Congonhas e Guarulhos), Brasília e Curitiba.
              Passageiros internacionais chegam a Londrina sempre via conexão — geralmente
              por Guarulhos ou Galeão.
            </p>
            <p style={pStyle}>
              Para viajantes estrangeiros que chegam pela primeira vez em Londrina:
              o terminal é compacto e de fácil navegação. A sinalização é em português,
              mas o ponto de transfer pré-agendado oferece motorista bilíngue
              (português e inglês), o que facilita para executivos e turistas internacionais.
            </p>
            <p style={pStyle}>
              O câmbio mais próximo ao aeroporto fica nos bancos do centro de Londrina,
              a cerca de 14 km do terminal. No próprio aeroporto não há casa de câmbio.
              Recomenda-se já chegar com reais disponíveis ou cartão com cobertura internacional
              para cobrir os custos imediatos de transporte.
            </p>
            <p style={pStyle}>
              Para comunicação: o sinal de dados móveis das principais operadoras brasileiras —
              Claro, Vivo e TIM — funciona normalmente na área do aeroporto. Há Wi-Fi gratuito
              disponível no terminal para passageiros aguardando embarque ou desembarque.
            </p>

            {/* FAQ */}
            <h2 style={h2Style}>Perguntas frequentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#FFFFFF", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.1rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.25rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Leia também */}
            <div style={{ background: "#F5F5F5", borderRadius: "10px", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
              <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>Leia também</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer receptivo no Aeroporto de Londrina
                </Link>
                <Link href="/taxi-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi Aeroporto Londrina — transfer e embarque
                </Link>
                <Link href="/motorista-particular-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Motorista particular executivo no aeroporto
                </Link>
                <Link href="/taxi-aeroporto-governador-jose-richa" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi Aeroporto Governador José Richa
                </Link>
                <Link href="/contato" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Solicitar orçamento de transfer
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer aeroporto" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer receptivo · Aeroporto Governador José Richa · LDB
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Saia do aeroporto sem esperar na fila
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Motorista aguarda no desembarque com plaquinha. Monitoramento de voo.
              Atendimento em português e inglês.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link href="/transfer-aeroporto-londrina"
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                Ver transfer receptivo →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer aria-label="Rodapé" style={{ background: "#F5F5F5", padding: "2rem 1.5rem", borderTop: "1px solid #E8E8E8" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
              <Link href="/blog" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Blog</Link>
              <Link href="/taxi-aeroporto-londrina" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Táxi Aeroporto</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Contato →</Link>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>
              {business.shortName} · {business.address.city}, {business.address.stateCode}
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
      width={20} height={20} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
