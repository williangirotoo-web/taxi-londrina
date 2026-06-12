/**
 * app/motorista-executivo-londrina/page.tsx
 *
 * ANTI-CANIBALIZAÇÃO (auditoria pré-criação):
 *   ✅ /taxi-executivo-londrina → corrida avulsa ponto-a-ponto
 *      Esta página → disponibilidade por PERÍODO (4h/8h/12h)
 *   ✅ /transporte-empresarial-londrina → contrato mensal, frota, RH
 *      Esta página → contratação individual por dia, sem recorrência
 *   ✅ /transfer-corporativo-londrina → empresa contrata para visitante B2B
 *      Esta página → o próprio profissional contrata para si mesmo
 *   ✅ /transporte-executivo-eventos-londrina → frota por evento coletivo
 *      Esta página → motorista individual para agenda pessoal do profissional
 *   ✅ /motorista-particular-aeroporto-londrina → aeroporto, voo, receptivo
 *      Esta página → deslocamentos terrestres urbanos/intermunicipais por período
 *
 * KEYWORDS PROIBIDAS:
 *   ✗ "corrida avulsa" → /taxi-executivo
 *   ✗ "contrato mensal" → /transporte-empresarial
 *   ✗ "frota" → /transporte-empresarial
 *   ✗ "evento" → /transporte-eventos
 *   ✗ "aeroporto", "plaquinha", "monitoramento de voo" → /motorista-aeroporto
 *
 * KEYWORD PRINCIPAL: motorista executivo londrina
 * SERVICETYPE: Motorista Executivo Por Hora
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

export const metadata: Metadata = pageMetadata.motoristaExecutivo

const serviceSchema = buildServiceSchema({
  name: "Motorista Executivo Por Hora em Londrina",
  description:
    "Motorista executivo à disposição por período em Londrina. " +
    "Pacotes de 4 horas, 8 horas ou diária completa. " +
    "Aguarda entre reuniões. Para empresários, advogados, médicos e executivos.",
  serviceType: "Motorista Executivo Por Hora",
  url: `${business.url}/motorista-executivo-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "O motorista executivo fica à minha disposição o dia inteiro?",
    answer:
      "Sim. Nos pacotes de 8 horas ou diária (12h), o motorista permanece disponível " +
      "durante todo o período contratado — aguarda entre cada compromisso, está pronto " +
      "para o próximo deslocamento quando você precisar e adapta a rota conforme sua agenda.",
  },
  {
    question: "Motorista executivo por hora é diferente de táxi executivo?",
    answer:
      "Sim. O táxi executivo realiza uma corrida de ponto A ao ponto B e o serviço encerra. " +
      "O motorista executivo por hora fica à sua disposição durante todo o período contratado — " +
      "4, 8 ou 12 horas. É o modelo ideal para quem tem múltiplos compromissos no mesmo dia " +
      "e não quer depender de chamar táxi a cada deslocamento.",
  },
  {
    question: "Posso usar o motorista para ir a outras cidades durante o período contratado?",
    answer:
      "Sim. O pacote de diária (12h) cobre deslocamentos intermunicipais — " +
      "Maringá, Apucarana, Arapongas e outras cidades da região norte do Paraná. " +
      "Para Curitiba (398 km), recomendamos combinar um pacote específico para o trajeto. " +
      "Informe o roteiro completo no agendamento para precificação adequada.",
  },
  {
    question: "Emite nota fiscal para pessoas jurídicas?",
    answer:
      "Sim. O serviço de motorista executivo por hora é prestado com documentação " +
      "fiscal completa para PJ. Empresários, escritórios de advocacia, clínicas e " +
      "qualquer CNPJ podem solicitar nota fiscal no momento do agendamento.",
  },
  {
    question: "Com quanto tempo de antecedência devo agendar o motorista executivo?",
    answer:
      "Para pacotes de meio período (4h) e período completo (8h), recomendamos " +
      "agendamento com pelo menos 12 horas de antecedência. Para a diária completa (12h) " +
      "com roteiro definido, o ideal é 24 horas de antecedência para planejamento de rota " +
      "e disponibilidade de motorista.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Motorista Executivo Londrina", url: "/motorista-executivo-londrina" },
])

const waMotoristaExecutivo = whatsappUrl(
  "Olá! Preciso contratar um motorista executivo em Londrina por período e gostaria de solicitar orçamento."
)

const pacotes = [
  {
    label: "Meio período",
    horas: "4h",
    popular: false,
    cor: "border",
    descricao: "Manhã ou tarde. Reuniões, banco, cartório ou visitas no período.",
    ideal: "Agenda curta — 2 a 4 compromissos",
  },
  {
    label: "Período completo",
    horas: "8h",
    popular: true,
    cor: "destaque",
    descricao: "Dia completo de trabalho com múltiplos compromissos e deslocamentos.",
    ideal: "Dia cheio — mais de 4 compromissos",
  },
  {
    label: "Diária executiva",
    horas: "12h",
    popular: false,
    cor: "border",
    descricao: "Dia longo com almoço, jantar de negócios e deslocamentos noturnos.",
    ideal: "Agenda estendida — compromissos noturnos",
  },
]

const publicoAlvo = [
  { icon: "👔", titulo: "Empresários", desc: "Proprietários de empresas com agenda intensa em Londrina e região que precisam de motorista para o dia." },
  { icon: "⚖️", titulo: "Advogados", desc: "Audiências, reuniões com clientes e visitas a cartórios — com motorista aguardando entre cada compromisso." },
  { icon: "🏥", titulo: "Médicos", desc: "Plantões, visitas hospitalares e consultorias clínicas com deslocamento garantido em qualquer horário." },
  { icon: "💼", titulo: "Executivos C-level", desc: "Diretores e gerentes com agenda corporativa que precisam de produtividade máxima durante os deslocamentos." },
  { icon: "💰", titulo: "Investidores", desc: "Visitas a empresas, reuniões com gestores e road-shows em Londrina com total liberdade de horário." },
  { icon: "🌐", titulo: "Visitantes corporativos", desc: "Profissionais de outras cidades que chegam a Londrina e precisam de motorista por período para sua agenda local." },
]

const diferenciais = [
  { icon: "⏰", titulo: "Aguarda entre compromissos", desc: "O motorista permanece disponível durante todo o período — sem espera, sem custo adicional por tempo parado." },
  { icon: "📱", titulo: "Agenda adaptável", desc: "Roteiro muda durante o dia? O motorista adapta sem problemas. Você comanda, ele executa." },
  { icon: "🚗", titulo: "Veículo premium", desc: "Toyota Corolla preto, climatizado, com carregadores USB e espaço adequado para documentos e materiais." },
  { icon: "🗣️", titulo: "Bilíngue PT/EN", desc: "Atendimento em português e inglês para executivos estrangeiros ou reuniões com parceiros internacionais." },
  { icon: "📄", titulo: "Nota fiscal PJ", desc: "Documentação fiscal completa para empresas, escritórios e profissionais liberais." },
  { icon: "🔒", titulo: "Discrição garantida", desc: "Confidencialidade total sobre agenda, destinos e conteúdo de conversas durante os deslocamentos." },
]

export default function MotoristaExecutivoPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Motorista Executivo Londrina</span>
          </div>
        </nav>

        {/* ════════ HERO ════════ */}
        <section aria-label="Motorista executivo por hora em Londrina"
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
                  🚗 Motorista Executivo · Londrina · Por Hora e Diária
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Motorista Executivo em Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  À Disposição por 4h, 8h ou Diária Completa
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Você foca nas reuniões. O motorista cuida de todo o deslocamento do dia.
                Aguarda entre compromissos, adapta o roteiro e garante pontualidade
                em cada compromisso da sua agenda em Londrina.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waMotoristaExecutivo} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Contratar motorista
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Pacotes de 4h, 8h ou 12h", "✅ Aguarda entre reuniões", "✅ Nota fiscal PJ", "✅ Bilíngue PT/EN", "✅ Discrição total"].map((item) => (
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
          background: "#1a1a1a", padding: "0.875rem 1.5rem", borderBottom: "2px solid #FFCC00",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50,
          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#FFCC00", margin: 0 }}>Motorista Executivo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>4h · 8h · Diária completa — aguarda entre compromissos</p>
          </div>
          <a href={waMotoristaExecutivo} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#0A0A0A" size={16} />
            Contratar agora
          </a>
        </div>

        {/* ════════ PACOTES ════════ */}
        <section aria-labelledby="pacotes-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="pacotes-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Pacotes de motorista executivo em Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "1rem" }}>
                Escolha o período que se encaixa na sua agenda. O motorista fica à sua disposição durante todo o tempo contratado.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: "860px", margin: "0 auto" }}>
              {pacotes.map((pac) => (
                <div key={pac.horas} style={{
                  background: "#1a1a1a", borderRadius: "16px", padding: "2rem 1.5rem",
                  border: pac.popular ? "2px solid #FFCC00" : "1px solid #2a2a2a",
                  position: "relative", textAlign: "center",
                }}>
                  {pac.popular && (
                    <div style={{
                      position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                      background: "#FFCC00", color: "#0A0A0A", fontWeight: 800,
                      fontSize: "0.7rem", padding: "4px 14px", borderRadius: "999px", whiteSpace: "nowrap",
                    }}>
                      MAIS CONTRATADO
                    </div>
                  )}
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{pac.label}</p>
                  <p style={{ color: "#FFCC00", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.25rem" }}>{pac.horas}</p>
                  <p style={{ color: "#FFFFFF", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{pac.descricao}</p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.75rem", fontStyle: "italic", margin: "0 0 1.5rem" }}>{pac.ideal}</p>
                  <a href={waMotoristaExecutivo} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      background: pac.popular ? "#FFCC00" : "transparent",
                      color: pac.popular ? "#0A0A0A" : "#FFCC00",
                      fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem",
                      borderRadius: "8px", textDecoration: "none",
                      border: pac.popular ? "none" : "2px solid #FFCC00",
                    }}>
                    <WhatsAppIcon color={pac.popular ? "#0A0A0A" : "#FFCC00"} size={16} />
                    Solicitar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PÚBLICO-ALVO ════════ */}
        <section aria-labelledby="publico-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="publico-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Quem contrata motorista executivo por hora em Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem" }}>
                Profissionais e executivos que precisam de foco total durante o dia de trabalho.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {publicoAlvo.map((pub) => (
                <div key={pub.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{pub.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{pub.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{pub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DIFERENCIAIS ════════ */}
        <section aria-labelledby="diferenciais-exec-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 id="diferenciais-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Por que contratar motorista executivo em Londrina
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem" }}>
                Mais do que transporte — é produtividade e tranquilidade durante todo o dia.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map((d) => (
                <div key={d.titulo} style={{ background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem", border: "0.5px solid #E8E8E8" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{d.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{d.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ FORMULÁRIO ════════ */}
        <section aria-labelledby="form-exec-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Contratar motorista executivo em Londrina
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe a data, período desejado e roteiro.
                Respondemos em até 2 horas.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="motorista-executivo-londrina" />
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section aria-labelledby="faq-exec-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-exec-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — motorista executivo por hora em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre pacotes, disponibilidade e diferença de serviços
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
        <section aria-label="Contratar motorista executivo" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Motorista executivo à sua disposição em Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              4h, 8h ou diária completa. Aguarda entre reuniões. Nota fiscal PJ. Bilíngue.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waMotoristaExecutivo} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Contratar motorista
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços executivos" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços executivos em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-executivo-londrina",               label: "Táxi Executivo" },
                { href: "/transfer-corporativo-londrina",         label: "Transfer Corporativo" },
                { href: "/transporte-empresarial-londrina",       label: "Transporte Empresarial" },
                { href: "/transporte-executivo-eventos-londrina", label: "Transporte para Eventos" },
                { href: "/taxi-londrina-curitiba",                label: "Transfer Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",                 label: "Transfer Londrina → Maringá" },
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
                Motorista Executivo por Hora · {business.address.city}, {business.address.stateCode} ·{" "}
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
