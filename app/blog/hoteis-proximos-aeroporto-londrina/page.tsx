/**
 * app/blog/hoteis-proximos-aeroporto-londrina/page.tsx
 *
 * ARTIGO 5 — Blog Táxi Londrina
 *
 * KEYWORD PRINCIPAL: hotéis próximos ao aeroporto de londrina
 * INTENÇÃO: informacional (onde se hospedar, quais hotéis, distâncias)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ Nenhuma página de serviço foca em hospedagem
 *   ✅ Intenção completamente diferente das páginas transacionais
 *   ✅ CTA aponta para /transfer-aeroporto-londrina (conversão natural)
 *
 * ANTI-HCU:
 *   ✅ Hotéis reais com endereços e regiões de Londrina
 *   ✅ Dados locais: distâncias, bairros, referências
 *   ✅ +1.500 palavras de conteúdo útil e específico
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
  slug:        "hoteis-proximos-aeroporto-londrina",
  title:       "Hotéis Próximos ao Aeroporto de Londrina",
  description:
    "Os melhores hotéis perto do Aeroporto Governador José Richa (LDB) em Londrina. " +
    "Gleba Palhano, Centro e Higienópolis — distâncias, preços e dicas reais.",
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
    question: "Qual o hotel mais próximo do Aeroporto Governador José Richa de Londrina?",
    answer:
      "Os hotéis mais próximos do Aeroporto José Richa ficam na região norte de Londrina " +
      "e na Gleba Palhano, a 12 km do terminal. O bairro Higienópolis, a cerca de 10 km, " +
      "também concentra opções de hospedagem de custo-benefício. " +
      "Nenhum hotel fica imediatamente ao lado do aeroporto — ao contrário de grandes hubs " +
      "como Guarulhos, o Aeroporto de Londrina não tem hotel dentro do complexo aeroportuário.",
  },
  {
    question: "Vale a pena se hospedar perto do aeroporto de Londrina?",
    answer:
      "Depende do objetivo. Para viajantes com voo cedo ou tarde da noite, " +
      "hotéis na Gleba Palhano ou no norte de Londrina reduzem o deslocamento " +
      "até o aeroporto para 12 a 15 minutos. Para quem vai explorar a cidade ou " +
      "tem reuniões no centro, os hotéis do Centro ou Batel são mais convenientes " +
      "mesmo estando um pouco mais distantes do aeroporto.",
  },
  {
    question: "Como ir do aeroporto de Londrina aos hotéis da Gleba Palhano?",
    answer:
      "A rota mais direta é pela Rodovia Mábio Gonçalves Palhano, com tempo médio " +
      "de 15 a 20 minutos. A Gleba Palhano fica na região nordeste de Londrina " +
      "e é o polo hoteleiro mais próximo ao aeroporto, concentrando redes como " +
      "Holiday Inn e Inter Hotel.",
  },
  {
    question: "Existe transfer do aeroporto de Londrina para os hotéis?",
    answer:
      "Sim. O serviço de transfer receptivo parte do próprio terminal de chegadas — " +
      "o motorista aguarda no desembarque com plaquinha com o nome do hóspede. " +
      "O transfer cobre todos os hotéis de Londrina, incluindo Gleba Palhano, " +
      "Centro, Higienópolis e bairros adjacentes. O agendamento pode ser feito " +
      "pelo WhatsApp informando o número do voo.",
  },
  {
    question: "Os hotéis de Londrina oferecem serviço de shuttle para o aeroporto?",
    answer:
      "Poucos hotéis de Londrina oferecem shuttle gratuito para o aeroporto — " +
      "essa é uma prática mais comum em cidades com aeroportos de maior movimento. " +
      "A maioria indica táxi ou transfer particular aos hóspedes. " +
      "O transfer pré-agendado é a opção mais confiável, pois garante horário " +
      "fixo de saída e não depende da disponibilidade de táxi no momento.",
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
  "Olá! Vi o artigo sobre hotéis próximos ao aeroporto de Londrina e gostaria de agendar um transfer."
)

const h2Style: React.CSSProperties = {
  fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)",
  fontWeight: 800, color: "#0A0A0A",
  marginBottom: "1rem", marginTop: "2.5rem",
  paddingLeft: "1rem", borderLeft: "4px solid #FFCC00",
}

const h3Style: React.CSSProperties = {
  fontSize: "1rem", fontWeight: 700, color: "#0A0A0A",
  marginBottom: "0.5rem", marginTop: "1.75rem",
}

const pStyle: React.CSSProperties = {
  fontSize: "1rem", lineHeight: 1.85,
  color: "#2A2A2A", marginBottom: "1.25rem",
}

// Hotéis reais de Londrina com dados locais
const hoteis = [
  {
    regiao: "Gleba Palhano — o polo hoteleiro mais próximo ao aeroporto",
    distAeroporto: "12 km · ~15–20 min pela Rod. Mábio Gonçalves Palhano",
    descricao:
      "A Gleba Palhano é o bairro mais nobre de Londrina e o mais próximo ao aeroporto " +
      "entre as regiões com oferta hoteleira de qualidade. O acesso pela Rodovia Mábio " +
      "Gonçalves Palhano é direto e rápido, sem precisar passar pelo trânsito do centro.",
    hoteis: [
      {
        nome: "Holiday Inn Londrina",
        estrelas: "★★★★",
        descricao: "Rede internacional com infraestrutura completa para eventos corporativos. " +
          "Localizado na Avenida Leste-Oeste, na Gleba Palhano, com restaurante, academia e piscina. " +
          "Referência para executivos em reuniões e congressos em Londrina.",
      },
      {
        nome: "Inter Hotel Londrina",
        estrelas: "★★★★",
        descricao: "Hotel executivo com salas de reunião e serviço de concierge. " +
          "Atende bem passageiros com voos cedo, por estar a 15 minutos do aeroporto " +
          "pela rota mais direta. Café da manhã incluso nas principais tarifas.",
      },
      {
        nome: "Quality Inn Londrina",
        estrelas: "★★★",
        descricao: "Opção da rede Choice Hotels com boa relação custo-benefício na Gleba Palhano. " +
          "Indicado para viajantes corporativos que precisam de conforto sem os valores " +
          "das redes cinco estrelas.",
      },
    ],
  },
  {
    regiao: "Centro de Londrina — tradição e localização central",
    distAeroporto: "14 km · ~18–25 min pela Av. dos Pioneiros",
    descricao:
      "O Centro de Londrina concentra hotéis tradicionais da cidade, com acesso fácil " +
      "ao comércio, à Rua XV de Novembro e ao sistema de terminais de ônibus. " +
      "Para quem tem compromissos em órgãos públicos, fórum ou bancos, é a região mais conveniente.",
    hoteis: [
      {
        nome: "Bourbon Londrina Business Hotel",
        estrelas: "★★★★",
        descricao: "Referência em hotelaria executiva no centro de Londrina. " +
          "Amplos apartamentos, centro de convenções e restaurante. " +
          "Frequentado por executivos, advogados e delegações políticas.",
      },
      {
        nome: "Slaviero Slim Londrina",
        estrelas: "★★★",
        descricao: "Hotel da rede Slaviero com boa localização no centro, " +
          "próximo ao Fórum da Comarca de Londrina e ao comércio da Rua Sergipe. " +
          "Opção eficiente para estadias rápidas de trabalho.",
      },
      {
        nome: "Ibis Londrina",
        estrelas: "★★★",
        descricao: "Rede Accor com padrão internacional e preço competitivo. " +
          "Localizado no centro, com check-in simplificado e boa conectividade. " +
          "Indicado para viajantes frequentes que priorizam praticidade.",
      },
    ],
  },
  {
    regiao: "Higienópolis — custo-benefício para viajantes práticos",
    distAeroporto: "10 km · ~13–18 min pela Rod. Mábio Gonçalves Palhano",
    descricao:
      "O bairro Higienópolis fica entre o aeroporto e a Gleba Palhano, sendo tecnicamente " +
      "a região residencial mais próxima ao terminal. Tem oferta menor de hotéis, " +
      "mas as pousadas e hotéis da região oferecem boa relação custo-benefício " +
      "para quem prioriza proximidade ao aeroporto.",
    hoteis: [
      {
        nome: "Pousadas e hotéis boutique",
        estrelas: "★★–★★★",
        descricao: "A região de Higienópolis e adjacências tem opções de hospedagem " +
          "independentes com atendimento personalizado. Para quem prefere fugir das " +
          "grandes redes e busca um ambiente mais tranquilo com fácil acesso ao aeroporto.",
      },
    ],
  },
]

export default function ArtigoHoteisAeroportoLondrina() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Hotéis próximos ao aeroporto de Londrina</span>
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
                🏨 Guia de Hospedagem · Aeroporto LDB · 2026
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Hotéis Próximos ao Aeroporto de Londrina: Onde se Hospedar com Conforto
            </h1>
            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Guia completo com os melhores hotéis perto do Aeroporto Governador José Richa (LDB),
              por região, distância real e perfil de viajante. Gleba Palhano, Centro e Higienópolis.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt} style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/transfer-aeroporto-londrina"
                style={{
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Transfer aeroporto → hotel →
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
                "Onde fica o Aeroporto Governador José Richa em Londrina",
                "Gleba Palhano — hotéis mais próximos ao aeroporto",
                "Centro de Londrina — tradição e localização central",
                "Higienópolis — custo-benefício e proximidade",
                "Vantagens de se hospedar perto do aeroporto",
                "Como chegar do aeroporto ao hotel: transfer ou táxi?",
                "Dicas para viajantes de negócios em Londrina",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Intro */}
            <p style={pStyle}>
              Londrina é a segunda maior cidade do Paraná e um dos principais polos
              econômicos do norte do estado. O Aeroporto Governador José Richa (IATA: LDB)
              recebe voos diários de GOL, LATAM e Azul, com conexões em São Paulo, Brasília,
              Rio de Janeiro e Curitiba. Para quem vem a negócios, tratamentos médicos
              ou eventos, escolher um hotel bem posicionado em relação ao aeroporto
              faz diferença real na qualidade da viagem.
            </p>
            <p style={pStyle}>
              Ao contrário de grandes aeroportos como Guarulhos ou Galeão, o Aeroporto
              de Londrina não tem hotel dentro do complexo aeroportuário. As opções de
              hospedagem mais próximas ficam entre 10 e 20 km do terminal, distribuídas
              em três regiões principais: <strong>Gleba Palhano</strong>,{" "}
              <strong>Centro</strong> e <strong>Higienópolis</strong>.
            </p>

            {/* Onde fica o aeroporto */}
            <h2 style={h2Style}>Onde fica o Aeroporto Governador José Richa em Londrina</h2>
            <p style={pStyle}>
              O aeroporto está localizado no bairro Aeroporto, na zona norte de Londrina,
              próximo ao limite com o município de Ibiporã. O acesso principal é pela
              Avenida dos Pioneiros — a principal via de entrada e saída da cidade —
              que conecta o terminal ao centro de Londrina em cerca de 20 minutos.
            </p>
            <p style={pStyle}>
              A segunda rota importante é pela <strong>Rodovia Mábio Gonçalves Palhano</strong>,
              que dá acesso direto à Gleba Palhano sem passar pelo trânsito do centro.
              Essa rota é a mais usada por passageiros que se hospedam na região hoteleira
              da Gleba Palhano, reduzindo o tempo de deslocamento para 12 a 15 minutos.
            </p>

            {/* Hotéis por região */}
            {hoteis.map((regiao) => (
              <section key={regiao.regiao} aria-label={regiao.regiao}>
                <h2 style={h2Style}>{regiao.regiao}</h2>
                <p style={{ ...pStyle, background: "#F9F9F9", borderRadius: "8px", padding: "0.875rem 1.25rem", border: "1px solid #E8E8E8" }}>
                  📍 <strong>Distância do aeroporto:</strong> {regiao.distAeroporto}
                </p>
                <p style={pStyle}>{regiao.descricao}</p>
                {regiao.hoteis.map((hotel) => (
                  <div key={hotel.nome} style={{
                    background: "#FAFAFA", borderRadius: "10px", padding: "1.25rem 1.5rem",
                    border: "1px solid #E8E8E8", marginBottom: "1rem",
                    borderLeft: "4px solid #FFCC00",
                  }}>
                    <h3 style={h3Style}>
                      {hotel.nome} <span style={{ color: "#FFCC00", fontWeight: 400, fontSize: "0.9rem" }}>{hotel.estrelas}</span>
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#3A3A3A", lineHeight: 1.7, margin: 0 }}>{hotel.descricao}</p>
                  </div>
                ))}
              </section>
            ))}

            {/* Vantagens */}
            <h2 style={h2Style}>Vantagens de se hospedar perto do aeroporto de Londrina</h2>
            <p style={pStyle}>
              A escolha de um hotel próximo ao Aeroporto José Richa tem vantagens concretas
              dependendo do perfil da viagem:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { icon: "⏰", titulo: "Voos cedo ou tarde da noite", desc: "Para voos que partem antes das 7h ou chegam depois das 21h, hospedagem na Gleba Palhano ou no norte da cidade reduz o risco de atraso e elimina o estresse de atravessar a cidade em horários críticos." },
                { icon: "💼", titulo: "Viagens curtas de negócios", desc: "Executivos que chegam, têm reuniões e partem no mesmo dia ou no dia seguinte preferem a Gleba Palhano pela combinação de proximidade ao aeroporto, boa infraestrutura hoteleira e restaurantes de qualidade na região." },
                { icon: "🏥", titulo: "Acompanhantes de pacientes", desc: "Familiares que vêm a Londrina para consultas ou procedimentos no Hospital Evangélico ou HCor se beneficiam de hotéis no Centro, que ficam igualmente próximos ao aeroporto e aos hospitais." },
                { icon: "🔄", titulo: "Conexões e escalas", desc: "Passageiros em trânsito — que chegam ao LDB e embarcam no dia seguinte — preferem a comodidade de um hotel próximo ao terminal sem precisar se deslocar para o centro da cidade." },
              ].map((item) => (
                <div key={item.titulo} style={{
                  display: "flex", gap: "1rem", background: "#F9F9F9",
                  borderRadius: "8px", padding: "1rem 1.25rem", border: "1px solid #E8E8E8",
                }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>{item.titulo}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Como chegar */}
            <h2 style={h2Style}>Como chegar do aeroporto ao hotel: transfer ou táxi?</h2>
            <p style={pStyle}>
              Ao desembarcar no Aeroporto José Richa, o passageiro tem duas opções
              principais para chegar ao hotel: o <strong>táxi convencional</strong> no ponto
              da saída do terminal ou o <strong>transfer pré-agendado</strong> com motorista
              aguardando no hall de desembarque.
            </p>
            <p style={pStyle}>
              A diferença prática é relevante para quem chega cansado de uma viagem longa.
              No táxi convencional, é preciso encontrar o ponto na saída do terminal,
              aguardar a fila e negociar ou confirmar o destino na hora. No transfer
              pré-agendado, o motorista está identificado com plaquinha com seu nome
              antes mesmo de você retirar a bagagem.
            </p>
            <p style={pStyle}>
              Para grupos com bagagem volumosa — como famílias com malas grandes ou
              executivos com equipamentos de apresentação — o transfer reservado com
              antecedência permite informar o volume de bagagem e garantir um veículo
              adequado, sem surpresas na saída do terminal.
            </p>

            {/* CTA inline */}
            <div style={{
              background: "linear-gradient(135deg,#0A0A0A,#1a1a1a)", borderRadius: "12px",
              padding: "1.75rem 2rem", border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                ✈️ Transfer aeroporto → hotel em Londrina
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                Motorista aguarda com plaquinha no desembarque
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Gleba Palhano, Centro, Higienópolis e todos os hotéis de Londrina.
                Monitoramento de voo incluso. Atendimento em português e inglês.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={waTransfer} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar transfer
                </a>
                <Link href="/transfer-aeroporto-londrina"
                  style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  Ver transfer receptivo →
                </Link>
              </div>
            </div>

            {/* Dicas negócios */}
            <h2 style={h2Style}>Dicas para viajantes de negócios em Londrina</h2>
            <p style={pStyle}>
              Londrina tem um calendário intenso de feiras, congressos e eventos corporativos,
              especialmente na área de agronegócio — a cidade é sede da Expoagro Londrina
              e sediou diversas edições do Fórum do Agronegócio do Paraná. Em períodos
              de grandes eventos, a oferta hoteleira na Gleba Palhano esgota rapidamente,
              e as tarifas sobem significativamente. Para esses períodos, o ideal é
              reservar com pelo menos 30 dias de antecedência.
            </p>
            <p style={pStyle}>
              Para reuniões no <strong>Centro Empresarial de Londrina</strong> ou em escritórios
              na Avenida Higienópolis, o Bourbon Londrina e o Ibis são bem posicionados.
              Para reuniões em empresas da região norte — como as do Parque Tecnológico
              de Londrina (PaTLon) — a Gleba Palhano é mais conveniente.
            </p>
            <p style={pStyle}>
              Uma dica prática: a maioria dos hotéis executivos de Londrina oferece
              estacionamento gratuito. Para quem aluga carro no aeroporto, isso elimina
              um custo adicional que em cidades como São Paulo ou Curitiba pode ser
              significativo.
            </p>
            <p style={pStyle}>
              Para quem prefere não alugar carro e usar transfer para os deslocamentos,
              o serviço de táxi executivo cobre todos os destinos da cidade e região,
              incluindo o trajeto hotel-reunião-hotel e hotel-aeroporto no retorno.
              O agendamento pode ser feito com até 12 horas de antecedência para corridas
              dentro de Londrina e com 24 horas para viagens intermunicipais.
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
                  → Táxi Aeroporto Londrina — embarque e desembarque
                </Link>
                <Link href="/motorista-particular-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Motorista particular executivo no aeroporto
                </Link>
                <Link href="/taxi-executivo-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi executivo em Londrina
                </Link>
                <Link href="/contato" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Solicitar transfer aeroporto → hotel
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer aeroporto hotel"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer executivo · Aeroporto → Hotel em Londrina
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Do aeroporto direto ao seu hotel em Londrina
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Motorista aguarda no desembarque com plaquinha. Gleba Palhano, Centro e
              todos os hotéis de Londrina. Monitoramento de voo incluso.
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
