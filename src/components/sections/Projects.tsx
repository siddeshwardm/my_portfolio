import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, hoverLift, scaleIn, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A community-driven platform for local feeds and village updates with real-time data handling and modern authentication.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Firebase",
      "TypeScript",
    ],
    features: [
      "Google and OTP-based Firebase authentication",
      "Real-time Firestore data handling",
      "Responsive and modern UI",
    ],
    github: "https://github.com/siddeshwardm/E-commerce",
    live: "#",
    featured: true,
  },
  {
    title: "Personal Budget Management System",
    description:
      "AI-powered personal finance app with receipt scanning and intelligent financial insights using Google Gemini.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Zustand",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Google Gemini AI",
    ],
    features: [
      "Secure user authentication",
      "AI-powered receipt scanning",
      "Interactive spending charts and analytics",
    ],
    github: "https://github.com/siddeshwardm/Budget_Manager",
    live: "#",
    featured: true,
  },
  {
    title: "Firebase Authentication System",
    description:
      "A complete authentication solution with secure sign-in/sign-up workflows and comprehensive form validation.",
    technologies: ["React.js", "Firebase", "Node.js"],
    features: [
      "Secure authentication workflows",
      "Form validation best practices",
      "User session management",
    ],
    github: "https://github.com/siddeshwardm/authentication-firebase",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={scaleIn}
                transition={{ delay: index * 0.06 }}
                whileHover={hoverLift}
                className="group glass glass-hover rounded-2xl p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Folder className="h-6 w-6" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: index * 0.06 + 0.12 + i * 0.05 }}
                    >
                      <span className="text-primary">▹</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-mono text-primary">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/siddeshwardm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
