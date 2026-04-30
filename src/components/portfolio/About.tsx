import { motion } from "framer-motion";
import { Cloud, GitBranch, Server, Zap, Quote } from "lucide-react";
import { SpotlightCard } from "./effects";

const features = [
  { Icon: Cloud, title: "Multi-cloud", desc: "AWS · Azure · GCP", tone: "primary" },
  { Icon: GitBranch, title: "CI/CD pipelines", desc: "Jenkins · GitHub Actions", tone: "accent" },
  { Icon: Server, title: "Container ops", desc: "Docker · K8s · Helm", tone: "tertiary" },
  { Icon: Zap, title: "IaC mastery", desc: "Terraform · CloudFormation", tone: "primary" },
];

const toneClasses: Record<string, { text: string; bg: string; border: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/15", border: "hover:border-primary/50" },
  accent: { text: "text-accent", bg: "bg-accent/15", border: "hover:border-accent/50" },
  tertiary: { text: "text-tertiary", bg: "bg-tertiary/15", border: "hover:border-tertiary/50" },
};

export const About = () => {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial-glow blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader number="01" label="about" title={<>The story behind <span className="text-gradient-aurora animated-gradient">the YAML</span></>} />

        <div className="grid lg:grid-cols-12 gap-10 items-start mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative pl-6 border-l-2 border-primary/40">
              <Quote className="absolute -left-3 -top-2 w-5 h-5 text-primary bg-background p-0.5" />
              <p className="font-serif italic text-2xl md:text-3xl leading-snug text-foreground/90">
                "Infrastructure should be invisible. Pipelines should feel inevitable. Uptime is a feature."
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm an <span className="text-foreground font-medium">AWS & DevOps engineer</span> obsessed with
              the choreography of modern infrastructure — pipelines that flow, containers that orchestrate
              themselves, and clouds that heal in their sleep.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              From writing Terraform modules that spin up entire VPCs in a single command, to shaving
              <span className="text-primary font-medium"> 60% off deployment cycles </span>
              with Jenkins + SonarQube quality gates, I treat infrastructure as a craft. Every Helm chart,
              every Bash script, every YAML key — built to scale, observable by default, immutable by design.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { l: "AWS Certified", t: "primary" },
                { l: "5× Certifications", t: "accent" },
                { l: "B.Tech CS&D", t: "tertiary" },
                { l: "GPA 8.12 / 10", t: "primary" },
              ].map((b) => (
                <span
                  key={b.l}
                  className={`px-4 py-2 rounded-full glass text-sm font-mono ${toneClasses[b.t].text} border-current/20`}
                >
                  {b.l}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => {
              const tone = toneClasses[f.tone];
              return (
                <SpotlightCard
                  key={f.title}
                  className={`group glass rounded-3xl p-6 transition-all ${tone.border}`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-11 h-11 rounded-2xl ${tone.bg} flex items-center justify-center mb-4`}>
                      <f.Icon className={`w-5 h-5 ${tone.text}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{f.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                </SpotlightCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface HeaderProps {
  number: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ number, label, title, subtitle, align = "left" }: HeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={align === "center" ? "text-center" : ""}
  >
    <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
      <span className="font-mono text-xs text-primary tracking-[0.3em]">
        {number} / {label.toUpperCase()}
      </span>
      <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
    </div>
    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-5 max-w-xl text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);
