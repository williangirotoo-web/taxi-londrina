/**
 * app/blog/[slug]/page.tsx — Template de artigo individual
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * REGRAS OBRIGATÓRIAS — LEIA ANTES DE CRIAR QUALQUER ARTIGO
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * 1. ADIÇÃO DE ARTIGO:
 *    Nunca adicionar slug em lib/blog.ts sem o conteúdo real existir.
 *    O post só vai ao sitemap quando está em lib/blog.ts.
 *
 * 2. MÍNIMO DE CONTEÚDO:
 *    ≥ 800 palavras úteis por artigo.
 *    Se não houver essa quantidade de conteúdo genuíno, não publicar.
 *
 * 3. CONTEÚDO LOCAL OBRIGATÓRIO:
 *    Cada artigo DEVE mencionar pelo menos:
 *    - Um bairro ou rua real de Londrina
 *    - Um dado verificável (distância, tempo, preço estimado, norma)
 *    - Um ponto de referência real (hospital, shopping, universidade)
 *
 * 4. LINK INTERNO OBRIGATÓRIO:
 *    Cada artigo DEVE ter uma seção "Saiba mais" linkando para a página
 *    de serviço definida em relatedService (lib/blog.ts).
 *
 * 5. ANTI-CANIBALIZAÇÃO:
 *    Nenhum artigo pode ter a mesma keyword principal de uma página de serviço.
 *    Exemplo PROIBIDO: artigo com keyword "taxi aeroporto londrina" (já é a /taxi-aeroporto-londrina).
 *    Exemplo PERMITIDO: "quanto custa taxi aeroporto londrina" (query informacional, não transacional).
 *
 * 6. ANTI-HCU:
 *    Proibido: "Se você está procurando...", "Neste artigo vamos ver..."
 *    Proibido: Listas de tópicos sem explicação
 *    Proibido: Texto que poderia ser de qualquer cidade do Brasil
 *    Obrigatório: Primeira pessoa ou perspectiva local
 *    Obrigatório: Dados específicos de Londrina
 *
 * 7. INDEXAÇÃO:
 *    - Artigos com ≥ 800 palavras e conteúdo local: indexar normalmente
 *    - Artigos com < 400 palavras: noindex obrigatório (proteção HCU)
 *    - Rascunhos: nunca publicar em lib/blog.ts
 *
 * 8. SCHEMA:
 *    buildBlogPostingSchema() em lib/schemas.ts já tem todos os campos.
 *    Usar author: business.name (o motorista é o autor, não uma IA).
 *
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ESTRUTURA DE UM ARTIGO:
 *   1. Intro (sem "neste artigo vamos...")
 *   2. Conteúdo principal (dados reais, contexto local)
 *   3. Seção "Saiba mais" → link para a página de serviço
 *   4. CTA WhatsApp ou telefone (opcional mas recomendado)
 *
 * COMO ADICIONAR UM NOVO ARTIGO:
 *   1. Escrever o conteúdo completo (≥800 palavras) em um componente
 *   2. Criar o componente em app/blog/[slug]/posts/nome-do-post.tsx (opcional)
 *   3. Adicionar os metadados em lib/blog.ts (posts array)
 *   4. Verificar: keyword ≠ keyword de página de serviço
 *   5. Verificar: tem dado local real de Londrina
 *   6. Deploy — o sitemap inclui automaticamente
 */

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { buildBlogPostingSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl, whatsappMessages } from "@/lib/business"

// ─── generateStaticParams — pré-renderiza todos os slugs em lib/blog.ts ───────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

// ─── generateMetadata — metadata dinâmica por artigo ──────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  // Post não encontrado → metadata de fallback (não indexar)
  if (!post) {
    return {
      title: "Artigo não encontrado",
      robots: { index: false, follow: false },
    }
  }

  const canonicalUrl = `${business.url}/blog/${post.slug}`
  const ogImage      = `${business.url}/${post.ogImage}`

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title:       post.title,
      description: post.description,
      url:         canonicalUrl,
      siteName:    business.shortName,
      locale:      "pt_BR",
      type:        "article",
      publishedTime: post.publishedAt,
      modifiedTime:  post.updatedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       post.title,
      description: post.description,
      images:      [ogImage],
    },
    // Indexar apenas posts com conteúdo suficiente (controlado em lib/blog.ts)
    robots: {
      index:  true,
      follow: true,
    },
  }
}

// ─── Página do artigo ──────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  // Slug não existe em lib/blog.ts → 404
  if (!post) notFound()

  const canonicalUrl = `${business.url}/blog/${post.slug}`
  const waDefault    = whatsappUrl(whatsappMessages.default)

  // Schemas do artigo
  const blogPostingSchema = buildBlogPostingSchema({
    title:       post.title,
    description: post.description,
    url:         canonicalUrl,
    image:       `${business.url}/${post.ogImage}`,
    datePublished: post.publishedAt,
    dateModified:  post.updatedAt,
    authorName:    post.author,
  })

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home",  url: "/" },
    { name: "Blog",  url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(blogPostingSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#F5F5F5", padding: "0.75rem 1.5rem", fontSize: "0.8rem", color: "#6B6B6B" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <Link href="/blog" style={{ color: "#6B6B6B", textDecoration: "none" }}>Blog</Link>
            <span style={{ margin: "0 0.5rem" }}>›</span>
            <span style={{ color: "#0A0A0A", fontWeight: 600 }}>Artigo</span>
          </div>
        </nav>

        {/* ════════════════════════════════════════════════════════════
            HEADER DO ARTIGO
        ════════════════════════════════════════════════════════════ */}
        <header style={{ background: "#0A0A0A", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <time dateTime={post.publishedAt}
              style={{ color: "#9a9a9a", fontSize: "0.8rem", display: "block", marginBottom: "1rem" }}>
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                day: "2-digit", month: "long", year: "numeric",
              })}
            </time>

            {/* H1 do artigo */}
            <h1 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900,
              color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}>
              {post.title}
            </h1>

            <p style={{ color: "#D0D0D0", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              {post.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ color: "#9a9a9a", fontSize: "0.8rem" }}>
                Por {post.author}
              </span>
              {post.relatedService && (
                <Link href={post.relatedService}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    background: "rgba(255,204,0,0.1)", border: "1px solid rgba(255,204,0,0.3)",
                    color: "#FFCC00", fontSize: "0.75rem", fontWeight: 700,
                    padding: "4px 12px", borderRadius: "999px", textDecoration: "none",
                  }}>
                  Ver serviço relacionado →
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════════════════════════
            CORPO DO ARTIGO — conteúdo real vai aqui
        ════════════════════════════════════════════════════════════ */}
        <article
          aria-label={post.title}
          style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}
        >
          <div style={{
            maxWidth: "760px", margin: "0 auto",
            fontSize: "1rem", lineHeight: 1.8, color: "#1A1A1A",
          }}>
            {/*
             * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             * CONTEÚDO DO ARTIGO ENTRA AQUI
             *
             * O conteúdo real de cada artigo deve ser importado ou
             * renderizado dentro deste <article>.
             *
             * Exemplo de como estruturar o conteúdo:
             *
             * <h2>Quanto tempo leva...</h2>
             * <p>O trajeto do Centro de Londrina ao Aeroporto...</p>
             *
             * NUNCA usar:
             * - "Neste artigo vamos ver..."
             * - "Se você está procurando..."
             * - Listas sem contexto
             * - Dados sem fonte ou estimativa
             *
             * SEMPRE incluir:
             * - Dados reais (distâncias, tempos, custos estimados)
             * - Referências locais de Londrina
             * - Link para a página de serviço relacionada
             * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             */}

            <p style={{ color: "#9a9a9a", fontStyle: "italic", background: "#F9F9F9", padding: "1.5rem", borderRadius: "8px", border: "1px dashed #E8E8E8" }}>
              [Conteúdo do artigo: {post.title}]
              <br /><br />
              Para adicionar o conteúdo real, substitua este bloco pelo texto do artigo.
              Consulte as regras editoriais no topo deste arquivo antes de escrever.
            </p>
          </div>
        </article>

        {/* ════════════════════════════════════════════════════════════
            SEÇÃO "SAIBA MAIS" — link obrigatório para o serviço
        ════════════════════════════════════════════════════════════ */}
        {post.relatedService && (
          <section aria-label="Serviço relacionado"
            style={{ background: "#F5F5F5", padding: "4rem 1.5rem" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto" }}>
              <div style={{
                background: "#0A0A0A", borderRadius: "14px", padding: "2.5rem",
                display: "flex", flexWrap: "wrap", justifyContent: "space-between",
                alignItems: "center", gap: "1.5rem",
              }}>
                <div>
                  <p style={{ color: "#FFCC00", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    Serviço relacionado
                  </p>
                  <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.3rem" }}>
                    Precisa de táxi em Londrina?
                  </p>
                  <p style={{ color: "#9a9a9a", fontSize: "0.85rem" }}>
                    Agende pelo WhatsApp ou acesse a página do serviço.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link href={post.relatedService}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      background: "#FFCC00", color: "#0A0A0A",
                      fontWeight: 700, fontSize: "0.875rem",
                      padding: "0.75rem 1.25rem", borderRadius: "8px", textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}>
                    Ver serviço →
                  </Link>
                  <a href={waDefault} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      background: "#25D366", color: "#FFFFFF",
                      fontWeight: 700, fontSize: "0.875rem",
                      padding: "0.75rem 1.25rem", borderRadius: "8px", textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}>
                    <WhatsAppIcon size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════════════
            NAVEGAÇÃO — artigos relacionados e voltar ao blog
        ════════════════════════════════════════════════════════════ */}
        <nav aria-label="Navegação entre artigos"
          style={{ background: "#FFFFFF", padding: "3rem 1.5rem" }}>
          <div style={{
            maxWidth: "760px", margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "1rem",
          }}>
            <Link href="/blog"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none",
                fontWeight: 600,
              }}>
              ← Todos os artigos
            </Link>
            <Link href="/contato"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "#0A0A0A", fontSize: "0.875rem", textDecoration: "none",
                fontWeight: 700, background: "#FFCC00",
                padding: "8px 16px", borderRadius: "8px",
              }}>
              Solicitar táxi →
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", color: "#9a9a9a", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.5rem" }}>
            <div>
              <Link href="/" style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>{business.shortName}</Link>
              <address style={{ fontStyle: "normal", fontSize: "0.8rem", marginTop: "0.3rem", lineHeight: 1.6 }}>
                {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#FFCC00", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </address>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/blog" style={{ fontSize: "0.8rem", color: "#9a9a9a", textDecoration: "none" }}>← Blog</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#FFCC00", textDecoration: "none" }}>Chamar táxi →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

// ─── Ícone WhatsApp ───────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 20, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
