import { motion } from "framer-motion";
import { Award, Cloud, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

const certs = [
  { name: "DevOps Training Program", issuer: "Elevate Labs", year: "2025", icon: Award, tone: "primary" },
  { name: "AWS Serverless with Lambda", issuer: "AWS Academy", year: "2025", icon: Cloud, tone: "accent" },
  { name: "AWS Cloud Foundations", issuer: "AWS Academy", year: "2025", icon: Cloud, tone: "accent" },
  { name: "Solutions Architecture Sim", issuer: "Forage / AWS", year: "2025", icon: Award, tone: "tertiary" },
  { name: "Prompt Design in Vertex AI", issuer: "Google Cloud", year: "2025", icon: Sparkles, tone: "primary" },
];

const toneMap: Record<string, { gradient: string; shadow: string; text: string; ring: string }> = {
  primary: { gradient: "bg-gradient-primary", shadow: "shadow-glow", text: "text-primary", ring: "hover:border-primary/50" },
  accent: { gradient: "bg-gradient-accent", shadow: "shadow-accent-glow", text: "text-accent", ring: "hover:border-accent/50" },
  tertiary: { gradient: "bg-gradient-cosmic", shadow: "shadow-tertiary-glow", text: "text-tertiary", ring: "hover:border-tertiary/50" },
};

export const Certifications = () => {
  return (
    <section className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05"
          label="credentials"
          title={<>Certified <span className="text-gradient-fire">expertise</span></>}
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {certs.map((c, i) => {
            const tone = toneMap[c.tone];
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, rotate: -0.5 }}
                className={`group glass rounded-3xl p-6 flex items-start gap-4 transition-all ${tone.ring}`}
              >
                <div className={`shrink-0 w-14 h-14 rounded-2xl ${tone.gradient} flex items-center justify-center ${tone.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <Icon className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-display font-semibold leading-snug mb-1.5 group-hover:${tone.text} transition-colors`}>
                    {c.name}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    {c.issuer} <span className="text-border mx-1">·</span> {c.year}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
