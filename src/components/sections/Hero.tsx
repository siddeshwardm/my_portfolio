import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Left Glow */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 
                      md:-left-32 md:translate-x-0
                      w-64 h-64 md:w-96 md:h-96 
                      bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, -14, 0], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right Glow */}
      <motion.div
        aria-hidden
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 
                      md:left-auto md:-right-32 md:translate-x-0
                      w-64 h-64 md:w-96 md:h-96 
                      bg-accent/20 rounded-full blur-3xl"
        animate={{ y: [0, 12, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-primary">
              👋 Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ willChange: "opacity", transform: "translateZ(0)" }}
          >
            <span className="text-foreground">Siddeshwar</span>
            <br />
            <span className="text-gradient">Madargave</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React & Node.js Expert",
                2000,
                "Cloud Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg"
          >
            B.Tech student passionate about building scalable web applications, 
            cloud-based systems, and AI-powered solutions. Based in Bangalore, India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Drop a Chat
              </a>
            </Button>

            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>

            <Button variant="hero" size="lg" asChild>
              <a href="/resume (2).pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
            className="flex items-center justify-center gap-8"
          >
            <motion.a
              href="https://github.com/siddeshwardm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/siddeshwar-madargave-945092307/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="mailto:siddeshwarmadargave6@gmail.com"
              className="p-3 rounded-xl border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};
