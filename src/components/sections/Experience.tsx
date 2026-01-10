import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Engineer (Intern)",
    company: "PaidCoders AI Labs LLP",
    location: "Remote",
    duration: "September 2025 – December 2025",
    description: [
      "Developed scalable web applications using React.js and Node.js",
      "Integrated RESTful APIs and third-party services",
      "Implemented secure authentication systems with JWT and OAuth",
      "Built production-ready frontend and backend features",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
  },
];

const education = [
  {
    degree: "B.E. in Information Science and Engineering",
    institution: "Dayananda Sagar College of Engineering",
    location: "Bangalore, India",
    duration: "2022 – 2026",
    description:
      "Focusing on full-stack development, cloud computing, and AI/ML. Active participation in coding competitions and hackathons.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Experience Timeline */}
          <div className="relative mb-20">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0 md:w-1/2 md:odd:pr-12 md:even:pl-12 md:even:ml-auto mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:odd:right-0 md:even:left-0 top-0 w-4 h-4 rounded-full bg-primary glow-primary md:odd:-right-2 md:even:-left-2 md:-translate-y-0" />

                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
