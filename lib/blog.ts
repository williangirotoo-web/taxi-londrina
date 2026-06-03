/**
 * lib/blog.ts — gerenciador de posts do blog
 *
 * Retorna lista de posts para sitemap e listagem.
 * Enquanto não houver posts, retorna [] sem quebrar o build.
 *
 * REGRA: nenhum post pode ser publicado sem:
 *   - link interno de ≥ 1 página de serviço apontando para ele
 *   - conteúdo exclusivo não replicável por concorrentes
 *   - referência local real de Londrina
 */

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string   // ISO 8601: "2025-03-15"
  updatedAt: string
  ogImage: string
  author: string
  relatedService?: string  // URL da página de serviço relacionada
}

// Posts publicados — adicionar manualmente após criar cada arquivo MDX
// Nunca adicionar post aqui sem o conteúdo real já existir
const posts: BlogPost[] = [
  // Exemplo — descomentar apenas quando o post real existir:
  // {
  //   slug: "quanto-custa-taxi-aeroporto-londrina",
  //   title: "Quanto custa um táxi do centro de Londrina ao Aeroporto José Richa?",
  //   description: "...",
  //   publishedAt: "2025-06-01",
  //   updatedAt: "2025-06-01",
  //   ogImage: "og-blog-taxi-aeroporto-custo.jpg",
  //   author: "NOME_DO_MOTORISTA",
  //   relatedService: "/taxi-aeroporto-londrina",
  // },
]

/** Retorna todos os posts — [] se não houver nenhum (seguro para sitemap) */
export function getAllPosts(): BlogPost[] {
  return posts
}

/** Retorna um post por slug — undefined se não encontrar */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

/** Retorna slugs para generateStaticParams() */
export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
