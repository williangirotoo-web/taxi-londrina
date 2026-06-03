/**
 * app/taxi-com-cadeirinha-londrina/page.tsx
 *
 * KEYWORDS ALVO:
 *   - taxi com cadeirinha londrina
 *   - taxi cadeirinha bebê londrina
 *   - taxi transporte infantil londrina
 *   - táxi com assento infantil londrina
 *
 * ANTI-CANIBALIZAÇÃO aplicada:
 *   ✅ PRESENTE: cadeirinha, bebê, criança, INMETRO, assento infantil,
 *               segurança, família, grupo de peso, homologação
 *   ✅ AUSENTE:  executivo, premium, bilíngue (→ /executivo)
 *   ✅ AUSENTE:  contrato, CNPJ, RH, frota (→ /empresarial)
 *   ✅ AUSENTE:  aeroporto como keyword (→ /aeroporto)
 *   ✅ AUSENTE:  hospital, internação (→ /hospital)
 *   ✅ AUSENTE:  madrugada como foco (→ /24h)
 *
 * ANTI-THIN CONTENT:
 *   ✅ Normas INMETRO reais com Resolução CONTRAN nº 619/2016
 *   ✅ 4 grupos de peso com faixas reais
 *   ✅ FAQ exclusiva para pais e responsáveis
 *   ✅ Casos de uso específicos de família em Londrina
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

export const metadata: Metadata = pageMetadata.taxiCadeirinha

const serviceSchema = buildServiceSchema({
  name: "Táxi com Cadeirinha em Londrina",
  description:
    "Serviço de táxi com cadeirinha infantil homologada pelo INMETRO em " +
    "Londrina. Atendimento a bebês e crianças de todas as faixas etárias " +
    "com assentos adequados ao peso, instalação correta e motorista " +
    "habituado ao transporte de crianças pequenas.",
  serviceType: "Transporte Infantil",
  url: `${business.url}/taxi-com-cadeirinha-londrina`,
  areaServed: ["Londrina"],
  image: `${business.url}/og-taxi-cadeirinha-londrina.jpg`,
})

// FAQ exclusiva — perguntas que só fazem sentido para pais e responsáveis
const faqItems = [
  {
    question: "O táxi com cadeirinha em Londrina tem assento para qualquer idade de bebê?",
    answer:
      "Sim. Trabalhamos com cadeirinhas para todos os grupos: bebês recém-nascidos " +
      "até crianças de 10 anos. Ao agendar, informe a idade e o peso aproximado da " +
      "criança para que o motorista leve o assento adequado ao grupo correto — " +
      "bebês menores precisam de cadeira de berço, crianças maiores usam assento elevado.",
  },
  {
    question: "A cadeirinha usada no táxi em Londrina é homologada pelo INMETRO?",
    answer:
      "Sim. Todas as cadeirinhas utilizadas possuem homologação INMETRO, " +
      "conforme exigido pela Resolução CONTRAN nº 619/2016. O lacre de aprovação " +
      "pode ser verificado pelo passageiro antes de instalar a criança. " +
      "Não utilizamos cadeirinhas sem certificação.",
  },
  {
    question: "Posso levar minha própria cadeirinha no táxi em Londrina?",
    answer:
      "Sim. Se você preferir usar a cadeirinha da criança, o motorista auxilia " +
      "na instalação correta no banco traseiro do veículo. A instalação adequada " +
      "é fundamental para a segurança — o assento deve estar firme, sem folga, " +
      "com o cinto de segurança do carro passando pelos canais corretos da cadeirinha.",
  },
  {
    question: "Com quanto tempo de antecedência devo agendar o táxi com cadeirinha em Londrina?",
    answer:
      "Recomendamos agendar com pelo menos 2 horas de antecedência para garantir " +
      "disponibilidade da cadeirinha do grupo correto para seu filho. " +
      "Para viagens programadas — consulta médica, passeio ou evento — " +
      "o ideal é agendar pelo WhatsApp na véspera.",
  },
  {
    question: "O táxi com cadeirinha atende em todos os bairros de Londrina?",
    answer:
      "Sim. Atendemos toda Londrina com cadeirinha infantil, incluindo Centro, " +
      "Gleba Palhano, Jardim Bandeirantes, Igapó, Catuaí e demais bairros. " +
      "Para destinos fora da cidade, como pediatras em municípios vizinhos, " +
      "consulte disponibilidade pelo WhatsApp.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Táxi com Cadeirinha Londrina", url: "/taxi-com-cadeirinha-londrina" },
])

const waCadeirinha = whatsappUrl(whatsappMessages.cadeirinha)

// ─── Grupos de cadeirinha por peso — norma real ───────────────────────────────
const grupos = [
  {
    grupo: "Grupo 0 / 0+",
    peso: "Até 13 kg",
    idade: "Recém-nascido até ~12 meses",
    tipo: "Bebê conforto / cadeira de berço",
    posicao: "Contra o sentido do movimento",
    cor: "#4ade80",
    detalhe: "Posição mais segura para bebês. A cabeça, pescoço e coluna são protegidos nos impactos frontais.",
  },
  {
    grupo: "Grupo I",
    peso: "9 a 18 kg",
    idade: "~9 meses a 4 anos",
    tipo: "Cadeirinha com arnês de 5 pontos",
    posicao: "Sentido do movimento",
    cor: "#FFCC00",
    detalhe: "Arnês de 5 pontos distribui a força do impacto pelo tronco inteiro, não apenas pelo colo.",
  },
  {
    grupo: "Grupo II",
    peso: "15 a 25 kg",
    idade: "~3 a 6 anos",
    tipo: "Assento com apoio lateral",
    posicao: "Sentido do movimento",
    cor: "#fb923c",
    detalhe: "Criança já usa o cinto do carro, guiado pelos canais da cadeirinha para o posicionamento correto.",
  },
  {
    grupo: "Grupo III",
    peso: "22 a 36 kg",
    idade: "~6 a 10 anos",
    tipo: "Assento elevado (booster)",
    posicao: "Sentido do movimento",
    cor: "#60a5fa",
    detalhe: "Eleva a criança para que o cinto de segurança do carro passe pelo ponto correto do ombro.",
  },
]

// ─── Casos de uso específicos em Londrina ────────────────────────────────────
const casosDeUso = [
  { icon: "🏥", titulo: "Pediatra e consultas médicas", desc: "Levar bebê ou criança ao pediatra, vacina ou especialista em Londrina sem precisar de carro próprio." },
  { icon: "🎂", titulo: "Aniversários e eventos infantis", desc: "Festas, eventos de escola e comemorações — toda a família, incluindo o bebê, com segurança." },
  { icon: "🛫", titulo: "Viagens com criança pequena", desc: "Indo ou voltando de viagem com bebê e muita bagagem. A cadeirinha já está no carro, você só entra." },
  { icon: "👵", titulo: "Visita a parentes em Londrina", desc: "Avós, tios e parentes que recebem a família com bebê e não têm carro ou cadeirinha adequada." },
  { icon: "🏫", titulo: "Escola e atividades extracurriculares", desc: "Levar ou buscar criança na escola, aula de natação, ballet ou judô quando os pais não podem." },
  { icon: "🌧️", titulo: "Dias de chuva ou carro na oficina", desc: "Quando o carro da família está indisponível e a criança precisa ir a algum lugar com segurança." },
]

export default function TaxiCadeirinhaPage() {
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
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Táxi com Cadeirinha Londrina</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO — tom familiar, segurança como valor principal
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Táxi com cadeirinha em Londrina"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #0d1a0f 60%, #0A0A0A 100%)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, right: 0, width: "45%", height: "100%",
            background: "radial-gradient(ellipse at 80% 40%, rgba(255,204,0,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "5rem 1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "700px" }}>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  👶 Transporte Infantil · Londrina, PR
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Táxi com Cadeirinha em Londrina
                <span style={{
                  display: "block", color: "#FFCC00",
                  fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                  fontWeight: 600, marginTop: "0.4rem",
                }}>
                  Segurança infantil homologada pelo INMETRO
                </span>
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75,
                marginBottom: "2.5rem", maxWidth: "580px",
              }}>
                Cadeirinha adequada para cada faixa etária e peso do seu filho.
                Atendemos bebês recém-nascidos até crianças de 10 anos em Londrina,
                com instalação correta e cadeirinhas certificadas pelo INMETRO.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a href={waCadeirinha} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#25D366", color: "#FFFFFF",
                    fontWeight: 700, fontSize: "1rem",
                    padding: "0.875rem 1.75rem", borderRadius: "8px", textDecoration: "none",
                  }}
                  aria-label="Agendar táxi com cadeirinha pelo WhatsApp">
                  <WhatsAppIcon />
                  Agendar com cadeirinha
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
                {["✅ INMETRO certificada", "✅ Todos os grupos de peso", "✅ Bebê recém-nascido", "✅ Até 10 anos", "✅ Agende com 2h de antecedência"].map((item) => (
                  <span key={item} style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            NORMA LEGAL — INMETRO e CONTRAN (anti-thin content)
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="norma-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="norma-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Por que cadeirinha é obrigatória — e o que isso significa na prática
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Entenda a norma e o que verificar antes de colocar seu filho no táxi
            </p>

            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              {/* Bloco da norma */}
              <div style={{
                background: "#F9F9F9", borderRadius: "12px", padding: "2rem",
                borderLeft: "4px solid #FFCC00", marginBottom: "2rem",
              }}>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#0A0A0A", marginBottom: "0.75rem" }}>
                  Resolução CONTRAN nº 619/2016
                </h3>
                <p style={{ color: "#3A3A3A", lineHeight: 1.8, marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                  A lei brasileira exige cadeirinha ou assento elevador para crianças
                  até 10 anos ou 36 kg em todos os veículos. Isso vale para táxis,
                  carros de aplicativo e qualquer transporte particular.
                  A infração é considerada <strong>gravíssima</strong> e resulta em
                  multa e 7 pontos na CNH do motorista.
                </p>
                <p style={{ color: "#3A3A3A", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  Toda cadeirinha vendida no Brasil deve ter o <strong>lacre de homologação
                  do INMETRO</strong> — uma etiqueta impressa no produto que confirma que
                  o assento passou pelos testes de resistência exigidos pela norma.
                  Cadeirinhas importadas sem esse lacre não são legais para uso no Brasil.
                </p>
              </div>

              {/* O que verificar */}
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0A0A0A", marginBottom: "1rem" }}>
                O que verificar antes de instalar seu filho
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { ok: true,  text: "Lacre do INMETRO visível na cadeirinha (etiqueta impressa, não adesivo)" },
                  { ok: true,  text: "Assento firme, sem folga lateral — não balança mais de 2,5 cm" },
                  { ok: true,  text: "Cinto de segurança do carro passando pelos canais corretos" },
                  { ok: true,  text: "Para bebês até 13 kg: assento posicionado contra o sentido do movimento" },
                  { ok: false, text: "Evitar colocar acessórios não originais na cadeirinha — alteram a segurança" },
                  { ok: false, text: "Não usar cadeirinha com mais de 10 anos ou que sofreu impacto em acidente" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: item.ok ? "#22c55e" : "#ef4444", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>
                      {item.ok ? "✓" : "✗"}
                    </span>
                    <p style={{ color: "#3A3A3A", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            GRUPOS POR PESO — informação real e útil
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="grupos-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="grupos-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Qual cadeirinha usar — grupos por peso e idade
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Ao agendar, informe o peso e a idade da criança — levamos o assento certo
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}>
              {grupos.map((g) => (
                <div key={g.grupo} style={{
                  background: "#FFFFFF", borderRadius: "12px", padding: "1.75rem",
                  borderTop: `4px solid ${g.cor}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}>
                  <div style={{
                    display: "inline-block",
                    background: g.cor, color: "#0A0A0A",
                    fontSize: "0.75rem", fontWeight: 800,
                    padding: "3px 10px", borderRadius: "4px", marginBottom: "1rem",
                  }}>{g.grupo}</div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <p style={{ fontWeight: 700, fontSize: "1rem", color: "#0A0A0A" }}>{g.peso}</p>
                    <p style={{ color: "#6B6B6B", fontSize: "0.8rem" }}>{g.idade}</p>
                  </div>
                  <p style={{ color: "#1A1A1A", fontSize: "0.825rem", marginBottom: "0.4rem" }}>
                    <strong>Tipo:</strong> {g.tipo}
                  </p>
                  <p style={{ color: "#1A1A1A", fontSize: "0.825rem", marginBottom: "0.75rem" }}>
                    <strong>Posição:</strong> {g.posicao}
                  </p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem", lineHeight: 1.6, borderTop: "1px solid #F0F0F0", paddingTop: "0.75rem" }}>
                    {g.detalhe}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "2.5rem", background: "#0A0A0A", borderRadius: "12px",
              padding: "1.75rem 2rem", textAlign: "center",
            }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                Não sabe o grupo do seu filho?
              </p>
              <p style={{ color: "#9a9a9a", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                Informe a idade e o peso aproximado pelo WhatsApp — confirmamos qual assento levar.
              </p>
              <a href={waCadeirinha} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 700, fontSize: "0.9rem",
                  padding: "0.75rem 1.5rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#0A0A0A" />
                Confirmar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CASOS DE USO — contextos reais de família em Londrina
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="uso-heading"
          style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="uso-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Quando famílias em Londrina usam táxi com cadeirinha
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Situações reais do cotidiano com crianças pequenas
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}>
              {casosDeUso.map((c) => (
                <div key={c.titulo} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.75rem",
                  borderLeft: "4px solid #FFCC00",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem", color: "#0A0A0A" }}>{c.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            COMO FUNCIONA — fluxo simples para pais
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="como-heading"
          style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="como-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#FFFFFF",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Como agendar táxi com cadeirinha em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#9a9a9a", marginBottom: "3.5rem" }}>
              Três informações e o assento certo já estará no carro
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "2rem", maxWidth: "860px", margin: "0 auto 3rem",
            }}>
              {[
                { n: "1", title: "Mande a idade e o peso", desc: "Informe a idade e o peso aproximado do seu filho pelo WhatsApp para confirmarmos o grupo da cadeirinha." },
                { n: "2", title: "Confirme hora e endereço", desc: "Defina o horário de saída e o endereço de origem. Agendamos com antecedência mínima de 2 horas." },
                { n: "3", title: "Motorista chega preparado", desc: "O motorista chega com a cadeirinha correta já no carro. Você instala seu filho e o trajeto começa." },
              ].map((p) => (
                <div key={p.n} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "50%",
                    background: "#FFCC00", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontWeight: 900, fontSize: "1.3rem", color: "#0A0A0A",
                    margin: "0 auto 1rem",
                  }}>{p.n}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "#9a9a9a", fontSize: "0.825rem", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href={waCadeirinha} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  background: "#FFCC00", color: "#0A0A0A",
                  fontWeight: 800, fontSize: "1rem",
                  padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none",
                }}>
                <WhatsAppIcon color="#0A0A0A" />
                Agendar agora
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FAQ — exclusiva para pais e responsáveis
        ════════════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-cad-heading"
          style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 id="faq-cad-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A",
              marginBottom: "0.75rem", textAlign: "center",
            }}>
              Perguntas de pais sobre táxi com cadeirinha em Londrina
            </h2>
            <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
              Dúvidas sobre segurança, homologação e como funciona o serviço
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
        <section aria-label="Agendar táxi com cadeirinha"
          style={{ background: "#FFCC00", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 900, color: "#0A0A0A", marginBottom: "1rem",
            }}>
              Agende o táxi com cadeirinha em Londrina
            </h2>
            <p style={{ color: "#1A1A1A", fontSize: "1rem", marginBottom: "1.75rem", lineHeight: 1.7 }}>
              Informe a idade e o peso do seu filho — levamos o assento certo,
              certificado pelo INMETRO, para qualquer destino em Londrina.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCadeirinha} target="_blank" rel="noopener noreferrer"
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

        {/* LINKS INTERNOS */}
        <section aria-label="Outros serviços" style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Outros serviços de táxi em Londrina
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/taxi-hospital-londrina",          label: "Táxi para Hospitais" },
                { href: "/taxi-24-horas-londrina",          label: "Táxi 24 Horas" },
                { href: "/taxi-executivo-londrina",         label: "Táxi Executivo" },
                { href: "/taxi-aeroporto-londrina",         label: "Transfer Aeroporto" },
                { href: "/transporte-empresarial-londrina", label: "Transporte Empresarial" },
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
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.825rem", marginTop: "0.4rem", lineHeight: 1.6 }}>
                Táxi com Cadeirinha · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
