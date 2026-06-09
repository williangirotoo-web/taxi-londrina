/**
 * app/taxi-londrina-sao-paulo/page.tsx
 *
 * KEYWORD PRINCIPAL: táxi londrina são paulo
 * INTENÇÃO: transacional — passageiro indo à cidade de São Paulo (bairros, hospitais, empresas)
 *
 * ANTI-CANIBALIZAÇÃO:
 *   ✅ /transfer-londrina-guarulhos → foco AEROPORTO GRU (terminais, voo, bagagem)
 *      Esta página → foco CIDADE SP (bairros, hospitais, Congonhas, Osasco, ABC)
 *   ✅ /taxi-londrina-curitiba → rota BR-376 completamente diferente
 *   ✅ /taxi-londrina-maringa → PR-317, destino oposto a SP
 *
 * DIFERENCIAÇÃO SEMÂNTICA:
 *   Guarulhos (GRU) é mencionado como opção de destino dentro de SP
 *   mas o foco é a CIDADE — bairros, hospitais, empresas, Congonhas
 *   Osasco e ABC Paulista cobertos na seção de destinos da Grande SP
 *
 * CONTEÚDO EXCLUSIVO:
 *   - Mapa de destinos em SP: Paulista, Faria Lima, Congonhas, hospitais
 *   - Horários Castelo Branco (rush vs tranquilo)
 *   - Comparação táxi vs ônibus para SP
 *   - Osasco, Santo André, São Bernardo, São Caetano como destinos
 *   - Dicas de trânsito na Grande SP
 *
 * SCHEMAS: Service + FAQPage + BreadcrumbList
 * OG IMAGE: og-taxi-londrina-curitiba.jpg
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
  ...pageMetadata.taxiSaoPaulo,
  alternates: { canonical: `${business.url}/taxi-londrina-sao-paulo` },
}

const serviceSchema = buildServiceSchema({
  name: "Táxi Londrina → São Paulo — Transfer Direto",
  description:
    "Transfer de táxi de Londrina a São Paulo pela Rodovia Castelo Branco. " +
    "Atendemos Av. Paulista, Faria Lima, Congonhas, hospitais e cidades da Grande SP " +
    "como Osasco, Santo André e São Bernardo do Campo.",
  serviceType: "Transfer Intermunicipal São Paulo",
  url: `${business.url}/taxi-londrina-sao-paulo`,
  areaServed: ["Londrina", "São Paulo", "Grande São Paulo", "Paraná", "São Paulo (estado)"],
  image: `${business.url}/og-taxi-londrina-curitiba.jpg`,
})

const faqItems = [
  {
    question: "Qual a melhor hora para sair de Londrina para São Paulo?",
    answer:
      "A melhor janela de saída de Londrina é entre 4h e 7h da manhã. " +
      "Saindo às 4h, você chega a São Paulo entre 9h e 9h30 — antes do pico do rush matinal na Castelo Branco. " +
      "Evitar saídas que chegam em SP entre 7h30 e 10h ou entre 17h e 20h " +
      "pode economizar 1 hora ou mais no trecho final da viagem dentro da cidade.",
  },
  {
    question: "O táxi cobre Osasco, Santo André e ABC Paulista?",
    answer:
      "Sim. Atendemos toda a Grande São Paulo — incluindo Osasco, Santo André, " +
      "São Bernardo do Campo, São Caetano do Sul, Diadema, Guarulhos e demais municípios " +
      "da região metropolitana. Informe o endereço exato de destino ao agendar " +
      "para calcularmos o tempo de trajetória corretamente.",
  },
  {
    question: "O táxi vai até o Aeroporto de Congonhas (CGH)?",
    answer:
      "Sim. O Aeroporto de Congonhas (CGH) fica na Zona Sul de São Paulo e é um destino frequente " +
      "nessa rota. Para voos no CGH, recomendamos sair de Londrina com 6 horas de antecedência " +
      "em relação ao horário do voo — considerando as 5h de trajetória mais o tempo de check-in.",
  },
  {
    question: "Qual a distância e o tempo de Londrina a São Paulo de táxi?",
    answer:
      "A distância é de aproximadamente 450 km pela BR-369 até Ourinhos " +
      "e depois pela Rodovia Castelo Branco (SP-280) até São Paulo. " +
      "O tempo médio é de 5 horas a 5h30 em condições normais de tráfego. " +
      "Para destinos na Zona Norte ou Guarulhos, adicione 30 a 60 minutos pelo trânsito da capital.",
  },
  {
    question: "Vale a pena ir de táxi de Londrina a São Paulo em vez de avião?",
    answer:
      "Depende do destino final em SP. Para quem vai ao centro, Paulista, Faria Lima ou hospitais, " +
      "o táxi direto elimina o deslocamento aeroporto → destino (que pode levar 1h ou mais dentro de SP). " +
      "Para famílias com crianças, pacientes em tratamento ou executivos com bagagem, " +
      "o transfer de porta a porta é mais cômodo e muitas vezes mais barato " +
      "quando somados os custos de avião + táxi no GRU ou CGH.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi Londrina → São Paulo", url: "/taxi-londrina-sao-paulo" },
])

const waSP = whatsappUrl(
  "Olá! Preciso de um táxi de Londrina para São Paulo e gostaria de agendar."
)

const dadosRota = [
  { label: "Distância total", valor: "450 km" },
  { label: "Tempo médio", valor: "5h – 5h30" },
  { label: "Pedágios estimados", valor: "~R$ 120–140" },
  { label: "Rodovias principais", valor: "BR-369 + Castelo Branco" },
  { label: "Melhor horário de saída", valor: "04h – 07h da manhã" },
  { label: "Evitar chegar entre", valor: "07h30 – 10h e 17h – 20h" },
]

const destinosSP = [
  { zona: "Centro e Paulista", destinos: ["Av. Paulista", "Jardins", "Consolação", "República", "Sé", "Liberdade"] },
  { zona: "Faria Lima e Vila Olímpia", destinos: ["Av. Faria Lima", "Itaim Bibi", "Vila Olímpia", "Berrini", "Brooklin"] },
  { zona: "Aeroportos", destinos: ["Congonhas (CGH)", "Guarulhos (GRU)", "Campo de Marte"] },
  { zona: "Hospitais", destinos: ["Hospital Einstein (Morumbi)", "Sírio-Libanês (Bela Vista)", "A.C.Camargo (Liberdade)", "HCor (Ibirapuera)"] },
  { zona: "Grande SP — Oeste", destinos: ["Osasco", "Barueri", "Cotia", "Carapicuíba"] },
  { zona: "Grande SP — ABC", destinos: ["Santo André", "São Bernardo do Campo", "São Caetano do Sul", "Diadema"] },
]

const casosDeUso = [
  { icon: "💼", titulo: "Executivo com reunião marcada", desc: "Faria Lima, Berrini ou Paulista com horário fixo. Transfer garante chegada no horário sem depender de transferências." },
  { icon: "🏥", titulo: "Consulta ou tratamento médico", desc: "Hospital Einstein, Sírio-Libanês, A.C.Camargo ou HCor. Transporte direto da porta do hospital sem estresse." },
  { icon: "👨‍👩‍👧", titulo: "Família com crianças", desc: "Sem trocas de veículo, sem rodoviária, sem metrô com malas. Porta a porta com conforto." },
  { icon: "✈️", titulo: "Voo em Congonhas (CGH)", desc: "Aeroporto de Congonhas na Zona Sul. 5h30 antes do voo é suficiente partindo de Londrina." },
]

export default function TaxiLondrinaSaoPauloPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi Londrina → São Paulo</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Táxi Londrina São Paulo transfer direto"
          style={{ background: "#0A0A0A", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper"
            style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", zIndex: 0 }}>
            <Image src="/og-taxi-londrina-curitiba.jpg" alt="" fill priority
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
                  🚗 Táxi Londrina → São Paulo · 450 km · Castelo Branco
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi Londrina → São Paulo
                <span style={{ display: "block", color: "#FFCC00", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 600, marginTop: "0.4rem" }}>
                  Paulista · Faria Lima · Congonhas · Hospitais · Grande SP
                </span>
              </h1>

              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#D0D0D0", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Transfer direto de Londrina a São Paulo pela Rodovia Castelo Branco.
                Atendemos qualquer endereço na capital e na Grande SP —
                Osasco, ABC Paulista, Guarulhos e demais municípios da região metropolitana.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waSP} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none" }}>
                  <WhatsAppIcon />
                  Agendar para São Paulo
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#FFCC00", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.75rem", borderRadius: "8px", border: "2px solid #FFCC00", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {["✅ 450 km com hora marcada", "✅ Toda a Grande SP", "✅ Congonhas incluso", "✅ Osasco e ABC", "✅ Hospitais"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-mobile-image" aria-hidden="true">
            <Image src="/og-taxi-londrina-curitiba.jpg" alt="" fill loading="lazy" sizes="100vw"
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
            <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#0A0A0A", margin: 0 }}>Táxi Londrina → São Paulo · 450 km</p>
            <p style={{ fontSize: "0.75rem", color: "#1A1A1A", margin: 0 }}>Paulista · Faria Lima · Congonhas · Osasco · ABC · Hospitais</p>
          </div>
          <a href={waSP} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#FFCC00" size={16} />
            Agendar agora
          </a>
        </div>

        {/* DADOS DA ROTA */}
        <section aria-labelledby="rota-sp-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="rota-sp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Rota Londrina → São Paulo de táxi
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              BR-369 (Londrina → Ourinhos) + SP-280 Rodovia Castelo Branco (Ourinhos → São Paulo)
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
          </div>
        </section>

        {/* DESTINOS */}
        <section aria-labelledby="destinos-sp-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="destinos-sp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Destinos atendidos em São Paulo e Grande SP
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Qualquer endereço na capital ou nos municípios da região metropolitana
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {destinosSP.map((zona) => (
                <div key={zona.zona} style={{
                  background: "#FFFFFF", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #E8E8E8",
                  borderTop: "3px solid #FFCC00",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>{zona.zona}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {zona.destinos.map((d) => (
                      <span key={d} style={{
                        background: "#F5F5F5", color: "#3A3A3A",
                        fontSize: "0.75rem", padding: "3px 8px", borderRadius: "4px",
                        border: "1px solid #E8E8E8",
                      }}>{d}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASOS DE USO */}
        <section aria-labelledby="casos-sp-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="casos-sp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.75rem", textAlign: "center" }}>
              Quem usa o táxi Londrina → São Paulo
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3rem" }}>Perfis reais de passageiros que fazem essa rota</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {casosDeUso.map((c) => (
                <div key={c.titulo} style={{
                  background: "#1a1a1a", borderRadius: "12px",
                  padding: "1.5rem", border: "1px solid #2a2a2a",
                  borderLeft: "4px solid #FFCC00",
                }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "0.4rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section aria-labelledby="form-sp-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 id="form-sp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem" }}>
                Agendar táxi para São Paulo
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Informe o endereço de destino em SP e o horário desejado. Confirmamos em minutos.
              </p>
            </div>
            <FormularioAgendamento paginaOrigem="taxi-londrina-sao-paulo" />
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-sp-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-sp-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center" }}>
              Perguntas frequentes — Táxi Londrina São Paulo
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>Rota, horários, destinos e comparações</p>
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
        <section aria-label="Agendar táxi SP" style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Táxi de Londrina para São Paulo com hora marcada
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              450 km pela Castelo Branco. Qualquer bairro ou cidade da Grande SP.
              Congonhas, Osasco, ABC e hospitais atendidos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waSP} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#FFCC00", fontWeight: 800, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none" }}>
                <WhatsAppIcon color="#FFCC00" />
                Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2rem", borderRadius: "8px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
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
                { href: "/transfer-londrina-guarulhos", label: "Transfer Londrina → Guarulhos (GRU)" },
                { href: "/taxi-londrina-curitiba",      label: "Táxi Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",       label: "Táxi Londrina → Maringá" },
                { href: "/taxi-executivo-londrina",     label: "Táxi Executivo Londrina" },
                { href: "/transfer-aeroporto-londrina", label: "Transfer Aeroporto Londrina (LDB)" },
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
                Táxi Londrina → São Paulo · {business.address.city}, {business.address.stateCode} ·{" "}
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
