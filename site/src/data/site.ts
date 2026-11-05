// Content entry point. Each language module exports the same shape.
import type { Lang } from '../i18n';
import * as en from './content/en';
import * as ja from './content/ja';

export type { Solution, NavItem } from './content/en';
export type Content = typeof en;

const all: Record<Lang, Content> = { en, ja };
export const getContent = (lang: Lang): Content => all[lang];

export function formatDate(iso: string) {
  return iso.replace(/-/g, '.');
}
