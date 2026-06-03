/**
 * app/taxi-londrina-maringa/page.tsx
 *
 * KEYWORDS ALVO:
 *   - taxi londrina maringa
 *   - transfer londrina maringa
 *   - taxi maringa londrina
 *   - carro londrina maringa
 *
 * ANTI-THIN CONTENT — dados reais obrigatórios:
 *   ✅ Distância: ~118 km via PR-317
 *   ✅ Tempo médio: 1h20 a 1h30
 *   ✅ Cidades: Rolândia → Cambé → Sarandi → Maringá
 *   ✅ Entrada Maringá: Av. Colombo (principal acesso pela PR-317)
 *   ✅ Pedágios: 1 a 2 praças na PR-317
 *   ✅ HU de Maringá e UEM como destinos reais
 *   ✅ Aeroporto Regional de Maringá (MGF) — Sílvio Name Júnior
 *   ✅ Ida e volta no mesmo dia — cronograma real
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ AUSENTE: Curitiba, BR-376, 398km, Afonso Pena, HC/UFPR (→ /curitiba)
 *   ✅ AUSENTE: aeroporto José Richa, LDB (→ /aeroporto)
 *   ✅ AUSENTE: contrato, CNPJ, RH, frota (→ /empresarial)
 *   ✅ AUSENTE: hospital de Londrina, H. Evangélico (→ /hospital)
 *   ✅ AUSENTE: cadeirinha, INMETRO (→ /cadeirinha)
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

export const metadata: Metadata = pageMetadata.taxiMaringa

const serviceSchema = buildServiceSchema({
  name: "Táxi de Londrina a Maringá",
  description:
    "Serviço de táxi e transfer da cidade de Londrina a Maringá, percorrendo " +
    "aproximadamente 118 km pela PR-317. Atende viagens de trabalho, consultas " +
    "no Hospital Universitário de Maringá, atividades na UEM e visitas a " +
    "familiares. Ida, volta e ida e volta no mesmo dia.",
  serviceType: "Transfer Intermunicipal",
  url: `${business.url}/taxi-londrina-maringa`,
  areaServed: ["Londrina", "Maringá", "Norte do Paraná"],
  image: `${business.url}/og-taxi-londrina-maringa.jpg`,
})

// FAQ exclusiva da rota Londrina–Maringá
const faqItems = [
  {
    question: "Quanto tempo leva o táxi de Londrina a Maringá?",
    answer:
      "O percurso de Londrina a Maringá tem aproximadamente 118 km pela PR-317 " +
      "e leva em média 1h20 a 1h30 em condições normais de trânsito. " +
      "A rota passa por Rolândia, Cambé e Sarandi antes de entrar em Maringá " +
      "pela Avenida Colombo. Em horários de pico — especialmente manhãs de " +
      "segunda-feira e tardes de sexta — o tempo pode chegar a 1h45.",
  },
  {
    question: "Qual o valor do táxi de Londrina a Maringá?",
    answer:
      "O valor do transfer Londrina–Maringá varia conforme o horário, o número " +
      "de passageiros e se o serviço inclui retorno. A PR-317 tem 1 a 2 praças " +
      "de pedágio, que somam em média R$15 a R$25 e são incluídas no valor " +
      "total. Solicite orçamento pelo WhatsApp informando a data, horário e " +
      "o bairro de destino em Maringá.",
  },
  {
    question: "O táxi de Londrina atende no Hospital Universitário de Maringá?",
    answer:
      "Sim. O Hospital Universitário de Maringá (HUM) fica na Avenida Mandacaru, " +
      "na Zona 5 de Maringá. É referência regional em especialidades como " +
      "neurologia, cirurgia vascular e ortopedia. Para consultas com hora " +
      "marcada, recomendamos saída de Londrina com pelo menos 2 horas de " +
      "antecedência em relação ao horário da consulta.",
  },
  {
    question: "É possível fazer Londrina–Maringá e voltar no mesmo dia?",
    answer:
      "Sim, com facilidade. Com 118 km de distância, a logística de ida e volta " +
      "no mesmo dia é simples. Saindo de Londrina às 7h, você chega a Maringá " +
      "às 8h20. Após uma manhã de reuniões ou consultas, pode retornar ao " +
      "meio-dia e estar de volta a Londrina antes das 14h. É a rota intermunicipal " +
      "mais viável para ida e volta rápida no norte do Paraná.",
  },
  {
    question: "O táxi de Londrina atende na UEM — Universidade Estadual de Maringá?",
    answer:
      "Sim. O campus central da UEM fica na Avenida Colombo, entrada pela Zona 7 " +
      "de Maringá. Atendemos professores visitantes, pesquisadores e alunos de " +
      "Londrina que precisam de transporte para bancas, eventos acadêmicos e " +
      "atividades no campus. Para grupos de pesquisa ou comissões, consulte " +
      "disponibilidade com antecedência.",
  },
  {
    question: "O táxi leva ao Aeroporto Regional de Maringá (MGF)?",
    answer:
      "Sim. O Aeroporto Regional de Maringá Sílvio Name Júnior (IATA: MGF) " +
      "fica na Zona 8 de Maringá, na saída para Paiçandu. " +
      "O aeroporto opera voos para São Paulo (Congonhas) e outras cidades, " +
      "sendo uma alternativa para quem precisa pegar um voo mais cedo do que " +
      "os disponíveis em Londrina. Para embarque matinal, recomendamos saída " +
      "de Londrina às 5h.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Londrina Maringá", url: "/taxi-londrina-maringa" },
])

const waMaringa = whatsappUrl(whatsappMessages.maringa)

// ─── Dados reais da rota ─────────────────────────────────────────────────────
const dadosRota = [
  { label: "Distância total",     valor: "~118 km",         icon: "📍" },
  { label: "Tempo médio",         valor: "1h20 – 1h30",     icon: "⏱️" },
  { label: "Tempo em pico",       valor: "até 1h45",        icon: "🚦" },
  { label: "Rodovia",             valor: "PR-317",           icon: "🛣️" },
  { label: "Pedágios",            valor: "1 a 2 praças",    icon: "💳" },
  { label: "Entrada Maringá",     valor: "Av. Colombo",     icon: "🏙️" },
]

// ─── Cidades na rota ─────────────────────────────────────────────────────────
const cidadesRota = [
  { cidade: "Londrina",  km: "0 km",    desc: "Partida — qualquer bairro" },
  { cidade: "Rolândia",  km: "~22 km",  desc: "Primeiro município na PR-317" },
  { cidade: "Cambé",     km: "~45 km",  desc: "Região metropolitana de Londrina" },
  { cidade: "Sarandi",   km: "~100 km", desc: "Município conurbado com Maringá" },
  { cidade: "Maringá",   km: "~118 km", desc: "Chegada — pela Av. Colombo" },
]

// ─── Destinos principais em Maringá ──────────────────────────────────────────
const destinosMaringa = [
  {
    zona: "Zona 3 — Centro",
    desc: "Centro comercial e empresarial. Escritórios, bancos, fóruns e sedes de empresas.",
    referencia: "Av. Brasil, Praça da Catedral",
    tempo_cwb: "~1h25 do Centro de Londrina",
  },
  {
    zona: "Zona 5 — HU-UEM e hospitais",
    desc: "Hospital Universitário da UEM (HU-UEM), Hospital Santa Casa e clínicas especializadas em neurologia, oncologia e cardiologia.",
    referencia: "Av. Mandacaru",
    tempo_cwb: "~1h35 do Centro de Londrina",
  },
  {
    zona: "Zona 7 — UEM Campus",
    desc: "Campus central da UEM, Reitoria, centros de pesquisa e pós-graduação.",
    referencia: "Av. Colombo, 5790",
    tempo_cwb: "~1h30 do Centro de Londrina",
  },
  {
    zona: "Zona 8 — Aeroporto MGF",
    desc: "Aeroporto Regional Sílvio Name Júnior. Voos para São Paulo e outras cidades.",
    referencia: "Rodovia BR-376, km 4",
    tempo_cwb: "~1h40 do Centro de Londrina",
  },
  {
    zona: "New Garden / Gleba Palhano MGA",
    desc: "Bairros residenciais nobres, hotéis executivos, shoppings e restaurantes.",
    referencia: "Região norte de Maringá",
    tempo_cwb: "~1h30 do Centro de Londrina",
  },
  {
    zona: "Polo Têxtil — Zonas Industriais",
    desc: "Maringá é um dos maiores polos têxteis do Brasil. Atacadistas de confecção, showrooms e representantes comerciais recebem compradores de Londrina com frequência semanal.",
    referencia: "Regiões industriais da cidade",
    tempo_cwb: "~1h30 do Centro de Londrina",
  },
  {
    zona: "Qualquer bairro",
    desc: "Atendemos todas as zonas de Maringá. Informe o endereço exato no agendamento.",
    referencia: "Confirmamos pelo WhatsApp",
    tempo_cwb: "Varia por destino",
  },
]

// ─── Casos de uso com detalhes ────────────────────────────────────────────────
const casos = [
  {
    icon: "🏥",
    titulo: "Consulta no HUM e especialidades",
    desc: "O Hospital Universitário de Maringá é referência regional em neurologia, cirurgia vascular e ortopedia. Muitos pacientes do norte do Paraná precisam de consultas ou cirurgias que não estão disponíveis em Londrina.",
    detalhe: "Consulta às 9h → saída de Londrina às 7h",
  },
  {
    icon: "🎓",
    titulo: "UEM — Universidade Estadual de Maringá",
    desc: "Bancas de doutorado, eventos acadêmicos, reuniões de pesquisa ou atividades no campus da UEM. Pesquisadores e professores de Londrina fazem esse trajeto com frequência.",
    detalhe: "Evento às 10h → saída às 8h30",
  },
  {
    icon: "💼",
    titulo: "Reuniões de negócios — ida e volta",
    desc: "Maringá e Londrina são os dois maiores polos empresariais do norte do Paraná. Muitas empresas têm filiais, fornecedores ou clientes nas duas cidades. Com 118 km, a reunião matinal e retorno à tarde é o roteiro mais comum.",
    detalhe: "Saída 7h → reunião 8h30 → retorno 13h → Londrina 14h30",
  },
  {
    icon: "✈️",
    titulo: "Voo no Aeroporto MGF",
    desc: "O Aeroporto Sílvio Name Júnior opera voos para São Paulo (Congonhas), sendo uma alternativa para quem precisa de horários de voo diferentes dos disponíveis em Londrina. Saindo de Londrina às 5h, você chega ao MGF às 6h20.",
    detalhe: "Voo às 7h → saída de Londrina às 5h",
  },
  {
    icon: "👨‍👩‍👧",
    titulo: "Visita a familiares e amigos",
    desc: "Muitas famílias paranaenses têm membros morando nas duas cidades. A rota Londrina–Maringá é uma das mais percorridas do norte do Paraná justamente pela proximidade e pelo histórico de migração entre as duas cidades.",
    detalhe: "Porta a porta, sem precisar de carro próprio",
  },
  {
    icon: "🎭",
    titulo: "Eventos, shows e gastronomia",
    desc: "Maringá tem programação cultural e gastronômica intensa. Shows no Teatro Calil Haddad, eventos no Parque do Ingá, festas na Zona 7. Para quem quer ir sem se preocupar com estacionamento ou bebidas.",
    detalhe: "Evento às 20h → saída às 18h30",
  },
]

// ─── Dicas práticas ───────────────────────────────────────────────────────────
const dicas = [
  {
    titulo: "Entrada em Maringá pela Av. Colombo",
    desc: "A PR-317 entra em Maringá diretamente pela Avenida Colombo, que corta a cidade de leste a oeste. A maior parte dos destinos comerciais e hospitalares fica acessível a partir dessa avenida em menos de 10 minutos.",
  },
  {
    titulo: "Pedágios da PR-317",
    desc: "A PR-317 tem 1 a 2 praças de pedágio no trecho Londrina–Maringá. O valor total dos pedágios gira em torno de R$15 a R$25, sempre incluído no orçamento apresentado antes da viagem.",
  },
  {
    titulo: "Alternativa sem pedágio",
    desc: "Existe uma rota alternativa pela BR-376 até Cambé e depois por estradas municipais até Maringá. O trajeto evita pedágios mas adiciona 25 a 30 minutos ao tempo total. Consulte a preferência no agendamento.",
  },
  {
    titulo: "Rota de volta: Sarandi e trânsito",
    desc: "Na saída de Maringá em direção a Londrina, o cruzamento com Sarandi pode ter lentidão nos horários de pico — especialmente sextas à tarde. Saindo de Maringá antes das 16h, você evita o trecho mais congestionado.",
  },
]

export default function TaxiLondrinaMaringaPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Londrina → Maringá</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Táxi de Londrina a Maringá"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #0d1a25 60%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
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
              src="/og-taxi-londrina-maringa.jpg"
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
                  🛣️ Transfer Regional · Norte do Paraná
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi Londrina → Maringá
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  ~118 km · PR-317 · ~1h20
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Transfer direto de Londrina a Maringá pela PR-317, passando por
                Rolândia, Cambé e Sarandi. Ida e volta no mesmo dia, viagens de
                trabalho, consultas no HUM, atividades na UEM ou visitas a familiares.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                  }}>
                  <WhatsAppIcon />
                  Solicitar orçamento
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
                {["✅ ~118 km pela PR-317", "✅ ~1h20 de viagem", "✅ Ida e volta no dia", "✅ HUM e UEM", "✅ Aeroporto MGF"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DADOS REAIS DA ROTA */}
        <section aria-labelledby="dados-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="dados-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Dados reais da rota Londrina – Maringá
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Tudo o que você precisa saber antes de agendar
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1rem", marginBottom: "3.5rem",
            }}>
              {dadosRota.map((d) => (
                <div key={d.label} style={{
                  background: "#F9F9F9", borderRadius: "10px", padding: "1.5rem",
                  textAlign: "center", border: "1px solid #E8E8E8",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <div style={{
                    fontWeight: 900, fontSize: "1rem", color: "#FFCC00",
                    background: "#0A0A0A", borderRadius: "6px",
                    padding: "4px 8px", display: "inline-block", marginBottom: "0.5rem",
                  }}>{d.valor}</div>
                  <div style={{ color: "#6B6B6B", fontSize: "0.775rem" }}>{d.label}</div>
                </div>
              ))}
            </div>

            {/* Cidades da rota */}
            <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0A0A0A", marginBottom: "1.25rem" }}>
              Cidades da rota Londrina → Maringá pela PR-317
            </h3>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: "20px", top: "20px",
                width: "2px", height: "calc(100% - 40px)",
                background: "linear-gradient(to bottom, #FFCC00, #E8E8E8)",
              }} />
              {cidadesRota.map((c, i) => (
                <div key={c.cidade} style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "0.75rem 0" }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
                    background: i === 0 || i === cidadesRota.length - 1 ? "#FFCC00" : "#FFFFFF",
                    border: `3px solid ${i === 0 || i === cidadesRota.length - 1 ? "#FFCC00" : "#D0D0D0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.65rem", color: "#0A0A0A", zIndex: 1,
                  }}>
                    {c.km.replace(" km","").replace("~","")}
                  </div>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A" }}>{c.cidade}</span>
                    <span style={{ color: "#9a9a9a", fontSize: "0.8rem", marginLeft: "0.5rem" }}>— {c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINOS EM MARINGÁ */}
        <section aria-labelledby="destinos-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Principais destinos em Maringá atendidos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Por zona — com tempo estimado a partir do Centro de Londrina
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}>
              {destinosMaringa.map((d) => (
                <div key={d.zona} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.5rem",
                  borderLeft: "4px solid #FFCC00",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}>
                  <h3 style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{d.zona}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.825rem", lineHeight: 1.65, marginBottom: "0.6rem" }}>{d.desc}</p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.775rem", marginBottom: "0.4rem" }}>📍 {d.referencia}</p>
                  <div style={{
                    display: "inline-block", background: "#F5F5F5",
                    borderRadius: "4px", padding: "3px 10px",
                    fontSize: "0.75rem", color: "#0A0A0A", fontWeight: 700,
                  }}>⏱️ {d.tempo_cwb}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section aria-labelledby="casos-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="casos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Por que pessoas de Londrina vão a Maringá
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Situações reais com horários práticos para planejar
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}>
              {casos.map((c) => (
                <div key={c.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>{c.desc}</p>
                  <div style={{
                    background: "#FFFFFF", borderRadius: "6px", padding: "8px 12px",
                    fontSize: "0.775rem", color: "#6B6B6B", fontStyle: "italic",
                    border: "1px solid #E8E8E8",
                  }}>⏱️ {c.detalhe}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IDA E VOLTA NO MESMO DIA */}
        <section aria-labelledby="ida-volta-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="ida-volta-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Londrina → Maringá → Londrina no mesmo dia
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              A rota regional mais prática do norte do Paraná
            </p>
            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              {[
                { hora: "07h00", evento: "Saída de Londrina",       detalhe: "Do seu endereço, qualquer bairro" },
                { hora: "08h20", evento: "Chegada a Maringá",       detalhe: "Centro, Zona 5, UEM ou endereço específico" },
                { hora: "08h30–12h", evento: "Sua agenda",          detalhe: "Reunião, consulta, evento ou atividade" },
                { hora: "12h00", evento: "Saída de Maringá",        detalhe: "Retorno combinado — informe antes" },
                { hora: "13h20", evento: "Chegada a Londrina",      detalhe: "No seu endereço, sem precisar chamar outro táxi" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  padding: "1rem 0",
                  borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}>
                  <div style={{ flexShrink: 0, width: "72px", fontWeight: 900, fontSize: "0.85rem", color: "#FFCC00", paddingTop: "2px" }}>
                    {item.hora}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.2rem" }}>{item.evento}</div>
                    <div style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>{item.detalhe}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <p style={{ color: "#9a9a9a", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                Para retorno no mesmo dia, avise no agendamento. Combinamos horário de disponibilidade em Maringá.
              </p>
              <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#0A0A0A" />
                Agendar ida e volta
              </a>
            </div>
          </div>
        </section>

        {/* DICAS PRÁTICAS */}
        <section aria-labelledby="dicas-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="dicas-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              O que saber antes de ir de Londrina a Maringá de táxi
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Detalhes práticos de quem conhece bem a rota
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {dicas.map((d) => (
                <div key={d.titulo} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem",
                  borderTop: "3px solid #FFCC00",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>{d.titulo}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-mga-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-mga-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas frequentes — táxi Londrina → Maringá
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre distância, tempo, preço, HUM, UEM e aeroporto MGF
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{
                  background: "#F9F9F9", borderRadius: "10px",
                  border: "1.5px solid #E8E8E8", overflow: "hidden",
                }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A",
                    cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none",
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

        {/* CTA FINAL */}
        <section aria-label="Solicitar transfer Londrina Maringá"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Agende o transfer Londrina → Maringá
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Informe data, horário e destino em Maringá pelo WhatsApp.
              Orçamento com pedágios incluídos em minutos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar orçamento
              </a>
              <a href={`tel:${business.phone}`}
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none",
                }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-londrina-curitiba",          label: "Londrina → Curitiba" },
                { href: "/taxi-executivo-londrina",         label: "Táxi Executivo" },
                { href: "/taxi-aeroporto-londrina",         label: "Transfer Aeroporto Londrina" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/taxi-24-horas-londrina",          label: "Táxi 24 Horas" },
                { href: "/taxi-hospital-londrina",          label: "Táxi para Hospitais" },
                { href: "/taxi-com-cadeirinha-londrina",     label: "Táxi com Cadeirinha" },
                { href: "/contato",                         label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block", background: "#FFFFFF", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px",
                  borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transfer Londrina–Maringá · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
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

function WhatsAppIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width="20" height="20" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
