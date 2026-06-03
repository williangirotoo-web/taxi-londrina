/**
 * FONTE ÚNICA DE VERDADE — dados da empresa
 *
 * Este arquivo é importado por:
 *   - lib/schemas.ts    → JSON-LD
 *   - lib/metadata.ts   → metadata de todas as páginas
 *   - app/layout.tsx    → schema global
 *   - components/layout/Footer.tsx
 *   - components/ui/WhatsAppCTA.tsx
 *
 * NUNCA duplicar esses dados em outro arquivo.
 * Para alterar telefone, endereço ou domínio: editar SOMENTE aqui.
 */

export const business = {
  // ─── Identidade ────────────────────────────────────────────────────────────
  name: "Táxi Londrina",
  shortName: "Táxi Londrina",
  legalName: "Táxi Londrina",
  description:
    "Táxi em Londrina com atendimento 24 horas. Executivo, aeroporto, hospital, " +
    "transporte empresarial e viagens intermunicipais. Motorista bilíngue.",

  // ─── Domínio e URLs ────────────────────────────────────────────────────────
  domain: (process.env["NEXT_PUBLIC_DOMAIN"] ?? "londrinataxi.com.br").replace(/\/$/, ""),
  url: `https://${(process.env["NEXT_PUBLIC_DOMAIN"] ?? "londrinataxi.com.br").replace(/\/$/, "")}`,

  // ─── Imagem principal do negócio ──────────────────────────────────────────
  ogImageDefault: "og-home.jpg",

  // ─── Contato ───────────────────────────────────────────────────────────────
  phone: "+55 44 99891-3040",
  phoneDisplay: "(44) 99891-3040",
  whatsapp: "5544998913040",
  whatsappDisplay: "(44) 99891-3040",
  email: "atendimento@g7.taxi.br",

  // ─── Endereço NAP ──────────────────────────────────────────────────────────
  address: {
    streetAddress: "Rua Maranhão, 123",
    neighborhood: "Centro",
    city: "Londrina",
    state: "Paraná",
    stateCode: "PR",
    postalCode: "86010-150",
    country: "BR",
    countryName: "Brasil",
  },

  // ─── Geolocalização ────────────────────────────────────────────────────────
  geo: {
    latitude: -23.3045,
    longitude: -51.1696,
  },

  // ─── Área de cobertura ─────────────────────────────────────────────────────
  areaServed: [
    "Londrina",
    "Curitiba",
    "Maringá",
    "Paraná",
    "Norte do Paraná",
  ],

  // ─── Horário de funcionamento ──────────────────────────────────────────────
  openingHours: "Mo-Su 00:00-24:00",
  openingHoursDisplay: "24 horas, 7 dias por semana",

  // ─── EEAT — credenciais verificáveis ──────────────────────────────────────
  founded: "2014",
  ridesCompleted: "30.000+",
  yearsActive: "11",

  // ─── Redes sociais ─────────────────────────────────────────────────────────
  social: {
    whatsappUrl: "https://wa.me/5544998913040",
    instagram: "",   // adicionar se tiver
    facebook: "",    // adicionar se tiver
    googleMaps: "",  // adicionar link do Google Business Profile
  },

  // ─── Google ────────────────────────────────────────────────────────────────
  googleVerification: "COLE_TOKEN_DO_SEARCH_CONSOLE",
  gmbPlaceId: "PLACE_ID_DO_GOOGLE_MAPS", // encontrado no GBP

  // ─── Marca visual ──────────────────────────────────────────────────────────
  // Usado em site.webmanifest e meta theme-color
  themeColor: "#FFCC00",             // cor principal da marca
  backgroundColor: "#0A0A0A",        // cor de fundo

  // ─── Categorias do negócio ─────────────────────────────────────────────────
  // Alinhado com categorias do Google Business Profile
  categories: {
    primary: "TaxiService",          // schema.org @type primário
    schemaTypes: ["LocalBusiness", "TaxiService"],
    gbpPrimary: "Serviço de táxi",
    gbpSecondary: ["Serviço de transporte", "Serviço de limusine"],
  },
} as const

// ─── Helpers ───────────────────────────────────────────────────────────────────

/** URL canônica absoluta para uma rota interna */
export function canonicalUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${business.url}${clean}`
}

/** URL do WhatsApp com mensagem pré-preenchida */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${business.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/** Mensagem padrão de WhatsApp por serviço */
export const whatsappMessages = {
  default:
    "Olá! Gostaria de solicitar um táxi em Londrina.",
  aeroporto:
    "Olá! Preciso de um transfer para o Aeroporto de Londrina. Poderia me informar disponibilidade e valor?",
  executivo:
    "Olá! Gostaria de solicitar um táxi executivo em Londrina.",
  empresarial:
    "Olá! Represento uma empresa e gostaria de solicitar uma proposta de transporte corporativo.",
  hospital:
    "Olá! Preciso de um táxi para o hospital em Londrina. Poderia me ajudar?",
  cadeirinha:
    "Olá! Preciso de um táxi com cadeirinha infantil em Londrina.",
  curitiba:
    "Olá! Gostaria de solicitar um táxi de Londrina para Curitiba. Poderia me informar disponibilidade e valor?",
  maringa:
    "Olá! Gostaria de solicitar um táxi de Londrina para Maringá. Poderia me informar disponibilidade e valor?",
  h24:
    "Olá! Preciso de um táxi agora em Londrina.",
} as const

export type WhatsAppMessageKey = keyof typeof whatsappMessages
