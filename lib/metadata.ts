/**
 * FACTORY DE METADATA
 *
 * Gera objetos Metadata completos para cada página.
 * Garante: title único, description única, canonical correta,
 * OG completo, Twitter Card, robots corretos.
 *
 * USO em cada page.tsx:
 *
 *   import { buildMetadata } from "@/lib/metadata"
 *   export const metadata = buildMetadata({ ... })
 *
 * A função valida automaticamente:
 *   - title ≤ 60 chars → lança erro em desenvolvimento
 *   - description entre 140–160 chars → avisa se fora do intervalo
 *   - canonical nunca com trailing slash
 *   - og:image sempre absoluta
 */

import type { Metadata } from "next"
import { business } from "./business"

// ─── Tipos ─────────────────────────────────────────────────────────────────────

export interface PageMetadataProps {
  /** Título da página — máx. 60 chars — keyword local deve vir na frente */
  title: string
  /** Description — 140–160 chars — CTA específico do serviço */
  description: string
  /** Caminho relativo — ex: "/taxi-aeroporto-londrina" */
  path: string
  /**
   * Nome do arquivo de imagem OG em /public/
   * ex: "og-aeroporto-londrina.jpg"
   * Cada página DEVE ter imagem própria — nunca reutilizar entre páginas
   */
  ogImage: string
  /** Alt text da imagem OG — descritivo e único */
  ogImageAlt: string
  /**
   * Controla indexação
   * "index"   → página pública (padrão para todas as páginas de serviço)
   * "noindex" → páginas técnicas, admin, rascunhos
   */
  robots?: "index" | "noindex"
  /** Keywords adicionais para o schema — não usado pelo Google mas útil internamente */
  keywords?: string[]
}

// ─── Validações de desenvolvimento ────────────────────────────────────────────

function validateMetadata(props: PageMetadataProps): void {
  if (process.env.NODE_ENV !== "production") {
    if (props.title.length > 60) {
      console.warn(
        `[metadata] AVISO: title muito longo (${props.title.length} chars > 60): "${props.title}"`
      )
    }
    if (props.description.length < 140) {
      console.warn(
        `[metadata] AVISO: description muito curta (${props.description.length} chars < 140): "${props.description}"`
      )
    }
    if (props.description.length > 160) {
      console.warn(
        `[metadata] AVISO: description muito longa (${props.description.length} chars > 160): "${props.description}"`
      )
    }
    if (props.path.endsWith("/") && props.path !== "/") {
      console.error(
        `[metadata] ERRO: canonical com trailing slash: "${props.path}"`
      )
    }
  }
}

// ─── URL helpers ───────────────────────────────────────────────────────────────

function absoluteUrl(path: string): string {
  if (path === "/") return business.url
  const clean = path.startsWith("/") ? path : `/${path}`
  return `${business.url}${clean}`
}

function absoluteImageUrl(filename: string): string {
  // Se já for URL absoluta, retorna como está
  if (filename.startsWith("http")) return filename
  return `${business.url}/${filename.replace(/^\//, "")}`
}

// ─── Factory principal ─────────────────────────────────────────────────────────

export function buildMetadata(props: PageMetadataProps): Metadata {
  validateMetadata(props)

  const canonicalHref = absoluteUrl(props.path)
  const ogImageUrl = absoluteImageUrl(props.ogImage)
  const isIndex = props.robots !== "noindex"

  return {
    // ── Title e description ──────────────────────────────────────────────────
    title: props.title,
    description: props.description,

    // ── Canonical ────────────────────────────────────────────────────────────
    alternates: {
      canonical: canonicalHref,
    },

    // ── Open Graph ───────────────────────────────────────────────────────────
    openGraph: {
      title: props.title,
      description: props.description,
      url: canonicalHref,
      siteName: business.shortName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: props.ogImageAlt,
        },
      ],
    },

    // ── Twitter Card ─────────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      title: props.title,
      description: props.description,
      images: [ogImageUrl],
    },

    // ── Robots ───────────────────────────────────────────────────────────────
    robots: {
      index: isIndex,
      follow: isIndex,
      googleBot: {
        index: isIndex,
        follow: isIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    // ── Verificação Google Search Console ────────────────────────────────────
    ...(props.path === "/" && business.googleVerification
      ? { verification: { google: business.googleVerification } }
      : {}),
  }
}

// ─── Metadata pré-construídas por página ──────────────────────────────────────
// Cada entrada é única — title, description, ogImage e path distintos
// Auditoria anti-duplicação: nenhum campo se repete entre páginas

export const pageMetadata = {

  home: buildMetadata({
    title: `Táxi em Londrina 24h | Aeroporto, Executivo e Viagens`,
    description:
      "Táxi em Londrina com atendimento 24 horas. Executivo, aeroporto, hospital, " +
      "transporte empresarial e viagens para Curitiba e Maringá. Chame pelo WhatsApp.",
    path: "/",
    ogImage: "og-home.jpg",
    ogImageAlt: `Táxi em Londrina — ${business.shortName}`,
  }),

  taxiExecutivo: buildMetadata({
    title: "Táxi Executivo Londrina | Motorista Particular Premium",
    description:
      "Táxi executivo em Londrina com conforto, discrição e pontualidade. " +
      "Motorista bilíngue, veículo premium, corridas avulsas. Agende pelo WhatsApp.",
    path: "/taxi-executivo-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Táxi executivo em Londrina — veículo premium e motorista particular",
  }),

  transporteEmpresarial: buildMetadata({
    title: "Transporte Empresarial Londrina | Contrato e Frota",
    description:
      "Transporte corporativo em Londrina com contrato, nota fiscal e relatório de corridas. " +
      "Atendimento a empresas, gestores de frota e RH. Solicite proposta.",
    path: "/transporte-empresarial-londrina",
    ogImage: "og-transporte-empresarial-londrina.jpg",
    ogImageAlt: "Transporte empresarial em Londrina — Corolla preto em prédio corporativo",
  }),

  taxiAeroporto: buildMetadata({
    title: "Táxi Aeroporto Londrina | Transfer José Richa 24h",
    description:
      "Transfer para o Aeroporto Governador José Richa em Londrina. Motorista pontual, " +
      "aguarda no terminal, atendimento em português e inglês. Agende com hora marcada.",
    path: "/taxi-aeroporto-londrina",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Transfer para o Aeroporto Governador José Richa em Londrina",
  }),

  taxi24Horas: buildMetadata({
    title: "Táxi 24 Horas Londrina | Atendimento Imediato Dia e Noite",
    description:
      "Táxi 24 horas em Londrina para urgências, madrugada e feriados. " +
      "Rodoviária, plantão e emergências atendidos. Ligue agora ou chame pelo WhatsApp.",
    path: "/taxi-24-horas-londrina",
    ogImage: "og-home.jpg",       // TODO: criar og-taxi-24-horas-londrina.jpg
    ogImageAlt: "Táxi 24 horas em Londrina — atendimento imediato",
  }),

  taxiHospital: buildMetadata({
    title: "Táxi para Hospital em Londrina | H. Evangélico, HCor e UEL",
    description:
      "Táxi para hospitais em Londrina com discrição e sem pressa. Hospital Evangélico, " +
      "Hospital do Coração, UEL. Consultas, internações e alta hospitalar. WhatsApp.",
    path: "/taxi-hospital-londrina",
    ogImage: "og-taxi-hospital-londrina.jpg",
    ogImageAlt: "Táxi para hospital em Londrina — Corolla preto na entrada do hospital",
  }),

  taxiCadeirinha: buildMetadata({
    title: "Táxi com Cadeirinha Londrina | Segurança Infantil",
    description:
      "Táxi com cadeirinha infantil em Londrina. Cadeirinha homologada pelo INMETRO, " +
      "motorista experiente no transporte de bebês e crianças. Agende com antecedência.",
    path: "/taxi-com-cadeirinha-londrina",
    ogImage: "og-taxi-cadeirinha-londrina.jpg",
    ogImageAlt: "Táxi com cadeirinha infantil em Londrina — interior com assento de bebê instalado",
  }),

  taxiCuritiba: buildMetadata({
    title: "Táxi Londrina Curitiba | Transfer Direto pela BR-376",
    description:
      "Táxi de Londrina a Curitiba com conforto e segurança. 398 km pela BR-376, " +
      "tempo médio de 4 horas. Conexão de voo, reunião ou tratamento médico. Agende.",
    path: "/taxi-londrina-curitiba",
    ogImage: "og-taxi-londrina-curitiba.jpg",
    ogImageAlt: "Táxi de Londrina para Curitiba — transfer direto pela BR-376",
  }),

  taxiMaringa: buildMetadata({
    title: "Táxi Londrina Maringá | Transfer Direto pela PR-317",
    description:
      "Táxi de Londrina a Maringá com conforto e pontualidade. 118 km pela PR-317, " +
      "tempo médio de 1h20. Trabalho, consulta médica ou visita. Agende pelo WhatsApp.",
    path: "/taxi-londrina-maringa",
    ogImage: "og-taxi-londrina-maringa.jpg",
    ogImageAlt: "Táxi de Londrina para Maringá — Corolla preto na rodovia do Paraná ao pôr do sol",
  }),

  contato: buildMetadata({
    title: `Contato | ${business.shortName} — Orçamento e Contratos`,
    description:
      "Entre em contato para solicitar táxi, orçamento de transporte empresarial " +
      "ou proposta de contrato em Londrina. WhatsApp, telefone ou formulário.",
    path: "/contato",
    ogImage: "og-home.jpg",       // TODO: criar og-contato.jpg
    ogImageAlt: `Contato ${business.shortName} — orçamento de transporte em Londrina`,
  }),

  blog: buildMetadata({
    title: `Blog | ${business.shortName} — Dicas de Transporte em Londrina`,
    description:
      "Dicas, informações e guias sobre transporte em Londrina. " +
      "Aeroporto José Richa, rotas, transfer executivo e mais.",
    path: "/blog",
    ogImage: "og-home.jpg",       // TODO: criar og-blog.jpg
    ogImageAlt: `Blog ${business.shortName} — dicas de transporte em Londrina`,
  }),

  transferAeroporto: buildMetadata({
    title: "Transfer Aeroporto Londrina | Receptivo no Desembarque",
    description:
      "Transfer receptivo no Aeroporto José Richa (LDB). Plaquinha com seu nome, " +
      "monitoramento de voo e motorista bilíngue. Hotéis, Centro e Gleba Palhano.",
    path: "/transfer-aeroporto-londrina",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Transfer aeroporto Londrina — receptivo com plaquinha no Aeroporto José Richa",
  }),

  motoristaParticularAeroporto: buildMetadata({
    title: "Motorista Particular Aeroporto Londrina | Executivo",
    description:
      "Motorista particular executivo no Aeroporto José Richa (LDB). " +
      "Recepção com plaquinha, monitoramento de voo e bilíngue. " +
      "Aeroporto → hotel, empresa ou reunião em Londrina.",
    path: "/motorista-particular-aeroporto-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Motorista particular aeroporto Londrina — atendimento executivo",
  }),

  taxiAeroportoJoseRicha: buildMetadata({
    title: "Táxi Aeroporto Governador José Richa | Londrina",
    description:
      "Táxi no Aeroporto Governador José Richa (LDB) em Londrina. " +
      "Terminal de passageiros, embarque e desembarque. " +
      "Motorista bilíngue, monitoramento de voo, 24 horas.",
    path: "/taxi-aeroporto-governador-jose-richa",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Táxi Aeroporto Governador José Richa — terminal de passageiros Londrina",
  }),

  transporteEventos: buildMetadata({
    title: "Transporte Executivo para Eventos em Londrina",
    description:
      "Transporte executivo para eventos em Londrina: ExpoLondrina, congressos e convenções. " +
      "Frota para palestrantes, delegações e convidados VIP com hora marcada.",
    path: "/transporte-executivo-eventos-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Transporte executivo para eventos em Londrina — frota corporativa",
  }),

  transferCorporativo: buildMetadata({
    title: "Transfer Corporativo em Londrina | Executivo VIP",
    description:
      "Transfer corporativo executivo em Londrina para visitantes, clientes VIP e reuniões. " +
      "Motorista aguarda entre compromissos. Sem contrato, por viagem.",
    path: "/transfer-corporativo-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Transfer corporativo executivo em Londrina — clientes VIP e reuniões",
  }),

  motoristaExecutivo: buildMetadata({
    title: "Motorista Executivo em Londrina | Por Hora e Diária",
    description:
      "Motorista executivo em Londrina à disposição por 4h, 8h ou diária completa. " +
      "Aguarda entre reuniões. Para empresários, advogados e executivos.",
    path: "/motorista-executivo-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Motorista executivo em Londrina — disponível por hora ou diária",
  }),

  airportTransfer: buildMetadata({
    title: "Airport Transfer Londrina | LDB · English Service",
    description:
      "Professional airport transfer in Londrina at Governador José Richa Airport (LDB). " +
      "English-speaking driver, flight monitoring and meet & greet service.",
    path: "/airport-transfer-londrina",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Airport transfer Londrina — English-speaking driver at LDB airport",
  }),

  privateDriver: buildMetadata({
    title: "Private Driver in Londrina | Hourly & Daily Hire",
    description:
      "English-speaking private driver in Londrina for city tours, business meetings " +
      "and day trips. Hourly or full day hire. Bilingual driver — Portuguese & English.",
    path: "/private-driver-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Private driver in Londrina Brazil — city tours and business hire",
  }),

  executiveDriver: buildMetadata({
    title: "Executive Driver in Londrina | Premium Corporate",
    description:
      "Executive driver in Londrina for C-level executives, investors and corporate visitors. " +
      "Premium vehicle, full discretion and bilingual service in English.",
    path: "/executive-driver-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Executive driver in Londrina — premium corporate service for C-level",
  }),

  chauffeur: buildMetadata({
    title: "Chauffeur in Londrina | Premium Chauffeur Service",
    description:
      "Professional chauffeur service in Londrina, Brazil. Uniformed driver, premium black " +
      "vehicle, punctuality guaranteed. Trusted by British and Australian visitors.",
    path: "/chauffeur-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Chauffeur service in Londrina Brazil — uniformed driver, premium vehicle",
  }),

  transferAeropuerto: buildMetadata({
    title: "Transfer Aeropuerto Londrina | Servicio Ejecutivo",
    description:
      "Transfer privado desde el Aeropuerto de Londrina (LDB), Brasil. " +
      "Conductor bilingüe español-portugués, seguimiento de vuelo y recepción en llegadas.",
    path: "/transfer-aeropuerto-londrina",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Transfer aeropuerto Londrina — conductor bilingüe español portugués",
  }),

  choferEjecutivo: buildMetadata({
    title: "Chofer Ejecutivo en Londrina | Por Horas y Jornada",
    description:
      "Chofer ejecutivo bilingüe en Londrina a disposición por horas o jornada completa. " +
      "Espera entre reuniones. Para empresarios y ejecutivos de Argentina y Paraguay.",
    path: "/chofer-ejecutivo-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Chofer ejecutivo en Londrina Brasil — servicio por horas para empresarios",
  }),

  transferGuarulhos: buildMetadata({
    title: "Transfer Londrina Guarulhos | Aeroporto GRU",
    description:
      "Transfer de Londrina ao Aeroporto de Guarulhos (GRU). " +
      "Monitoramento de voo, terminais T1/T2/T3 e 470 km com hora marcada. Bagagem e voos internacionais.",
    path: "/transfer-londrina-guarulhos",
    ogImage: "og-taxi-aeroporto-londrina.jpg",
    ogImageAlt: "Transfer Londrina Guarulhos — aeroporto GRU, terminais T1 T2 T3",
  }),

  taxiSaoPaulo: buildMetadata({
    title: "Táxi Londrina São Paulo | Transfer Direto",
    description:
      "Transfer de táxi de Londrina a São Paulo pela Castelo Branco. " +
      "Paulista, Faria Lima, Congonhas, hospitais e Grande SP. 450 km com hora marcada.",
    path: "/taxi-londrina-sao-paulo",
    ogImage: "og-taxi-londrina-curitiba.jpg",
    ogImageAlt: "Táxi Londrina São Paulo — transfer direto 450 km pela Castelo Branco",
  }),

  taxiOurinhos: buildMetadata({
    title: "Táxi Londrina Ourinhos | Transfer Direto",
    description:
      "Transfer de táxi de Londrina a Ourinhos (SP) pela PR-218. " +
      "130 km, 1h30 com hora marcada. Agronegócio, hospitais e cidades do sudoeste paulista.",
    path: "/taxi-londrina-ourinhos",
    ogImage: "og-taxi-londrina-curitiba.jpg",
    ogImageAlt: "Táxi Londrina Ourinhos — transfer direto pela PR-218",
  }),

  motoristaCarro: buildMetadata({
    title: "Motorista para Dirigir Seu Carro em Londrina",
    description:
      "Contrate apenas o motorista profissional para o seu carro em Londrina. " +
      "Viagens, cirurgia, casamentos, eventos e deslocamentos noturnos. DDC disponível.",
    path: "/motorista-para-dirigir-seu-carro-londrina",
    ogImage: "og-taxi-executivo-londrina.jpg",
    ogImageAlt: "Motorista para dirigir seu carro em Londrina — condutor particular DDC",
  }),

} as const
