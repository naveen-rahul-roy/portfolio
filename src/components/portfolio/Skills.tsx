import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { SpotlightCard } from "./effects";

const skillGroups = [
  {
    title: "Cloud Platforms",
    tone: "primary",
    items: ["AWS EC2", "S3", "RDS", "Lambda", "VPC", "IAM", "CloudWatch", "ECR", "Azure DevOps", "ARM Templates", "GCP GKE", "Cloud Build"],
  },
  {
    title: "CI/CD & DevOps",
    tone: "accent",
    items: ["Jenkins", "GitHub Actions", "Azure Pipelines", "Cloud Build", "Maven", "SonarQube", "JFrog", "Git", "Webhooks"],
  },
  {
    title: "Containers & Orchestration",
    tone: "tertiary",
    items: ["Docker", "Kubernetes", "kubectl", "Helm", "GKE", "EKS", "Rolling Updates", "Blue-Green"],
  },
  {
    title: "Infrastructure as Code",
    tone: "primary",
    items: ["Terraform", "CloudFormation", "ARM Templates", "GCP Deployment Manager"],
  },
  {
    title: "Scripting & Automation",
    tone: "accent",
    items: ["Bash", "Python", "PowerShell", "AWS CLI", "Azure CLI", "gcloud CLI"],
  },
  {
    title: "Monitoring & Observability",
    tone: "tertiary",
    items: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack", "Linux Ubuntu", "CentOS"],
  },
];

const marqueeTop = ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "Helm", "Prometheus"];
const marqueeBottom = ["Grafana", "Azure", "GCP", "Python", "Bash", "SonarQube", "ELK Stack", "Linux"];

const toneMap: Record<string, { text: string; dot: string; glow: string; ring: string }> = {
  primary: { text: "text-primary", dot: "bg-primary", glow: "bg-primary/15", ring: "hover:border-primary/50" },
  accent: { text: "text-accent", dot: "bg-accent", glow: "bg-accent/15", ring: "hover:border-accent/50" },
  tertiary: { text: "text-tertiary", dot: "bg-tertiary", glow: "bg-tertiary/15", ring: "hover:border-tertiary/50" },
};

export const Skills = () => {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          label="stack"
          title={<>Tools that <span className="text-gradient-fire">power</span> the pipeline</>}
          align="center"
        />

        {/* Dual marquee */}
        <div className="my-14 space-y-3 mask-fade-x">
          <div className="flex marquee gap-3 w-max">
            {[...marqueeTop, ...marqueeTop].map((s, i) => (
              <div key={i} className="px-6 py-3 glass rounded-full font-mono text-sm whitespace-nowrap text-foreground/80 hover:text-primary transition-colors">
                <span className="text-primary mr-2">▹</span>{s}
              </div>
            ))}
          </div>
          <div className="flex marquee-reverse gap-3 w-max">
            {[...marqueeBottom, ...marqueeBottom].map((s, i) => (
              <div key={i} className="px-6 py-3 glass rounded-full font-mono text-sm whitespace-nowrap text-foreground/80 hover:text-accent transition-colors">
                <span className="text-accent mr-2">◇</span>{s}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const tone = toneMap[group.tone];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <SpotlightCard className={`group glass rounded-3xl p-6 transition-all ${tone.ring} h-full`}>
                  <div className={`absolute -top-20 -right-20 w-44 h-44 ${tone.glow} rounded-full blur-3xl opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700`} />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${tone.dot} animate-pulse`} />
                        <h3 className="font-display font-semibold text-lg">{group.title}</h3>
                      </div>
                      <span className={`font-mono text-[10px] ${tone.text} opacity-70`}>0{i + 1}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg bg-secondary/40 text-xs font-mono text-muted-foreground border border-border/60 hover:border-primary/50 hover:text-foreground hover:-translate-y-0.5 transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
