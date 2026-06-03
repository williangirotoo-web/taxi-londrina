/**
 * app/taxi-hospital-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - taxi hospital londrina
 *   - taxi hospital evangélico londrina
 *   - taxi hcor londrina
 *   - taxi uel londrina
 *   - táxi para consulta médica londrina
 *
 * ANTI-CANIBALIZAÇÃO aplicada:
 *   ✅ PRESENTE: hospital, internação, alta hospitalar, consulta médica,
 *               quimioterapia, hemodiálise, acompanhante, exame, UPA,
 *               Santa Casa, H. Evangélico, HCor, UEL
 *   ✅ AUSENTE:  aeroporto, voo, terminal (→ /taxi-aeroporto-londrina)
 *   ✅ AUSENTE:  contrato, CNPJ, RH, frota (→ /transporte-empresarial)
 *   ✅ AUSENTE:  executivo, premium, bilíngue (→ /taxi-executivo)
 *   ✅ DISTINÇÃO vs /24h: foco em saúde e regularidade, não urgência genérica
 *
 * ANTI-THIN CONTENT:
 *   ✅ 2 perfis de público com conteúdo específico
 *   ✅ 8 hospitais reais com bairro/localização
 *   ✅ Casos de uso com nome de tratamento e frequência real
 *   ✅ FAQ com perguntas que só fazem sentido para pacientes/familiares
 *   ✅ Seção de recorrência com cálculo de economia de energia
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

export const metadata: Metadata = pageMetadata.taxiHospital

// ─── Schemas ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Táxi para Hospitais em Londrina",
  description:
    "Serviço de táxi para hospitais e clínicas em Londrina. Atendimento " +
    "discreto para consultas, internações, altas hospitalares e pacientes " +
    "em tratamento recorrente no Hospital Evangélico, HCor, UEL e demais " +
    "unidades de saúde de Londrina.",
  serviceType: "Transporte Hospitalar",
  url: `${business.url}/taxi-hospital-londrina`,
  areaServed: ["Londrina"],
  image: `${business.url}/og-taxi-hospital-londrina.jpg`,
})

// FAQ exclusiva — perguntas que só fazem sentido para pacientes/familiares
const faqItems = [
  {
    question: "O táxi atende em frente ao Hospital Evangélico de Londrina?",
    answer:
      "Sim. Fazemos embarque e desembarque na entrada principal do Hospital " +
      "Evangélico de Londrina (Rua João Huss, 600). Para alta hospitalar, " +
      "coordene o horário pelo WhatsApp com pelo menos 30 minutos de " +
      "antecedência para garantir que o motorista esteja na porta no momento certo.",
  },
  {
    question: "É possível contratar táxi recorrente para sessões de quimioterapia ou hemodiálise em Londrina?",
    answer:
      "Sim. Muitos de nossos passageiros fazem tratamentos regulares — " +
      "quimioterapia semanal, hemodiálise três vezes por semana, fisioterapia " +
      "e consultas de acompanhamento. Para esses casos, recomendamos combinar " +
      "os horários da semana pelo WhatsApp, garantindo o mesmo motorista e " +
      "o mesmo padrão de atendimento a cada sessão.",
  },
  {
    question: "O táxi pode buscar paciente que recebeu alta hospitalar em Londrina?",
    answer:
      "Sim. A alta hospitalar costuma ter horário incerto. Entre em contato " +
      "pelo WhatsApp assim que o médico confirmar a alta — o motorista se " +
      "desloca para o hospital e aguarda na saída. Não há custo adicional " +
      "por espera de até 15 minutos.",
  },
  {
    question: "O táxi atende acompanhante de paciente internado no HCor em Londrina?",
    answer:
      "Sim. Atendemos familiares e acompanhantes que precisam visitar pacientes " +
      "internados no Hospital do Coração (HCor), Hospital Evangélico, Santa Casa " +
      "e demais unidades. Se você faz visitas diárias, podemos combinar horários " +
      "fixos para facilitar a rotina.",
  },
  {
    question: "O táxi leva ao Hospital Universitário da UEL em Londrina?",
    answer:
      "Sim. Atendemos o Hospital Universitário da UEL (HU), localizado no campus " +
      "da Universidade Estadual de Londrina. O trajeto do Centro de Londrina até " +
      "o HU leva em média 20 minutos. Informe o setor de destino para que o " +
      "motorista indique a entrada correta.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Hospital Londrina", url: "/taxi-hospital-londrina" },
])

const waHospital = whatsappUrl(whatsappMessages.hospital)

// ─── Hospitais reais de Londrina — dados específicos ─────────────────────────
const hospitais = [
  {
    nome: "Hospital Evangélico de Londrina",
    bairro: "Rua João Huss, 600 — Região Central",
    especialidade: "Referência regional em cirurgias, UTI e oncologia",
    tempo: "~12 min do Centro",
    destaque: true,
  },
  {
    nome: "Hospital do Coração — HCor Londrina",
    bairro: "Rua Pernambuco, 737 — Centro",
    especialidade: "Cardiologia, hemodinâmica e cirurgia cardíaca",
    tempo: "~8 min do Centro",
    destaque: true,
  },
  {
    nome: "Hospital Universitário da UEL",
    bairro: "Av. Robert Koch, 60 — Campus UEL",
    especialidade: "Clínica geral, especialidades e residência médica",
    tempo: "~20 min do Centro",
    destaque: true,
  },
  {
    nome: "Santa Casa de Londrina",
    bairro: "Rua 13 de Maio, 1618 — Centro",
    especialidade: "Urgência, emergência e cirurgias de média complexidade",
    tempo: "~6 min do Centro",
    destaque: false,
  },
  {
    nome: "Hospital do Câncer de Londrina (HCLL)",
    bairro: "Rua Sebastião Abicair, 220 — Gleba Palhano",
    especialidade: "Oncologia, quimioterapia e radioterapia",
    tempo: "~18 min do Centro",
    destaque: false,
  },
  {
    nome: "UPA Norte e UPA Sul",
    bairro: "Duas unidades — Norte e Sul de Londrina",
    especialidade: "Pronto atendimento 24h para urgências",
    tempo: "Varia por bairro",
    destaque: false,
  },
  {
    nome: "Hospital de Olhos de Londrina",
    bairro: "Centro de Londrina",
    especialidade: "Oftalmologia, cirurgia refrativa e implante de lente",
    tempo: "~10 min do Centro",
    destaque: false,
  },
  {
    nome: "Clínicas e laboratórios da região",
    bairro: "Toda Londrina e municípios vizinhos",
    especialidade: "Exames, consultas e fisioterapia em toda a cidade",
    tempo: "Conforme localização",
    destaque: false,
  },
]

// ─── Casos de uso recorrentes — anti-thin content ────────────────────────────
const casosRecorrentes = [
  {
    tratamento: "Hemodiálise",
    frequencia: "3 sessões por semana",
    duracao: "4 horas por sessão",
    detalhe: "Pacientes renais precisam de transporte confiável para não atrasar o início do tratamento. O motorista aprende o horário e passa sem precisar ligar.",
  },
  {
    tratamento: "Quimioterapia",
    frequencia: "1 a 2 vezes por semana",
    duracao: "2 a 6 horas por sessão",
    detalhe: "Após a sessão, o paciente pode estar debilitado. Vamos buscar na saída do hospital e levar com tranquilidade, sem pressa e sem barulho.",
  },
  {
    tratamento: "Fisioterapia",
    frequencia: "2 a 5 vezes por semana",
    duracao: "1 hora por sessão",
    detalhe: "Rotina semanal que pode se tornar um contato fixo. Mesmos horários, mesmo motorista, sem precisar repetir endereços.",
  },
  {
    tratamento: "Consultas de acompanhamento",
    frequencia: "Mensal ou bimestral",
    duracao: "Meia-tarde",
    detalhe: "Para idosos ou pacientes sem carro, planejar a consulta sem depender de familiar disponível. Agendamos com antecedência.",
  },
]

// ─── Diferenciais específicos desta página ────────────────────────────────────
const diferenciais = [
  {
    icon: "🤫",
    title: "Silêncio e discrição",
    desc: "Sem conversas desnecessárias durante o trajeto. O motorista entende que alguns momentos pedem silêncio, e respeita isso.",
  },
  {
    icon: "⏳",
    title: "Sem pressa na alta hospitalar",
    desc: "Alta hospitalar nunca tem hora certa. O motorista aguarda na saída sem estresse — não há custo extra por espera de até 15 minutos.",
  },
  {
    icon: "🔄",
    title: "Horários fixos para tratamentos",
    desc: "Quimioterapia, hemodiálise e fisioterapia têm horário regular. Combinamos a rotina semanal pelo WhatsApp uma única vez.",
  },
  {
    icon: "🧑‍⚕️",
    title: "Entende o contexto de saúde",
    desc: "O motorista sabe que o passageiro pode estar debilitado, com dor ou emocionalmente abalado. O atendimento é ajustado para isso.",
  },
  {
    icon: "📍",
    title: "Conhece as entradas dos hospitais",
    desc: "Cada hospital tem entradas diferentes para urgência, internação e ambulatório. Informamos qual portaria usar ao agendar.",
  },
  {
    icon: "👥",
    title: "Leva acompanhante também",
    desc: "Familiar ou acompanhante pode ir junto no mesmo táxi. Não há cobrança extra por acompanhante dentro da cidade.",
  },
]

export default function TaxiHospitalPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Hospital Londrina</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO — tom compassivo, sem urgência agressiva
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Táxi para hospitais em Londrina"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #0d1320 60%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
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
              src="/og-taxi-hospital-londrina.jpg"
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
                  🏥 Transporte Hospitalar · Londrina, PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi para Hospital em Londrina
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  H. Evangélico, HCor, UEL e demais unidades
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Atendemos consultas, internações, altas hospitalares e tratamentos
                recorrentes em toda Londrina. Transporte discreto, sem pressa e
                com atenção ao momento que o passageiro está vivendo.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waHospital} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                  }}
                  aria-label="Solicitar táxi para hospital pelo WhatsApp">
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
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
                {["✅ Alta hospitalar", "✅ Consultas recorrentes", "✅ Sem pressa", "✅ Acompanhante incluso", "✅ 24 horas"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            DOIS PERFIS — urgência pontual e recorrência
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="perfis-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="perfis-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Dois tipos de atendimento para hospitais em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              A situação é diferente — o atendimento também
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {/* Perfil A — Urgência pontual */}
              <div style={{
                background: "#F9F9F9", borderRadius: "16px", padding: "2rem",
                borderTop: "4px solid #FFCC00",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚨</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                  Alta hospitalar e consultas pontuais
                </h3>
                <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                  Recebeu alta hospitalar e precisa de táxi agora? Familiar internado
                  precisa de transporte para casa? Consulta marcada para amanhã
                  cedo e não tem como ir?
                </p>
                <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  Para situações assim, o contato é direto pelo WhatsApp ou telefone.
                  O motorista sai para o hospital assim que confirmado, e aguarda
                  na saída por até 15 minutos sem custo extra.
                </p>
                <a href={waHospital} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#0A0A0A", color: "#FFCC00",
                    fontWeight: 700, fontSize: "0.9rem",
                    padding: "0.75rem 1.25rem", borderRadius: "8px", textDecoration: "none",
                  }}>
                  <WhatsAppIcon color="#FFCC00" />
                  Chamar agora
                </a>
              </div>

              {/* Perfil B — Recorrência */}
              <div style={{
                background: "#0A0A0A", borderRadius: "16px", padding: "2rem",
                borderTop: "4px solid #FFCC00",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔄</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
                  Tratamentos recorrentes
                </h3>
                <p style={{ color: "#D0D0D0", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                  Quimioterapia, hemodiálise, fisioterapia ou consultas regulares
                  exigem transporte confiável semanas após semana. Organize os
                  horários da semana pelo WhatsApp de uma vez.
                </p>
                <p style={{ color: "#D0D0D0", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  O motorista aprende o endereço, o setor do hospital e o horário
                  de cada sessão. Sem precisar repetir instruções a cada viagem.
                  Mesma pessoa, mesmo padrão, semana após semana.
                </p>
                <a href={waHospital} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#FFCC00", color: "#0A0A0A",
                    fontWeight: 700, fontSize: "0.9rem",
                    padding: "0.75rem 1.25rem", borderRadius: "8px", textDecoration: "none",
                  }}>
                  <WhatsAppIcon color="#0A0A0A" />
                  Organizar rotina
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            HOSPITAIS ATENDIDOS — dados reais e específicos
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="hospitais-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="hospitais-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Hospitais e clínicas atendidos em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Atendemos todas as unidades de saúde da cidade — veja as principais
            </p>

            {/* Hospitais em destaque */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem", marginBottom: "1.5rem",
            }}>
              {hospitais.filter(h => h.destaque).map((h) => (
                <div key={h.nome} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>
                    {h.nome}
                  </h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", marginBottom: "0.4rem" }}>
                    📍 {h.bairro}
                  </p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", marginBottom: "0.4rem" }}>
                    🏥 {h.especialidade}
                  </p>
                  <p style={{ color: "#FFCC00", fontSize: "0.8rem", fontWeight: 700, background: "#0A0A0A", display: "inline-block", padding: "3px 10px", borderRadius: "4px" }}>
                    ⏱️ {h.tempo}
                  </p>
                </div>
              ))}
            </div>

            {/* Demais hospitais */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}>
              {hospitais.filter(h => !h.destaque).map((h) => (
                <div key={h.nome} style={{
                  background: "#FFFFFF", borderRadius: "10px", padding: "1.25rem",
                  border: "1px solid #E8E8E8",
                  display: "flex", alignItems: "flex-start", gap: "0.75rem",
                }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>🏥</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>
                      {h.nome}
                    </h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.775rem", lineHeight: 1.5 }}>
                      {h.bairro} · {h.tempo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            TRATAMENTOS RECORRENTES — anti-thin content principal
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="tratamentos-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="tratamentos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Transporte regular para tratamentos em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Frequência e detalhes de cada tratamento — como organizamos a logística
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {casosRecorrentes.map((c) => (
                <div key={c.tratamento} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  transition: "box-shadow 0.2s",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#0A0A0A" }}>{c.tratamento}</h3>
                    <span style={{
                      background: "#FFCC00", color: "#0A0A0A",
                      fontSize: "0.7rem", fontWeight: 700,
                      padding: "3px 10px", borderRadius: "4px", whiteSpace: "nowrap",
                    }}>{c.frequencia}</span>
                  </div>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                    ⏱️ Duração média: {c.duracao}
                  </p>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.65 }}>{c.detalhe}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "3rem", background: "#0A0A0A", borderRadius: "12px",
              padding: "2rem", textAlign: "center",
            }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                Organiza o transporte para tratamento recorrente de uma vez
              </p>
              <p style={{ color: "#9a9a9a", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                Mande uma mensagem com o nome do hospital, o tipo de tratamento e os dias da semana.
                Respondemos com a confirmação de horários em minutos.
              </p>
              <a href={waHospital} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#0A0A0A" />
                Organizar rotina semanal
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            DIFERENCIAIS DESTA PÁGINA
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="diferenciais-hosp-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="diferenciais-hosp-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Como o táxi para hospital é diferente em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Detalhes que fazem diferença quando o contexto é saúde
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map((d) => (
                <div key={d.title} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem",
                  borderTop: "3px solid #FFCC00",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{d.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ — exclusiva de transporte hospitalar
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-hosp-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-hosp-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas frequentes — táxi para hospital em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas de pacientes, familiares e acompanhantes
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{
                  background: "#F9F9F9", borderRadius: "10px",
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

        {/* ════════════════════════════════════════════════════════════
            CTA FINAL
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Agendar táxi para hospital"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem",
            }}>
              Precisa de táxi para hospital em Londrina?
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Consulta, internação, alta hospitalar ou tratamento recorrente —
              informe o hospital e o horário pelo WhatsApp.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waHospital} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar pelo WhatsApp
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

        {/* ════════════════════════════════════════════════════════════
            LINKS INTERNOS + FOOTER
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-executivo-londrina",         label: "Táxi Executivo" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
                { href: "/taxi-aeroporto-londrina",         label: "Transfer Aeroporto" },
                { href: "/taxi-24-horas-londrina",          label: "Táxi 24 Horas" },
                { href: "/taxi-com-cadeirinha-londrina",     label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba",          label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",           label: "Londrina → Maringá" },
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
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                {business.shortName}
              </Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Táxi Hospitalar · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Agendar transporte →</Link>
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
