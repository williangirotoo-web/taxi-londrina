/**
 * BUILDERS DE JSON-LD
 *
 * Cada função retorna um objeto limpo pronto para ser serializado
 * e injetado via <script type="application/ld+json">.
 *
 * Regras de uso:
 *   - LocalBusiness + WebSite → somente em app/layout.tsx (global)
 *   - Service                 → somente na página do serviço específico
 *   - FAQPage                 → somente na página do serviço específico
 *   - BreadcrumbList          → toda página interna (não na Home)
 *   - BlogPosting             → somente em app/blog/[slug]/page.tsx
 *
 * NUNCA duplicar o schema LocalBusiness em páginas individuais.
 * O @id canônico do LocalBusiness é referenciado por todos os Service schemas.
 */

import { business, canonicalUrl } from "./business"

// ─── Tipos internos ────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string
  answer: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface ServiceSchemaProps {
  name: string
  description: string
  serviceType: string
  url: string
  areaServed?: string[]
  image?: string
}

export interface BlogPostingSchemaProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string        // ISO 8601: "2025-03-15"
  dateModified: string
  authorName: string
}

// ─── ID canônico do negócio ────────────────────────────────────────────────────
// Referenciado por todos os schemas de Service e Review
const BUSINESS_ID = `${business.url}/#business`

// ─── 1. LocalBusiness + TaxiService ───────────────────────────────────────────
// Inserido UMA VEZ no layout.tsx — presente em todas as páginas
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": business.categories.schemaTypes,
    "@id": BUSINESS_ID,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.city,
      addressRegion: business.address.stateCode,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday",
        "Friday","Saturday","Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Cartão de crédito, Pix",
    image: `${business.url}/${business.ogImageDefault}`,
    sameAs: [
      business.social.googleMaps,
      business.social.instagram,
      business.social.facebook,
    ].filter(Boolean),
  }
}

// ─── 2. WebSite + SearchAction ─────────────────────────────────────────────────
// Inserido UMA VEZ no layout.tsx — habilita sitelinks de busca no Google
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.url}/#website`,
    name: business.name,
    url: business.url,
    inLanguage: "pt-BR",
    publisher: { "@id": BUSINESS_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${business.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

// ─── 3. Service ────────────────────────────────────────────────────────────────
// Inserido individualmente em cada página de serviço
export function buildServiceSchema(props: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    serviceType: props.serviceType,
    url: props.url,
    provider: { "@id": BUSINESS_ID },
    areaServed: (props.areaServed ?? business.areaServed).map((area) => ({
      "@type": "City",
      name: area,
    })),
    ...(props.image && { image: props.image }),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: props.url,
      servicePhone: business.phone,
    },
  }
}

// ─── 4. FAQPage ────────────────────────────────────────────────────────────────
// Inserido individualmente em cada página de serviço
// Mínimo: 4 perguntas exclusivas por página
export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// ─── 5. BreadcrumbList ─────────────────────────────────────────────────────────
// Inserido em toda página interna (nunca na Home)
// items: [{ name: "Home", url: "/" }, { name: "Táxi Aeroporto", url: "/taxi-aeroporto-londrina" }]
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.url),
    })),
  }
}

// ─── 6. BlogPosting ────────────────────────────────────────────────────────────
// Inserido somente em app/blog/[slug]/page.tsx
export function buildBlogPostingSchema(props: BlogPostingSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: props.title,
    description: props.description,
    url: props.url,
    image: props.image,
    datePublished: props.datePublished,
    dateModified: props.dateModified,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: props.authorName,
      worksFor: { "@id": BUSINESS_ID },
    },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": props.url },
  }
}

// ─── Serialização ──────────────────────────────────────────────────────────────
// Converte qualquer schema para string JSON segura para injetar no <head>
export function serializeSchema(schema: object): string {
  return JSON.stringify(schema)
}
