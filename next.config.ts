import type { NextConfig } from "next"

// Domínio vindo de variável de ambiente — nunca hardcoded aqui
// Desenvolvimento: .env.local → NEXT_PUBLIC_DOMAIN=localhost:3000
// Produção (Vercel): NEXT_PUBLIC_DOMAIN=seudominio.com.br
const domain = (process.env.NEXT_PUBLIC_DOMAIN ?? "SEU_DOMINIO.com.br").replace(/\/$/, "")

const nextConfig: NextConfig = {

  // ─── Imagens ──────────────────────────────────────────────────────────────
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },

  // ─── Compressão ───────────────────────────────────────────────────────────
  compress: true,

  // ─── Trailing slash ───────────────────────────────────────────────────────
  // Garante que /pagina e /pagina/ apontem para o mesmo lugar
  // canonical sempre sem trailing slash
  trailingSlash: false,

  // ─── Redirects ────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // www → sem www (301 permanente)
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${domain}` }],
        destination: `https://${domain}/:path*`,
        permanent: true,
      },
    ]
  },

  // ─── Headers de segurança e SEO ───────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // HSTS — força HTTPS por 1 ano, incluindo subdomínios
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Impede clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Impede sniffing de MIME type
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Controle de referrer para privacidade
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Permissões de recursos do browser
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      // Cache para assets estáticos
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

export default nextConfig
