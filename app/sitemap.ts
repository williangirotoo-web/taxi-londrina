/**
 * app/sitemap.ts — sitemap.xml automático
 *
 * Acessível em: /sitemap.xml
 * Gerado pelo Next.js no build — não é um arquivo estático.
 *
 * REGRAS:
 *   - Apenas páginas indexáveis entram aqui
 *   - /api/*, /_next/*, /not-found, /error → NUNCA incluir
 *   - /blog/[slug] → gerado dinamicamente via getAllPosts()
 *   - Domínio vem exclusivamente de business.url (via env var)
 *   - Nenhuma URL duplicada
 *   - Nenhuma URL que não exista fisicamente como page.tsx
 */

import type { MetadataRoute } from "next"
import { business } from "@/lib/business"
import { getAllPosts } from "@/lib/blog"

// ─── Data de referência para lastModified ──────────────────────────────────────
// Em produção: usar data real de modificação de cada página
// Por ora: data do build — atualiza a cada deploy
const BUILD_DATE = new Date()

// ─── Helper ────────────────────────────────────────────────────────────────────
function url(path: string): string {
  // Garante ausência de trailing slash e dupla barra
  const clean = path === "/" ? "" : `/${path.replace(/^\//, "")}`
  return `${business.url}${clean}`
}

// ─── Sitemap ───────────────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  // ── Rotas estáticas ──────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: url("/"),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Serviços de alta conversão — priority 0.9
    {
      url: url("/taxi-executivo-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: url("/transporte-empresarial-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: url("/taxi-aeroporto-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Serviços de suporte — priority 0.8
    {
      url: url("/taxi-24-horas-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/taxi-hospital-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/taxi-com-cadeirinha-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Rotas intermunicipais — priority 0.8
    {
      url: url("/taxi-londrina-curitiba"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/taxi-londrina-maringa"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Conversão e suporte — priority 0.7 / 0.6
    {
      url: url("/transfer-aeroporto-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: url("/motorista-particular-aeroporto-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: url("/taxi-aeroporto-governador-jose-richa"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: url("/contato"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: url("/blog"),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // ── Artigos do blog — rotas estáticas ──────────────────────────────────────
    {
      url: url("/blog/quanto-custa-taxi-aeroporto-londrina-centro"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: url("/blog/aeroporto-londrina-para-maringa"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: url("/blog/como-sair-aeroporto-governador-jose-richa"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: url("/blog/aeroporto-londrina-curitiba"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // ── Rotas dinâmicas — posts do blog ─────────────────────────────────────────
  // getAllPosts() retorna [] se não houver posts — sem quebrar o build
  const posts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // ── Verificação anti-duplicação em desenvolvimento ───────────────────────────
  if (process.env.NODE_ENV === "development") {
    const allUrls = [...staticRoutes, ...blogRoutes].map((r) => r.url)
    const uniqueUrls = new Set(allUrls)
    if (allUrls.length !== uniqueUrls.size) {
      console.error("[sitemap] ERRO: URLs duplicadas detectadas:", allUrls)
    }
  }

  return [...staticRoutes, ...blogRoutes]
}
