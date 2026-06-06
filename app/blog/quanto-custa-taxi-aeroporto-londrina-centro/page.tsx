/**
 * app/blog/quanto-custa-taxi-aeroporto-londrina-centro/page.tsx
 *
 * ARTIGO 1 — Blog Táxi Londrina
 *
 * KEYWORD PRINCIPAL: quanto custa taxi aeroporto londrina centro
 * INTENÇÃO: informacional (preço, distância, tempo)
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ Nenhuma página de serviço tem "quanto custa" como keyword
 *   ✅ Intenção informacional vs transacional das páginas de serviço
 *   ✅ CTA aponta para /transfer-aeroporto-londrina (conversão)
 *
 * ANTI-HCU:
 *   ✅ Dados reais e locais (distâncias reais de Londrina)
 *   ✅ Referências locais: Av. dos Pioneiros, PR-445, bairros reais
 *   ✅ Sem frases genéricas proibidas
 *   ✅ Mínimo 1.000 palavras de conteúdo útil
 *
 * SCHEMAS: BlogPosting + BreadcrumbList + FAQPage
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
  slug:        "quanto-custa-taxi-aeroporto-londrina-centro",
  title:       "Quanto custa um táxi do Aeroporto de Londrina ao Centro?",
  description:
    "Distância real, tempo médio e o que afeta o preço do táxi entre o Aeroporto " +
    "Governador José Richa (LDB) e o Centro de Londrina. Dados locais e como agendar.",
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
    question: "Quanto custa o táxi do Aeroporto de Londrina ao Centro?",
    answer:
      "O valor varia conforme horário, número de passageiros e bagagem. " +
      "Para ter o valor exato da sua corrida, solicite orçamento pelo WhatsApp " +
      "informando origem, destino e horário previsto de chegada.",
  },
  {
    question: "Qual a distância do Aeroporto Governador José Richa ao Centro de Londrina?",
    answer:
      "A distância é de aproximadamente 14 km pela Avenida dos Pioneiros e PR-445. " +
      "O trajeto leva entre 18 e 25 minutos em condições normais de tráfego.",
  },
  {
    question: "O táxi do aeroporto cobra mais caro à noite?",
    answer:
      "Sim. Corridas entre 22h e 6h têm acréscimo noturno, conforme regulamentação " +
      "da prefeitura de Londrina para táxis licenciados.",
  },
  {
    question: "Posso agendar o táxi antes de embarcar em outro estado?",
    answer:
      "Sim e é a opção mais recomendada. Basta informar o número do voo e " +
      "o horário previsto de chegada. Monitoramos o voo em tempo real — " +
      "se houver atraso, o motorista ajusta a chegada automaticamente.",
  },
  {
    question: "Tem custo adicional por bagagem extra no táxi do aeroporto?",
    answer:
      "Malas convencionais não têm custo extra. Passageiros com muita bagagem " +
      "ou equipamentos grandes devem informar no momento do agendamento " +
      "para verificar a disponibilidade de veículo adequado.",
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
  { name: "Home",  url: "/" },
  { name: "Blog",  url: "/blog" },
  { name: POST.title, url: `/blog/${POST.slug}` },
])

const waTransfer = whatsappUrl(
  "Olá! Vi o artigo sobre custo de táxi do aeroporto e gostaria de agendar um transfer."
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

export default function ArtigoQuantoCustaTaxiAeroporto() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Quanto custa táxi aeroporto Londrina</span>
          </div>
        </nav>

        {/* Header do artigo */}
        <header style={{ background: "#0A0A0A", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
              borderRadius: "999px", padding: "4px 14px", marginBottom: "1.5rem",
            }}>
              <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                ✈️ Aeroporto Londrina · Guia de Preços 2026
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Quanto custa um táxi do Aeroporto de Londrina ao Centro?
            </h1>

            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Distância real, tempo de trajeto, fatores que afetam o preço e como agendar
              com hora marcada no Aeroporto Governador José Richa (LDB).
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt}
                style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit", month: "long", year: "numeric",
                })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/transfer-aeroporto-londrina"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.3)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Ver serviço de transfer →
              </Link>
            </div>
          </div>
        </header>

        {/* Corpo do artigo */}
        <article aria-label={POST.title}
          style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            {/* Índice */}
            <nav aria-label="Índice do artigo" style={{
              background: "#F9F9F9", border: "1px solid #E8E8E8",
              borderLeft: "4px solid #FFCC00", borderRadius: "8px",
              padding: "1.25rem 1.5rem", marginBottom: "2.5rem",
            }}>
              <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                📋 Neste guia
              </p>
              {[
                "Distância e tempo real: aeroporto → centro",
                "Tabela de destinos mais solicitados",
                "O que afeta o preço do táxi",
                "Horários de pico em Londrina",
                "Bagagem — tem custo extra?",
                "Transfer com hora marcada: como funciona",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Seção 1 */}
            <h2 style={h2Style}>Distância e tempo real do aeroporto ao Centro de Londrina</h2>
            <p style={pStyle}>
              O Aeroporto Governador José Richa (IATA: LDB) fica no bairro Aeroporto, no
              extremo norte de Londrina. A distância até o Marco Zero da cidade — a Praça Marechal
              Floriano Peixoto, no Centro — é de <strong>aproximadamente 14 km</strong> pelo
              trajeto mais direto, que usa a Avenida dos Pioneiros até a Rodovia PR-445.
            </p>
            <p style={pStyle}>
              Em condições normais de tráfego, o tempo de deslocamento fica entre{" "}
              <strong>18 e 25 minutos</strong>. Nos horários de pico — especialmente entre
              17h e 19h nas saídas da tarde — o trajeto pode chegar a 35 minutos pela
              Avenida dos Pioneiros, que concentra boa parte do tráfego de saída da cidade.
            </p>
            <p style={pStyle}>
              A rota alternativa pela Rodovia Mábio Gonçalves Palhano (que passa pela Gleba Palhano)
              é mais eficiente para passageiros que se hospedam nos hotéis da região nordeste da cidade,
              como o Holiday Inn e o Inter Hotel, cortando até 5 minutos do trajeto.
            </p>

            {/* Tabela de destinos */}
            <h2 style={h2Style}>Destinos mais solicitados a partir do Aeroporto de Londrina</h2>
            <p style={pStyle}>
              A tabela abaixo mostra as distâncias e tempos médios para os destinos mais
              frequentes entre passageiros que desembarcam no LDB:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{
                width: "100%", borderCollapse: "collapse",
                fontSize: "0.9rem", borderRadius: "8px", overflow: "hidden",
              }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Destino", "Distância", "Tempo médio", "Observação"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#FFCC00", fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Centro (Marco Zero)", "14 km", "18–25 min", "Rota pela Av. dos Pioneiros"],
                    ["Gleba Palhano", "12 km", "15–20 min", "Hotéis e centros comerciais"],
                    ["Higienópolis", "10 km", "13–18 min", "Via Rod. Mábio G. Palhano"],
                    ["Hospital Evangélico", "15 km", "20–28 min", "Referência regional de saúde"],
                    ["HCor Londrina", "13 km", "18–24 min", "Via Av. Robert Koch"],
                    ["UEL — Campus Universitário", "16 km", "22–30 min", "Via Av. Leste-Oeste"],
                    ["Shopping Catuaí", "8 km", "12–16 min", "Zona norte de Londrina"],
                    ["Rodoviária de Londrina", "15 km", "20–28 min", "Centro, próx. Av. São Paulo"],
                  ].map(([dest, dist, tempo, obs]) => (
                    <tr key={dest} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 14px", fontWeight: 600, color: "#0A0A0A" }}>{dest}</td>
                      <td style={{ padding: "9px 14px", color: "#3A3A3A" }}>{dist}</td>
                      <td style={{ padding: "9px 14px", color: "#3A3A3A" }}>{tempo}</td>
                      <td style={{ padding: "9px 14px", color: "#6B6B6B", fontSize: "0.85rem" }}>{obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA inline 1 */}
            <div style={{
              background: "linear-gradient(135deg, #0A0A0A, #1a1a1a)",
              borderRadius: "12px", padding: "1.75rem 2rem",
              border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                ✈️ Transfer receptivo — Aeroporto Londrina
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Motorista aguarda com plaquinha no desembarque
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Monitoramos seu voo em tempo real. Se atrasar, ajustamos a chegada sem custo extra.
              </p>
              <Link href="/transfer-aeroporto-londrina"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#FFCC00", color: "#0A0A0A", fontWeight: 800,
                  fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px",
                  textDecoration: "none",
                }}>
                Ver transfer receptivo →
              </Link>
            </div>

            {/* Seção 3 */}
            <h2 style={h2Style}>O que afeta o preço do táxi do aeroporto de Londrina</h2>
            <p style={pStyle}>
              Diferente de aplicativos como Uber — que não operam no Aeroporto José Richa por
              restrição do regulamento aeroportuário da Infraero — o táxi licenciado em Londrina
              usa tabela de preços regulamentada pela Prefeitura Municipal, com acréscimos
              previstos por lei. Os principais fatores que influenciam o valor final são:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {[
                { icon: "🌙", titulo: "Horário noturno", desc: "Corridas entre 22h e 6h têm acréscimo previsto na tabela municipal de táxis de Londrina. O valor exato depende da distância percorrida." },
                { icon: "📅", titulo: "Feriados e fins de semana", desc: "Datas comemorativas e domingos podem ter tarifação diferenciada conforme regulamentação da prefeitura." },
                { icon: "🧳", titulo: "Volume de bagagem", desc: "Malas convencionais não geram custo adicional. Passageiros com equipamentos grandes (pranchas de surf, bicicletas, cadeiras de rodas) devem informar no agendamento." },
                { icon: "👥", titulo: "Número de passageiros", desc: "Até 4 passageiros no mesmo veículo sem acréscimo. Grupos maiores precisam de veículo maior — consulte disponibilidade." },
                { icon: "📍", titulo: "Destino final", desc: "O valor é calculado pela distância percorrida. Destinos fora do perímetro urbano de Londrina têm tarifação de viagem intermunicipal." },
              ].map((item) => (
                <div key={item.titulo} style={{
                  display: "flex", gap: "1rem", background: "#F9F9F9",
                  borderRadius: "8px", padding: "1rem 1.25rem",
                  border: "1px solid #E8E8E8",
                }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>{item.titulo}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Seção 4 */}
            <h2 style={h2Style}>Horários de pico no Aeroporto Governador José Richa</h2>
            <p style={pStyle}>
              O Aeroporto de Londrina opera com voos da GOL, LATAM e Azul para os principais
              hubs nacionais — São Paulo (Congonhas e Guarulhos), Brasília, Rio de Janeiro e Curitiba.
              Os horários com maior concentração de chegadas são:
            </p>
            <p style={pStyle}>
              <strong>Manhã:</strong> entre 7h e 9h — voos procedentes de São Paulo que partem cedo
              da capital chegam a Londrina nessa janela. O tráfego na Av. dos Pioneiros ainda está
              relativamente livre, então o transfer costuma durar os 18 a 20 minutos padrão.
            </p>
            <p style={pStyle}>
              <strong>Tarde:</strong> entre 13h e 16h — período com menor congestionamento nas
              saídas do aeroporto e no trajeto urbano. Ideal para quem tem flexibilidade no voo.
            </p>
            <p style={pStyle}>
              <strong>Noite:</strong> entre 18h e 21h — os voos vindos de São Paulo e Brasília
              chegam nesse horário. O tráfego na Av. dos Pioneiros aumenta entre 17h30 e 19h,
              mas o trajeto ainda é direto. A vantagem é que muitos hotéis da Gleba Palhano ficam
              a caminho do aeroporto, reduzindo 3 a 5 minutos no trajeto.
            </p>

            {/* Seção 5 */}
            <h2 style={h2Style}>Transfer com hora marcada: a diferença para quem viaja a trabalho</h2>
            <p style={pStyle}>
              Passageiros em viagem corporativa ou com horário apertado têm uma alternativa
              ao táxi convencional no ponto: o <strong>transfer com agendamento prévio</strong>.
              A diferença prática é significativa.
            </p>
            <p style={pStyle}>
              No táxi convencional, você desembarca, retira a bagagem e vai à fila de táxis
              na saída do terminal. Dependendo do horário, a fila pode ter 5 a 20 minutos
              de espera. No transfer agendado, o motorista já está no hall de desembarque
              antes de você sair do avião, com plaquinha com seu nome.
            </p>
            <p style={pStyle}>
              Além disso, o monitoramento do voo em tempo real garante que, se o voo atrasar
              uma hora — o que acontece com frequência nos voos de conexão por Guarulhos —
              o motorista não está esperando desde o horário original. Ele chega de acordo
              com a atualização do voo, sem custo extra para o passageiro.
            </p>
            <p style={pStyle}>
              Para executivos que chegam ao aeroporto direto para reuniões em Londrina ou
              que continuam viagem para Maringá ou Curitiba, o agendamento prévio garante
              saída imediata do terminal — sem espera, sem negociação de preço na hora,
              sem surpresas.
            </p>

            {/* FAQ */}
            <h2 style={h2Style}>Perguntas frequentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{
                  background: "#FFFFFF", borderRadius: "10px",
                  border: "1.5px solid #E8E8E8", overflow: "hidden",
                }}>
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

            {/* Links internos */}
            <div style={{
              background: "#F5F5F5", borderRadius: "10px",
              padding: "1.25rem 1.5rem", marginBottom: "2rem",
            }}>
              <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Leia também
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { href: "/transfer-aeroporto-londrina",           label: "Transfer receptivo no Aeroporto de Londrina" },
                  { href: "/taxi-aeroporto-londrina",               label: "Táxi Aeroporto Londrina — transfer e embarque" },
                  { href: "/motorista-particular-aeroporto-londrina", label: "Motorista particular executivo no aeroporto" },
                  { href: "/taxi-londrina-curitiba",                label: "Transfer Londrina → Curitiba" },
                  { href: "/taxi-londrina-maringa",                 label: "Transfer Londrina → Maringá" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline", lineHeight: 1.5 }}>
                    → {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer receptivo — Aeroporto Governador José Richa
            </p>
            <h2 style={{
              color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem",
            }}>
              Agende seu transfer do aeroporto agora
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Motorista com plaquinha no desembarque. Monitoramento de voo.
              Sem espera na fila. Atendimento em português e inglês.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#25D366", color: "#FFFFFF", fontWeight: 800,
                  fontSize: "1rem", padding: "0.875rem 1.75rem",
                  borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link href="/transfer-aeroporto-londrina"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#FFCC00", fontWeight: 700,
                  fontSize: "1rem", padding: "0.875rem 1.75rem",
                  borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none",
                }}>
                Ver serviço de transfer →
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
              <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Transfer Aeroporto</Link>
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
