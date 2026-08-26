import raw from "@/data/projects.json";

export type ProjectCategory = "site" | "app" | "study";

export interface Project {
  id: string;
  category: ProjectCategory;
  /** true → на карточке появится плашка «заглушка» */
  placeholder?: boolean;
  title: string;
  description: string;
  stack: string[];
  /** путь в /public/images или null — тогда рисуется стилизованная заглушка */
  image: string | null;
  demoUrl: string;
  codeUrl: string;
  year: string;
}

export const projects: Project[] = raw as Project[];

export const categoryOrder: ProjectCategory[] = ["site", "app", "study"];
