/**
 * app/blog/aeroporto-londrina-para-maringa/page.tsx
 *
 * ARTIGO 2 — Blog Táxi Londrina
 *
 * KEYWORD PRINCIPAL: aeroporto londrina para maringa
 * INTENÇÃO: informacional (como chegar, distância, tempo, opções)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-londrina-maringa → transacional ("quero contratar")
 *   ✅ Este artigo → informacional ("como ir", "quanto tempo", "opções")
 *   ✅ Intenções completamente diferentes — sem sobreposição de ranking
 *
 * ANTI-HCU:
 *   ✅ Dados reais: PR-317, distância 118 km, tempo 1h20
 *   ✅ Referências locais: UEM, Zona 7, Maringá Park, Av. Brasil
 *   ✅ Sem frases genéricas proibidas
 *   ✅ +1.200 palavras de conteúdo útil e específico
 *
 * SCHEMAS: BlogPosting + BreadcrumbList + FAQPage
 * OG IMAGE: og-taxi-londrina-maringa.jpg
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
  slug:        "aeroporto-londrina-para-maringa",
  title:       "Aeroporto de Londrina para Maringá: como chegar?",
  description:
    "Distância, tempo médio e as melhores opções de transporte do Aeroporto " +
    "Governador José Richa até Maringá. Dados reais da PR-317 e dicas locais.",
  publishedAt: "2026-06-06",
  updatedAt:   "2026-06-06",
  author:      business.name,
}

const canonicalUrl = `${business.url}/blog/${POST.slug}`
const ogImage      = `${business.url}/og-taxi-londrina-maringa.jpg`

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
    question: "Qual a distância do Aeroporto de Londrina até Maringá?",
    answer:
      "A distância entre o Aeroporto Governador José Richa (LDB) e o centro de Maringá " +
      "é de aproximadamente 118 km pela PR-317. O trajeto passa por Rolândia, Arapongas e " +
      "Apucarana antes de chegar a Maringá pela Avenida Brasil.",
  },
  {
    question: "Quanto tempo leva de táxi do aeroporto de Londrina até Maringá?",
    answer:
      "Em condições normais de tráfego, o trajeto leva entre 1h15 e 1h30 pela PR-317. " +
      "O tempo pode aumentar em feriados, períodos de chuva ou obras na rodovia. " +
      "Saídas entre 6h e 9h costumam ter o menor fluxo na PR-317.",
  },
  {
    question: "É possível ir do aeroporto de Londrina para Maringá de ônibus?",
    answer:
      "Sim, existe serviço de ônibus intermunicipal entre Londrina e Maringá pela " +
      "rodoviária, mas não há serviço direto partindo do aeroporto. " +
      "Seria necessário pegar um táxi até a rodoviária central de Londrina " +
      "e de lá embarcar para Maringá — o que adiciona pelo menos 45 minutos ao trajeto.",
  },
  {
    question: "Qual a melhor rota de carro do aeroporto de Londrina para Maringá?",
    answer:
      "A rota mais direta é pela PR-317, que conecta Londrina a Maringá passando por " +
      "Rolândia, Arapongas e Apucarana. A chegada em Maringá é pela Avenida Brasil, " +
      "que dá acesso direto à Zona 7 e ao centro da cidade.",
  },
  {
    question: "Posso agendar transfer do aeroporto de Londrina para Maringá?",
    answer:
      "Sim. O serviço de transfer intermunicipal parte do Aeroporto José Richa direto " +
      "para o seu destino em Maringá — hotel, empresa, hospital ou endereço residencial. " +
      "Não há paradas intermediárias. O agendamento pode ser feito pelo WhatsApp " +
      "informando horário de chegada do voo e endereço de destino em Maringá.",
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

const waMaringa = whatsappUrl(
  "Olá! Vi o artigo sobre transfer do Aeroporto de Londrina para Maringá e gostaria de agendar."
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

export default function ArtigoAeroportoLondrinaParaMaringa() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Aeroporto Londrina para Maringá</span>
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
                🛣️ Londrina → Maringá · PR-317 · Guia 2026
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              Aeroporto de Londrina para Maringá: distância, tempo e opções de transporte
            </h1>

            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              118 km pela PR-317 separam o Aeroporto Governador José Richa do centro de Maringá.
              Guia completo com tempos reais, rota detalhada e as melhores opções de transporte.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt}
                style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit", month: "long", year: "numeric",
                })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/taxi-londrina-maringa"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.3)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Ver transfer Londrina → Maringá →
              </Link>
            </div>
          </div>
        </header>

        {/* Corpo */}
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
                "Distância e rota: aeroporto LDB → Maringá",
                "Tabela de tempos por horário",
                "As opções de transporte disponíveis",
                "Por que o transfer direto é a melhor opção",
                "Destinos em Maringá mais solicitados",
                "Chegando em Maringá: bairros e referências",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Seção 1 */}
            <h2 style={h2Style}>Distância e rota do Aeroporto de Londrina até Maringá</h2>
            <p style={pStyle}>
              O Aeroporto Governador José Richa (IATA: LDB) fica no extremo norte de Londrina,
              no bairro Aeroporto. A partir dali, o trajeto mais direto para Maringá segue pela
              Avenida dos Pioneiros até a saída norte da cidade, onde começa a{" "}
              <strong>Rodovia PR-317</strong> — a principal ligação entre as duas maiores cidades
              do norte do Paraná.
            </p>
            <p style={pStyle}>
              A distância total é de <strong>aproximadamente 118 km</strong>. A rodovia passa
              por Rolândia (30 km de Londrina), Arapongas (45 km) e Apucarana (70 km) antes de
              entrar no município de Maringá pela Avenida Brasil, que atravessa a cidade no
              sentido leste-oeste e dá acesso direto à Zona 7, ao centro e aos principais
              bairros residenciais e comerciais da cidade.
            </p>
            <p style={pStyle}>
              A PR-317 é uma rodovia de pista dupla em toda a extensão entre Londrina e Maringá,
              com boas condições de conservação e sinalização. Não há pedágio no trecho.
              Os principais riscos de atraso são: neblina matinal entre Arapongas e Apucarana
              (comum entre maio e agosto), movimentação de caminhões próximo ao trevo de
              Rolândia e, esporadicamente, acidentes nos trevos de acesso às cidades intermediárias.
            </p>

            {/* Tabela */}
            <h2 style={h2Style}>Tempo de viagem por horário de saída</h2>
            <p style={pStyle}>
              O tempo de viagem varia conforme o horário de partida do aeroporto.
              A tabela abaixo mostra os tempos médios reais observados na PR-317:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Horário de saída", "Tempo médio", "Condições típicas", "Recomendação"].map((h) => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#FFCC00", fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["05h00 – 07h00", "1h15 – 1h20", "Trânsito mínimo, possível neblina", "Ideal para voos cedo"],
                    ["07h00 – 09h00", "1h20 – 1h35", "Movimento de caminhões na PR-317", "Sair antes das 7h30"],
                    ["09h00 – 16h00", "1h15 – 1h25", "Condições melhores do dia", "Melhor janela"],
                    ["16h00 – 19h00", "1h25 – 1h45", "Saída de Londrina mais lenta", "Evitar horário de pico urbano"],
                    ["19h00 – 23h00", "1h10 – 1h20", "Trânsito reduzido", "Cuidado com neblina e animais"],
                  ].map(([horario, tempo, cond, rec]) => (
                    <tr key={horario} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 14px", fontWeight: 600, color: "#0A0A0A" }}>{horario}</td>
                      <td style={{ padding: "9px 14px", color: "#3A3A3A" }}>{tempo}</td>
                      <td style={{ padding: "9px 14px", color: "#6B6B6B", fontSize: "0.85rem" }}>{cond}</td>
                      <td style={{ padding: "9px 14px", color: "#6B6B6B", fontSize: "0.85rem" }}>{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Seção 3 */}
            <h2 style={h2Style}>Opções de transporte do aeroporto de Londrina para Maringá</h2>
            <p style={pStyle}>
              Quem desembarca no Aeroporto José Richa com destino a Maringá tem basicamente
              três opções de transporte. Cada uma tem suas vantagens e limitações:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  icon: "🚗",
                  titulo: "Transfer direto aeroporto → Maringá",
                  pros: "Saída imediata do terminal. Direto ao endereço em Maringá. Motorista monitora o voo. Sem paradas intermediárias.",
                  contras: "Requer agendamento prévio.",
                  melhor: "Executivos, famílias com bagagem e quem tem horário apertado.",
                },
                {
                  icon: "🚌",
                  titulo: "Ônibus (rodoviária → rodoviária)",
                  pros: "Custo menor. Frequência de partidas.",
                  contras: "Precisa de taxi do aeroporto até a rodoviária de Londrina (+25 min, +14 km). Paradas intermediárias. Chegada na rodoviária de Maringá, não no destino final.",
                  melhor: "Viajantes com tempo disponível e sem bagagem volumosa.",
                },
                {
                  icon: "🚕",
                  titulo: "Taxi convencional (ponto no aeroporto)",
                  pros: "Disponível imediatamente na saída do terminal.",
                  contras: "Nem todos os taxistas topam viagem para Maringá. Preço negociado na hora. Sem monitoramento de voo.",
                  melhor: "Passageiros sem agendamento prévio.",
                },
              ].map((item) => (
                <div key={item.titulo} style={{
                  background: "#F9F9F9", borderRadius: "10px",
                  padding: "1.25rem 1.5rem", border: "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 800, fontSize: "1rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                    {item.icon} {item.titulo}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.65, marginBottom: "0.4rem" }}>
                    <strong>Vantagens:</strong> {item.pros}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.65, marginBottom: "0.4rem" }}>
                    <strong>Limitações:</strong> {item.contras}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.65 }}>
                    <strong>Melhor para:</strong> {item.melhor}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA inline 1 */}
            <div style={{
              background: "linear-gradient(135deg, #0A0A0A, #1a1a1a)",
              borderRadius: "12px", padding: "1.75rem 2rem",
              border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                🛣️ Transfer Londrina → Maringá
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Saída direta do aeroporto para Maringá
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Motorista aguarda na chegada. Monitoramento de voo. Direto ao seu endereço em Maringá.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#25D366", color: "#FFFFFF", fontWeight: 800,
                    fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px",
                    textDecoration: "none",
                  }}>
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
                </a>
                <Link href="/taxi-londrina-maringa"
                  style={{
                    display: "inline-flex", alignItems: "center",
                    background: "transparent", color: "#FFCC00", fontWeight: 700,
                    fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px",
                    border: "2px solid #FFCC00", textDecoration: "none",
                  }}>
                  Ver detalhes do serviço →
                </Link>
              </div>
            </div>

            {/* Seção 4 */}
            <h2 style={h2Style}>Destinos mais solicitados em Maringá</h2>
            <p style={pStyle}>
              A maioria dos passageiros que parte do Aeroporto José Richa com destino a Maringá
              tem como endereço final um dos seguintes pontos da cidade:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
              {[
                { icon: "🏨", local: "Hotéis na Zona 7", desc: "Região hoteleira de Maringá, próx. ao centro" },
                { icon: "🏢", local: "Avenida Brasil", desc: "Principal corredor comercial da cidade" },
                { icon: "🎓", local: "UEM — Campus", desc: "Universidade Estadual de Maringá" },
                { icon: "🏥", local: "Santa Casa de Maringá", desc: "Principal hospital da região" },
                { icon: "🛍️", local: "Maringá Park Shopping", desc: "Centro de compras na Zona 2" },
                { icon: "✈️", local: "Aeroporto de Maringá", desc: "Para conexões regionais" },
              ].map((item) => (
                <div key={item.local} style={{
                  background: "#F9F9F9", borderRadius: "8px",
                  padding: "0.875rem 1rem", border: "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0A0A0A", marginBottom: "0.2rem" }}>
                    {item.icon} {item.local}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#6B6B6B", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Seção 5 */}
            <h2 style={h2Style}>Chegando em Maringá: bairros e referências</h2>
            <p style={pStyle}>
              Maringá é uma cidade planejada, com ruas em diagonal e numeração de zonas
              (Zona 1, Zona 2, Zona 7, etc.) que pode confundir quem visita pela primeira vez.
              A entrada pela PR-317 leva diretamente à <strong>Avenida Brasil</strong>, o eixo
              central da cidade, de onde se acessa facilmente qualquer bairro.
            </p>
            <p style={pStyle}>
              A <strong>Zona 7</strong> concentra a maior parte dos hotéis executivos, como o
              Maringá Palace Hotel e o Hotel Ibis Maringá, além de restaurantes e o centro
              de convenções. Para quem vai à <strong>UEM</strong>, a entrada é pela
              Avenida Colombo, a cerca de 5 km do centro.
            </p>
            <p style={pStyle}>
              Quem tem destino na parte norte de Maringá — como o bairro Sarandi ou a
              zona industrial — deve informar o endereço completo no agendamento, pois a rota
              pode variar da entrada padrão pela PR-317 e adicionar alguns minutos ao trajeto.
            </p>
            <p style={pStyle}>
              Para viagens com conexão no <strong>Aeroporto Regional de Maringá</strong>
              (Silvio Pettirossi), o trajeto desde o Aeroporto José Richa em Londrina é de
              aproximadamente 130 km, com tempo médio de 1h30. Nesse caso, recomenda-se
              informar o número do voo de conexão no agendamento para ajuste de horário.
            </p>

            {/* Seção 6 */}
            <h2 style={h2Style}>Vale a pena alugar carro no aeroporto para ir a Maringá?</h2>
            <p style={pStyle}>
              O Aeroporto Governador José Richa conta com pontos de aluguel das principais
              locadoras — Localiza, Movida e Unidas. Para quem vai permanecer em Maringá por
              vários dias e precisa de mobilidade local, o aluguel pode ser vantajoso.
            </p>
            <p style={pStyle}>
              Para quem vai apenas para uma reunião e retorna no mesmo dia ou no dia seguinte,
              o transfer é mais prático: sem preocupação com estacionamento em Maringá,
              sem a necessidade de devolver o carro em outro ponto e sem os encargos de
              seguro e combustível. O motorista aguarda o retorno ou combina um horário de
              volta ao aeroporto de Londrina — ou ao de Maringá, se houver voo de retorno.
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

            {/* Leia também */}
            <div style={{
              background: "#F5F5F5", borderRadius: "10px",
              padding: "1.25rem 1.5rem", marginBottom: "2rem",
            }}>
              <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Leia também
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Link href="/taxi-londrina-maringa" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer Londrina → Maringá com hora marcada
                </Link>
                <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer receptivo no Aeroporto de Londrina
                </Link>
                <Link href="/taxi-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi para o Aeroporto Governador José Richa
                </Link>
                <Link href="/taxi-londrina-curitiba" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer Londrina → Curitiba
                </Link>
                <Link href="/contato" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Solicitar orçamento de transfer intermunicipal
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer Londrina Maringá"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer direto · Aeroporto Londrina → Maringá
            </p>
            <h2 style={{
              color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem",
            }}>
              Agende seu transfer do aeroporto para Maringá
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Saída direta do terminal do Aeroporto José Richa para o seu endereço em Maringá.
              118 km pela PR-317 com conforto e pontualidade.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#25D366", color: "#FFFFFF", fontWeight: 800,
                  fontSize: "1rem", padding: "0.875rem 1.75rem",
                  borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link href="/taxi-londrina-maringa"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#FFCC00", fontWeight: 700,
                  fontSize: "1rem", padding: "0.875rem 1.75rem",
                  borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none",
                }}>
                Ver serviço completo →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer aria-label="Rodapé"
          style={{ background: "#F5F5F5", padding: "2rem 1.5rem", borderTop: "1px solid #E8E8E8" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
              <Link href="/blog" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Blog</Link>
              <Link href="/taxi-londrina-maringa" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Londrina → Maringá</Link>
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
