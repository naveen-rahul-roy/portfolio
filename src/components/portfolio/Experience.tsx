import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./About";

const items = [
  {
    type: "work",
    title: "DevOps Trainee",
    org: "Elevate Labs",
    location: "Remote, India",
    date: "Sep 2025 — Nov 2025",
    bullets: [
      "Designed end-to-end CI/CD pipelines using Jenkins with Git webhooks, Maven builds, SonarQube static analysis, and JFrog Artifactory — reducing deployment time by 60%.",
      "Containerized multi-tier applications and deployed production workloads on Kubernetes (GKE) with rolling update strategies and health checks.",
      "Automated AWS infrastructure with Terraform (modular VPC, EC2, RDS) and CloudFormation stacks with parameter validation and auto-rollback.",
      "Built complete CI/CD workflow for HR application — Docker builds, semantic versioning, push to ECR — maintaining 99.9% uptime.",
      "Deployed microservices to GKE using Helm charts with blue-green deployment strategies and Cloud Build triggers.",
    ],
    tone: "primary",
  },
  {
    type: "education",
    title: "B.Tech in Computer Science & Design",
    org: "SRKR Engineering College",
    location: "Bhimavaram, India",
    date: "Aug 2021 — May 2025",
    bullets: [
      "GPA: 8.12 / 10.0",
      "Focus on cloud computing, DevOps, and full-stack engineering.",
    ],
    tone: "accent",
  },
];

const toneMap: Record<string, { text: string; bg: string; border: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/15", border: "border-primary" },
  accent: { text: "text-accent", bg: "bg-accent/15", border: "border-accent" },
};

export const Experience = () => {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03"
          label="journey"
          title={<>Building, shipping, <span className="text-gradient-aurora animated-gradient">scaling</span></>}
          align="center"
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-10">
            {items.map((item, i) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap;
              const tone = toneMap[item.tone];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className={`absolute left-0 top-6 w-10 h-10 rounded-full bg-background border-2 ${tone.border} flex items-center justify-center z-10`}
                  >
                    <Icon className={`w-4 h-4 ${tone.text}`} />
                    <span className={`absolute inset-0 rounded-full ${tone.bg} animate-ping`} />
                  </motion.div>

                  <motion.article
                    whileHover={{ y: -4, scale: 1.005 }}
                    className="glass-strong rounded-3xl p-7 md:p-8 hover:border-primary/40 transition-all hover:shadow-elegant group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                          <span>·</span>
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight group-hover:text-gradient transition-all">
                          {item.title}
                        </h3>
                        <p className={`mt-1 text-sm font-mono ${tone.text}`}>@ {item.org}</p>
                      </div>
                      <span className={`shrink-0 px-3 py-1 rounded-full ${tone.bg} ${tone.text} text-[10px] font-mono uppercase tracking-wider`}>
                        {item.type}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <ArrowUpRight className={`w-4 h-4 ${tone.text} mt-1 shrink-0`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
