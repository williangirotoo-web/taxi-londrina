/**
 * app/blog/aeroporto-londrina-curitiba/page.tsx
 *
 * ARTIGO 4 — Blog Táxi Londrina
 *
 * KEYWORD PRINCIPAL: aeroporto londrina curitiba
 * INTENÇÃO: informacional (distância, tempo, vale a pena, quando ir)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-londrina-curitiba → transacional ("quero contratar transfer")
 *   ✅ Este artigo → informacional ("vale a pena", "distância", "quando ir")
 *   ✅ Nenhuma sobreposição de keyword principal com páginas de serviço
 *
 * SCHEMAS: BlogPosting + BreadcrumbList + FAQPage
 * OG IMAGE: og-taxi-londrina-curitiba.jpg
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
  slug:        "aeroporto-londrina-curitiba",
  title:       "Aeroporto de Londrina para Curitiba: vale a pena?",
  description:
    "Distância, tempo médio e quando vale a pena fazer o transfer do Aeroporto " +
    "José Richa (LDB) até Curitiba pela BR-376. Dados reais e dicas práticas.",
  publishedAt: "2026-06-06",
  updatedAt:   "2026-06-06",
  author:      business.name,
}

const canonicalUrl = `${business.url}/blog/${POST.slug}`
const ogImage      = `${business.url}/og-taxi-londrina-curitiba.jpg`

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
    question: "Qual a distância do Aeroporto de Londrina até Curitiba?",
    answer:
      "A distância entre o Aeroporto Governador José Richa (LDB) e o centro de Curitiba " +
      "é de aproximadamente 398 km pela BR-376, também chamada de Rodovia do Café. " +
      "O trajeto passa por Apucarana, Ponta Grossa e chega a Curitiba pela BR-116, " +
      "entrando pela Avenida das Torres ou pelo contorno norte da cidade.",
  },
  {
    question: "Quanto tempo leva o transfer de Londrina a Curitiba?",
    answer:
      "Em condições normais de tráfego, o trajeto leva entre 4 horas e 4h30. " +
      "Em feriados prolongados ou períodos de neblina na Serra da Esperança, " +
      "o tempo pode aumentar para 5 horas ou mais. A saída mais tranquila é " +
      "entre 5h e 8h da manhã, antes do movimento de caminhões na BR-376.",
  },
  {
    question: "Vale a pena contratar táxi do aeroporto de Londrina para Curitiba?",
    answer:
      "Sim, especialmente para executivos com reuniões em horário fixo, " +
      "passageiros com bagagem volumosa ou quem precisa chegar a pontos " +
      "específicos de Curitiba sem depender de rodoviária. O transfer direto " +
      "evita a necessidade de pegar táxi do aeroporto até a rodoviária de Londrina " +
      "e depois outro ônibus até Curitiba — economizando no mínimo 1 hora no trajeto total.",
  },
  {
    question: "É possível fazer o transfer de Londrina a Curitiba de madrugada?",
    answer:
      "Sim. O serviço de transfer intermunicipal opera 24 horas, mas corridas noturnas " +
      "devem ser agendadas com pelo menos 4 horas de antecedência. Saídas entre " +
      "22h e 4h têm atenção especial para neblina na Serra da Esperança, " +
      "trecho da BR-376 entre Ponta Grossa e Curitiba onde a visibilidade " +
      "pode ser reduzida no inverno.",
  },
  {
    question: "Qual o melhor ponto de chegada em Curitiba para quem vem de Londrina?",
    answer:
      "Depende do destino final. Para o centro ou bairro Batel, a entrada pela " +
      "BR-116 (Contorno Sul) é mais direta. Para o Aeroporto Internacional Afonso Pena " +
      "ou São José dos Pinhais, a BR-376 já entrega na região sul de Curitiba " +
      "sem precisar atravessar a cidade. Para o centro cívico e hospitais do " +
      "Setor Médico-Hospitalar, a entrada pelo Atuba é a mais eficiente.",
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

const waCuritiba = whatsappUrl(
  "Olá! Vi o artigo sobre transfer do Aeroporto de Londrina para Curitiba e gostaria de agendar."
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

export default function ArtigoAeroportoLondrinaCuritiba() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Aeroporto Londrina para Curitiba</span>
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
                🛣️ Londrina → Curitiba · BR-376 · Guia 2026
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Aeroporto de Londrina para Curitiba: distância, tempo e quando vale a pena
            </h1>
            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              398 km pela BR-376 separam o Aeroporto José Richa do centro de Curitiba.
              Guia completo com tempos reais, principais paradas e para quem o transfer direto é a melhor opção.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <time dateTime={POST.publishedAt} style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                {new Date(POST.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </time>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>Por {POST.author}</span>
              <Link href="/taxi-londrina-curitiba"
                style={{
                  background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.3)",
                  color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                }}>
                Ver transfer Londrina → Curitiba →
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
                "Distância e tempo de viagem pela BR-376",
                "Principais paradas na rota Londrina–Curitiba",
                "Vale a pena ir de táxi do aeroporto até Curitiba?",
                "Principais motivos da viagem",
                "Viagens executivas para Curitiba",
                "Quando agendar antecipadamente",
                "Chegando em Curitiba: pontos de destino",
                "Perguntas frequentes",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "0.85rem", color: "#3A3A3A", margin: "0 0 0.3rem", paddingLeft: "0.5rem" }}>
                  {i + 1}. {item}
                </p>
              ))}
            </nav>

            {/* Seção 1 */}
            <h2 style={h2Style}>Distância e tempo de viagem pela BR-376</h2>
            <p style={pStyle}>
              A rota entre o Aeroporto Governador José Richa (IATA: LDB) e Curitiba percorre
              a <strong>BR-376</strong>, conhecida como Rodovia do Café, por aproximadamente
              280 km. O trajeto completo, incluindo o trecho urbano de saída de Londrina pela
              Avenida dos Pioneiros e a chegada em Curitiba, totaliza <strong>398 km</strong>.
            </p>
            <p style={pStyle}>
              Em condições normais de tráfego, o tempo de viagem fica entre{" "}
              <strong>4 horas e 4h30</strong>. A maior variável é o trecho da{" "}
              <strong>Serra da Esperança</strong>, entre Ponta Grossa e o contorno de
              Curitiba, onde neblina, chuva e movimento de caminhões pesados podem
              adicionar 30 a 60 minutos ao trajeto.
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Horário de saída", "Tempo estimado", "Condições típicas"].map((h) => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["04h00 – 06h00", "4h00 – 4h20", "Menor tráfego de caminhões, cuidado com neblina na Serra"],
                    ["06h00 – 09h00", "4h15 – 4h45", "Movimento crescente na BR-376, mas ainda tranquilo"],
                    ["09h00 – 15h00", "4h00 – 4h30", "Melhor janela do dia para a rota"],
                    ["15h00 – 19h00", "4h30 – 5h00", "Início do rush em Curitiba, entrada pela Linha Verde mais lenta"],
                    ["19h00 – 23h00", "4h00 – 4h30", "Tráfego reduzido, atenção a animais na pista"],
                  ].map(([h, t, c]) => (
                    <tr key={h} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 12px", fontWeight: 600, color: "#0A0A0A" }}>{h}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{t}</td>
                      <td style={{ padding: "9px 12px", color: "#6B6B6B", fontSize: "0.825rem" }}>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Seção 2 */}
            <h2 style={h2Style}>Principais paradas na rota Londrina–Curitiba</h2>
            <p style={pStyle}>
              A BR-376 atravessa algumas cidades importantes do Paraná entre Londrina e Curitiba.
              O transfer direto não faz paradas intermediárias, mas é útil conhecer as referências
              do trajeto para ter ideia de onde você está na viagem:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {[
                { km: "Km 0 — Londrina (LDB)", info: "Saída pelo Aeroporto José Richa pela Av. dos Pioneiros até a entrada da BR-376." },
                { km: "Km 70 — Apucarana", info: "Polo têxtil do norte do Paraná. Ponto de referência para ⅕ da viagem." },
                { km: "Km 140 — Ortigueira / Telêmaco Borba", info: "Região de pinus e celulose. Metade do trajeto." },
                { km: "Km 210 — Ponta Grossa", info: "Maior cidade dos Campos Gerais. Entrada pela BR-376 / BR-277. Ponto onde a vegetação muda para campo." },
                { km: "Km 310 — Serra da Esperança", info: "Trecho mais sensível à neblina e chuva. Redução de velocidade comum no inverno e outono." },
                { km: "Km 398 — Curitiba", info: "Entrada pela BR-116 (Contorno Sul), BR-277 ou Linha Verde dependendo do destino na cidade." },
              ].map((item) => (
                <div key={item.km} style={{
                  display: "flex", gap: "1rem", background: "#F9F9F9",
                  borderRadius: "8px", padding: "0.875rem 1.25rem", border: "1px solid #E8E8E8",
                }}>
                  <div style={{ minWidth: "180px" }}>
                    <p style={{ fontWeight: 700, fontSize: "0.825rem", color: "#0A0A0A", margin: 0 }}>{item.km}</p>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{item.info}</p>
                </div>
              ))}
            </div>

            {/* Seção 3 */}
            <h2 style={h2Style}>Vale a pena ir de táxi do Aeroporto de Londrina até Curitiba?</h2>
            <p style={pStyle}>
              A resposta depende do contexto. Para alguns perfis de passageiro, o transfer
              direto do aeroporto para Curitiba é a opção mais eficiente e econômica quando
              se considera o custo total da viagem — incluindo tempo, conforto e logística.
            </p>
            <p style={pStyle}>
              <strong>Quando vale a pena:</strong> executivos com reuniões em horário fixo
              em Curitiba, pacientes e acompanhantes que chegam a Londrina para tratamento
              no Hospital do Coração e partem direto para Curitiba, passageiros com voo
              de conexão no Aeroporto Afonso Pena e famílias com crianças e bagagem
              que querem evitar a logística de rodoviária.
            </p>
            <p style={pStyle}>
              <strong>Quando o ônibus pode ser melhor:</strong> viajantes com muito tempo
              disponível, sem destino específico em Curitiba e que priorizam custo acima
              de tudo. O ônibus intermunicipal de Londrina a Curitiba sai da Rodoviária
              Central de Londrina — o que já exige um deslocamento de ~15 km do aeroporto
              até a rodoviária — e tem duração média de 5 horas com paradas.
            </p>

            {/* CTA inline 1 */}
            <div style={{
              background: "linear-gradient(135deg,#0A0A0A,#1a1a1a)", borderRadius: "12px",
              padding: "1.75rem 2rem", border: "1px solid rgba(255,204,0,0.2)", marginBottom: "2.5rem",
            }}>
              <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                🛣️ Transfer direto · Aeroporto Londrina → Curitiba
              </p>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                398 km com conforto e hora marcada
              </p>
              <p style={{ color: "#D0D0D0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Saída direta do terminal do Aeroporto José Richa para o seu endereço em Curitiba.
                Sem paradas, sem rodoviária.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
                </a>
                <Link href="/taxi-londrina-curitiba"
                  style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "0.9rem", padding: "0.75rem 1.5rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  Ver serviço completo →
                </Link>
              </div>
            </div>

            {/* Seção 4 */}
            <h2 style={h2Style}>Principais motivos para a viagem Londrina–Curitiba</h2>
            <p style={pStyle}>
              O corredor Londrina–Curitiba é um dos mais movimentados do Paraná.
              Os principais perfis de passageiro que fazem esse trajeto a partir do
              Aeroporto José Richa são:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.875rem", marginBottom: "2rem" }}>
              {[
                { icon: "💼", titulo: "Negócios e reuniões", desc: "Executivos que chegam ao LDB e têm compromissos em Curitiba no mesmo dia." },
                { icon: "🏥", titulo: "Tratamentos médicos", desc: "Pacientes do Hospital das Clínicas, HC-UFPR e clínicas especializadas de Curitiba." },
                { icon: "✈️", titulo: "Conexão no Afonso Pena", desc: "Passageiros com voo internacional no Aeroporto Afonso Pena de São José dos Pinhais." },
                { icon: "🎓", titulo: "Eventos e congressos", desc: "Feiras, congressos e eventos na Expo Barigui, CIC e centros de convenção de Curitiba." },
                { icon: "🏛️", titulo: "Processos jurídicos", desc: "Audiências no STJ, TRF4 e tribunais federais com sede em Curitiba." },
                { icon: "👨‍👩‍👧", titulo: "Visitas e mudanças", desc: "Famílias em deslocamento definitivo ou temporário entre as duas cidades." },
              ].map((item) => (
                <div key={item.titulo} style={{
                  background: "#F9F9F9", borderRadius: "8px", padding: "1rem",
                  border: "1px solid #E8E8E8", borderTop: "3px solid #FFCC00",
                }}>
                  <p style={{ fontSize: "1.5rem", margin: "0 0 0.4rem" }}>{item.icon}</p>
                  <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0A0A0A", margin: "0 0 0.3rem" }}>{item.titulo}</p>
                  <p style={{ fontSize: "0.8rem", color: "#6B6B6B", lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Seção 5 */}
            <h2 style={h2Style}>Viagens executivas para Curitiba</h2>
            <p style={pStyle}>
              O perfil mais frequente no transfer Londrina–Curitiba é o executivo que
              desembarca no LDB em voo de São Paulo ou Brasília e precisa chegar a Curitiba
              para reunião ou evento corporativo. Para esse perfil, o transfer direto
              tem vantagens claras sobre as alternativas:
            </p>
            <p style={pStyle}>
              A primeira é a previsibilidade. Diferente do ônibus — que depende de horários
              fixos e pode atrasar por lotação ou manutenção — o transfer sai exatamente
              quando o passageiro está pronto, seja o voo no horário ou atrasado.
              O motorista monitora o voo e ajusta a chegada ao terminal automaticamente.
            </p>
            <p style={pStyle}>
              A segunda é a eficiência do trajeto final. Chegando de ônibus, o passageiro
              desembarca na Rodoviária Rodoferroviária de Curitiba, no Bairro Jardim Botânico,
              e ainda precisa de um táxi ou aplicativo para o destino final — que pode ser
              o Batel, o Centro Cívico, o Bigorrilho ou qualquer outro bairro da capital.
              No transfer, o veículo leva direto ao endereço.
            </p>
            <p style={pStyle}>
              A terceira vantagem é discreta mas importante para quem viaja a trabalho:
              o carro executivo permite trabalhar durante a viagem — com Wi-Fi hotspot
              do celular, sem barulho de passageiros e sem paradas em rodoviárias
              intermediárias. Quatro horas e meia de produtividade no retrovisor.
            </p>

            {/* Seção 6 */}
            <h2 style={h2Style}>Quando agendar o transfer com antecedência</h2>
            <p style={pStyle}>
              Para o trajeto Londrina–Curitiba, recomendamos agendamento com no mínimo
              <strong> 24 horas de antecedência</strong> em dias normais. Em feriados
              prolongados — especialmente feriados de Carnaval, Semana Santa, julho e
              Natal — o agendamento com 48 a 72 horas de antecedência é fundamental,
              pois a demanda por transfer nesse corredor aumenta significativamente.
            </p>
            <p style={pStyle}>
              Para viagens de conexão com voo internacional pelo Aeroporto Afonso Pena,
              recomendamos calcular pelo menos 5 horas de margem entre a chegada prevista
              no LDB e o horário de check-in no Afonso Pena. Isso considera o tempo de
              transfer de 4h a 4h30 mais o deslocamento interno no aeroporto.
            </p>
            <p style={pStyle}>
              No inverno paranaense — especialmente nos meses de junho, julho e agosto —
              a neblina na Serra da Esperança pode surgir de forma imprevisível.
              Adicionar uma hora de margem ao planejamento em viagens nesse período
              é uma precaução sensata, especialmente para conexões de voo.
            </p>

            {/* Seção 7 */}
            <h2 style={h2Style}>Chegando em Curitiba: principais destinos</h2>
            <p style={pStyle}>
              Curitiba é a maior cidade do sul do Brasil e tem uma malha viária bem
              estruturada. Os principais destinos de quem chega de Londrina são:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", borderRadius: "8px", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "#0A0A0A" }}>
                    {["Destino em Curitiba", "Bairro / Região", "Referência principal"].map((h) => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Centro histórico",       "Centro",        "Rua XV de Novembro, Largo da Ordem"],
                    ["Batel",                  "Batel",         "Polo gastronômico e financeiro"],
                    ["Centro Cívico",          "Centro Cívico", "Palácio Iguaçu, TRF4, Ministérios"],
                    ["Aeroporto Afonso Pena",  "São José dos Pinhais", "Voos internacionais"],
                    ["Hospital das Clínicas",  "Alto da Glória","Referência em oncologia e cardiologia"],
                    ["Expo Barigui",           "Cascatinha",    "Feiras e eventos de grande porte"],
                    ["UFPR — Reitoria",        "Centro",        "Campus central da universidade"],
                    ["Bigorrilho / Champagnat", "Bigorrilho",   "Hotéis executivos e empresas"],
                  ].map(([dest, bairro, ref]) => (
                    <tr key={dest} style={{ borderBottom: "1px solid #F0F0F0" }}>
                      <td style={{ padding: "9px 12px", fontWeight: 600, color: "#0A0A0A" }}>{dest}</td>
                      <td style={{ padding: "9px 12px", color: "#3A3A3A" }}>{bairro}</td>
                      <td style={{ padding: "9px 12px", color: "#6B6B6B", fontSize: "0.825rem" }}>{ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                <Link href="/taxi-londrina-curitiba" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer Londrina → Curitiba com hora marcada
                </Link>
                <Link href="/transfer-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer receptivo no Aeroporto de Londrina
                </Link>
                <Link href="/taxi-aeroporto-londrina" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Táxi Aeroporto Londrina — transfer e embarque
                </Link>
                <Link href="/taxi-londrina-maringa" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Transfer Londrina → Maringá
                </Link>
                <Link href="/contato" style={{ fontSize: "0.875rem", color: "#1a0dab", textDecoration: "underline" }}>
                  → Solicitar orçamento de transfer intermunicipal
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* CTA Final */}
        <section aria-label="Agendar transfer Londrina Curitiba"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ color: "#FFCC00", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer direto · Aeroporto José Richa → Curitiba
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Agende seu transfer do aeroporto para Curitiba
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              398 km pela BR-376 com conforto e pontualidade. Saída direta do terminal do
              Aeroporto José Richa para o seu destino em Curitiba.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <Link href="/taxi-londrina-curitiba"
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                Ver serviço completo →
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
              <Link href="/taxi-londrina-curitiba" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>Londrina → Curitiba</Link>
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
