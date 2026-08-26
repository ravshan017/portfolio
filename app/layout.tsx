import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers";
import { site } from "@/data/site.config";
import "./globals.css";

// Округлый дисплейный гротеск с полной кириллицей — «анимешный» характер
const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  // TODO: после покупки домена задай NEXT_PUBLIC_SITE_URL в Vercel
  metadataBase: new URL(site.url),
  title: {
    default: "Бурнашев Равшан — разработчик сайтов и приложений",
    template: "%s — Бурнашев Равшан",
  },
  description:
    "Портфолио программиста Бурнашева Равшана: сайты и приложения, проекты и стек технологий. Выпускник NamDTU, «Информационные системы и технологии».",
  keywords: [
    "Бурнашев Равшан",
    "разработчик",
    "программист",
    "Next.js",
    "React",
    "Namangan",
    "NamDTU",
    "веб-разработчик Узбекистан",
  ],
  authors: [{ name: site.nameRu }],
  creator: site.nameRu,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["uz_UZ"],
    url: site.url,
    siteName: site.nameRu,
    title: "Бурнашев Равшан — разработчик сайтов и приложений",
    description:
      "Сайты и приложения под ключ. Проекты, стек, контакты. NamDTU, информационные системы и технологии.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Бурнашев Равшан — разработчик сайтов и приложений",
    description: "Сайты и приложения под ключ. Проекты, стек, контакты. NamDTU.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0e1a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.nameRu,
  alternateName: site.nameLat,
  jobTitle: "Разработчик сайтов и приложений",
  url: site.url,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Наманганский государственный технический университет (NamDTU)",
  },
  knowsAbout: [
    "Веб-разработка",
    "Разработка приложений",
    "Информационные системы",
    ...site.skills,
  ],
  sameAs: site.socials.map((s) => s.url).filter((url) => url !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${display.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-sakura focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink"
        >
          Перейти к содержимому
        </a>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
