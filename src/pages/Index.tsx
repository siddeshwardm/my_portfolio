import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SnowfallOverlay } from "@/components/SnowfallOverlay";
import { motion, useReducedMotion } from "framer-motion";
import { CursorFog } from "@/components/layout/CursorFog";

const Index = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="min-h-screen bg-background noise-overlay relative"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15 grid-animate" />
        <CursorFog />
      </div>
      <SnowfallOverlay />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
