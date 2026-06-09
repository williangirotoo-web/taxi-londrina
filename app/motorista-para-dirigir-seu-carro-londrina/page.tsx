/**
 * app/motorista-para-dirigir-seu-carro-londrina/page.tsx
 *
 * KEYWORD PRINCIPAL: motorista para dirigir meu carro londrina
 * KEYWORDS SECUNDÁRIAS: contratar motorista londrina · DDC londrina ·
 *   motorista para viagem longa · motorista particular para viagem ·
 *   condutor particular londrina
 *
 * CONCEITO: cliente possui veículo e contrata APENAS o motorista
 *   DDC = Dirigir com o Dono do Carro
 *
 * ANTI-CANIBALIZAÇÃO (varredura completa 37 páginas — zero conflito):
 *   ✅ /motorista-executivo-londrina     → veículo DO MOTORISTA (Toyota Corolla)
 *   ✅ /taxi-executivo-londrina          → veículo DO MOTORISTA + corrida pontual
 *   ✅ /transfer-corporativo-londrina    → veículo DO MOTORISTA + trajeto A→B
 *   ✅ /motorista-particular-aeroporto  → recepção no aeroporto LDB, veículo do motorista
 *   Esta página → veículo DO CLIENTE, contrata APENAS o condutor
 *
 * serviceType: Condutor Particular — único no projeto
 *
 * CASOS DE USO: viagens longas (SP/Curitiba), cirurgia, casamentos,
 *   eventos, idosos, noturno, cansaço, corporativo
 *
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

export const metadata: Metadata = {
  ...pageMetadata.motoristaCarro,
  alternates: { canonical: `${business.url}/motorista-para-dirigir-seu-carro-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Motorista para Dirigir Seu Carro em Londrina — Condutor Particular DDC",
  description:
    "Serviço de condutor particular (DDC) em Londrina. " +
    "Você tem o veículo — nós fornecemos o motorista profissional. " +
    "Viagens longas para São Paulo e Curitiba, retorno de cirurgia, casamentos, " +
    "eventos, motorista para idosos e deslocamentos noturnos.",
  serviceType: "Condutor Particular",
  url: `${business.url}/motorista-para-dirigir-seu-carro-londrina`,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba"],
  image: `${business.url}/og-taxi-executivo-londrina.jpg`,
})

const faqItems = [
  {
    question: "Posso contratar apenas o motorista, sem o veículo?",
    answer:
      "Sim. Esse é exatamente o serviço de condutor particular — também chamado de DDC " +
      "(Dirigir com o Dono do Carro). Você disponibiliza o seu próprio veículo " +
      "e contratamos apenas o motorista profissional habilitado. " +
      "O motorista dirige no seu carro, seguindo o seu roteiro e horários.",
  },
  {
    question: "O motorista realmente dirige o meu próprio carro?",
    answer:
      "Sim. O condutor particular dirige o veículo do contratante. " +
      "Você mantém total controle sobre o roteiro e os horários. " +
      "O motorista tem CNH válida, experiência em direção defensiva e " +
      "está habituado a diferentes modelos de veículos — sedan, SUV, minivan e utilitários.",
  },
  {
    question: "Posso contratar o motorista para uma viagem interestadual?",
    answer:
      "Sim. O serviço de condutor particular cobre viagens intermunicipais e interestaduais. " +
      "As rotas mais frequentes são Londrina → São Paulo (450 km), " +
      "Londrina → Curitiba (398 km) e Londrina → Ourinhos (130 km). " +
      "Para viagens acima de 6 horas, recomendamos combinar escalas e tempo de descanso " +
      "do motorista conforme a legislação de trânsito.",
  },
  {
    question: "O motorista pode permanecer comigo durante todo o dia?",
    answer:
      "Sim. Oferecemos contratação por período: meio período (4h), " +
      "diária completa (8h) ou diária estendida (12h). " +
      "Durante o período contratado, o condutor aguarda entre cada compromisso, " +
      "gerencia o estacionamento e mantém o veículo disponível para cada deslocamento " +
      "dentro do roteiro planejado.",
  },
  {
    question: "Vocês emitem nota fiscal para o serviço de condutor particular?",
    answer:
      "Sim. Emitimos nota fiscal para pessoas físicas e jurídicas. " +
      "Para empresas que contratam o serviço regularmente — " +
      "como motorista para diretores, visitantes ou eventos corporativos — " +
      "oferecemos faturamento mensal com relatório de horas e trajetos.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Motorista para Dirigir Seu Carro", url: "/motorista-para-dirigir-seu-carro-londrina" },
])

const waDDC = whatsappUrl(
  "Olá! Preciso contratar um motorista para dirigir o meu próprio carro em Londrina. Pode me passar informações?"
)

const casosDeUso = [
  {
    icon: "🛣️",
    titulo: "Viagem longa para São Paulo",
    desc: "Você vai de carro mas prefere não dirigir os 450 km pela Castelo Branco. O condutor assume o volante enquanto você descansa, trabalha ou dorme no banco traseiro.",
    destaque: true,
  },
  {
    icon: "🏙️",
    titulo: "Viagem para Curitiba",
    desc: "398 km pela BR-376. Comum para compromissos corporativos, consultas médicas especializadas ou visitas a familiares. Você chega descansado.",
    destaque: false,
  },
  {
    icon: "💼",
    titulo: "Viagem corporativa",
    desc: "Diretor ou executivo que precisa se deslocar de carro da empresa com motorista. Mantém o veículo corporativo e contrata apenas o condutor.",
    destaque: false,
  },
  {
    icon: "🏥",
    titulo: "Retorno de cirurgia",
    desc: "Após procedimento cirúrgico ou anestesia, a legislação proíbe dirigir. Contrate um condutor para o retorno — você vai no seu próprio carro, com conforto e segurança.",
    destaque: true,
  },
  {
    icon: "💍",
    titulo: "Casamentos e eventos",
    desc: "Noivos, padrinhos ou convidados que querem chegar e partir no próprio veículo sem preocupação com direção — especialmente se houver consumo de bebida alcoólica.",
    destaque: false,
  },
  {
    icon: "👴",
    titulo: "Motorista para idosos",
    desc: "Famílias que têm idosos com veículo mas com mobilidade ou visão reduzida. O condutor particular acompanha nas consultas, compras e rotina.",
    destaque: false,
  },
  {
    icon: "🌙",
    titulo: "Viagem noturna",
    desc: "Deslocamentos noturnos onde o cansaço representa risco real. O motorista profissional conduz enquanto você recarrega as energias.",
    destaque: false,
  },
  {
    icon: "😴",
    titulo: "Cliente cansado",
    desc: "Você tem o carro mas após um dia intenso de trabalho ou uma viagem longa prefere não assumir o volante. Segurança sem abrir mão do próprio veículo.",
    destaque: false,
  },
]

const pacotes = [
  { label: "Meio período", horas: "4h", desc: "Manhã ou tarde. Consultas, compromissos pontuais ou retorno de procedimento." },
  { label: "Diária completa", horas: "8h", popular: true, desc: "Jornada de trabalho inteira. O condutor aguarda entre compromissos." },
  { label: "Viagem longa", horas: "Por km", desc: "Londrina → SP, Curitiba, Ourinhos e outros destinos. Orçamento por rota." },
]

const diferenças = [
  {
    servico: "Condutor particular (esta página)",
    veiculo: "🚗 Seu carro",
    modelo: "Só o motorista",
    ideal: "Você tem o carro e quer um condutor",
    destaque: true,
  },
  {
    servico: "Motorista executivo",
    veiculo: "🚙 Toyota Corolla do motorista",
    modelo: "Motorista + veículo",
    ideal: "Você não tem carro ou quer veículo premium",
    destaque: false,
  },
  {
    servico: "Táxi executivo",
    veiculo: "🚙 Veículo do motorista",
    modelo: "Corrida pontual A→B",
    ideal: "Corrida única sem espera",
    destaque: false,
  },
  {
    servico: "Transfer corporativo",
    veiculo: "🚙 Veículo do motorista",
    modelo: "Trajeto específico",
    ideal: "Viagem pontual com veículo incluso",
    destaque: false,
  },
]

export default function MotoristaDirigirCarroLondrinaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Motorista para Dirigir Seu Carro</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Motorista para dirigir seu carro em Londrina — condutor particular DDC"
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
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Condutor Particular · DDC · Londrina · Seu carro, nosso motorista
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Motorista para Dirigir Seu Carro em Londrina
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)", fontWeight: 600, marginTop: "0.5rem" }}>
                  Condutor profissional para viagens, eventos, cirurgias, retorno de festas e deslocamentos de longa distância.
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Você tem o veículo — nós fornecemos o motorista. Contrate um condutor particular
                habilitado para dirigir seu próprio carro em Londrina e região.
                Viagens para São Paulo, Curitiba, retorno de cirurgia, casamentos e muito mais.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waDDC} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Contratar condutor agora
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ Seu carro, nosso motorista", "✅ Viagens longas SP / Curitiba", "✅ Cirurgia e eventos", "✅ Nota fiscal", "✅ Por hora ou diária"].map((item) => (
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
          background: "#FFCC00", padding: "0.875rem 1.5rem",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", margin: 0 }}>Motorista para Dirigir Seu Carro · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#1A1A1A", margin: 0 }}>DDC · Condutor profissional · Seu veículo · Viagens e eventos</p>
          </div>
          <a href={waDDC} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={16} />
            Contratar agora
          </a>
        </div>

        {/* DIFERENCIAÇÃO */}
        <section aria-labelledby="dif-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="dif-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Condutor particular vs outros serviços — entenda a diferença
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              A distinção principal é simples: quem é dono do veículo?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "820px", margin: "0 auto" }}>
              {diferenças.map((row) => (
                <div key={row.servico} style={{
                  display: "grid", gridTemplateColumns: "2fr 1.2fr 1.5fr 2fr",
                  gap: "1rem", alignItems: "center",
                  background: row.destaque ? "#0A0A0A" : "#F9F9F9",
                  borderRadius: "10px", padding: "1rem 1.5rem",
                  border: row.destaque ? "2px solid #FFCC00" : "1px solid #E8E8E8",
                }}>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: row.destaque ? "#FFCC00" : "#0A0A0A", margin: 0 }}>{row.servico}</p>
                  <p style={{ fontSize: "0.825rem", color: row.destaque ? "#D0D0D0" : "#3A3A3A", margin: 0 }}>{row.veiculo}</p>
                  <p style={{ fontSize: "0.825rem", color: row.destaque ? "#D0D0D0" : "#3A3A3A", margin: 0 }}>{row.modelo}</p>
                  <p style={{ fontSize: "0.8rem", color: row.destaque ? "#9a9a9a" : "#6B6B6B", margin: 0, fontStyle: "italic" }}>{row.ideal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section aria-labelledby="casos-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="casos-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Quando contratar um motorista para o seu carro em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Situações reais em que nossos clientes contratam o serviço
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {casosDeUso.map((c) => (
                <div key={c.titulo} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: c.destaque ? "4px solid #FFCC00" : "4px solid #E8E8E8",
                  boxShadow: c.destaque ? "0 2px 12px rgba(255,204,0,0.08)" : "none",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.5rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACOTES */}
        <section aria-labelledby="pacotes-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="pacotes-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              Formas de contratar o condutor particular
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>
              Escolha o modelo que se adapta à sua necessidade
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: "820px", margin: "0 auto" }}>
              {pacotes.map((p) => (
                <div key={p.horas} style={{
                  background: "#1a1a1a", borderRadius: "16px", padding: "2rem 1.5rem",
                  border: p.popular ? "2px solid #FFCC00" : "1px solid #2a2a2a",
                  position: "relative", textAlign: "center",
                }}>
                  {p.popular && (
                    <div style={{
                      position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                      background: "#FFCC00", color: "#0A0A0A", fontWeight: 800,
                      fontSize: "0.7rem", padding: "4px 14px", borderRadius: "999px", whiteSpace: "nowrap",
                    }}>MAIS CONTRATADO</div>
                  )}
                  <p style={{ color: "#9a9a9a", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{p.label}</p>
                  <p style={{ color: "#FFCC00", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem" }}>{p.horas}</p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                  <a href={waDDC} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      background: p.popular ? "#FFCC00" : "transparent",
                      color: p.popular ? "#0A0A0A" : "#FFCC00",
                      fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem",
                      borderRadius: "8px", textDecoration: "none",
                      border: p.popular ? "none" : "2px solid #FFCC00",
                    }}>
                    <WhatsAppIcon color={p.popular ? "#0A0A0A" : "#FFCC00"} size={16} />
                    Contratar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-ddc-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-ddc-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Agendar motorista para o seu carro
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o dia, o destino e o motivo. Respondemos pelo WhatsApp em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="motorista-para-dirigir-seu-carro-londrina" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-ddc-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-ddc-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Motorista para Dirigir Seu Carro em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Tudo sobre o serviço de condutor particular (DDC)
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
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Contratar motorista para seu carro" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Seu carro, nosso motorista
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Condutor profissional habilitado para viagens longas, cirurgia,
              casamentos, eventos e qualquer situação em que você prefira não dirigir.
              Nota fiscal disponível.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waDDC} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Contratar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Serviços relacionados" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços com veículo incluso
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/motorista-executivo-londrina",           label: "Motorista Executivo (veículo incluso)" },
                { href: "/taxi-executivo-londrina",                label: "Táxi Executivo Londrina" },
                { href: "/transfer-corporativo-londrina",          label: "Transfer Corporativo" },
                { href: "/motorista-particular-aeroporto-londrina",label: "Motorista Aeroporto Londrina" },
                { href: "/taxi-londrina-sao-paulo",                label: "Táxi Londrina → São Paulo" },
                { href: "/contato",                               label: "Solicitar orçamento" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "inline-block", background: "#FFFFFF", color: "#1A1A1A",
                  fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px",
                  borderRadius: "999px", border: "1px solid #E8E8E8", textDecoration: "none",
                }}>{link.label}</Link>
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
                Condutor Particular · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
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
