/**
 * app/transfer-londrina-guarulhos/page.tsx
 *
 * KEYWORD PRINCIPAL: transfer londrina guarulhos
 * INTENÇÃO: transacional — passageiro com voo marcado no Aeroporto GRU
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /taxi-londrina-sao-paulo → foco CIDADE SP (bairros, hospitais, empresas)
 *      Esta página → foco AEROPORTO GRU (terminais, voo, bagagem, check-in)
 *   ✅ /taxi-londrina-curitiba → BR-376, rota e destino completamente diferentes
 *   ✅ /transfer-aeroporto-londrina → aeroporto DE CHEGADA em Londrina (LDB)
 *      Esta página → aeroporto DE PARTIDA em Guarulhos (GRU)
 *
 * DIFERENCIAÇÃO SEMÂNTICA:
 *   SP é mencionado como ponto de passagem na rota (BR-369 → Bandeirantes → GRU)
 *   Nunca como destino final — quem quer ir à cidade SP usa /taxi-londrina-sao-paulo
 *
 * CONTEÚDO EXCLUSIVO:
 *   - Terminais T1 / T2 / T3 do GRU com companhias aéreas
 *   - Cálculo de horário de saída baseado no voo
 *   - Tempo de check-in doméstico vs internacional
 *   - Monitoramento de voo em tempo real
 *   - Rota BR-369 + Rodovia dos Bandeirantes
 *
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 * OG IMAGE: og-taxi-aeroporto-londrina.jpg
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
  ...pageMetadata.transferGuarulhos,
  alternates: { canonical: `${business.url}/transfer-londrina-guarulhos` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Londrina → Aeroporto Internacional de Guarulhos (GRU)",
  description:
    "Transfer particular de Londrina ao Aeroporto Internacional de Guarulhos (GRU). " +
    "470 km com monitoramento de voo em tempo real, atendimento nos terminais T1, T2 e T3 " +
    "e saída calculada pelo horário do voo.",
  serviceType: "Transfer Aeroporto Internacional",
  url: `${business.url}/transfer-londrina-guarulhos`,
  areaServed: ["Londrina", "Guarulhos", "Aeroporto Internacional de Guarulhos", "Paraná", "São Paulo"],
  image: `${business.url}/og-taxi-aeroporto-londrina.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo antes do voo devo sair de Londrina para Guarulhos?",
    answer:
      "Para voos domésticos, recomendamos sair de Londrina com 6h30 de antecedência em relação ao horário do voo. " +
      "Para voos internacionais, o ideal é 7h30 a 8h de antecedência — considerando as 5h30 a 6h de trajetória " +
      "mais o tempo de check-in, despacho de bagagem e controle de imigração. " +
      "Ao agendar, informe o horário do seu voo e calculamos exatamente o horário de saída de Londrina.",
  },
  {
    question: "O transfer cobre os três terminais do Aeroporto de Guarulhos?",
    answer:
      "Sim. Atendemos todos os terminais do Aeroporto Internacional de Guarulhos: " +
      "Terminal 1 (voos domésticos Latam), Terminal 2 (voos domésticos Gol e Azul) " +
      "e Terminal 3 (voos internacionais de todas as companhias). " +
      "Informe o terminal e a companhia aérea ao agendar para garantirmos a entrega no local correto.",
  },
  {
    question: "O motorista monitora meu voo em caso de atraso?",
    answer:
      "Sim. Acompanhamos seu voo em tempo real pelo número do voo informado no agendamento. " +
      "Se seu voo partir com atraso de Londrina ou de outra cidade com escala, " +
      "ajustamos o horário de saída de Londrina automaticamente — " +
      "sem custo adicional para atrasos de até 2 horas.",
  },
  {
    question: "Qual a rota de Londrina a Guarulhos?",
    answer:
      "A rota mais eficiente sai de Londrina pela BR-369 em direção a Ourinhos (SP), " +
      "depois segue pela SP-425 até Ourinhos, entra na SP-270 (Raposo Tavares) até Tatuí " +
      "e acessa a SP-280 (Rodovia Castelo Branco) até o Rodoanel. " +
      "A partir do Rodoanel, acessa a Rodovia dos Bandeirantes (SP-348) diretamente ao Aeroporto de Guarulhos. " +
      "Total: aproximadamente 470 km e 5h30 a 6h em condições normais.",
  },
  {
    question: "É possível fazer o transfer Londrina → Guarulhos de madrugada?",
    answer:
      "Sim. O serviço opera 24 horas, incluindo saídas na madrugada para voos com partida cedo de Guarulhos. " +
      "Saídas entre 22h e 4h têm acesso à Rodovia Bandeirantes com menor tráfego, " +
      "reduzindo o tempo de trajetória em até 30 minutos. " +
      "Agendamentos noturnos devem ser feitos com no mínimo 24 horas de antecedência.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Londrina → Guarulhos", url: "/transfer-londrina-guarulhos" },
])

const waGRU = whatsappUrl(
  "Olá! Preciso de um transfer de Londrina para o Aeroporto de Guarulhos (GRU) e gostaria de agendar."
)

const terminais = [
  { cod: "T1", cor: "#2563eb", nome: "Terminal 1", companhias: "Latam Airlines — voos domésticos e internacionais", destinos: "São Paulo (doméstico), América do Norte, Europa" },
  { cod: "T2", cor: "#16a34a", nome: "Terminal 2", companhias: "Gol, Azul — voos domésticos", destinos: "Capitais e cidades do Brasil" },
  { cod: "T3", cor: "#9333ea", nome: "Terminal 3", companhias: "American, Air France, Emirates, Iberia, KLM e outras", destinos: "Voos internacionais — Europa, América do Norte, Oriente Médio" },
]

const dadosRota = [
  { label: "Distância total", valor: "470 km" },
  { label: "Tempo médio", valor: "5h30 – 6h" },
  { label: "Pedágios estimados", valor: "~R$ 130–150" },
  { label: "Rodovias principais", valor: "BR-369 + SP-280 + SP-348" },
  { label: "Saída recomendada (doméstico)", valor: "6h30 antes do voo" },
  { label: "Saída recomendada (internacional)", valor: "7h30 – 8h antes do voo" },
]

const casosDeUso = [
  { icon: "✈️", titulo: "Voo internacional no GRU", desc: "Passageiro embarcando para Europa, América do Norte ou América Latina pelo Terminal 3 de Guarulhos." },
  { icon: "🧳", titulo: "Bagagem despachada pesada", desc: "Viajantes com malas acima de 23 kg que precisam de conforto e espaço no porta-malas sem preocupações." },
  { icon: "💼", titulo: "Executivo com conexão", desc: "Voo doméstico em Londrina → conexão em Guarulhos → destino internacional. Transfer garante o horário da conexão." },
  { icon: "👨‍👩‍👧", titulo: "Família com crianças", desc: "Transfer sem troca de veículos, sem rodoviária e sem estresse — direto de casa ao terminal do aeroporto." },
]

export default function TransferLondrinaGuarulhosPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Transfer Londrina → Guarulhos</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Transfer Londrina Guarulhos GRU"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill priority
              sizes="(max-width: 768px) 0px, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.6) 45%, transparent 100%)" }} />
          </div>

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "620px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(100,150,255,0.1)", border: "1px solid rgba(100,150,255,0.3)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#8ab4ff", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Transfer · Londrina → Aeroporto de Guarulhos · GRU · 470 km
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Transfer Londrina → Guarulhos
                <span style={{ display: "block", color: "#8ab4ff", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Aeroporto Internacional GRU · Terminais T1, T2 e T3 · 470 km
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Transfer particular de Londrina ao Aeroporto Internacional de Guarulhos.
                Monitoramento de voo em tempo real, saída calculada pelo horário do seu voo
                e entrega direta no terminal correto.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waGRU} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar transfer GRU
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#8ab4ff", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #8ab4ff", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ 470 km com hora marcada", "✅ Monitoramento de voo", "✅ T1 · T2 · T3", "✅ Doméstico e internacional", "✅ 24h"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-aeroporto-londrina.jpg" alt="" fill loading="lazy" sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 30%, transparent 75%, #0A0A0A 100%)" }} />
          </div>
        </section>

        {/* STICKY */}
        <div style={{
          background: "#0A0A0A", padding: "0.875rem 1.5rem", borderBottom: "2px solid #8ab4ff",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#8ab4ff", margin: 0 }}>Transfer Londrina → Guarulhos (GRU)</p>
            <p style={{ fontSize: "0.75rem", color: "#9a9a9a", margin: 0 }}>470 km · Terminais T1, T2 e T3 · Monitoramento de voo</p>
          </div>
          <a href={waGRU} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon size={16} />
            Agendar agora
          </a>
        </div>

        {/* DADOS DA ROTA */}
        <section aria-labelledby="rota-gru-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rota-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Rota Londrina → Aeroporto de Guarulhos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              BR-369 + Rodovia Castelo Branco + Rodovia dos Bandeirantes
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto 3rem" }}>
              {dadosRota.map((d) => (
                <div key={d.label} style={{
                  background: "#F9F9F9", borderRadius: "10px",
                  padding: "1.25rem", border: "1px solid #E8E8E8", textAlign: "center",
                }}>
                  <p style={{ color: "#6B6B6B", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>{d.label}</p>
                  <p style={{ color: "#0A0A0A", fontSize: "1rem", fontWeight: 800, margin: 0 }}>{d.valor}</p>
                </div>
              ))}
            </div>

            {/* Terminais */}
            <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.5rem", textAlign: "center" }}>
              Terminais do Aeroporto de Guarulhos (GRU)
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {terminais.map((t) => (
                <div key={t.cod} style={{
                  background: "#F9F9F9", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: `4px solid ${t.cor}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ background: t.cor, color: "#fff", fontWeight: 900, fontSize: "0.9rem", padding: "4px 12px", borderRadius: "6px" }}>{t.cod}</span>
                    <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", margin: 0 }}>{t.nome}</h4>
                  </div>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", marginBottom: "0.4rem" }}><strong>Companhias:</strong> {t.companhias}</p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.85rem", margin: 0 }}>{t.destinos}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section aria-labelledby="casos-gru-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="casos-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Quem usa o transfer Londrina → Guarulhos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Perfis reais de passageiros que fazem essa rota
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {casosDeUso.map((c) => (
                <div key={c.titulo} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderLeft: "4px solid #8ab4ff",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-gru-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem" }}>
                Agendar transfer para Guarulhos
              </h2>
              <p style={{ color: "#9a9a9a", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o número do voo e o terminal. Calculamos o horário de saída de Londrina.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="transfer-londrina-guarulhos" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-gru-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Transfer Londrina Guarulhos
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Tudo sobre a rota, terminais e horários</p>
            <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#F9F9F9", borderRadius: "10px", border: "1.5px solid #E8E8E8", overflow: "hidden" }}>
                  <summary style={{
                    padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem",
                    color: "#0A0A0A", cursor: "pointer", listStyle: "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#8ab4ff", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#6B6B6B", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section aria-label="Agendar transfer Guarulhos" style={{ background: "#0A0A0A", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#8ab4ff", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Transfer · Londrina → Aeroporto Internacional de Guarulhos (GRU)
            </p>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Chegue ao GRU no horário certo
            </h2>
            <p style={{ color: "#D0D0D0", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              470 km com monitoramento de voo. Saída calculada pelo seu horário de embarque.
              T1, T2 e T3 atendidos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waGRU} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#8ab4ff", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #8ab4ff", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section aria-label="Outras rotas" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outras rotas e serviços
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-londrina-sao-paulo",     label: "Táxi Londrina → São Paulo" },
                { href: "/taxi-londrina-curitiba",      label: "Táxi Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",       label: "Táxi Londrina → Maringá" },
                { href: "/transfer-aeroporto-londrina", label: "Transfer Aeroporto Londrina (LDB)" },
                { href: "/taxi-executivo-londrina",     label: "Táxi Executivo Londrina" },
                { href: "/contato",                    label: "Solicitar orçamento" },
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
                Transfer Londrina → Guarulhos · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#8ab4ff", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Home</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#8ab4ff", textDecoration: "none" }}>Orçamento →</Link>
            </div>
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
