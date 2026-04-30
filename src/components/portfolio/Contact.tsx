import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./effects";

const contacts = [
  { Icon: Mail, label: "Email", value: "naveenrahulroy1@gmail.com", href: "mailto:naveenrahulroy1@gmail.com", tone: "primary" },
  { Icon: Phone, label: "Phone", value: "+91 86391 51051", href: "tel:+918639151051", tone: "accent" },
  { Icon: Linkedin, label: "LinkedIn", value: "naveen-rahul-roy", href: "https://linkedin.com/in/naveen-rahul-roy", tone: "tertiary" },
  { Icon: Github, label: "GitHub", value: "naveen-rahul-roy", href: "https://github.com/naveen-rahul-roy", tone: "primary" },
];

const toneMap: Record<string, string> = {
  primary: "text-primary",
  accent: "text-accent",
  tertiary: "text-tertiary",
};

export const Contact = () => {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Animated bg */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial-glow"
      />
      <div className="absolute inset-0 dot-bg opacity-50 mask-fade-bottom" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="font-mono text-xs text-primary tracking-[0.3em]">06 / CONTACT</span>
            <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
            Let's build
            <br />
            <span className="text-gradient-aurora animated-gradient">
              something resilient
            </span>
            <span className="font-serif italic text-tertiary-glow">.</span>
          </h2>
          <p className="text-muted-foreground mt-7 max-w-xl mx-auto text-lg">
            Open to Cloud, DevOps, and SRE roles. Let's chat about pipelines,
            uptime, or whatever's keeping you up at 3 AM.
          </p>
        </motion.div>

        <Magnetic strength={0.15}>
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="mailto:naveenrahulroy1@gmail.com"
            className="group block glass-strong rounded-[2rem] p-8 md:p-12 mb-8 hover:border-primary/50 transition-all hover:shadow-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-tertiary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-primary mb-3 tracking-[0.2em]">SAY HELLO</p>
                <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold break-all">
                  naveenrahulroy1
                  <span className="text-muted-foreground">@gmail.com</span>
                </h3>
              </div>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-aurora animated-gradient text-primary-foreground flex items-center justify-center shrink-0 shadow-glow"
              >
                <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9" />
              </motion.div>
            </div>
          </motion.a>
        </Magnetic>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-5 hover:border-primary/40 transition-all"
            >
              <c.Icon className={`w-5 h-5 ${toneMap[c.tone]} mb-3`} />
              <p className="font-mono text-[10px] text-muted-foreground mb-1 tracking-[0.2em] uppercase">{c.label}</p>
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                {c.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Big watermark text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative max-w-7xl mx-auto mt-24 overflow-hidden"
      >
        <div className="font-display font-bold text-[18vw] leading-[0.85] tracking-[-0.05em] text-stroke text-center select-none">
          NAVEEN
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="relative max-w-7xl mx-auto mt-12 pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} Naveen Rahul Roy · Crafted with <span className="text-accent">▲</span> and lots of YAML
          </p>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>System operational · 99.9% uptime</span>
          </div>
        </div>
      </footer>
    </section>
  );
};
