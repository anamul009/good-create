// Locale helpers. Japanese is the default at the root; English lives under /en/.
export type Lang = 'en' | 'ja';
export const defaultLang: Lang = 'ja';
export const langs: Lang[] = ['ja', 'en'];

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'ja';
}

const EXTERNAL = /^(?:[a-z]+:|#|\/\/)/i;

/** Prefix an internal path for the given language. External links, anchors and /.well-known stay as-is. */
export function localize(lang: Lang, href: string): string {
  if (lang === defaultLang || EXTERNAL.test(href) || href.startsWith('/.well-known') || href.startsWith('/en/')) return href;
  return href === '/' ? '/en/' : `/en${href}`;
}

/** Path without the /en prefix. */
export function basePath(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

export function pathFor(url: URL, lang: Lang): string {
  return localize(lang, basePath(url.pathname));
}

/** Pick the string for the current language from a { en, ja } pair. */
export function pick<T>(lang: Lang, v: { en: T; ja: T }): T {
  return v[lang];
}

export const ui = {
  en: {
    siteName: 'Good Create',
    defaultTitle: 'Good Create — Trust infrastructure for the Web3.0 era',
    defaultDescription:
      'Good Create builds trust infrastructure for the Web3.0 era: patented @POP technology for secure communication, identity and platforms that keep data on the device.',
    skip: 'Skip to content',
    home: 'Home',
    homeAria: 'Good Create — home',
    contact: 'Contact us',
    menu: 'Menu',
    overview: (label: string) => `${label} overview`,
    primary: 'Primary',
    breadcrumb: 'Breadcrumb',
    onThisPage: 'On this page',
    switchLabel: '日本語',
    switchAria: '日本語で表示',
    tagline: 'Trust infrastructure for the Web3.0 era.',
    information: 'Information',
    news: 'News',
    contactShort: 'Contact',
    privacy: 'Privacy policy',
    security: 'Security',
    stSite: 'SecurityTalk official site ↗',
    toTop: 'Back to top',
    legal: 'Legal',
    rights: 'All rights reserved.',
    tel: 'Tel',
    fax: 'Fax',
    ctaEyebrow: 'Contact',
    ctaTitle: 'Let’s talk about what you need to protect.',
    ctaText: 'Government, enterprise or partner — tell us your requirements and our team will respond directly.',
    explore: 'Explore solutions',
    videoPause: 'Pause background video',
    videoPlay: 'Play background video',
  },
  ja: {
    siteName: 'グッドクリエイト',
    defaultTitle: '株式会社グッドクリエイト — Web3.0時代の信頼インフラ',
    defaultDescription:
      '株式会社グッドクリエイトは、個人情報を端末に保持する特許技術「@POP」を軸に、セキュアな通信・本人認証・プラットフォームを開発するWeb3.0時代の信頼インフラ企業です。',
    skip: '本文へスキップ',
    home: 'ホーム',
    homeAria: 'グッドクリエイト ホーム',
    contact: 'お問い合わせ',
    menu: 'メニュー',
    overview: (label: string) => `${label} トップ`,
    primary: 'メインメニュー',
    breadcrumb: 'パンくずリスト',
    onThisPage: 'ページ内メニュー',
    switchLabel: 'English',
    switchAria: 'View in English',
    tagline: 'Web3.0時代の信頼インフラを。',
    information: 'インフォメーション',
    news: 'ニュース',
    contactShort: 'お問い合わせ',
    privacy: 'プライバシーポリシー',
    security: 'セキュリティ',
    stSite: 'SecurityTalk 公式サイト ↗',
    toTop: 'ページトップへ',
    legal: '規約',
    rights: 'All rights reserved.',
    tel: 'TEL',
    fax: 'FAX',
    ctaEyebrow: 'Contact',
    ctaTitle: '守りたい情報について、ご相談ください。',
    ctaText: '官公庁・企業・パートナーの皆さま。ご要件をお聞かせいただければ、担当チームが直接ご回答します。',
    explore: 'ソリューションを見る',
    videoPause: '背景動画を一時停止',
    videoPlay: '背景動画を再生',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
