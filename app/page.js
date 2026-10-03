import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Apps from "@/components/Apps";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Showcase />
        <Apps />
        <Architecture />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
