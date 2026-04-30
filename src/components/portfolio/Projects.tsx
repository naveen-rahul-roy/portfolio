import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { SectionHeader } from "./About";
import { SpotlightCard } from "./effects";

const projects = [
  {
    title: "CI/CD Pipeline for Java Apps",
    year: "2025",
    description:
      "Multi-stage CI: source checkout, Maven build, SonarQube quality gate, JFrog Artifactory storage — automated rollback on quality breach.",
    impact: "60% faster build-to-deploy",
    stack: ["Jenkins", "Maven", "SonarQube", "JFrog", "Git"],
    tone: "primary",
  },
  {
    title: "HR Application Deployment",
    year: "2025",
    description:
      "End-to-end CI/CD: Jenkins build, Docker containerization, automated testing, semantic image tagging, push to Amazon ECR.",
    impact: "99.9% uptime via immutable deploys",
    stack: ["AWS", "Jenkins", "Docker", "ECR"],
    tone: "accent",
  },
  {
    title: "AWS Infrastructure Automation",
    year: "2025",
    description:
      "Reusable Terraform modules for VPC networking, EC2 auto-scaling, RDS multi-AZ. CloudFormation with cross-stack references and rollback.",
    impact: "One-command environment spin-up",
    stack: ["Terraform", "CloudFormation", "AWS CLI"],
    tone: "tertiary",
  },
  {
    title: "GCP Cloud Build & GKE",
    year: "2025",
    description:
      "Automated container builds via Cloud Build triggers on GitHub push, with Helm chart templating, blue-green strategy, and HPA.",
    impact: "Zero-downtime microservice releases",
    stack: ["Cloud Build", "GKE", "Kubernetes", "Helm"],
    tone: "primary",
  },
];

const toneMap: Record<string, { text: string; bg: string; ring: string; gradient: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/20", ring: "hover:border-primary/50", gradient: "from-primary/40 to-primary/0" },
  accent: { text: "text-accent", bg: "bg-accent/20", ring: "hover:border-accent/50", gradient: "from-accent/40 to-accent/0" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary/20", ring: "hover:border-tertiary/50", gradient: "from-tertiary/40 to-tertiary/0" },
};

export const Projects = () => {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          label="projects"
          title={<>Selected <span className="text-gradient-aurora animated-gradient">work</span></>}
          subtitle="Real pipelines. Real automation. Measurable impact."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((p, i) => {
            const tone = toneMap[p.tone];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <SpotlightCard className={`group glass-strong rounded-3xl p-7 md:p-8 transition-all ${tone.ring} hover:shadow-elegant h-full`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${tone.gradient}`} />

                  {/* Glow */}
                  <div className={`absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-700 ${tone.bg}`} />

                  {/* Background number */}
                  <div className="absolute top-4 right-6 font-display font-bold text-8xl text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors leading-none">
                    0{i + 1}
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${tone.bg.replace('/20', '')}`} />
                      <span className="text-muted-foreground">{p.year}</span>
                      <span className="text-border">·</span>
                      <span className={tone.text}>case study</span>
                    </div>

                    <h3 className="font-display text-2xl md:text-[1.7rem] font-bold mb-3 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed text-sm md:text-base">
                      {p.description}
                    </p>

                    <div className="flex items-center gap-2 mb-5 px-3.5 py-2 rounded-xl glass border border-border/50 w-fit">
                      <TrendingUp className={`w-3.5 h-3.5 ${tone.text}`} />
                      <span className="font-mono text-xs text-foreground">{p.impact}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-background/60 text-[11px] font-mono text-muted-foreground border border-border/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <a href="https://github.com/naveen-rahul-roy" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all" />
                      </a>
                      <span className="text-border">·</span>
                      <a href="#" className={`flex items-center gap-1.5 text-sm ${tone.text} hover:underline underline-offset-4`}>
                        Read case study →
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
