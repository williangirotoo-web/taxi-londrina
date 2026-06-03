/**
 * app/robots.ts — robots.txt automático
 *
 * Acessível em: /robots.txt
 * Gerado pelo Next.js — não é arquivo estático.
 *
 * REGRAS:
 *   - Allow: / → todas as páginas públicas acessíveis
 *   - Disallow: /api/   → rotas de API (não existem agora, prevenção futura)
 *   - Disallow: /_next/ → assets internos do Next.js (seguro com SSG/SSR)
 *   - CSS, JS de componentes e imagens → NÃO bloqueados
 *   - Bots de AI → bloqueados individualmente
 *   - Sitemap → URL absoluta vinda de business.url
 *
 * Por que /_next/ é seguro bloquear:
 *   Com SSG/SSR, o HTML chega completo ao Googlebot na Fase 1 de crawl.
 *   O bot não precisa executar /_next/static/*.js para indexar o conteúdo.
 */

import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${business.url}/sitemap.xml`

  return {
    rules: [
      // ── Regra geral — todos os crawlers legítimos ──────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",    // rotas de API — não indexáveis
          "/_next/",  // assets internos do Next.js
        ],
      },

      // ── Bots de IA — bloqueados individualmente ────────────────────────────
      // Esses bots ignoram a regra geral em alguns casos — declaração explícita
      {
        userAgent: "GPTBot",        // OpenAI
        disallow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Bard / Gemini training
        disallow: "/",
      },
      {
        userAgent: "CCBot",          // Common Crawl (base para muitos LLMs)
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",   // Anthropic
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",     // Claude browsing
        disallow: "/",
      },
      {
        userAgent: "Omgilibot",      // Dataset crawler
        disallow: "/",
      },
      {
        userAgent: "FacebookBot",    // Meta AI training
        disallow: "/",
      },
    ],

    // Sitemap — URL absoluta, domínio vindo de business.url
    sitemap: sitemapUrl,
  }
}
