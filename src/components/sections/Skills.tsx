import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { Code2, Braces, Database, Cloud, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/animations";

type Skill = { name: string; level: number };
type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: typeof Code2;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    blurb: "Strong fundamentals, clean code, and performance-first thinking.",
    icon: Code2,
    skills: [
      { name: "C", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Accessible UI, fast interactions, and pixel-perfect layouts.",
    icon: Braces,
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs, auth, and data flows built for real-world scale.",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    blurb: "Deployments, CI habits, and developer tooling that keeps shipping.",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Linux", level: 75 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const localThemeVars: CSSProperties = {
    ["--gradient-start" as never]: "190 100% 50%",
    ["--gradient-end" as never]: "270 90% 66%",
    ["--glow-primary" as never]: "190 100% 50%",
    ["--glow-accent" as never]: "270 90% 66%",
  };

  return (
    <section id="skills" className="py-24 relative" style={localThemeVars}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-10 grid-animate" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[hsl(var(--gradient-start)/0.12)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[hsl(var(--gradient-end)/0.12)] rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-muted-foreground">
              A quick snapshot of the tools I use daily — organized by what I build.
              Hover around and explore each category.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <Tabs defaultValue="frontend">
              <TabsList className="w-full flex flex-wrap gap-2 h-auto bg-card/40 border border-border/60 p-2 rounded-2xl">
                {skillCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-xl data-[state=active]:bg-background/60"
                  >
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsContent key={cat.id} value={cat.id} className="mt-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        whileHover={hoverLift}
                        className="glass glass-hover rounded-2xl p-6 lg:col-span-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-2xl bg-[hsl(var(--gradient-start)/0.14)] text-[hsl(var(--gradient-start))]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{cat.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {cat.blurb}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-border/60 bg-background/30 p-4">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Sparkles className="h-4 w-4 text-[hsl(var(--gradient-end))]" />
                            Strength highlights
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {cat.skills
                              .slice()
                              .sort((a, b) => b.level - a.level)
                              .slice(0, 3)
                              .map((s) => (
                                <span
                                  key={s.name}
                                  className="px-3 py-1 rounded-full bg-secondary/70 text-sm"
                                >
                                  {s.name}
                                </span>
                              ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                        className="glass rounded-2xl p-6 lg:col-span-2"
                      >
                        <div className="grid sm:grid-cols-2 gap-5">
                          {cat.skills.map((skill, idx) => (
                            <div key={skill.name} className="rounded-2xl bg-background/30 border border-border/60 p-4">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold">
                                  {skill.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-primary rounded-full"
                                  initial={{ width: 0 }}
                                  animate={isInView ? { width: `${skill.level}%` } : {}}
                                  transition={{
                                    duration: 0.9,
                                    delay: 0.08 + idx * 0.05,
                                    ease: "easeOut",
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
          </motion.div>

          {/* Core Concepts */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="mt-8 glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Core Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "DBMS",
                "Computer Networks",
                "Operating Systems",
                "System Design",
                "REST APIs",
                "Agile Methodology",
              ].map((concept) => (
                <motion.span
                  key={concept}
                  className="px-4 py-2 rounded-full bg-secondary text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.15 }}
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
