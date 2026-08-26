// ============================================================
// ЦЕНТРАЛЬНЫЙ КОНФИГ САЙТА
// Меняй ссылки и списки здесь — компоненты трогать не нужно.
// ============================================================

export type SocialKind = "pro" | "creative";

export interface Social {
  id: "telegram" | "instagram" | "youtube";
  label: string;
  handle: string;
  /** TODO: замени "#" на реальную ссылку канала */
  url: string;
  /** pro = про разработку, creative = творческий проект (получит отдельную плашку) */
  kind: SocialKind;
}

export const site = {
  nameRu: "Бурнашев Равшан",
  nameLat: "Burnashev Ravshan",
  initials: "РБ",

  /** TODO: замени на свою почту */
  email: "hello@example.com",

  // TODO: домен после покупки — для SEO, sitemap и OG-картинок
  // Пример: https://burnashev.uz
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  socials: [
    {
      id: "telegram",
      label: "Telegram",
      handle: "@burnashev_dev",
      url: "#", // TODO: ссылка на Telegram-канал
      kind: "pro",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@burnashev.rb",
      url: "#", // TODO: ссылка на Instagram
      kind: "pro",
    },
    {
      id: "youtube",
      label: "YouTube",
      handle: "@burnashev_rb",
      url: "#", // TODO: ссылка на YouTube-канал
      // Если канал НЕ про программирование — оставь "creative",
      // тогда на карточке появится плашка «творческий проект».
      kind: "creative",
    },
  ] satisfies Social[] as Social[],

  // TODO: поправь список под свой реальный стек — просто редактируй строки
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Three.js",
    "Tailwind CSS",
    "Python",
    "Git",
    "Figma",
  ],
} as const;
