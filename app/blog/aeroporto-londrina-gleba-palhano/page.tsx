/**
 * app/blog/aeroporto-londrina-gleba-palhano/page.tsx
 *
 * ARTIGO 6 — Blog Táxi Londrina (último do cluster aeroporto)
 *
 * KEYWORD PRINCIPAL: aeroporto londrina gleba palhano
 * INTENÇÃO: informacional (distância, tempo, hotéis, como chegar)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-aeroporto-londrina → transacional
 *   ✅ /motorista-particular-aeroporto-londrina → transacional executivo
 *   ✅ Este artigo → informacional (sobre a Gleba Palhano, hotéis, empresas)
 *   ✅ Nenhuma página de serviço tem "Gleba Palhano" como keyword principal
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
  slug:        "aeroporto-londrina-gleba-palhano",
  title:       "Aeroporto de Londrina para Gleba Palhano",
  description:
    "Distância, tempo médio e as melhores opções de transporte do Aeroporto " +
    "José Richa (LDB) até a Gleba Palhano. Hotéis, empresas e dicas locais.",
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
    question: "Qual a distância do Aeroporto de Londrina até a Gleba Palhano?",
    answer:
      "A distância entre o Aeroporto Governador José Richa (LDB) e a Gleba Palhano " +
      "é de aproximadamente 12 km pela Rodovia Mábio Gonçalves Palhano, " +
      "a via mais direta entre os dois pontos. " +
      "É o menor trajeto entre o aeroporto e qualquer polo hoteleiro ou comercial de Londrina, " +
      "o que torna a Gleba Palhano a região mais conveniente para quem desembarca no LDB.",
  },
  {
    question: "Quanto tempo leva do aeroporto de Londrina até a Gleba Palhano?",
    answer:
      "Em condições normais de tráfego, o deslocamento entre o Aeroporto José Richa " +
      "e a Gleba Palhano leva entre 15 e 20 minutos pela Rodovia Mábio Gonçalves Palhano. " +
      "Nos horários de pico — especialmente entre 17h30 e 19h — o tempo pode aumentar " +
      "para 25 a 30 minutos dependendo do trecho específico de destino na Gleba.",
  },
  {
    question: "Quais hotéis ficam na Gleba Palhano de Londrina?",
    answer:
      "A Gleba Palhano concentra os principais hotéis executivos de Londrina, incluindo " +
      "o Holiday Inn Londrina, o Inter Hotel e o Quality Inn, além de opções menores " +
      "e apart-hotéis na região. É o polo hoteleiro mais próximo ao aeroporto " +
      "e o preferido por executivos e viajantes corporativos.",
  },
  {
    question: "Tem motorista particular do aeroporto para a Gleba Palhano?",
    answer:
      "Sim. O serviço de motorista particular executivo faz o trajeto do Aeroporto " +
      "Governador José Richa direto para qualquer endereço na Gleba Palhano. " +
      "O motorista aguarda no desembarque com plaquinha, monitora o voo e " +
      "oferece atendimento em português e inglês. O agendamento é feito pelo WhatsApp " +
      "informando o número do voo e o endereço de destino na Gleba.",
  },
  {
    question: "A Gleba Palhano tem empresas e centros de negócios?",
    answer:
      "Sim. A Gleba Palhano concentra grande parte das empresas de médio e grande porte " +
      "de Londrina, especialmente nos setores de tecnologia, agronegócio e serviços. " +
      "O bairro tem torres comerciais modernas, escritórios corporativos e está próximo " +
      "ao Parque Tecnológico de Londrina (PaTLon), tornando-o o principal polo de negócios " +
      "da cidade fora do centro histórico.",
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

const waExecutivo = whatsappUrl(
  "Olá! Vi o artigo sobre transfer do Aeroporto de Londrina para a Gleba Palhano e gostaria de agendar."
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

export default function ArtigoAeroportoGlebaPalhano() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Aeroporto Londrina — Gleba Palhano</span>
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
                🏙️ Aeroporto LDB · Gleba Palhano · Guia 2026
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Aeroporto de Londrina para a Gleba Palhano: distância, tempo e transporte
            </h1>
            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              12 km pela Rodovia Mábio Gonçalves Palhano separam o Aeroporto José Richa da
              Gleba Palhano — o polo hoteleiro e empresarial mais próximo ao terminal de Londrina.
              Guia completo com hotéis, empresas e as melhores opções de transporte.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt} style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/motorista-particular-aeroporto-londrina"
                style={{
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Ver motorista particular →
              </Link>
            </div>
          </div>
        </header>

        {/* Corpo */}
        <article aria-label={POST.title} style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            {/* Índice */}
            <nav aria-label="Índice" style={{
              background: "#F9F9F9", border: "1px solid #E8E8E8",
              borderLeft: "4px solid #FFCC00", borderRadius: "8px",
              padding: "1.25rem 1.5rem", marginBottom: "2.5rem",
            }}>
              <p style={{ fontWeight: 800, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>📋 Neste guia</p>
              {[
                "Onde fica a Gleba Palhano?",
                "Distância entre o aeroporto e a Gleba Palhano",
                "Tempo médio de deslocamento",
                "Hotéis e hospedagens na Gleba Palhano",
                "Centros empresariais e empresas da região",
                "Restaurantes e gastronomia da Gleba Palhano",
                "Transporte executivo para a Gleba Palhano",
                "Vale a pena agendar o transfer antes?",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Intro */}
            <p style={pStyle}>
              A Gleba Palhano é o bairro mais valorizado de Londrina e um dos mais
              dinâmicos do norte do Paraná. Localizada na zona nordeste da cidade,
              reúne os principais hotéis executivos, torres corporativas, restaurantes
              sofisticados e o maior complexo de lazer e compras da região.
              Para quem desembarca no Aeroporto Governador José Richa (IATA: LDB),
              a Gleba Palhano é o destino mais próximo com oferta completa de serviços.
            </p>

            {/* Seção 1 */}
            <h2 style={h2Style}>Onde fica a Gleba Palhano?</h2>
            <p style={pStyle}>
              A Gleba Palhano ocupa a região nordeste de Londrina, entre a Rodovia Mábio
              Gonçalves Palhano (que dá nome ao bairro) e o Ribeirão Cambé. O bairro
              é delimitado ao norte pela PR-445 — que conecta Londrina a Ibiporã —
              e ao sul pela Avenida Leste-Oeste, uma das principais vias de acesso
              ao centro da cidade.
            </p>
            <p style={pStyle}>
              A Gleba Palhano surgiu como bairro planejado nos anos 1980 e se desenvolveu
              ao longo das décadas seguintes como alternativa residencial e comercial
              ao centro histórico saturado. Hoje concentra os maiores empreendimentos
              imobiliários de Londrina — torres residenciais de alto padrão,
              condomínios fechados e complexos mistos residencial-comercial.
            </p>
            <p style={pStyle}>
              O bairro tem acesso privilegiado ao aeroporto: a Rodovia Mábio Gonçalves Palhano
              conecta a Gleba diretamente ao terminal, sem precisar passar pelo trânsito
              do centro. Esse acesso direto é uma das razões pelas quais executivos
              e viajantes frequentes preferem se hospedar na região.
            </p>

            {/* Seção 2 */}
            <h2 style={h2Style}>Distância entre o Aeroporto de Londrina e a Gleba Palhano</h2>
            <p style={pStyle}>
              A distância entre o terminal do Aeroporto Governador José Richa e o
              centro da Gleba Palhano — referenciado pela região do Holiday Inn e
              do Shopping Boulevard Londrina — é de <strong>aproximadamente 12 km</strong>{" "}
              pela Rodovia Mábio Gonçalves Palhano.
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Ponto de destino na Gleba", "Distância do aeroporto", "Rota"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Holiday Inn / Inter Hotel",  "12 km", "Rod. Mábio Gonçalves Palhano"],
                    ["Shopping Boulevard Londrina", "13 km", "Rod. Mábio Gonçalves Palhano"],
                    ["Av. Leste-Oeste (sul da Gleba)", "14 km", "Via Av. dos Pioneiros → Leste-Oeste"],
                    ["PaTLon — Parque Tecnológico", "13 km", "Rod. Mábio Gonçalves Palhano"],
                    ["Região de restaurantes (norte)", "11 km", "Rod. Mábio — acesso norte"],
                  ].map(([dest, dist, rota]) => (
                    <tr key={dest} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 12px", fontWeight: 600, color: "#0A0A0A" }}>{dest}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{dist}</td>
                      <td style={{ padding: "9px 12px", color: "#6B6B6B", fontSize: "0.825rem" }}>{rota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Seção 3 */}
            <h2 style={h2Style}>Tempo médio de deslocamento</h2>
            <p style={pStyle}>
              O tempo de deslocamento entre o aeroporto e a Gleba Palhano varia conforme
              o horário. Em condições normais, pela Rodovia Mábio Gonçalves Palhano:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
              {[
                { horario: "06h00 – 07h30", tempo: "15 min", obs: "Trânsito mínimo — melhor janela para voos cedo" },
                { horario: "07h30 – 09h00", tempo: "18–22 min", obs: "Início de movimento na Rod. Mábio Gonçalves" },
                { horario: "09h00 – 16h30", tempo: "15–18 min", obs: "Condições normais — melhor período do dia" },
                { horario: "16h30 – 19h00", tempo: "22–30 min", obs: "Pico de tráfego na entrada da Gleba Palhano" },
                { horario: "19h00 – 23h00", tempo: "14–16 min", obs: "Tráfego reduzido, via livre" },
              ].map(item => (
                <div key={item.horario} style={{
                  display: "grid", gridTemplateColumns: "120px 90px 1fr",
                  alignItems: "center", gap: "1rem",
                  background: "#F9F9F9", borderRadius: "8px",
                  padding: "0.75rem 1rem", border: "1px solid #E8E8E8",
                }}>
                  <span style={{ fontWeight: 700, fontSize: "0.8rem", color: "#0A0A0A" }}>{item.horario}</span>
                  <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#FFCC00", background: "#0A0A0A", padding: "3px 8px", borderRadius: "4px", textAlign: "center" }}>{item.tempo}</span>
                  <span style={{ fontSize: "0.825rem", color: "#6B6B6B" }}>{item.obs}</span>
                </div>
              ))}
            </div>

            {/* Seção 4 */}
            <h2 style={h2Style}>Hotéis e hospedagens na Gleba Palhano</h2>
            <p style={pStyle}>
              A Gleba Palhano concentra a maior oferta de hospedagem executiva de Londrina.
              Os principais hotéis da região são referência para congressos, eventos
              corporativos e viajantes de negócios que chegam pelo Aeroporto José Richa:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  nome: "Holiday Inn Londrina",
                  estrelas: "★★★★",
                  distAero: "12 km · ~15 min do aeroporto",
                  desc: "Principal hotel de rede internacional de Londrina. " +
                    "Infraestrutura completa para eventos corporativos: auditórios, salas de reunião, " +
                    "restaurante, bar, academia e piscina. Localizado na Avenida Leste-Oeste, " +
                    "no coração da Gleba Palhano. Referência para delegações e eventos de grande porte.",
                },
                {
                  nome: "Inter Hotel Londrina",
                  estrelas: "★★★★",
                  distAero: "12 km · ~16 min do aeroporto",
                  desc: "Hotel executivo com serviço de concierge, salas de reunião e restaurante. " +
                    "Frequentado por executivos de empresas do agronegócio e tecnologia " +
                    "que chegam pelo LDB. O café da manhã é incluso nas principais tarifas " +
                    "e o check-in pode ser adiantado mediante solicitação.",
                },
                {
                  nome: "Quality Inn Londrina",
                  estrelas: "★★★",
                  distAero: "12 km · ~15 min do aeroporto",
                  desc: "Rede Choice Hotels com boa relação custo-benefício na Gleba Palhano. " +
                    "Indicado para viajantes corporativos que precisam de conforto e localização " +
                    "privilegiada sem o custo das redes quatro estrelas. " +
                    "Estacionamento gratuito incluso.",
                },
              ].map(hotel => (
                <div key={hotel.nome} style={{
                  background: "#FAFAFA", borderRadius: "10px",
                  padding: "1.25rem 1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #FFCC00",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <p style={{ fontWeight: 800, fontSize: "0.95rem", color: "#0A0A0A", margin: 0 }}>
                      {hotel.nome} <span style={{ color: "#FFCC00", fontWeight: 400, fontSize: "0.875rem" }}>{hotel.estrelas}</span>
                    </p>
                    <span style={{ fontSize: "0.75rem", color: "#9a9a9a", background: "#F0F0F0", padding: "2px 8px", borderRadius: "4px" }}>
                      📍 {hotel.distAero}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#3A3A3A", lineHeight: 1.7, margin: 0 }}>{hotel.desc}</p>
                </div>
              ))}
            </div>

            {/* Seção 5 */}
            <h2 style={h2Style}>Centros empresariais e empresas da Gleba Palhano</h2>
            <p style={pStyle}>
              Além dos hotéis, a Gleba Palhano concentra grande parte do ambiente
              corporativo moderno de Londrina. O bairro abriga torres comerciais,
              escritórios de empresas nacionais e multinacionais e está próximo
              ao <strong>Parque Tecnológico de Londrina (PaTLon)</strong> — polo de
              empresas de tecnologia e inovação instalado na região norte da cidade.
            </p>
            <p style={pStyle}>
              Setores com forte presença na Gleba Palhano: <strong>agronegócio</strong>
              (tradings, cooperativas e empresas de insumos), <strong>tecnologia</strong>
              (startups e empresas de software), <strong>serviços financeiros</strong>
              (seguradoras e assessorias de investimento) e <strong>saúde</strong>
              (clínicas especializadas e laboratórios de diagnóstico).
            </p>
            <p style={pStyle}>
              Para executivos que chegam ao LDB com destino a reuniões na Gleba Palhano,
              o transfer direto do aeroporto tem tempo médio de 15 minutos — suficiente
              para chegar descansado ao compromisso mesmo saindo diretamente da aeronave.
            </p>

            {/* CTA inline 1 */}
            <div style={{
              background: "linear-gradient(135deg,#0A0A0A,#1a1a1a)", borderRadius: "12px",
              padding: "1.75rem 2rem", border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                🚗 Motorista particular · Aeroporto → Gleba Palhano
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Transfer executivo com motorista aguardando no desembarque
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Monitoramento de voo. Atendimento em português e inglês.
                Todos os hotéis e empresas da Gleba Palhano.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={waExecutivo} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
                </a>
                <Link href="/motorista-particular-aeroporto-londrina"
                  style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  Ver motorista particular →
                </Link>
              </div>
            </div>

            {/* Seção 6 */}
            <h2 style={h2Style}>Restaurantes e gastronomia da Gleba Palhano</h2>
            <p style={pStyle}>
              A Gleba Palhano é o polo gastronômico de referência de Londrina,
              com uma concentração de restaurantes, bares e cafeterias que rivaliza
              com bairros equivalentes em Curitiba e São Paulo. Para executivos
              que chegam ao LDB e têm jantar de negócios ou confraternização programada,
              a região oferece opções para todos os perfis:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { categoria: "Churrascaria premium", exemplos: "Tradição gaúcha na região norte da Gleba, referência para executivos e grupos corporativos." },
                { categoria: "Culinária italiana", exemplos: "Restaurantes italianos com ambiente reservado, ideais para jantares de negócios." },
                { categoria: "Rodízio e buffet executivo", exemplos: "Almoços rápidos e completos para reuniões de meio-período na região." },
                { categoria: "Cafeterias e co-working", exemplos: "Pontos de trabalho informal com Wi-Fi, cafés especiais e ambiente tranquilo." },
                { categoria: "Bares e rooftops", exemplos: "Entretenimento pós-reunião com vista para o norte de Londrina." },
              ].map(item => (
                <div key={item.categoria} style={{
                  background: "#F9F9F9", borderRadius: "8px",
                  padding: "0.875rem 1rem", border: "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0A0A0A", marginBottom: "0.3rem" }}>{item.categoria}</p>
                  <p style={{ fontSize: "0.8rem", color: "#6B6B6B", lineHeight: 1.5, margin: 0 }}>{item.exemplos}</p>
                </div>
              ))}
            </div>

            {/* Seção 7 */}
            <h2 style={h2Style}>Transporte executivo do aeroporto para a Gleba Palhano</h2>
            <p style={pStyle}>
              Passageiros que desembarcam no Aeroporto José Richa com destino à
              Gleba Palhano têm três opções principais de transporte:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                {
                  tipo: "Motorista particular pré-agendado",
                  icon: "🚗",
                  pros: "Motorista aguarda no hall com plaquinha. Monitoramento de voo. Atendimento bilíngue. Ideal para executivos.",
                  tempo: "Espera: zero · Chegada: 15–20 min",
                  melhor: "Executivos e viajantes corporativos",
                },
                {
                  tipo: "Transfer receptivo (aeroporto → hotel)",
                  icon: "✈️",
                  pros: "Foco em hóspedes de hotel. Inclui auxílio com bagagem. Motorista identificado no desembarque.",
                  tempo: "Espera: zero · Chegada: 15–20 min",
                  melhor: "Hóspedes de hotel na Gleba Palhano",
                },
                {
                  tipo: "Táxi convencional (ponto do aeroporto)",
                  icon: "🚕",
                  pros: "Disponível sem agendamento. Tarifa regulamentada.",
                  tempo: "Espera: 5–15 min na fila · Chegada: 15–20 min",
                  melhor: "Passageiros sem agendamento prévio",
                },
              ].map(item => (
                <div key={item.tipo} style={{
                  background: "#F9F9F9", borderRadius: "10px",
                  padding: "1.25rem 1.5rem", border: "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>
                    {item.icon} {item.tipo}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#3A3A3A", lineHeight: 1.6, marginBottom: "0.4rem" }}>{item.pros}</p>
                  <p style={{ fontSize: "0.8rem", color: "#6B6B6B", marginBottom: "0.3rem" }}>⏱️ {item.tempo}</p>
                  <p style={{ fontSize: "0.8rem", color: "#6B6B6B", margin: 0 }}>✅ Melhor para: {item.melhor}</p>
                </div>
              ))}
            </div>

            {/* Seção 8 */}
            <h2 style={h2Style}>Vale a pena agendar o transfer antes de embarcar?</h2>
            <p style={pStyle}>
              Para a rota Aeroporto José Richa → Gleba Palhano, o agendamento prévio
              faz diferença real em dois cenários específicos: <strong>voos com horário
              de chegada antes das 7h</strong> — quando a disponibilidade de táxis
              no ponto do aeroporto é menor — e <strong>voos com conexão em São Paulo
              ou Brasília</strong>, que frequentemente atrasam e chegam em horários
              diferentes do previsto.
            </p>
            <p style={pStyle}>
              Com o transfer pré-agendado, o motorista monitora o voo em tempo real
              e ajusta a chegada ao terminal automaticamente. Se o voo atrasar uma hora,
              o motorista só vai ao aeroporto na hora certa — sem esperar desde o
              horário original, sem custo extra para o passageiro.
            </p>
            <p style={pStyle}>
              Para executivos com reuniões logo após a chegada — um cenário comum
              em viagens de Brasília ou São Paulo para Londrina — o agendamento
              também elimina o risco de chegar ao hotel ou ao escritório na Gleba
              Palhano com atraso por falta de transporte disponível no momento.
            </p>
            <p style={pStyle}>
              O agendamento pode ser feito pelo WhatsApp com o número do voo e
              o endereço de destino na Gleba Palhano. Não é necessário pagar
              antecipadamente — o pagamento é feito ao motorista no momento da chegada.
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
                <Link href="/motorista-particular-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Motorista particular executivo no Aeroporto de Londrina
                </Link>
                <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer receptivo no Aeroporto de Londrina
                </Link>
                <Link href="/taxi-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi Aeroporto Londrina — embarque e desembarque
                </Link>
                <Link href="/taxi-executivo-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi executivo em Londrina
                </Link>
                <Link href="/contato" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Solicitar orçamento de transfer para a Gleba Palhano
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer aeroporto Gleba Palhano"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer executivo · Aeroporto José Richa → Gleba Palhano
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Do aeroporto direto à Gleba Palhano em 15 minutos
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Motorista aguarda no desembarque com plaquinha. Monitoramento de voo.
              Todos os hotéis e empresas da Gleba Palhano. Atendimento em português e inglês.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waExecutivo} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link href="/motorista-particular-aeroporto-londrina"
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                Ver motorista particular →
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
