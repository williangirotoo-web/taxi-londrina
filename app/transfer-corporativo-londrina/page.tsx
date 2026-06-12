/**
 * app/transfer-corporativo-londrina/page.tsx
 *
 * ANTI-CANIBALIZAÇÃO (auditoria pré-criação):
 *   ✅ /transporte-empresarial-londrina → contrato mensal, frota, RH (recorrente)
 *      Esta página → viagem pontual por demanda, sem contrato
 *   ✅ /taxi-executivo-londrina → corrida avulsa individual
 *      Esta página → transfer planejado B2B, motorista aguarda entre compromissos
 *   ✅ /transporte-executivo-eventos → frota por evento coletivo
 *      Esta página → visitante individual ou pequeno grupo em agenda corporativa
 *   ✅ /transfer-aeroporto-londrina → receptivo, desembarque, plaquinha
 *      Esta página → deslocamentos terrestres hotel→reunião→hotel
 *
 * KEYWORD PRINCIPAL: transfer corporativo londrina
 * SERVICETYPE: Transfer Corporativo Executivo
 * SCHEMAS: Service + FAQPage + BreadcrumbList
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

export const metadata: Metadata = pageMetadata.transferCorporativo

const serviceSchema = buildServiceSchema({
  name: "Transfer Corporativo Executivo em Londrina",
  description:
    "Transfer executivo pontual para empresas que recebem visitantes, clientes VIP e executivos em Londrina. " +
    "Motorista aguarda entre compromissos. Rotas hotel → reunião → hotel. Sem contrato recorrente.",
  serviceType: "Transfer Corporativo Executivo",
  url: `${business.url}/transfer-corporativo-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "Transfer corporativo é diferente de táxi executivo em Londrina?",
    answer:
      "Sim. O táxi executivo é uma corrida avulsa — o passageiro chama, vai ao destino e o serviço encerra. " +
      "O transfer corporativo é um serviço planejado: o motorista recebe o itinerário completo do visitante, " +
      "aguarda entre cada compromisso e garante que todos os deslocamentos do dia ocorram no horário. " +
      "É o modelo ideal para empresas que recebem executivos, clientes VIP ou parceiros de negócios.",
  },
  {
    question: "O motorista aguarda o executivo durante reuniões?",
    answer:
      "Sim. No transfer corporativo, o motorista permanece disponível durante toda a agenda do visitante. " +
      "Enquanto o executivo está em reunião, o motorista aguarda próximo ao local e está pronto para " +
      "o próximo deslocamento quando necessário. Não há custo adicional pelo tempo de espera dentro " +
      "do pacote contratado.",
  },
  {
    question: "É possível emitir nota fiscal para a empresa contratante?",
    answer:
      "Sim. O serviço de transfer corporativo é prestado com documentação fiscal completa para " +
      "pessoas jurídicas de qualquer porte — escritórios, clínicas, indústrias, construtoras " +
      "e empresas de tecnologia. Informe o CNPJ no agendamento para emissão da nota fiscal.",
  },
  {
    question: "Qual a diferença entre transfer corporativo e transporte empresarial?",
    answer:
      "O transporte empresarial em Londrina atende empresas com demanda recorrente — " +
      "contrato mensal, frota para funcionários, relatório de corridas e faturamento consolidado. " +
      "O transfer corporativo é por demanda: a empresa contrata apenas para a visita do executivo, " +
      "sem vínculo contratual permanente. É o serviço certo para visitas pontuais de diretores, " +
      "clientes estratégicos ou parceiros de negócios.",
  },
  {
    question: "Atendem executivos internacionais que visitam empresas em Londrina?",
    answer:
      "Sim. O motorista oferece atendimento bilíngue em português e inglês para executivos " +
      "estrangeiros ou parceiros internacionais que visitam empresas do agronegócio, tecnologia " +
      "ou indústria em Londrina. O roteiro completo da visita pode ser enviado com antecedência " +
      "para planejamento de horários e rotas.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Corporativo Londrina", url: "/transfer-corporativo-londrina" },
])

const waCorporativo = whatsappUrl(
  "Olá! Preciso de transfer corporativo em Londrina para um visitante executivo e gostaria de solicitar orçamento."
)

const rotasCorporativas = [
  { de: "Hotel Gleba Palhano", para: "Sede da empresa / escritório" },
  { de: "Hotel", para: "Reunião → Almoço executivo → Reunião" },
  { de: "Hotel", para: "Tribunal / Fórum de Londrina" },
  { de: "Hotel", para: "Hospital / Clínica especializada" },
  { de: "Hotel", para: "Indústria / Planta fabril" },
  { de: "Hotel", para: "Múltiplos compromissos (motorista aguarda)" },
]

const casosDeUso = [
  { icon: "🏢", titulo: "Visita de diretor ou sócio", desc: "Executivo de outra praça visitando a sede em Londrina. Transfer completo hotel → empresa → hotel." },
  { icon: "💰", titulo: "Cliente VIP e investidor", desc: "Visita de cliente estratégico ou investidor. Atendimento premium, discreto e pontual durante toda a agenda." },
  { icon: "🌐", titulo: "Parceiro ou executivo internacional", desc: "Atendimento bilíngue (PT/EN) para estrangeiros visitando empresas do agronegócio, tecnologia ou indústria." },
  { icon: "📊", titulo: "Road-show e due diligence", desc: "Série de reuniões em um único dia. Motorista aguarda entre cada compromisso sem custo adicional." },
  { icon: "⚖️", titulo: "Advogado ou cliente em audiência", desc: "Escritórios de advocacia que precisam de transfer para sócios visitantes ou clientes em Londrina." },
  { icon: "🏥", titulo: "Especialista médico visitante", desc: "Hospitais e clínicas que recebem médico de outra cidade para procedimento ou reunião clínica." },
]

// Seção extra: Quem utiliza transfer corporativo em Londrina
const segmentos = [
  {
    icon: "⚖️",
    segmento: "Escritórios de Advocacia",
    desc:
      "Sócios visitantes de outras praças, clientes em audiências no Fórum de Londrina e " +
      "delegações jurídicas que precisam de transporte discreto e pontual durante toda a agenda.",
    exemplos: "OAB-PR, tribunais, audiências, arbitragens",
  },
  {
    icon: "🏥",
    segmento: "Clínicas e Hospitais",
    desc:
      "Médicos especialistas que chegam a Londrina para procedimentos, professores visitantes " +
      "para residências médicas e diretores de rede hospitalar em visita às unidades locais.",
    exemplos: "Hospital Evangélico, HCor, clínicas especializadas",
  },
  {
    icon: "🏭",
    segmento: "Indústrias e Cooperativas",
    desc:
      "Representantes comerciais, auditores, diretores de grupo industrial e membros de " +
      "cooperativas agrícolas da região norte do Paraná que visitam plantas em Londrina.",
    exemplos: "COCAMAR, Coamo, Copavel, indústrias do PIM",
  },
  {
    icon: "🏗️",
    segmento: "Construtoras e Incorporadoras",
    desc:
      "Investidores em visita a empreendimentos, engenheiros de outras regiões em reunião técnica " +
      "e sócios de incorporadoras que precisam de transfer durante vistorias em Londrina.",
    exemplos: "Visitas a obras, reuniões com incorporadoras locais",
  },
  {
    icon: "🎓",
    segmento: "Universidades e Institutos",
    desc:
      "Professores visitantes, reitores em agenda institucional, pesquisadores em colaboração " +
      "e palestrantes convidados por UEL, UEL, Unopar, Unifil e demais IES de Londrina.",
    exemplos: "UEL, Unopar, Unifil, Pitágoras — eventos acadêmicos",
  },
  {
    icon: "💻",
    segmento: "Empresas de Tecnologia",
    desc:
      "Investidores de venture capital, clientes enterprise em visita técnica e parceiros " +
      "de negócios de startups e empresas de software do PaTLon visitando Londrina.",
    exemplos: "PaTLon, startups de agtech, empresas de software B2B",
  },
]

export default function TransferCorporativoPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transfer Corporativo Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Transfer corporativo executivo em Londrina"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🤝 Transfer Corporativo · Londrina · B2B Executivo
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transfer Corporativo em Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Visitantes Executivos · Clientes VIP · Reuniões · Road-shows
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Transfer executivo pontual para empresas que recebem visitantes em Londrina.
                Motorista aguarda entre compromissos. Hotel → reunião → hotel.
                Sem contrato recorrente — por viagem.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waCorporativo} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Solicitar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Motorista aguarda entre reuniões", "✅ Sem contrato", "✅ Nota fiscal PJ", "✅ Bilíngue PT/EN"].map((item) => (
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

        {/* STICKY CTA */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #FFCC00",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#FFCC00", margin: 0 }}>Transfer Corporativo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>Visitantes executivos · VIP · Motorista aguarda entre compromissos</p>
          </div>
          <a href={waCorporativo} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#0A0A0A" size={16} />
            Solicitar agora
          </a>
        </div>

        {/* ════════ CASOS DE USO ════════ */}
        <section aria-labelledby="casos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="casos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Quando contratar transfer corporativo em Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                Situações reais em que o transfer corporativo resolve melhor do que um táxi convencional.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {casosDeUso.map((caso) => (
                <div key={caso.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{caso.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{caso.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{caso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ ROTAS MAIS SOLICITADAS ════════ */}
        <section aria-labelledby="rotas-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rotas-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Rotas corporativas mais solicitadas em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              O motorista planeja o itinerário e aguarda entre cada compromisso.
            </p>
            <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {rotasCorporativas.map((rota, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "#FFFFFF", borderRadius: "10px",
                  padding: "1rem 1.5rem", border: "1px solid #E8E8E8",
                }}>
                  <span style={{ background: "#FFCC00", color: "#0A0A0A", fontWeight: 800, fontSize: "0.75rem", padding: "4px 10px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                    Ponto {i + 1}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#6B6B6B", flexShrink: 0 }}>{rota.de}</span>
                  <span style={{ color: "#FFCC00", fontWeight: 700, fontSize: "1.1rem" }}>→</span>
                  <span style={{ fontSize: "0.875rem", color: "#0A0A0A", fontWeight: 600 }}>{rota.para}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ QUEM UTILIZA ════════ */}
        <section aria-labelledby="segmentos-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="segmentos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Quem utiliza transfer corporativo em Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem", maxWidth: "580px", margin: "0 auto" }}>
                Empresas e instituições de Londrina que precisam receber visitantes com qualidade e pontualidade.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {segmentos.map((seg) => (
                <div key={seg.segmento} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.75rem", border: "1px solid #2a2a2a",
                  borderTop: "3px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{seg.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{seg.segmento}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>{seg.desc}</p>
                  <p style={{ color: "#FFCC00", fontSize: "0.75rem", fontWeight: 600, margin: 0, opacity: 0.8 }}>📍 {seg.exemplos}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FORMULÁRIO ════════ */}
        <section aria-labelledby="form-corp-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-corp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Solicitar transfer corporativo
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o destino, data e número de compromissos.
                Respondemos em até 2 horas em dias úteis.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transfer-corporativo-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-corp-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-corp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — transfer corporativo Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre diferença de serviços, nota fiscal e motorista disponível
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
                    <span aria-hidden="true" style={{ color: "#FFCC00", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Solicitar transfer corporativo" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Transfer corporativo para o seu visitante em Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Motorista aguarda entre compromissos. Nota fiscal PJ. Bilíngue PT/EN.
              Sem contrato — por viagem.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCorporativo} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar transfer
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços corporativos" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços executivos e corporativos em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/transporte-empresarial-londrina",       label: "Transporte Empresarial" },
                { href: "/taxi-executivo-londrina",               label: "Táxi Executivo" },
                { href: "/transporte-executivo-eventos-londrina", label: "Transporte para Eventos" },
                { href: "/transfer-aeroporto-londrina",           label: "Transfer Aeroporto" },
                { href: "/motorista-particular-aeroporto-londrina", label: "Motorista Particular Aeroporto" },
                { href: "/taxi-londrina-curitiba",                label: "Transfer Londrina → Curitiba" },
                { href: "/contato",                              label: "Solicitar Orçamento" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block", background: "#FFFFFF", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px",
                  borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Transfer Corporativo · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Orçamento →</Link>
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

function WhatsAppIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
