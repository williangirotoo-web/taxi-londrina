/**
 * app/blog/page.tsx — Hub do blog
 *
 * ESTADO ATUAL: zero posts publicados → exibe estado vazio seguro.
 * QUANDO POSTS FOREM ADICIONADOS: exibe listagem com cards, categorias e filtros.
 *
 * POLÍTICA EDITORIAL — anti-Helpful Content Update:
 *   ✅ Cada post DEVE ter ≥ 800 palavras úteis sobre Londrina
 *   ✅ Cada post DEVE ter link interno para ≥ 1 página de serviço
 *   ✅ Cada post DEVE ter dado local real (bairro, hospital, rua, distância)
 *   ✅ Proibido texto AI genérico ("se você está procurando...")
 *   ✅ Proibido overlap de keyword com páginas de serviço
 *   ✅ Proibido publicar rascunho — só adicionar em lib/blog.ts após conteúdo final
 *   ✅ Política de noindex para posts com < 400 palavras (proteção HCU)
 *
 * ESTRATÉGIA DE CONEXÃO ARTIGOS → SERVIÇOS:
 *   - relatedService em lib/blog.ts vincula cada post à sua página de serviço
 *   - Seção "Saiba mais" no final de cada post linka para a página de serviço
 *   - Tags de categoria mapeiam para URLs de serviço (/guias-londrina → serviços locais)
 *
 * SITEMAP:
 *   - /blog → estático, changeFrequency: weekly
 *   - /blog/[slug] → gerado via getAllPosts() em sitemap.ts
 *   - Posts só entram no sitemap quando publicados em lib/blog.ts
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business } from "@/lib/business"
import { getAllPosts, type BlogPost } from "@/lib/blog"

export const metadata: Metadata = pageMetadata.blog

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
])

// ─── Schema WebPage para o hub do blog ───────────────────────────────────────
const blogHubSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${business.url}/blog/#blog`,
  "name": `Blog — ${business.shortName}`,
  "url": `${business.url}/blog`,
  "description":
    "Dicas, guias e informações sobre transporte e táxi em Londrina. " +
    "Conteúdo local para quem precisa se locomover na cidade.",
  "publisher": {
    "@type": "Organization",
    "@id": `${business.url}/#business`,
  },
  "inLanguage": "pt-BR",
}

// ─── Prévia de artigos planejados — mostrados no estado vazio como sugestão ──
// NÃO são artigos reais — são exemplos do que virá
const artigosPrevistos = [
  {
    categoria: "Guias Londrina",
    titulo: "Quanto custa um táxi do Centro de Londrina ao Aeroporto José Richa?",
    servico: { label: "Transfer Aeroporto", href: "/taxi-aeroporto-londrina" },
  },
  {
    categoria: "Dicas de Viagem",
    titulo: "Londrina–Curitiba de táxi vs ônibus: tempo, custo e conforto",
    servico: { label: "Táxi Londrina–Curitiba", href: "/taxi-londrina-curitiba" },
  },
  {
    categoria: "Para Empresas",
    titulo: "Reembolso de táxi vs contrato de transporte: o que sai mais barato para sua empresa?",
    servico: { label: "Transporte Empresarial", href: "/transporte-empresarial-londrina" },
  },
  {
    categoria: "Guias Londrina",
    titulo: "Como chegar ao Hospital Evangélico de Londrina de táxi",
    servico: { label: "Táxi para Hospital", href: "/taxi-hospital-londrina" },
  },
  {
    categoria: "Dicas de Viagem",
    titulo: "Táxi com cadeirinha: o que a lei exige e como verificar se é seguro",
    servico: { label: "Táxi com Cadeirinha", href: "/taxi-com-cadeirinha-londrina" },
  },
  {
    categoria: "Guias Londrina",
    titulo: "Principais bairros de Londrina e tempo médio de corrida pelo Centro",
    servico: { label: "Ver todos os serviços", href: "/" },
  },
]

// Categorias com cores
const categoriaCores: Record<string, string> = {
  "Guias Londrina": "#FFCC00",
  "Dicas de Viagem": "#60a5fa",
  "Para Empresas": "#4ade80",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const hasPosts = posts.length > 0

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(blogHubSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Blog</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HERO DO BLOG
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Blog — táxi em Londrina"
          style={{ background: "linear-gradient(150deg, #0A0A0A 0%, #111827 60%, #0A0A0A 100%)", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.25)",
                borderRadius: "999px", padding: "5px 14px", marginBottom: "1.5rem",
              }}>
                <span style={{ color: "#FFCC00", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  📝 Blog · Táxi em Londrina
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)", fontWeight: 900,
                color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Guias e dicas de transporte em Londrina
              </h1>
              <p style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "#D0D0D0", lineHeight: 1.75, maxWidth: "520px",
              }}>
                Informações locais sobre táxi, transfer e transporte em Londrina.
                Conteúdo escrito por quem conhece a cidade.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CONTEÚDO — Posts publicados ou estado vazio
        ════════════════════════════════════════════════════════════ */}
        {hasPosts ? (
          <BlogListagem posts={posts} />
        ) : (
          <BlogVazio artigosPrevistos={artigosPrevistos} categoriaCores={categoriaCores} />
        )}

        {/* ════════════════════════════════════════════════════════════
            LINKS INTERNOS — serviços relacionados
        ════════════════════════════════════════════════════════════ */}
        <section aria-label="Serviços de táxi em Londrina"
          style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0A", marginBottom: "1.25rem", textAlign: "center" }}>
              Precisa de táxi em Londrina agora?
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              {[
                { href: "/",                              label: "Táxi em Londrina" },
                { href: "/taxi-executivo-londrina",       label: "Táxi Executivo" },
                { href: "/taxi-aeroporto-londrina",       label: "Transfer Aeroporto" },
                { href: "/taxi-24-horas-londrina",        label: "Táxi 24 Horas" },
                { href: "/taxi-hospital-londrina",        label: "Táxi para Hospital" },
                { href: "/taxi-com-cadeirinha-londrina",   label: "Táxi com Cadeirinha" },
                { href: "/taxi-londrina-curitiba",        label: "Londrina → Curitiba" },
                { href: "/taxi-londrina-maringa",         label: "Londrina → Maringá" },
                { href: "/transporte-empresarial-londrina",label: "Transporte Empresarial" },
                { href: "/contato",                       label: "Fale Conosco" },
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

        {/* Footer compacto */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <p style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>Blog — Transporte em Londrina</p>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Início</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Chamar táxi →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

// ─── Listagem de posts (quando houver posts) ──────────────────────────────────
function BlogListagem({ posts }: { posts: BlogPost[] }) {
  return (
    <section aria-labelledby="posts-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <h2 id="posts-heading" style={{
          fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
          fontWeight: 800, color: "#0A0A0A", marginBottom: "3rem", textAlign: "center",
        }}>
          Artigos publicados
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              style={{
                display: "flex", flexDirection: "column",
                background: "#F9F9F9", borderRadius: "12px",
                padding: "1.75rem", border: "1.5px solid #E8E8E8",
                textDecoration: "none", color: "inherit",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", gap: "0.5rem" }}>
                <time dateTime={post.publishedAt}
                  style={{ color: "#9a9a9a", fontSize: "0.775rem" }}>
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </time>
                {post.relatedService && (
                  <span style={{ background: "#FFCC00", color: "#0A0A0A", fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: "4px", whiteSpace: "nowrap" }}>
                    Ver serviço →
                  </span>
                )}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0A0A0A", lineHeight: 1.4, flex: 1, marginBottom: "0.75rem" }}>
                {post.title}
              </h3>
              <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Estado vazio do blog (quando não há posts) ───────────────────────────────
function BlogVazio({
  artigosPrevistos,
  categoriaCores,
}: {
  artigosPrevistos: Array<{ categoria: string; titulo: string; servico: { label: string; href: string } }>
  categoriaCores: Record<string, string>
}) {
  return (
    <>
      {/* Artigos em breve */}
      <section aria-labelledby="em-breve-heading" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✏️</div>
            <h2 id="em-breve-heading" style={{
              fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)",
              fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem",
            }}>
              Artigos em produção
            </h2>
            <p style={{ color: "#6B6B6B", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              Estamos preparando guias locais sobre táxi e transporte em Londrina.
              Cada artigo terá informações reais, verificadas e úteis para quem
              mora ou visita a cidade.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
            {artigosPrevistos.map((a, i) => {
              const cor = categoriaCores[a.categoria] || "#FFCC00"
              return (
                <div key={i} style={{
                  background: "#F9F9F9", borderRadius: "12px", padding: "1.5rem",
                  border: "1.5px solid #E8E8E8", opacity: 0.75,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{
                      background: cor, color: "#0A0A0A",
                      fontSize: "0.65rem", fontWeight: 800,
                      padding: "2px 8px", borderRadius: "4px", letterSpacing: "0.05em",
                    }}>{a.categoria}</span>
                    <span style={{ color: "#C0C0C0", fontSize: "0.7rem" }}>Em breve</span>
                  </div>
                  <p style={{ color: "#3A3A3A", fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.5, marginBottom: "0.75rem" }}>
                    {a.titulo}
                  </p>
                  <Link href={a.servico.href} style={{
                    fontSize: "0.75rem", color: "#6B6B6B", textDecoration: "underline",
                    textUnderlineOffset: "2px",
                  }}>
                    Serviço relacionado: {a.servico.label}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Política editorial visível ao usuário */}
      <section aria-labelledby="politica-heading" style={{ background: "#F5F5F5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 id="politica-heading" style={{
            fontSize: "clamp(1.375rem, 2.8vw, 1.75rem)",
            fontWeight: 800, color: "#0A0A0A", marginBottom: "0.75rem", textAlign: "center",
          }}>
            Nossa política editorial
          </h2>
          <p style={{ textAlign: "center", color: "#6B6B6B", marginBottom: "3rem" }}>
            O que você pode esperar dos artigos deste blog
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.25rem", maxWidth: "900px", margin: "0 auto",
          }}>
            {[
              { icon: "📍", titulo: "Conteúdo local real", desc: "Cada artigo menciona bairros, ruas, hospitais e pontos de referência reais de Londrina. Sem texto genérico." },
              { icon: "🔗", titulo: "Ligado aos serviços", desc: "Todo artigo linka para pelo menos uma página de serviço — para quem quer ir além da leitura." },
              { icon: "📏", titulo: "Conteúdo substancial", desc: "Nenhum artigo com menos de 800 palavras úteis. Se não houver o que dizer com profundidade, não publicamos." },
              { icon: "✅", titulo: "Verificado antes de publicar", desc: "Dados de distância, tempo, preços e normas são verificados antes de qualquer publicação." },
            ].map((item) => (
              <div key={item.titulo} style={{
                background: "#FFFFFF", borderRadius: "10px", padding: "1.5rem",
                border: "1px solid #E8E8E8",
              }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0A0A0A", marginBottom: "0.4rem" }}>{item.titulo}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
