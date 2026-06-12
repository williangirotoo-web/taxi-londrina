/**
 * app/transporte-terrestre-executivo-londrina/page.tsx
 *
 * TIPO: Página HUB institucional — não é uma página de rota
 * KEYWORD PRINCIPAL: transporte terrestre executivo londrina
 * KEYWORDS SECUNDÁRIAS:
 *   empresa de transporte executivo londrina
 *   transporte executivo londrina
 *   transfer corporativo interestadual
 *   viagens executivas terrestres
 *   mobilidade corporativa londrina
 *
 * FUNÇÃO NA ARQUITETURA:
 *   Camada superior — agrega os clusters premium sem competir com nenhum.
 *   Quem busca "empresa de transporte executivo" chega aqui e navega para
 *   o serviço específico. Não tem rota, não tem preço, não tem ponto A→B.
 *
 * ANTI-CANIBALIZAÇÃO (varredura completa 38 páginas — zero conflito):
 *   ✅ /taxi-londrina-sao-paulo          → rota específica 450 km
 *   ✅ /transfer-londrina-guarulhos      → rota GRU + terminais
 *   ✅ /motorista-executivo-londrina     → serviço local por hora
 *   ✅ /transfer-corporativo-londrina    → transfer específico
 *   ✅ /transporte-executivo-eventos     → eventos + feiras
 *   ✅ /transporte-empresarial-londrina  → contratos mensais
 *   (nenhuma página menciona as keywords-alvo desta HUB)
 *
 * PREÇOS: AUSENTES — página posicionada como institucional/premium
 * serviceType: Transporte Terrestre Executivo — único no projeto
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 * LINKS INTERNOS: 12 links para todos os clusters premium
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
import { business, whatsappUrl } from "@/lib/business"
import FormularioAgendamento from "@/app/components/FormularioAgendamento"

export const metadata: Metadata = {
  ...pageMetadata.transporteTerrestreExecutivo,
  alternates: { canonical: `${business.url}/transporte-terrestre-executivo-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transporte Terrestre Executivo em Londrina",
  description:
    "Empresa de transporte terrestre executivo em Londrina. " +
    "Atendemos empresas e executivos com serviços de transfer aeroporto, " +
    "viagens corporativas interestaduais, motorista executivo e condutor particular. " +
    "Cobertura em todo o Paraná e principais rotas para São Paulo e Curitiba.",
  serviceType: "Transporte Terrestre Executivo",
  url: `${business.url}/transporte-terrestre-executivo-londrina`,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba", "Brasil"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "O que é transporte terrestre executivo?",
    answer:
      "Transporte terrestre executivo é o serviço de deslocamento profissional com veículo premium, " +
      "motorista habilitado e agendamento antecipado. " +
      "Diferencia-se do táxi convencional por oferecer pontualidade garantida, " +
      "nota fiscal para empresas, motorista bilíngue e cobertura de rotas intermunicipais " +
      "e interestaduais — de viagens curtas dentro de Londrina até " +
      "transfers para São Paulo, Curitiba e o Aeroporto Internacional de Guarulhos.",
  },
  {
    question: "Vocês atendem empresas com emissão de nota fiscal?",
    answer:
      "Sim. Emitimos nota fiscal para pessoas jurídicas de qualquer porte. " +
      "Para empresas com demanda regular, oferecemos faturamento mensal centralizado " +
      "com relatório de viagens, dados de motorista e comprovante de cada trajeto. " +
      "Atendemos indústrias, cooperativas, escritórios de advocacia, " +
      "distribuidoras e qualquer empresa que precise de mobilidade executiva recorrente.",
  },
  {
    question: "Quais rotas interestaduais estão disponíveis?",
    answer:
      "Cobrimos as principais rotas a partir de Londrina: " +
      "Londrina → São Paulo (450 km pela Rodovia Castelo Branco), " +
      "Londrina → Aeroporto Internacional de Guarulhos — GRU (470 km), " +
      "Londrina → Curitiba (398 km pela BR-376), " +
      "Londrina → Maringá (118 km pela PR-317) " +
      "e Londrina → Ourinhos (130 km pela PR-218). " +
      "Para destinos fora dessas rotas, entre em contato para orçamento.",
  },
  {
    question: "É possível contratar transporte executivo para visitantes e clientes internacionais?",
    answer:
      "Sim. Nosso serviço inclui motoristas bilíngues em português e inglês, " +
      "com atendimento também em espanhol para visitantes da Argentina, Paraguai e Chile. " +
      "Para executivos internacionais que desembarcam no Aeroporto de Guarulhos (GRU) " +
      "ou no Aeroporto José Richa de Londrina (LDB), " +
      "oferecemos recepção com placa personalizada e monitoramento de voo.",
  },
  {
    question: "Qual a diferença entre transporte terrestre executivo e táxi convencional?",
    answer:
      "As principais diferenças são o modelo de contratação, o padrão do veículo e os serviços inclusos. " +
      "O táxi convencional é acionado por demanda imediata, sem garantia de veículo ou motorista específico. " +
      "O transporte terrestre executivo é agendado com antecedência, utiliza veículo premium padronizado, " +
      "inclui motorista profissional com apresentação formal, " +
      "emite nota fiscal e cobre trajetos locais e interestaduais com pontualidade garantida.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte Terrestre Executivo", url: "/transporte-terrestre-executivo-londrina" },
])

const waTTE = whatsappUrl(
  "Olá! Gostaria de saber mais sobre os serviços de transporte terrestre executivo em Londrina."
)

const servicosHub = [
  {
    icon: "✈️",
    titulo: "Transfer para Aeroporto de Guarulhos",
    desc: "Deslocamento direto de Londrina ao Aeroporto Internacional de Guarulhos (GRU). Monitoramento de voo e atendimento em T1, T2 e T3.",
    href: "/transfer-londrina-guarulhos",
    cta: "Ver transfer GRU",
  },
  {
    icon: "🏙️",
    titulo: "Transfer Londrina → São Paulo",
    desc: "Transfer para qualquer bairro da capital ou Grande SP. Paulista, Faria Lima, Congonhas, hospitais e Osasco.",
    href: "/taxi-londrina-sao-paulo",
    cta: "Ver rota SP",
  },
  {
    icon: "🏔️",
    titulo: "Transfer Londrina → Curitiba",
    desc: "Transfer intermunicipal de 398 km pela BR-376. Para negócios, consultas médicas ou conexões em Curitiba.",
    href: "/taxi-londrina-curitiba",
    cta: "Ver rota Curitiba",
  },
  {
    icon: "💼",
    titulo: "Motorista Executivo por Hora",
    desc: "Motorista com veículo premium à disposição por 4h, 8h ou 12h. Reuniões, visitas e agenda corporativa completa.",
    href: "/motorista-executivo-londrina",
    cta: "Ver motorista executivo",
  },
  {
    icon: "🚗",
    titulo: "Condutor Particular — DDC",
    desc: "Motorista profissional para dirigir o seu próprio veículo. Viagens longas, cirurgia, casamentos e eventos.",
    href: "/motorista-para-dirigir-seu-carro-londrina",
    cta: "Ver condutor particular",
  },
  {
    icon: "🤝",
    titulo: "Transfer Corporativo",
    desc: "Transfer executivo para reuniões, feiras e compromissos corporativos em Londrina e região.",
    href: "/transfer-corporativo-londrina",
    cta: "Ver transfer corporativo",
  },
  {
    icon: "🎯",
    titulo: "Transporte para Eventos",
    desc: "Logística de transporte executivo para eventos, convenções e feiras em Londrina e interior do Paraná.",
    href: "/transporte-executivo-eventos-londrina",
    cta: "Ver transporte eventos",
  },
  {
    icon: "🛬",
    titulo: "Transfer Aeroporto Londrina (LDB)",
    desc: "Recepção e transfer no Aeroporto Governador José Richa. Placa personalizada e monitoramento de voo.",
    href: "/transfer-aeroporto-londrina",
    cta: "Ver transfer LDB",
  },
]

const quandoContratar = [
  { icon: "🛣️", desc: "Viagem de negócios para São Paulo, Curitiba, Guarulhos ou outras cidades" },
  { icon: "👔", desc: "Recepção de cliente, investidor ou executivo estrangeiro em Londrina" },
  { icon: "🏭", desc: "Deslocamento entre plantas industriais, cooperativas ou unidades corporativas" },
  { icon: "🤝", desc: "Reunião corporativa com horário fixo e pontualidade crítica" },
  { icon: "✈️", desc: "Transfer para aeroporto com voo marcado — nacional ou internacional" },
  { icon: "🎤", desc: "Transporte para evento, conferência ou fair corporativa" },
  { icon: "🌍", desc: "Mobilidade para visitantes internacionais que precisam de serviço bilíngue" },
  { icon: "📋", desc: "Contrato de mobilidade corporativa recorrente com nota fiscal e relatório" },
]

const comparacao = [
  { aspecto: "Agendamento", taxi: "Por demanda imediata", tte: "Agendado com antecedência" },
  { aspecto: "Veículo", taxi: "Aleatório, sem padrão", tte: "Premium padronizado" },
  { aspecto: "Motorista", taxi: "Não identificado", tte: "Profissional, bilíngue" },
  { aspecto: "Nota fiscal", taxi: "Geralmente não emite", tte: "PF e PJ disponível" },
  { aspecto: "Rotas interestaduais", taxi: "Não cobre", tte: "SP, Curitiba, GRU e mais" },
  { aspecto: "Contrato mensal", taxi: "Não disponível", tte: "Com relatório e faturamento" },
]

const perfisAtendidos = [
  { icon: "🏢", titulo: "Empresas (PJ)", desc: "Contratos de mobilidade, NF e relatório mensal de viagens." },
  { icon: "👔", titulo: "Executivos", desc: "Serviço premium B2C para profissionais que exigem pontualidade." },
  { icon: "🌍", titulo: "Visitantes internacionais", desc: "Atendimento em EN, ES e PT para estrangeiros em Londrina." },
  { icon: "🌾", titulo: "Agronegócio", desc: "Cooperativas, tradings e empresas do setor no norte do Paraná." },
]

export default function TransporteTerrestreExecutivoLondrinaPage() {
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
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transporte Terrestre Executivo</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Transporte terrestre executivo em Londrina"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>

          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(80,200,120,0.1)", border: "1px solid rgba(80,200,120,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#50c878", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Empresa de Transporte Terrestre Executivo · Londrina · Paraná
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transporte Terrestre Executivo em Londrina
                <span style={{ display: "block", color: "#50c878", fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 600, marginTop: "0.5rem" }}>
                  Viagens corporativas · Transfer aeroporto · Rotas interestaduais · Motorista executivo
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Empresa especializada em transporte terrestre executivo a partir de Londrina.
                Atendemos empresas, executivos e visitantes internacionais com serviços
                de mobilidade premium — do deslocamento local às rotas interestaduais.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waTTE} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Falar com especialista
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#50c878", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #50c878", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Veículo premium", "✅ Nota fiscal PJ", "✅ Motorista bilíngue EN/PT/ES", "✅ Rotas interestaduais", "✅ 24 horas"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #50c878",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#50c878", margin: 0 }}>Transporte Terrestre Executivo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>Viagens corporativas · Aeroportos · Rotas interestaduais · Motorista executivo</p>
          </div>
          <a href={waTTE} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Falar agora
          </a>
        </div>

        {/* ════════ SERVIÇOS HUB ════════ */}
        <section aria-labelledby="servicos-hub-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="servicos-hub-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Serviços de transporte terrestre executivo disponíveis
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
                Cada serviço tem estrutura dedicada, veículo adequado e motorista especializado para o tipo de demanda.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {servicosHub.map((s) => (
                <div key={s.href} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: "3px solid #50c878",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{s.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem", flex: 1 }}>{s.desc}</p>
                  <Link href={s.href} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: "#0A0A0A", color: "#FFFFFF",
                    fontSize: "0.8rem", fontWeight: 700, padding: "8px 14px",
                    borderRadius: "6px", textDecoration: "none", width: "fit-content",
                  }}>
                    {s.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ QUANDO CONTRATAR ════════ */}
        <section aria-labelledby="quando-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="quando-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Quando contratar transporte terrestre executivo
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Situações em que o padrão executivo faz diferença real
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
              {quandoContratar.map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "1rem",
                  background: "#FFFFFF", borderRadius: "10px",
                  padding: "1.25rem", border: "1px solid #E8E8E8",
                }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <p style={{ color: "#3A3A3A", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ EMPRESAS E EXECUTIVOS ════════ */}
        <section aria-labelledby="perfis-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="perfis-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              Atendemos empresas e passageiros executivos
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>
              Serviços adaptados para cada perfil de contratante
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
              {perfisAtendidos.map((p) => (
                <div key={p.titulo} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #2a2a2a",
                  borderTop: "3px solid #50c878",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{p.titulo}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3rem", textAlign: "center" }}>
              <a href={waTTE} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Solicitar proposta para empresa
              </a>
            </div>
          </div>
        </section>

        {/* ════════ COMPARAÇÃO ════════ */}
        <section aria-labelledby="comp-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="comp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Táxi comum vs Transporte Terrestre Executivo
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              As diferenças práticas para quem precisa de mobilidade profissional
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: "0", borderRadius: "12px", overflow: "hidden", border: "1px solid #E8E8E8" }}>
                {/* Header */}
                <div style={{ background: "#F5F5F5", padding: "0.875rem 1rem", fontWeight: 700, fontSize: "0.8rem", color: "#6B6B6B", textTransform: "uppercase", letterSpacing: "0.06em" }}> </div>
                <div style={{ background: "#F5F5F5", padding: "0.875rem 1rem", fontWeight: 700, fontSize: "0.85rem", color: "#9a9a9a", textAlign: "center", borderLeft: "1px solid #E8E8E8" }}>Táxi comum</div>
                <div style={{ background: "#0A0A0A", padding: "0.875rem 1rem", fontWeight: 700, fontSize: "0.85rem", color: "#50c878", textAlign: "center", borderLeft: "1px solid #2a2a2a" }}>Transporte Executivo</div>
                {/* Rows */}
                {comparacao.map((row, i) => (
                  <>
                    <div key={`a-${i}`} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F9F9F9", padding: "0.875rem 1rem", fontSize: "0.825rem", fontWeight: 700, color: "#0A0A0A", borderTop: "1px solid #E8E8E8" }}>{row.aspecto}</div>
                    <div key={`b-${i}`} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F9F9F9", padding: "0.875rem 1rem", fontSize: "0.825rem", color: "#9a9a9a", borderLeft: "1px solid #E8E8E8", borderTop: "1px solid #E8E8E8" }}>❌ {row.taxi}</div>
                    <div key={`c-${i}`} style={{ background: i % 2 === 0 ? "#0d1a0d" : "#0a150a", padding: "0.875rem 1rem", fontSize: "0.825rem", color: "#D0D0D0", borderLeft: "1px solid #1a2a1a", borderTop: "1px solid #1a2a1a" }}>✅ {row.tte}</div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ FORMULÁRIO ════════ */}
        <section aria-labelledby="form-tte-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-tte-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Solicitar transporte terrestre executivo
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Preencha o formulário ou entre em contato pelo WhatsApp. Nossa equipe responde em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transporte-terrestre-executivo-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-tte-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-tte-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Transporte Terrestre Executivo em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              O que empresas e executivos mais perguntam antes de contratar
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#50c878", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Solicitar transporte executivo" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#50c878", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transporte Terrestre Executivo · Londrina, Paraná
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Mobilidade executiva para sua empresa ou viagem
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Veículo premium. Motorista profissional. Nota fiscal.
              Rotas locais e interestaduais a partir de Londrina.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTTE} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#50c878", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #50c878", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem", borderTop: "1px solid #1a1a1a" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transporte Terrestre Executivo · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#50c878", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#50c878", textDecoration: "none" }}>Contato →</Link>
            </div>
          </div>

            {/* ── Transporte Executivo Premium ── */}
            <div style={{
              width: "100%",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "1.25rem",
              marginTop: "0.5rem",
            }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#5a5a5a", marginBottom: "0.4rem" }}>
                Transporte Executivo Premium
              </p>
              <p style={{ fontSize: "0.78rem", color: "#5a5a5a", lineHeight: 1.6, marginBottom: "0.5rem", maxWidth: "460px" }}>
                Para transfer corporativo, aeroportos e mobilidade executiva premium, conheça a Londrina Executivo.
              </p>
              <a href="https://londrinaexecutivo.com.br" rel="noopener"
                style={{ color: "#FFCC00", fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}>
                Conhecer Londrina Executivo →
              </a>
            </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
