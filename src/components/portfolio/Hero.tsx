import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, MapPin } from "lucide-react";
import { Magnetic } from "./effects";
import { TechOrbit } from "./TechOrbit";

const stats = [
  { value: "60%", label: "Deploy time reduced", color: "text-primary" },
  { value: "99.9%", label: "Uptime maintained", color: "text-accent" },
  { value: "5+", label: "Cloud certifications", color: "text-tertiary" },
];

const firstName = "Naveen".split("");
const middleName = "Rahul".split("");

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-bg mask-fade-bottom" />
      <div className="absolute inset-0 bg-gradient-radial-glow" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 md:right-32 w-80 h-80 bg-primary/25 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 md:left-32 w-96 h-96 bg-tertiary/25 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/15 rounded-full blur-[120px]"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
      >
        <div className="lg:col-span-7 space-y-7">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-strong px-4 py-2 rounded-full text-sm font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-foreground/80">Available for opportunities</span>
            <span className="w-px h-3 bg-border" />
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">India · Remote</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-primary text-sm md:text-base flex items-center gap-2"
          >
            <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <span>const role = "DevOps Engineer";</span>
          </motion.p>

          {/* Name with letter-by-letter reveal */}
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] tracking-[-0.04em]">
            <span className="block whitespace-nowrap">
              {firstName.map((letter, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="block whitespace-nowrap">
              {middleName.map((letter, i) => (
                <motion.span
                  key={`m-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.65 + i * 0.04, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-stroke"
                  style={{ transformOrigin: "bottom" }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="inline-block ml-4 md:ml-6 text-gradient-aurora animated-gradient"
              >
                Roy<span className="font-serif italic text-tertiary-glow">.</span>
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <h2 className="font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-accent font-medium">AWS</span>
              <span className="mx-2 text-border">/</span>
              <span className="text-primary font-medium">DevOps</span>
              <span className="mx-2 text-border">/</span>
              <span className="text-tertiary font-medium">Cloud</span>
              <span className="text-foreground"> engineer</span>
              <span className="blink-cursor" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I architect <span className="text-foreground">resilient cloud infrastructure</span> and orchestrate
            CI/CD pipelines that ship faster, scale gracefully, and never sleep.
            Turning <span className="font-mono text-primary">YAML</span> into uptime,
            one container at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium overflow-hidden hover:shadow-glow transition-shadow"
              >
                <span className="relative z-10 font-mono text-sm">view_projects()</span>
                <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full glass-strong text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                <span className="font-mono text-sm">contact()</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Magnetic>

            <div className="flex items-center gap-2 ml-2">
              {[
                { Icon: Github, href: "https://github.com/naveen-rahul-roy", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/naveen-rahul-roy", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:naveenrahulroy1@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <Magnetic key={label} strength={0.5}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border/50 max-w-2xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className={`font-display text-3xl md:text-4xl font-bold ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 font-mono leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: tech orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <TechOrbit />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
