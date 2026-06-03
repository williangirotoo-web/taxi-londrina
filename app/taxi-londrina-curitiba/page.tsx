/**
 * app/taxi-londrina-curitiba/page.tsx
 *
 * KEYWORDS ALVO:
 *   - taxi londrina curitiba
 *   - transfer londrina curitiba
 *   - taxi curitiba londrina
 *   - carro londrina curitiba
 *
 * ANTI-THIN CONTENT — dados reais obrigatórios:
 *   ✅ Distância: ~398 km via BR-376 / BR-277
 *   ✅ Tempo médio: 4h a 4h30 em condições normais
 *   ✅ Tempo com trânsito: 5h–6h em horários de pico
 *   ✅ Rodovia: BR-376 (Rodovia do Café) + BR-277
 *   ✅ Cidades: Apucarana → Ponta Grossa → Palmeira → São Luís do Purunã → Curitiba
 *   ✅ Pedágios: 5 a 6 praças entre Londrina e Curitiba
 *   ✅ Aeroporto de Curitiba: Afonso Pena — São José dos Pinhais
 *   ✅ Casos de uso: voo, HC/UFPR, reunião, ida e volta no mesmo dia
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ AUSENTE: Maringá, PR-317, 118km (→ /taxi-londrina-maringa)
 *   ✅ AUSENTE: aeroporto José Richa, LDB (→ /taxi-aeroporto-londrina)
 *   ✅ AUSENTE: contrato, CNPJ, RH, frota (→ /transporte-empresarial)
 *   ✅ AUSENTE: cadeirinha, INMETRO (→ /taxi-com-cadeirinha)
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

export const metadata: Metadata = pageMetadata.taxiCuritiba

const serviceSchema = buildServiceSchema({
  name: "Táxi de Londrina a Curitiba",
  description:
    "Serviço de táxi e transfer da cidade de Londrina a Curitiba, percorrendo " +
    "aproximadamente 398 km pela BR-376 e BR-277. Ida, volta e ida e volta " +
    "no mesmo dia. Atende voos no Aeroporto Afonso Pena, consultas no " +
    "Hospital de Clínicas da UFPR e reuniões de negócios na capital.",
  serviceType: "Transfer Intermunicipal",
  url: `${business.url}/taxi-londrina-curitiba`,
  areaServed: ["Londrina", "Curitiba", "Paraná"],
  image: `${business.url}/og-taxi-londrina-curitiba.jpg`,
})

// FAQ exclusiva da rota Londrina–Curitiba
const faqItems = [
  {
    question: "Quanto tempo leva o táxi de Londrina a Curitiba?",
    answer:
      "O percurso de Londrina a Curitiba tem aproximadamente 398 km e leva em " +
      "média 4 horas a 4h30 em condições normais de trânsito, seguindo pela " +
      "BR-376 até Ponta Grossa e depois pela BR-277 até a capital. Em horários " +
      "de pico — especialmente sextas à tarde e domingos à noite — o tempo pode " +
      "chegar a 5h30 devido ao volume de veículos na entrada de Curitiba.",
  },
  {
    question: "Qual é o valor do táxi de Londrina a Curitiba?",
    answer:
      "O valor do transfer Londrina–Curitiba varia conforme o horário de saída, " +
      "o número de passageiros e se o serviço inclui retorno no mesmo dia. " +
      "Os pedágios da BR-376 e BR-277 somam em média R$80 a R$100 e são " +
      "incluídos no valor total. Solicite orçamento pelo WhatsApp informando " +
      "data, horário e número de passageiros.",
  },
  {
    question: "O táxi de Londrina consegue fazer o transfer para o Aeroporto Afonso Pena em Curitiba?",
    answer:
      "Sim. O Aeroporto Internacional Afonso Pena fica em São José dos Pinhais, " +
      "na Região Metropolitana de Curitiba — a aproximadamente 400 km de Londrina. " +
      "Para não perder o voo, recomendamos saída de Londrina com pelo menos " +
      "6 horas de antecedência em relação ao horário do embarque, " +
      "especialmente em dias úteis.",
  },
  {
    question: "É possível fazer Londrina–Curitiba e retornar no mesmo dia?",
    answer:
      "Sim, é totalmente viável. A combinação mais comum é sair de Londrina " +
      "entre 5h e 7h da manhã, chegar em Curitiba entre 9h e 11h, cumprir " +
      "a agenda e retornar à tarde, chegando a Londrina entre 20h e 22h. " +
      "Para isso, combine o horário de retorno com pelo menos 2 horas de " +
      "antecedência durante a viagem para garantir disponibilidade.",
  },
  {
    question: "Quais cidades o táxi passa de Londrina a Curitiba?",
    answer:
      "A rota principal segue pela BR-376, passando por Apucarana e depois " +
      "descendo a Serra de São Luís do Purunã — um trecho de curvas que requer " +
      "atenção especial. A partir de Ponta Grossa, segue pela BR-277 cruzando " +
      "Palmeira e chegando a Curitiba pela região sul da cidade. O trajeto " +
      "atravessa o interior do Paraná com paisagens variadas.",
  },
  {
    question: "O táxi de Londrina para Curitiba funciona para consultas no Hospital de Clínicas da UFPR?",
    answer:
      "Sim. Muitos pacientes de Londrina e região norte do Paraná fazem " +
      "consultas e procedimentos no Hospital de Clínicas da UFPR em Curitiba, " +
      "que é referência em especialidades como neurologia, oncologia e cirurgia " +
      "cardiovascular. Organizamos o horário de saída de acordo com o horário " +
      "da consulta — reserve com pelo menos 24 horas de antecedência.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Londrina Curitiba", url: "/taxi-londrina-curitiba" },
])

const waCuritiba = whatsappUrl(whatsappMessages.curitiba)

// ─── Dados reais da rota ─────────────────────────────────────────────────────
const dadosRota = [
  { label: "Distância total",      valor: "~398 km",              icon: "📍" },
  { label: "Tempo médio",          valor: "4h – 4h30",            icon: "⏱️" },
  { label: "Tempo em pico",        valor: "5h30 – 6h",            icon: "🚦" },
  { label: "Rodovias",             valor: "BR-376 + BR-277",      icon: "🛣️" },
  { label: "Pedágios estimados",   valor: "5 a 6 praças",         icon: "💳" },
  { label: "Saída recomendada",    valor: "5h – 7h (Londrina)",   icon: "🌅" },
]

// ─── Cidades na rota ─────────────────────────────────────────────────────────
const cidadesRota = [
  { cidade: "Londrina", km: "0 km",    desc: "Partida — qualquer bairro" },
  { cidade: "Apucarana", km: "~74 km", desc: "Primeiro polo urbano na BR-376" },
  { cidade: "Ortigueira", km: "~180 km", desc: "Região central do Paraná" },
  { cidade: "Ponta Grossa", km: "~280 km", desc: "Cruzamento BR-376 + BR-277" },
  { cidade: "Palmeira", km: "~340 km",  desc: "Trecho final antes da serra" },
  { cidade: "S. L. do Purunã", km: "~360 km", desc: "Serra — trecho de curvas" },
  { cidade: "Curitiba", km: "~398 km",  desc: "Chegada — qualquer bairro" },
]

// ─── Casos de uso com detalhes reais ─────────────────────────────────────────
const casos = [
  {
    icon: "✈️",
    titulo: "Voo no Aeroporto Afonso Pena",
    desc: "O Aeroporto Internacional Afonso Pena (CWB) fica em São José dos Pinhais, na Grande Curitiba. Para voos com embarque entre 10h e 12h, recomendamos saída de Londrina às 5h30.",
    detalhe: "Saída de Londrina: 5h30 | Chegada estimada ao Afonso Pena: 10h",
  },
  {
    icon: "🏥",
    titulo: "Consulta no HC/UFPR e especialidades",
    desc: "O Hospital de Clínicas da UFPR é referência estadual em neurologia, oncologia, reumatologia e cirurgia cardiovascular. Muitos pacientes do norte do Paraná precisam ir a Curitiba para especialidades que Londrina não oferece.",
    detalhe: "Consulta às 9h: saída de Londrina às 4h30–5h",
  },
  {
    icon: "💼",
    titulo: "Reuniões de negócios e ida e volta",
    desc: "Saindo de Londrina às 5h30, você chega à Av. das Torres ou ao Centro de Curitiba antes das 10h. Com reunião às 14h, é possível retornar e estar de volta a Londrina por volta das 22h — tudo no mesmo dia.",
    detalhe: "Ida 5h30 → chegada 10h | Retorno 17h → chegada 21h30",
  },
  {
    icon: "🎭",
    titulo: "Shows, eventos e teatro",
    desc: "Curitiba tem agenda cultural densa — Teatro Guaíra, Ópera de Arame, shows no Pedreira Paulo Leminski. Para eventos noturnos, o ideal é ir de tarde e retornar no dia seguinte ou no final da madrugada.",
    detalhe: "Evento às 21h: saída de Londrina às 16h | Retorno: combinar",
  },
  {
    icon: "👨‍👩‍👧", titulo: "Família e bagagem",
    desc: "Viagem com crianças, malas grandes ou equipamentos. O táxi parte de Londrina com a bagagem toda sem a necessidade de embarque em ônibus ou conexão. Mais prático para famílias.",
    detalhe: "Porta a porta, sem baldeação",
  },
  {
    icon: "🔬",
    titulo: "Tratamentos recorrentes em Curitiba",
    desc: "Pacientes que fazem sessões de tratamento em Curitiba mensalmente ou bimestralmente. Organizamos data e horário de saída para se encaixar na agenda médica.",
    detalhe: "Organize os próximos 3 meses pelo WhatsApp de uma vez",
  },
]

// ─── Dicas práticas da rota ───────────────────────────────────────────────────
const dicas = [
  {
    titulo: "Serra de São Luís do Purunã",
    desc: "O trecho da serra na BR-376, entre Ponta Grossa e Curitiba, é de curvas e viadutos. Em dias de chuva ou neblina, o tempo pode aumentar 30 a 40 minutos. Motoristas que conhecem a rota adaptam a velocidade com antecedência.",
  },
  {
    titulo: "Entrada em Curitiba",
    desc: "A entrada pela BR-376 Sul pode ter congestionamentos nos horários de pico, especialmente entre 7h30 e 9h30. Saindo de Londrina às 5h ou 6h, você já atravessa a capital antes do pico.",
  },
  {
    titulo: "Pedágios da rota",
    desc: "A BR-376 e a BR-277 têm entre 5 e 6 praças de pedágio no trajeto Londrina–Curitiba. O valor total varia conforme o eixo do veículo e a tabela vigente — em média R$80 a R$100. Sempre incluídos no orçamento final.",
  },
  {
    titulo: "Retorno no mesmo dia",
    desc: "Para retorno no mesmo dia, avise no ato do agendamento. O motorista organiza o horário de disponibilidade em Curitiba. Evite retorno nas sextas acima das 17h ou domingos acima das 16h — risco de congestionamento na entrada de Londrina.",
  },
]

export default function TaxiLondrinaCuritibaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Londrina → Curitiba</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Táxi de Londrina a Curitiba"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #0d1525 60%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
            background: "radial-gradient(ellipse at 80% 40%, rgba(255,204,0,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "700px" }}>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🛣️ Transfer Intermunicipal · PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi Londrina → Curitiba
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  ~398 km · BR-376 + BR-277 · ~4h30
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Transfer direto de Londrina a Curitiba com hora marcada. Ideal para
                voos no Aeroporto Afonso Pena, consultas no Hospital de Clínicas da UFPR,
                reuniões de negócios ou viagem em família. Ida, volta ou ida e volta
                no mesmo dia.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
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
                {["✅ ~398 km pela BR-376", "✅ ~4h30 de viagem", "✅ Ida e volta no dia", "✅ Aeroporto Afonso Pena", "✅ Agendamento antecipado"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            DADOS REAIS DA ROTA
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="dados-rota-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="dados-rota-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Dados reais da rota Londrina – Curitiba
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Informações práticas para planejar sua viagem com antecedência
            </p>

            {/* Grid de dados */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem", marginBottom: "3rem",
            }}>
              {dadosRota.map((d) => (
                <div key={d.label} style={{
                  background: "#F9F9F9", borderRadius: "10px", padding: "1.5rem",
                  textAlign: "center", border: "1px solid #E8E8E8",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{d.icon}</div>
                  <div style={{ fontWeight: 900, fontSize: "1.1rem", color: "#FFCC00", background: "#0A0A0A", borderRadius: "6px", padding: "4px 8px", display: "inline-block", marginBottom: "0.5rem" }}>
                    {d.valor}
                  </div>
                  <div style={{ color: "#6B6B6B", fontSize: "0.8rem" }}>{d.label}</div>
                </div>
              ))}
            </div>

            {/* Cidades da rota */}
            <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0A0A0A", marginBottom: "1.25rem" }}>
              Cidades na rota Londrina → Curitiba
            </h3>
            <div style={{ position: "relative" }}>
              {/* Linha vertical da timeline */}
              <div style={{
                position: "absolute", left: "20px", top: "20px",
                width: "2px", height: "calc(100% - 40px)",
                background: "linear-gradient(to bottom, #FFCC00, #E8E8E8)",
              }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {cidadesRota.map((c, i) => (
                  <div key={c.cidade} style={{
                    display: "flex", alignItems: "center", gap: "1.25rem",
                    padding: "0.75rem 0 0.75rem 0",
                  }}>
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
                      background: i === 0 || i === cidadesRota.length - 1 ? "#FFCC00" : "#FFFFFF",
                      border: `3px solid ${i === 0 || i === cidadesRota.length - 1 ? "#FFCC00" : "#D0D0D0"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 800, fontSize: "0.7rem", color: "#0A0A0A",
                      zIndex: 1,
                    }}>
                      {c.km.replace(" km", "").replace("~", "")}
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A" }}>{c.cidade}</span>
                      <span style={{ color: "#9a9a9a", fontSize: "0.8rem", marginLeft: "0.5rem" }}>— {c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CASOS DE USO REAIS
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="casos-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="casos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Por que pessoas de Londrina precisam ir a Curitiba
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Casos reais com horários e detalhes práticos para planejar
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}>
              {casos.map((c) => (
                <div key={c.titulo} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>{c.desc}</p>
                  <div style={{
                    background: "#F5F5F5", borderRadius: "6px", padding: "8px 12px",
                    fontSize: "0.775rem", color: "#6B6B6B", fontStyle: "italic",
                  }}>
                    ⏱️ {c.detalhe}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            IDA E VOLTA NO MESMO DIA — exemplo concreto
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="ida-volta-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="ida-volta-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Londrina → Curitiba → Londrina no mesmo dia
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              Exemplo prático de uma ida e volta para reunião ou consulta
            </p>

            <div style={{ maxWidth: "680px", margin: "0 auto" }}>
              {[
                { hora: "05h30", evento: "Saída de Londrina", detalhe: "Do seu endereço, qualquer bairro" },
                { hora: "07h30", evento: "Apucarana",         detalhe: "Parada técnica se necessário — ~74 km" },
                { hora: "09h45", evento: "Chegada a Curitiba",detalhe: "Centro, hospitais ou bairros específicos" },
                { hora: "10h–14h",evento: "Sua agenda",       detalhe: "Consulta, reunião, evento ou voo" },
                { hora: "14h00", evento: "Saída de Curitiba", detalhe: "Retorno com hora combinada" },
                { hora: "18h30", evento: "Chegada a Londrina",detalhe: "No seu endereço — sem precisar chamar outro táxi" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  padding: "1rem 0",
                  borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}>
                  <div style={{
                    flexShrink: 0, width: "72px",
                    fontWeight: 900, fontSize: "0.85rem", color: "#FFCC00",
                    paddingTop: "2px",
                  }}>{item.hora}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.2rem" }}>
                      {item.evento}
                    </div>
                    <div style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>{item.detalhe}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <p style={{ color: "#9a9a9a", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                Horários variam com trânsito e sazonalidade. Reserve com pelo menos 24h de antecedência.
              </p>
              <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
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

        {/* ════════════════════════════════════════════════════════════
            DICAS PRÁTICAS DA ROTA
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="dicas-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="dicas-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              O que saber antes de ir de Londrina a Curitiba de táxi
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Informações práticas de quem faz essa rota com frequência
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {dicas.map((d) => (
                <div key={d.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  borderTop: "3px solid #FFCC00",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                    {d.titulo}
                  </h3>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ DA ROTA
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-cwb-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-cwb-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas frequentes — táxi Londrina → Curitiba
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre a rota, horários, pedágios e como funciona o agendamento
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

        {/* CTA FINAL */}
        <section aria-label="Solicitar transfer Londrina Curitiba"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem",
            }}>
              Agende o transfer Londrina → Curitiba
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Informe data, horário e número de passageiros pelo WhatsApp.
              Receba o orçamento com pedágios incluídos em minutos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar orçamento
              </a>
              <a href={`tel:${business.phone}`}
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#0A0A0A",
                  fontWeight: 700, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px",
                  border: "2px solid #0A0A0A", textDecoration: "none",
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
                { href: "/taxi-londrina-maringa",           label: "Londrina → Maringá" },
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
                Transfer Londrina–Curitiba · {business.address.city}, {business.address.stateCode} ·{" "}
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
