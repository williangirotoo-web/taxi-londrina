/**
 * app/transporte-executivo-eventos-londrina/page.tsx
 *
 * ANTI-CANIBALIZAÇÃO (auditoria pré-criação):
 *   ✅ /transporte-empresarial-londrina → contrato mensal recorrente, frota, RH
 *      Este artigo → evento PONTUAL, frota por dia, organizadora/empresa
 *   ✅ /taxi-executivo-londrina → corrida avulsa premium individual
 *      Este artigo → grupo, frota, eventos coletivos
 *   ✅ /motorista-particular-aeroporto-londrina → aeroporto, plaquinha, voo
 *      Este artigo → eventos terrestres, congressos, convenções
 *
 * KEYWORDS PROIBIDAS (para evitar canibalização):
 *   ✗ "contrato mensal", "nota fiscal", "relatório de corridas" → /empresarial
 *   ✗ "corridas avulsas", "taxi executivo" → /executivo
 *   ✗ "aeroporto", "plaquinha", "monitoramento de voo" → /aeroporto
 *
 * KEYWORD PRINCIPAL: transporte executivo eventos londrina
 * SERVICETYPE: Transporte Executivo para Eventos
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

export const metadata: Metadata = pageMetadata.transporteEventos

const serviceSchema = buildServiceSchema({
  name: "Transporte Executivo para Eventos em Londrina",
  description:
    "Frota executiva para eventos corporativos, médicos e institucionais em Londrina. " +
    "Atendemos ExpoLondrina, congressos, convenções, formaturas e eventos VIP. " +
    "Transporte de palestrantes, delegações e convidados com hora marcada.",
  serviceType: "Transporte Executivo para Eventos",
  url: `${business.url}/transporte-executivo-eventos-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "Atendem eventos com grande número de passageiros em Londrina?",
    answer:
      "Sim. Para eventos com muitos convidados, elaboramos um planejamento de logística " +
      "com escalonamento de horários e múltiplos veículos. Cada grupo recebe itinerário " +
      "próprio com motorista designado e ponto de embarque definido.",
  },
  {
    question: "Emitem nota fiscal para organizadoras e empresas?",
    answer:
      "Sim. O serviço de transporte para eventos é prestado com documentação fiscal " +
      "completa para pessoas jurídicas — organizadoras de eventos, cooperativas, " +
      "hospitais, universidades e empresas de qualquer porte.",
  },
  {
    question: "Atendem a ExpoLondrina e eventos no Parque de Exposições de Londrina?",
    answer:
      "Sim. A ExpoLondrina é um dos principais eventos da nossa agenda anual. " +
      "Atendemos o transporte de expositores, palestrantes, delegações e convidados VIP " +
      "para o Parque de Exposições de Londrina, com logística estruturada por dia de evento.",
  },
  {
    question: "O serviço cobre transporte de palestrantes de fora de Londrina?",
    answer:
      "Sim. Para palestrantes que chegam de outras cidades — seja pelo Aeroporto José Richa " +
      "ou pela Rodoviária de Londrina — fazemos o transporte receptivo até o local do evento " +
      "e o retorno ao ponto de embarque ao final da programação.",
  },
  {
    question: "Com quanto tempo de antecedência devo solicitar o orçamento?",
    answer:
      "Para eventos de pequeno porte (até 10 passageiros), recomendamos pelo menos " +
      "48 horas de antecedência. Para eventos maiores — congressos, convenções e feiras " +
      "como a ExpoLondrina — o ideal é solicitar com 7 a 15 dias de antecedência para " +
      "garantir disponibilidade de frota e planejamento logístico adequado.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte Executivo para Eventos", url: "/transporte-executivo-eventos-londrina" },
])

const waEventos = whatsappUrl(
  "Olá! Preciso de transporte executivo para um evento em Londrina e gostaria de solicitar um orçamento."
)

const eventos = [
  { icon: "🌾", nome: "ExpoLondrina", desc: "Maior feira agropecuária do Paraná. Parque de Exposições de Londrina. Expositores, palestrantes e delegações." },
  { icon: "🏥", nome: "Congressos Médicos", desc: "Congresso Brasileiro de Hepatologia, Congresso Paranaense de Medicina (SESA-PR) e eventos da área da saúde." },
  { icon: "🤝", nome: "Convenções Corporativas", desc: "COCAMAR, Unimed Norte do Paraná, Rede Paranaense e cooperativas agrícolas da região." },
  { icon: "🎓", nome: "Formaturas UEL e Unopar", desc: "Centenas de eventos de formatura por semestre. Transporte de formandos, convidados e homenageados." },
  { icon: "💻", nome: "Feiras de Tecnologia", desc: "Eventos no PaTLon (Parque Tecnológico de Londrina), startups e setor de inovação." },
  { icon: "🌱", nome: "Eventos do Agronegócio", desc: "Sindicato Rural de Londrina, tradings, cooperativas e eventos setoriais do agro paranaense." },
  { icon: "👔", nome: "Londrina Fashion Week", desc: "Setor têxtil e de confecção do norte do Paraná. Transporte de convidados e imprensa." },
  { icon: "🏛️", nome: "Eventos Institucionais", desc: "OAB, CRM-PR, CREA-PR, prefeitura e órgãos públicos com solenidades e audiências públicas." },
]

const tiposAtendimento = [
  { icon: "🎤", titulo: "Transporte de palestrantes", desc: "Busca em hotel ou aeroporto, transporte ao local do evento e retorno. Pontualidade garantida." },
  { icon: "👑", titulo: "Recepção de convidados VIP", desc: "Motorista designado com identificação, veículo premium e atendimento personalizado." },
  { icon: "👥", titulo: "Transporte de delegações", desc: "Grupos corporativos ou institucionais com escalonamento de horários e múltiplos veículos." },
  { icon: "🏨", titulo: "Hotel → evento → hotel", desc: "Logística completa de deslocamento para hóspedes em hotéis da Gleba Palhano e Centro." },
  { icon: "📋", titulo: "Logística de frota por dia", desc: "Planejamento completo de rotas e horários para eventos com programação intensa." },
  { icon: "🌐", titulo: "Atendimento bilíngue", desc: "Motorista com fluência em português e inglês para eventos com participantes internacionais." },
]

export default function TransporteEventosPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transporte Executivo para Eventos</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Transporte executivo para eventos em Londrina"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>

          {/* Hero desktop image */}
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image
              src="/og-taxi-executivo-londrina.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)",
            }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🎪 Transporte para Eventos · Londrina · Corporativo e Institucional
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transporte Executivo para Eventos em Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  ExpoLondrina · Congressos · Convenções · VIP
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Frota executiva para eventos corporativos, médicos e institucionais em Londrina.
                Transporte de palestrantes, delegações e convidados VIP com logística planejada
                e hora marcada.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waEventos} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Solicitar orçamento
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Palestrantes e VIPs", "✅ Frota por evento", "✅ Nota fiscal PJ", "✅ Bilíngue", "✅ Logística planejada"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero mobile */}
          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-executivo-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* CTA STICKY */}
        <div style={{
          background: "#FFCC00", padding: "0.875rem 1.5rem",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", margin: 0 }}>Transporte Executivo para Eventos · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#1A1A1A", margin: 0 }}>ExpoLondrina · Congressos · Convenções · Formaturas</p>
          </div>
          <a href={waEventos} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={16} />
            Solicitar orçamento
          </a>
        </div>

        {/* ════════ EVENTOS ATENDIDOS ════════ */}
        <section aria-labelledby="eventos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="eventos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Eventos corporativos e institucionais atendidos em Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
                Do agronegócio à medicina, de feiras tecnológicas a formaturas universitárias —
                cobrimos os principais eventos da região norte do Paraná.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {eventos.map((ev) => (
                <div key={ev.nome} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8", borderTop: "3px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{ev.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{ev.nome}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ TIPOS DE ATENDIMENTO ════════ */}
        <section aria-labelledby="tipos-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="tipos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Tipos de atendimento para eventos
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem" }}>
                Da logística de frota ao transporte individual de autoridades e palestrantes.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {tiposAtendimento.map((tipo) => (
                <div key={tipo.titulo} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.75rem", border: "0.5px solid #E8E8E8",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{tipo.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{tipo.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{tipo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DIFERENCIAIS ════════ */}
        <section aria-labelledby="diferenciais-eventos-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="diferenciais-eventos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Por que escolher a Táxi Londrina para o seu evento
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Expertise em eventos corporativos no norte do Paraná há {business.yearsActive} anos.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {[
                { icon: "📋", titulo: "Logística planejada", desc: "Itinerário detalhado por grupo, motorista designado e ponto de embarque definido para cada etapa do evento." },
                { icon: "⏰", titulo: "Pontualidade garantida", desc: "Palestrantes e convidados VIP chegam no horário. Nenhum atraso por falha de transporte." },
                { icon: "📄", titulo: "Nota fiscal para PJ", desc: "Documentação fiscal completa para organizadoras de eventos, empresas, cooperativas e instituições." },
                { icon: "🌐", titulo: "Atendimento bilíngue", desc: "Motorista fluente em português e inglês para eventos com participantes internacionais ou palestrantes estrangeiros." },
                { icon: "🚗", titulo: "Frota premium", desc: "Toyota Corolla preto, climatizado, com tomadas USB e espaço adequado para bagagens e materiais de apresentação." },
                { icon: "📱", titulo: "Coordenação em tempo real", desc: "Comunicação direta via WhatsApp durante o evento para ajustes de horário e logística de última hora." },
              ].map((item) => (
                <div key={item.titulo} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #2a2a2a",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{item.titulo}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FORMULÁRIO ════════ */}
        <section aria-labelledby="orcamento-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="orcamento-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Solicite orçamento para o seu evento
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o tipo de evento, data e número de passageiros.
                Respondemos em até 2 horas em dias úteis.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transporte-executivo-eventos-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-eventos-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-eventos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — transporte para eventos em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre logística, nota fiscal e disponibilidade de frota
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
        <section aria-label="Solicitar transporte para evento" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Transporte executivo para o seu evento em Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              ExpoLondrina, congressos, convenções, formaturas ou evento corporativo.
              Solicite orçamento agora — respondemos em até 2 horas.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waEventos} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Solicitar orçamento
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de transporte executivo em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/transporte-empresarial-londrina",   label: "Transporte Empresarial" },
                { href: "/taxi-executivo-londrina",           label: "Táxi Executivo" },
                { href: "/transfer-aeroporto-londrina",       label: "Transfer Aeroporto" },
                { href: "/motorista-particular-aeroporto-londrina", label: "Motorista Particular Aeroporto" },
                { href: "/taxi-londrina-curitiba",            label: "Transfer Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",             label: "Transfer Londrina → Maringá" },
                { href: "/contato",                          label: "Fale Conosco" },
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
                Transporte Executivo para Eventos · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Orçamento →</Link>
            </div>
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
