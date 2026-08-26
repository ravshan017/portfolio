import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Media } from "@/components/sections/media";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
