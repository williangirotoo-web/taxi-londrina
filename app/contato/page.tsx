/**
 * app/contato/page.tsx
 *
 * OBJETIVO: Conversão — transformar visita em contato.
 *
 * HIERARQUIA DE CTAs:
 *   1º WhatsApp — href wa.me — conversão mais rápida, mobile-first
 *   2º Telefone — href tel: — ligação direta
 *   3º Formulário — proposta formal para empresas
 *
 * INTEGRAÇÃO:
 *   ✅ /transporte-empresarial-londrina — formulário de proposta corporativa
 *   ✅ Todas as páginas de serviço linkadas na seção de atalhos
 *
 * SCHEMA:
 *   ✅ ContactPage (Schema.org) — sinaliza tipo de página ao Google
 *   ✅ BreadcrumbList
 *   ✅ FAQPage — 3 perguntas sobre como entrar em contato
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"
import { FormularioProposta } from "@/app/contato/formulario"

export const metadata: Metadata = pageMetadata.contato

// ─── ContactPage schema ───────────────────────────────────────────────────────
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${business.url}/contato/#contactpage`,
  "name": `Contato — ${business.shortName}`,
  "url": `${business.url}/contato`,
  "description":
    "Página de contato e solicitação de orçamento de transporte em Londrina. " +
    "WhatsApp, telefone e formulário de proposta empresarial.",
  "mainEntity": {
    "@type": "Organization",
    "@id": `${business.url}/#business`,
  },
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contato", url: "/contato" },
])

// FAQ de contato — 3 perguntas operacionais
const faqContato = [
  {
    question: "Qual a forma mais rápida de solicitar táxi em Londrina?",
    answer:
      "WhatsApp ou ligação direta. Para corridas imediatas, o ideal é ligar ou " +
      "mandar mensagem pelo WhatsApp informando endereço de origem e destino. " +
      "O motorista confirma disponibilidade em segundos.",
  },
  {
    question: "Como solicitar orçamento de transporte empresarial em Londrina?",
    answer:
      "Preencha o formulário de proposta nesta página ou mande uma mensagem pelo " +
      "WhatsApp informando o nome da empresa, número estimado de corridas mensais " +
      "e principais destinos. Enviamos a proposta em até 24 horas.",
  },
  {
    question: "O atendimento pelo WhatsApp funciona 24 horas?",
    answer:
      "Sim. WhatsApp e telefone são atendidos 24 horas, 7 dias por semana, " +
      "incluindo madrugada, feriados e finais de semana. Para corridas imediatas, " +
      "a ligação é a forma mais ágil. Para agendamentos futuros, o WhatsApp " +
      "permite confirmar tudo com antecedência.",
  },
]

// ─── CTAs rápidos por serviço ─────────────────────────────────────────────────
const servicosCTA = [
  { href: "/taxi-executivo-londrina",         label: "Táxi Executivo",         msg: "executivo" },
  { href: "/taxi-aeroporto-londrina",         label: "Transfer Aeroporto",     msg: "aeroporto" },
  { href: "/taxi-24-horas-londrina",          label: "Táxi 24 Horas",          msg: "default" },
  { href: "/taxi-hospital-londrina",          label: "Táxi para Hospital",     msg: "hospital" },
  { href: "/taxi-com-cadeirinha-londrina",     label: "Táxi com Cadeirinha",    msg: "cadeirinha" },
  { href: "/taxi-londrina-curitiba",          label: "Londrina → Curitiba",    msg: "curitiba" },
  { href: "/taxi-londrina-maringa",           label: "Londrina → Maringá",     msg: "maringa" },
  { href: "/transporte-empresarial-londrina", label: "Proposta Empresarial",   msg: "empresarial" },
]

// WhatsApp principal
const waDefault     = whatsappUrl(whatsappMessages.default)
const waEmpresarial = whatsappUrl(whatsappMessages.empresarial)

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(contactPageSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqContato)) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Contato</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO — CTAs acima da dobra, mobile-first
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Contato e orçamento"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #111827 60%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
            background: "radial-gradient(ellipse at 80% 40%, rgba(255,204,0,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "680px" }}>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", flexShrink: 0 }} />
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Atendimento agora · Londrina, PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Fale com a gente
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  Táxi, transfer ou proposta empresarial
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "540px",
              }}>
                Para corridas imediatas, ligue ou mande WhatsApp agora.
                Para proposta de transporte empresarial, preencha o formulário
                abaixo — respondemos em até 24 horas.
              </p>

              {/* ── CTAs acima da dobra ────────────────────────────────── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", maxWidth: "440px" }}>

                {/* CTA 1 — WhatsApp */}
                <a href={waDefault} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 800, fontSize: "1.1rem",
                    padding: "1.1rem 1.75rem", borderRadius: "10px", textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                    transition: "filter 0.2s",
                  }}
                  aria-label="Chamar pelo WhatsApp agora">
                  <WhatsAppIcon size={22} />
                  <span>WhatsApp agora</span>
                  <span style={{ marginLeft: "auto", opacity: 0.8, fontSize: "0.95rem" }}>→</span>
                </a>

                {/* CTA 2 — Telefone */}
                <a href={`tel:${business.phone}`}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    background: "#FFCC00", color: "#0A0A0A",
                    fontWeight: 800, fontSize: "1.1rem",
                    padding: "1.1rem 1.75rem", borderRadius: "10px", textDecoration: "none",
                    transition: "filter 0.2s",
                  }}
                  aria-label={`Ligar para ${business.phoneDisplay}`}>
                  <span style={{ fontSize: "1.2rem" }}>📞</span>
                  <span>Ligar — {business.phoneDisplay}</span>
                  <span style={{ marginLeft: "auto", opacity: 0.6, fontSize: "0.95rem" }}>→</span>
                </a>

                {/* CTA 3 — âncora para formulário */}
                <a href="#formulario-proposta"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    background: "rgba(255,255,255,0.06)", color: "#FFFFFF",
                    fontWeight: 600, fontSize: "1rem",
                    padding: "1rem 1.75rem", borderRadius: "10px", textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    transition: "background 0.2s",
                  }}
                  aria-label="Ir para o formulário de proposta empresarial">
                  <span style={{ fontSize: "1.1rem" }}>📋</span>
                  <span>Solicitar proposta empresarial</span>
                  <span style={{ marginLeft: "auto", opacity: 0.5, fontSize: "0.95rem" }}>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            MOTIVOS DE CONTATO — 3 cards de conversão
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="motivos-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="motivos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Como podemos ajudar
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Escolha o que melhor descreve o que você precisa
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {/* Card 1 — Corrida agora */}
              <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "2rem", borderTop: "4px solid #25D366", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚖</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>Preciso de táxi agora</h3>
                <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Corrida imediata em Londrina. Ligue ou mande WhatsApp — o
                  motorista confirma disponibilidade em segundos e parte para
                  o seu endereço.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={waDefault} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none", minWidth: "120px" }}>
                    <WhatsAppIcon size={16} />WhatsApp
                  </a>
                  <a href={`tel:${business.phone}`}
                    style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none", minWidth: "120px" }}>
                    📞 Ligar
                  </a>
                </div>
              </div>

              {/* Card 2 — Agendamento */}
              <div style={{ background: "#FFFFFF", borderRadius: "14px", padding: "2rem", borderTop: "4px solid #FFCC00", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📅</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>Quero agendar com hora marcada</h3>
                <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Transfer para aeroporto, consulta médica, evento ou viagem
                  intermunicipal. Agende com antecedência pelo WhatsApp —
                  informe data, horário e destino.
                </p>
                <a href={waDefault} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon size={16} color="#0A0A0A" />
                  Agendar pelo WhatsApp
                </a>
              </div>

              {/* Card 3 — Proposta empresarial */}
              <div style={{ background: "#0A0A0A", borderRadius: "14px", padding: "2rem", borderTop: "4px solid #FFCC00", boxShadow: "0 2px 12px rgba(0,0,0,0.12)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏢</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>Preciso de proposta empresarial</h3>
                <p style={{ color: "#D0D0D0", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Contrato mensal, nota fiscal, relatório de corridas para RH
                  e financeiro. Preencha o formulário abaixo — proposta em
                  até 24 horas.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href="#formulario-proposta"
                    style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#FFCC00", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none", minWidth: "120px" }}>
                    📋 Formulário
                  </a>
                  <a href={waEmpresarial} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "transparent", color: "#25D366", fontWeight: 700, fontSize: "0.875rem", padding: "0.75rem 1rem", borderRadius: "8px", textDecoration: "none", border: "1.5px solid #25D366", minWidth: "120px" }}>
                    <WhatsAppIcon size={16} color="#25D366" />WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            ATALHOS POR SERVIÇO — conversão direta
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="servicos-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="servicos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Precisa de um serviço específico?
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Acesse a página do serviço para mais informações e CTA direto
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {servicosCTA.map((s) => (
                <Link key={s.href} href={s.href}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "#F9F9F9", borderRadius: "10px", padding: "1.1rem 1.25rem",
                    border: "1.5px solid #E8E8E8", textDecoration: "none",
                    color: "#0A0A0A", fontWeight: 600, fontSize: "0.875rem",
                    transition: "border-color 0.2s, background 0.2s, transform 0.15s",
                  }}>
                  {s.label}
                  <span style={{ color: "#FFCC00", fontWeight: 700, flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FORMULÁRIO DE PROPOSTA EMPRESARIAL
        ════════════════════════════════════════════════════════════ */}
        <section id="formulario-proposta" aria-labelledby="form-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

              {/* Coluna esquerda — texto e benefícios */}
              <div>
                <span style={{
                  background: "#FFCC00", color: "#0A0A0A",
                  fontSize: "0.7rem", fontWeight: 800,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "4px 12px", borderRadius: "4px",
                  display: "inline-block", marginBottom: "1rem",
                }}>
                  Para empresas
                </span>
                <h2 id="form-heading" style={{
                  fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
                  fontWeight: 800, color: "#0A0A0A", lineHeight: 1.25, marginBottom: "1rem",
                }}>
                  Solicite uma proposta de transporte empresarial
                </h2>
                <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  Preencha o formulário com os dados da sua empresa.
                  Analisamos o volume de corridas e enviamos uma proposta
                  personalizada com contrato, nota fiscal e relatório mensal.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                  {[
                    "Proposta enviada em até 24 horas",
                    "Contrato mensal com nota fiscal",
                    "Relatório de corridas por colaborador",
                    "Canal exclusivo para gestores",
                    "Sem franquia mínima obrigatória",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#1A1A1A", fontSize: "0.875rem" }}>
                      <span style={{ color: "#FFCC00", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/transporte-empresarial-londrina"
                  style={{ fontSize: "0.875rem", color: "#0A0A0A", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  Ver detalhes do transporte empresarial →
                </Link>
              </div>

              {/* Coluna direita — formulário WhatsApp-driven */}
              <div style={{
                background: "#FFFFFF", borderRadius: "16px", padding: "2.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: "1px solid #E8E8E8",
              }}>
                <p style={{ color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Formulário de proposta
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginBottom: "2rem" }}>
                  Ao enviar, você será redirecionado ao WhatsApp com as informações preenchidas.
                </p>

                {/* Campos do formulário — todos geram mensagem WhatsApp */}
                <FormularioProposta waEmpresarial={waEmpresarial} />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            INFORMAÇÕES DE CONTATO — NAP + horários
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="info-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="info-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Informações de contato
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              Todas as formas de chegar até nós
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem", maxWidth: "960px", margin: "0 auto",
            }}>
              {/* WhatsApp */}
              <div style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💬</div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#4ade80", marginBottom: "0.5rem" }}>WhatsApp</div>
                <a href={waDefault} target="_blank" rel="noopener noreferrer"
                  style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>
                  {business.whatsappDisplay}
                </a>
                <p style={{ color: "#9a9a9a", fontSize: "0.775rem" }}>24h, 7 dias por semana</p>
              </div>

              {/* Telefone */}
              <div style={{ background: "rgba(255,204,0,0.08)", border: "1px solid rgba(255,204,0,0.2)", borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📞</div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#FFCC00", marginBottom: "0.5rem" }}>Telefone</div>
                <a href={`tel:${business.phone}`}
                  style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "block", marginBottom: "0.25rem" }}>
                  {business.phoneDisplay}
                </a>
                <p style={{ color: "#9a9a9a", fontSize: "0.775rem" }}>24h, 7 dias por semana</p>
              </div>

              {/* Localização */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📍</div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#D0D0D0", marginBottom: "0.5rem" }}>Localização</div>
                <address style={{ fontStyle: "normal", color: "#FFFFFF", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem" }}>
                  {business.address.city}, {business.address.stateCode}
                </address>
                <p style={{ color: "#9a9a9a", fontSize: "0.775rem" }}>Atendemos toda a cidade</p>
              </div>

              {/* Horário */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🕐</div>
                <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#D0D0D0", marginBottom: "0.5rem" }}>Horário</div>
                <p style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                  {business.openingHoursDisplay}
                </p>
                <p style={{ color: "#9a9a9a", fontSize: "0.775rem" }}>Inclui feriados e madrugada</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ DE CONTATO
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-contato-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-contato-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Dúvidas sobre como entrar em contato
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Respostas rápidas antes de ligar ou mandar mensagem
            </p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqContato.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A",
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
        <section aria-label="Contato final"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem" }}>
              Pronto para chamar?
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "2rem", lineHeight: 1.7 }}>
              WhatsApp é a forma mais rápida. Para empresas, use o formulário acima.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waDefault} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />WhatsApp agora
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>{" "}·{" "}
                <a href={waDefault} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none" }}>WhatsApp</a>
              </address>
            </div>
            <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Voltar ao início</Link>
          </div>
        </footer>
      </main>
    </>
  )
}

// ─── Ícone WhatsApp ───────────────────────────────────────────────────────────
function WhatsAppIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
