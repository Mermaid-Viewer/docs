import type { HeadConfig } from 'vitepress'

/**
 * Self-canonical and hreflang for docs.mermaidviewer.com.
 *
 * cleanUrls stays false, so the file GitHub Pages serves for each page is
 * its .html URL (including index.html). Bare paths such as
 * /introduction/what-is-mermaid serve that same file; the canonical tells
 * Google the .html URL is the one to index.
 *
 * Locales are root (en), zh, ja, and ko. Alternates are emitted only for
 * locales that have the page, plus x-default pointing at English when that
 * page exists. A page that exists in only one locale gets a canonical and
 * no hreflang cluster. 404.html is left without a canonical.
 */
export const SITE_ORIGIN = 'https://docs.mermaidviewer.com'

const HREFLANG_BY_LOCALE: Record<string, string> = {
  root: 'en',
  zh: 'zh',
  ja: 'ja',
  ko: 'ko'
}

const HREFLANG_BY_LANG: Record<string, string> = {
  en: 'en',
  'en-US': 'en',
  'en-us': 'en',
  zh: 'zh',
  'zh-CN': 'zh',
  'zh-cn': 'zh',
  ja: 'ja',
  'ja-JP': 'ja',
  'ja-jp': 'ja',
  ko: 'ko',
  'ko-KR': 'ko',
  'ko-kr': 'ko',
  'x-default': 'x-default'
}

const HREFLANG_ORDER = ['en', 'zh', 'ja', 'ko', 'x-default']

export interface LocaleHeadConfig {
  lang?: string
}

export interface SeoSiteConfig {
  pages: string[]
  cleanUrls?: boolean
  rewrites?: { map?: Record<string, string | undefined> }
  userConfig?: { locales?: Record<string, LocaleHeadConfig | undefined> }
  sitemap?: { hostname?: string }
}

export interface SeoTransformContext {
  page: string
  siteConfig: SeoSiteConfig
}

export interface AlternateLink {
  hreflang: string
  href: string
}

interface SitemapLink {
  lang: string
  hreflang?: string
  url: string
}

interface SitemapEntry {
  url: string
  links?: SitemapLink[]
}

export function normalizePage(page: string): string {
  return page.replace(/\\/g, '/').replace(/^\//, '')
}

export function isNotFoundPage(page: string): boolean {
  const normalized = normalizePage(page)
  return normalized === '404.md' || normalized.endsWith('/404.md')
}

/** Longest prefix first so a future `zh-tw` locale does not match as `zh`. */
export function localePrefixes(
  locales: Record<string, LocaleHeadConfig | undefined> | undefined
): string[] {
  return Object.keys(locales ?? {})
    .filter((key) => key !== 'root')
    .sort((a, b) => b.length - a.length)
}

export function splitLocale(
  relativePath: string,
  prefixes: string[]
): { locale: string; contentPath: string } {
  const normalized = normalizePage(relativePath)
  for (const prefix of prefixes) {
    if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
      const rest = normalized.startsWith(`${prefix}/`)
        ? normalized.slice(prefix.length + 1)
        : 'index.md'
      return { locale: prefix, contentPath: rest || 'index.md' }
    }
  }
  return { locale: 'root', contentPath: normalized }
}

/** Public path ending in .html. index.md stays index.html (cleanUrls is false). */
export function toHtmlPublicPath(relativeMd: string): string {
  const normalized = normalizePage(relativeMd)
  if (normalized.endsWith('.html')) return normalized
  if (normalized.endsWith('.md')) return normalized.slice(0, -3) + '.html'
  return `${normalized}.html`
}

export function toAbsoluteUrl(origin: string, publicPath: string): string {
  const base = origin.replace(/\/$/, '')
  const path = publicPath.replace(/^\//, '')
  return path ? `${base}/${path}` : `${base}/`
}

export function hreflangForLocale(locale: string, lang?: string): string {
  if (HREFLANG_BY_LOCALE[locale]) return HREFLANG_BY_LOCALE[locale]
  if (lang && HREFLANG_BY_LANG[lang]) return HREFLANG_BY_LANG[lang]
  return lang || locale
}

export function outputLocaleOrder(prefixes: string[]): string[] {
  const preferred = ['root', 'zh', 'ja', 'ko']
  const remaining = prefixes.filter((prefix) => !preferred.includes(prefix))
  return [
    ...preferred.filter((locale) => locale === 'root' || prefixes.includes(locale)),
    ...remaining
  ]
}

export function alternatesForPage(
  page: string,
  pages: string[],
  prefixes: string[],
  origin: string,
  hreflangByLocale: Map<string, string>
): { canonical: string; alternates: AlternateLink[] } {
  const canonical = toAbsoluteUrl(origin, toHtmlPublicPath(page))
  const { contentPath } = splitLocale(page, prefixes)
  const hrefByLocale = new Map<string, string>()

  for (const candidate of pages) {
    if (isNotFoundPage(candidate)) continue
    const split = splitLocale(candidate, prefixes)
    if (split.contentPath !== contentPath) continue
    hrefByLocale.set(
      split.locale,
      toAbsoluteUrl(origin, toHtmlPublicPath(candidate))
    )
  }

  const self = splitLocale(page, prefixes)
  hrefByLocale.set(self.locale, canonical)

  const alternates: AlternateLink[] = []
  for (const locale of outputLocaleOrder(prefixes)) {
    const href = hrefByLocale.get(locale)
    if (!href) continue
    alternates.push({
      hreflang: hreflangByLocale.get(locale) ?? hreflangForLocale(locale),
      href
    })
  }
  for (const [locale, href] of hrefByLocale) {
    if (outputLocaleOrder(prefixes).includes(locale)) continue
    alternates.push({
      hreflang: hreflangByLocale.get(locale) ?? hreflangForLocale(locale),
      href
    })
  }

  if (alternates.length >= 2) {
    const fallback = hrefByLocale.get('root')
    if (fallback) alternates.push({ hreflang: 'x-default', href: fallback })
  } else {
    alternates.length = 0
  }

  return { canonical, alternates }
}

export function seoHeadTags(args: {
  page: string
  pages: string[]
  locales?: Record<string, LocaleHeadConfig | undefined>
  origin?: string
}): HeadConfig[] {
  if (isNotFoundPage(args.page)) return []

  const origin = (args.origin ?? SITE_ORIGIN).replace(/\/$/, '')
  const prefixes = localePrefixes(args.locales)
  const hreflangByLocale = new Map<string, string>()
  hreflangByLocale.set(
    'root',
    hreflangForLocale('root', args.locales?.root?.lang)
  )
  for (const prefix of prefixes) {
    hreflangByLocale.set(
      prefix,
      hreflangForLocale(prefix, args.locales?.[prefix]?.lang)
    )
  }

  const { canonical, alternates } = alternatesForPage(
    args.page,
    args.pages,
    prefixes,
    origin,
    hreflangByLocale
  )

  const tags: HeadConfig[] = [['link', { rel: 'canonical', href: canonical }]]
  for (const alternate of alternates) {
    tags.push([
      'link',
      { rel: 'alternate', hreflang: alternate.hreflang, href: alternate.href }
    ])
  }
  return tags
}

export function seoTransformHead(context: SeoTransformContext): HeadConfig[] {
  if (context.siteConfig.cleanUrls) {
    throw new Error(
      'docs canonical head requires cleanUrls to stay false so every page can canonical to its .html URL'
    )
  }

  const rewriteMap = context.siteConfig.rewrites?.map ?? {}
  const pages = context.siteConfig.pages.map((page) => rewriteMap[page] || page)
  const origin = context.siteConfig.sitemap?.hostname || SITE_ORIGIN

  return seoHeadTags({
    page: context.page,
    pages,
    locales: context.siteConfig.userConfig?.locales,
    origin
  })
}

/** Rewrite a sitemap path so index documents use index.html, matching rel=canonical. */
export function sitemapUrlToHtml(url: string): string {
  if (!url || url === '/') return 'index.html'
  if (/^https?:\/\//i.test(url)) {
    const parsed = new URL(url)
    parsed.pathname = pathnameToHtml(parsed.pathname)
    return parsed.toString()
  }
  return pathnameToHtml(url).replace(/^\//, '')
}

function pathnameToHtml(pathname: string): string {
  if (!pathname || pathname === '/') return '/index.html'
  if (pathname.endsWith('/')) return `${pathname}index.html`
  if (pathname.endsWith('.html')) return pathname
  return `${pathname}.html`
}

function toPublicHreflang(lang: string): string {
  return HREFLANG_BY_LANG[lang] ?? lang
}

function compareHreflang(a: string, b: string): number {
  const ai = HREFLANG_ORDER.indexOf(a)
  const bi = HREFLANG_ORDER.indexOf(b)
  return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
}

/**
 * Align sitemap <loc> and xhtml:link entries with the HTML canonicals:
 * .html URLs (including index.html) and hreflang en/zh/ja/ko plus x-default.
 * Copies link arrays because VitePress shares one array across a locale group.
 */
export function normalizeSitemapItems<T extends SitemapEntry>(items: T[]): T[] {
  return items.map((item) => {
    const url = sitemapUrlToHtml(item.url)
    if (!item.links?.length) return { ...item, url }

    const links = item.links.map((link) => {
      const lang = toPublicHreflang(link.lang)
      return {
        ...link,
        lang,
        url: sitemapUrlToHtml(link.url),
        ...(link.hreflang ? { hreflang: toPublicHreflang(link.hreflang) } : {})
      }
    })

    if (links.length >= 2) {
      const english = links.find((link) => link.lang === 'en')
      if (english && !links.some((link) => link.lang === 'x-default')) {
        links.push({ lang: 'x-default', url: english.url })
      }
    }

    links.sort((a, b) => compareHreflang(a.lang, b.lang))
    return { ...item, url, links }
  })
}
