/**
 * app/transporte-empresarial-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - transporte empresarial londrina
 *   - transporte corporativo londrina
 *   - fretamento empresarial londrina
 *   - transporte para empresas londrina
 *
 * ANTI-CANIBALIZAÇÃO — regras aplicadas:
 *   ✅ Público: RH, gestor de frota, diretor financeiro — NÃO pessoa física
 *   ✅ Tom: B2B, contrato, eficiência operacional — NÃO conforto pessoal
 *   ✅ Palavras PRESENTES: contrato, frota, CNPJ, nota fiscal, RH, faturamento
 *   ✅ Palavras AUSENTES: corrida avulsa, conforto, discrição, bilíngue, pet
 *   ✅ Conversão: formulário/e-mail para proposta — NÃO WhatsApp imediato
 *   ✅ FAQ: apenas sobre gestão de frota e contratos — sem FAQ pessoal
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

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = pageMetadata.transporteEmpresarial

// ─── Schemas ──────────────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Transporte Empresarial em Londrina",
  description:
    "Serviço de transporte corporativo em Londrina com contratos mensais, " +
    "emissão de nota fiscal, relatório de corridas por centro de custo e " +
    "atendimento dedicado para empresas, gestores de frota e departamentos de RH.",
  serviceType: "Transporte Corporativo",
  url: `${business.url}/transporte-empresarial-londrina`,
  areaServed: ["Londrina", "Norte do Paraná"],
  image: `${business.url}/og-transporte-empresarial-londrina.jpg`,
})

// FAQ exclusiva — perguntas que só fazem sentido para gestores e empresas
const faqItems = [
  {
    question: "Como funciona o contrato de transporte empresarial em Londrina?",
    answer:
      "O contrato é firmado mensalmente com a empresa contratante. Definimos a demanda " +
      "estimada de corridas, o perímetro de atendimento e os horários de pico. " +
      "A empresa recebe relatório mensal com todas as corridas, centros de custo e " +
      "valor total faturado, com nota fiscal emitida em nome do CNPJ.",
  },
  {
    question: "A empresa recebe nota fiscal pelo transporte corporativo?",
    answer:
      "Sim. Emitimos nota fiscal de serviço para pessoa jurídica em todos os contratos " +
      "mensais. O faturamento é consolidado ao final de cada mês com detalhamento " +
      "por colaborador, rota e data, facilitando o lançamento contábil e a prestação " +
      "de contas ao departamento financeiro.",
  },
  {
    question: "É possível contratar transporte empresarial para apenas alguns colaboradores?",
    answer:
      "Sim. O contrato pode ser configurado para atender um grupo específico de " +
      "colaboradores, como diretores, gerentes, visitantes frequentes ou equipes " +
      "de campo. Não há volume mínimo obrigatório — a proposta é personalizada " +
      "conforme a necessidade real da empresa.",
  },
  {
    question: "O serviço de transporte corporativo em Londrina cobre viagens intermunicipais?",
    answer:
      "Sim. O contrato pode incluir rotas regulares para Curitiba, Maringá e demais " +
      "municípios do norte do Paraná. Rotas intermunicipais são precificadas por " +
      "quilometragem e incluídas no relatório mensal junto com as corridas locais.",
  },
  {
    question: "Qual o prazo para receber uma proposta de transporte empresarial?",
    answer:
      "Enviamos a proposta personalizada em até 24 horas após o contato inicial. " +
      "Para agilizar, informe o número aproximado de corridas mensais, os principais " +
      "destinos (aeroporto, clientes, filiais) e se há necessidade de relatório " +
      "por centro de custo. O contato pode ser feito por WhatsApp ou e-mail.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte Empresarial Londrina", url: "/transporte-empresarial-londrina" },
])

// ─── WhatsApp para proposta empresarial ──────────────────────────────────────
const waEmpresarial = whatsappUrl(whatsappMessages.empresarial)

// ─── Benefícios B2B — exclusivos deste serviço ───────────────────────────────
const beneficios = [
  {
    icon: "📋",
    title: "Contrato mensal com CNPJ",
    desc: "Relação formal com nota fiscal de serviço, facilitando o processo de aprovação interno e o lançamento contábil.",
  },
  {
    icon: "📊",
    title: "Relatório de corridas por centro de custo",
    desc: "Cada corrida registrada com data, colaborador, origem, destino e valor. Gestão transparente para o RH e financeiro.",
  },
  {
    icon: "🔄",
    title: "Faturamento mensal consolidado",
    desc: "Uma única nota fiscal por mês com todas as corridas do período. Sem reembolsos individuais, sem burocracia adicional.",
  },
  {
    icon: "📞",
    title: "Canal exclusivo para gestores",
    desc: "Linha direta com responsável pelo contrato. Solicitações, ajustes de rota e cancelamentos sem passar por atendimento geral.",
  },
  {
    icon: "🗺️",
    title: "Rotas recorrentes cadastradas",
    desc: "Os destinos mais frequentes ficam cadastrados e podem ser solicitados com uma mensagem. Sem precisar repetir endereços.",
  },
  {
    icon: "📈",
    title: "Escalonamento conforme demanda",
    desc: "O contrato se ajusta mês a mês conforme o volume real de corridas. Sem franquia mínima que gere custo desnecessário.",
  },
]

// ─── Perfis de empresas atendidas ────────────────────────────────────────────
const perfis = [
  { icon: "🏭", setor: "Indústria", uso: "Traslado de executivos, visitas a clientes e rotas para fornecedores em Londrina e região." },
  { icon: "🏥", setor: "Saúde", uso: "Transporte de gestores, reuniões inter-hospitalares e atendimento a diretores em múltiplas unidades." },
  { icon: "🎓", setor: "Educação", uso: "Deslocamento de reitores, diretores e visitantes institucionais em Londrina." },
  { icon: "🏦", setor: "Financeiro", uso: "Corridas regulares para escritórios, clientes e visitas externas com registro por centro de custo." },
  { icon: "🛒", setor: "Varejo e franquias", uso: "Supervisores e coordenadores com roteiro de visitas a unidades na cidade e região." },
  { icon: "💼", setor: "Consultoria e TI", uso: "Equipes em clientes externos, aeroporto e reuniões com necessidade de pontualidade comprovável." },
]

// ─── Etapas da proposta ───────────────────────────────────────────────────────
const etapas = [
  { n: "1", title: "Contato inicial", desc: "Envie uma mensagem pelo WhatsApp ou e-mail informando o porte da empresa e a demanda estimada." },
  { n: "2", title: "Proposta em 24h", desc: "Receba uma proposta personalizada com valores por corrida, faturamento mensal e condições do contrato." },
  { n: "3", title: "Assinatura do contrato", desc: "Contrato simples em PDF, assinado digitalmente. Início do atendimento já no mês seguinte." },
  { n: "4", title: "Gestão contínua", desc: "Relatório mensal, nota fiscal e canal direto com gestor de conta. Revisamos o contrato a cada trimestre." },
]

export default function TransporteEmpresarialPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transporte Empresarial Londrina</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO — tom B2B, foco em contrato e eficiência operacional
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Transporte empresarial em Londrina"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #111827 100%)", position: "relative", overflow: "hidden" }}>
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
              src="/og-transporte-empresarial-londrina.jpg"
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
                  🏢 Transporte Corporativo · Londrina, PR
                </span>
              </div>

              {/* H1 — keyword B2B */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                Transporte Empresarial em Londrina
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  Contrato mensal com nota fiscal e relatório de corridas
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Sua empresa elimina o reembolso individual de táxi e passa a ter um
                fornecedor único de transporte em Londrina — com contrato, faturamento
                centralizado e relatório detalhado para o financeiro e o RH.
              </p>

              {/* CTAs — proposta é o principal, WhatsApp é secundário */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waEmpresarial} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#FFCC00", color: "#0A0A0A",
                    fontWeight: 800, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                  }}
                  aria-label="Solicitar proposta de transporte empresarial pelo WhatsApp">
                  <WhatsAppIcon color="#0A0A0A" />
                  Solicitar proposta
                </a>
                <Link href="/contato"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "transparent", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px",
                    border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none",
                  }}>
                  Falar com um consultor →
                </Link>
              </div>

              {/* Trust signals B2B */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Nota fiscal", "✅ Relatório mensal", "✅ Contrato formal", "✅ Sem franquia mínima", "✅ Proposta em 24h"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            BENEFÍCIOS B2B
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="beneficios-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="beneficios-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Por que empresas em Londrina contratam transporte corporativo
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Gestão simplificada, custo controlado e conformidade fiscal
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {beneficios.map((b) => (
                <div key={b.title} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  borderTop: "3px solid #FFCC00",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{b.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{b.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            PERFIS ATENDIDOS
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="perfis-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="perfis-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Setores que contratam transporte empresarial em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Atendemos empresas de diferentes portes e segmentos na região
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.25rem",
            }}>
              {perfis.map((p) => (
                <div key={p.setor} style={{
                  background: "#FFFFFF", borderRadius: "10px", padding: "1.5rem",
                  display: "flex", alignItems: "flex-start", gap: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}>
                  <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.35rem" }}>{p.setor}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>{p.uso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            COMO CONTRATAR — etapas B2B
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="como-contratar-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="como-contratar-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Como contratar transporte corporativo em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              Do primeiro contato ao início do faturamento em menos de uma semana
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "2rem", maxWidth: "960px", margin: "0 auto 3rem",
            }}>
              {etapas.map((e) => (
                <div key={e.n} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    background: "#FFCC00", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1.3rem", color: "#0A0A0A",
                    margin: "0 auto 1rem",
                  }}>{e.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{e.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.825rem", lineHeight: 1.65 }}>{e.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA final da seção */}
            <div style={{ textAlign: "center" }}>
              <a href={waEmpresarial} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}
                aria-label="Solicitar proposta de transporte empresarial pelo WhatsApp">
                <WhatsAppIcon color="#0A0A0A" />
                Solicitar proposta agora
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            COMPARATIVO — com e sem contrato
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="comparativo-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="comparativo-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Com contrato vs. sem contrato
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              O impacto operacional de ter um fornecedor de transporte corporativo em Londrina
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem", maxWidth: "720px", margin: "0 auto",
            }}>
              {/* Sem contrato */}
              <div style={{
                background: "#FFF5F5", borderRadius: "12px", padding: "1.75rem",
                border: "1.5px solid #FED7D7",
              }}>
                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#C53030", marginBottom: "1.25rem" }}>
                  ❌ Sem fornecedor fixo
                </h3>
                {[
                  "Reembolso manual por colaborador",
                  "Sem nota fiscal consolidada",
                  "Dificuldade de previsão de custo",
                  "Sem histórico de corridas para auditoria",
                  "Gestor perde tempo aprovando reembolsos",
                ].map((item) => (
                  <p key={item} style={{ color: "#742A2A", fontSize: "0.85rem", marginBottom: "0.6rem", lineHeight: 1.5 }}>
                    • {item}
                  </p>
                ))}
              </div>
              {/* Com contrato */}
              <div style={{
                background: "#F0FFF4", borderRadius: "12px", padding: "1.75rem",
                border: "1.5px solid #9AE6B4",
              }}>
                <h3 style={{ fontWeight: 800, fontSize: "0.95rem", color: "#276749", marginBottom: "1.25rem" }}>
                  ✅ Com contrato corporativo
                </h3>
                {[
                  "Faturamento único no fechamento do mês",
                  "Nota fiscal em nome do CNPJ da empresa",
                  "Custo previsível por colaborador/rota",
                  "Relatório completo para auditoria interna",
                  "Zero burocracia de reembolso",
                ].map((item) => (
                  <p key={item} style={{ color: "#22543D", fontSize: "0.85rem", marginBottom: "0.6rem", lineHeight: 1.5 }}>
                    • {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Link para executivo — diferença clara entre os serviços */}
            <div style={{
              marginTop: "2.5rem", background: "#F5F5F5", borderRadius: "12px",
              padding: "1.5rem 2rem", display: "flex",
              flexWrap: "wrap", justifyContent: "space-between",
              alignItems: "center", gap: "1rem",
              border: "1px solid #E8E8E8",
            }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.25rem" }}>
                  Precisa de transporte sem contrato mensal?
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "0.85rem" }}>
                  Nosso táxi executivo atende corridas pontuais e agendadas, sem vínculo contratual.
                </p>
              </div>
              <Link href="/taxi-executivo-londrina"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#0A0A0A", color: "#FFCC00",
                  fontWeight: 700, fontSize: "0.875rem",
                  padding: "0.75rem 1.25rem", borderRadius: "8px",
                  textDecoration: "none", whiteSpace: "nowrap",
                }}>
                Ver táxi executivo →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ — exclusiva de gestão de frota e contratos
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-emp-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-emp-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas frequentes — transporte empresarial em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas comuns de gestores de frota e departamentos de RH
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
                    <span aria-hidden="true"
                      style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
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
            CTA FINAL — foco em proposta, não em corrida imediata
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Solicitar proposta de transporte empresarial"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem",
            }}>
              Pronto para contratar transporte corporativo em Londrina?
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Envie uma mensagem com o porte da empresa e a demanda estimada.
              A proposta chega em até 24 horas, sem compromisso.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waEmpresarial} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#0A0A0A", color: "#FFCC00",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar proposta
              </a>
              <Link href="/contato"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "transparent", color: "#0A0A0A",
                  fontWeight: 700, fontSize: "1rem",
                  padding: "1rem 2rem", borderRadius: "8px",
                  border: "2px solid #0A0A0A", textDecoration: "none",
                }}>
                Falar com consultor
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            LINKS INTERNOS + FOOTER
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Outros serviços"
          style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A",
              marginBottom: "1.25rem", textAlign: "center",
            }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-executivo-londrina", label: "Táxi Executivo (corridas avulsas)" },
                { href: "/taxi-aeroporto-londrina", label: "Transfer Aeroporto" },
                { href: "/taxi-24-horas-londrina", label: "Táxi 24 Horas" },
                { href: "/taxi-hospital-londrina", label: "Táxi para Hospitais" },
                { href: "/taxi-com-cadeirinha-londrina", label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba", label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa", label: "Londrina → Maringá" },
                { href: "/contato", label: "Fale Conosco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block",
                  background: "#F5F5F5", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600,
                  padding: "8px 16px", borderRadius: "999px",
                  border: "1px solid #E8E8E8", textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer aria-label="Rodapé"
          style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{
            maxWidth: "72rem", margin: "0 auto",
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "center", gap: "1.5rem",
          }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                {business.shortName}
              </Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transporte Empresarial · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>
                  {business.phoneDisplay}
                </a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Solicitar proposta →</Link>
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
