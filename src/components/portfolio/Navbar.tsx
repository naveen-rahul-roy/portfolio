import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./effects";

const links = [
  { href: "#home", label: "Home", n: "01" },
  { href: "#about", label: "About", n: "02" },
  { href: "#skills", label: "Stack", n: "03" },
  { href: "#experience", label: "Work", n: "04" },
  { href: "#projects", label: "Projects", n: "05" },
  { href: "#contact", label: "Contact", n: "06" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-aurora origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div className="max-w-7xl mx-auto glass-strong rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between">
          <Magnetic strength={0.4}>
            <a href="#home" className="font-mono text-base flex items-center gap-1.5 shrink-0">
              <span className="text-primary">{"<"}</span>
              <span className="font-display font-bold tracking-tight text-gradient-aurora animated-gradient">
                NRR
              </span>
              <span className="text-accent">{"/>"}</span>
            </a>
          </Magnetic>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="group relative px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-[10px] text-primary/60 mr-1">{l.n}</span>
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-primary group-hover:w-1/2 transition-all" />
              </motion.a>
            ))}
          </div>

          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-mono text-xs font-medium hover:shadow-glow transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
              Hire me
            </a>
          </Magnetic>

          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong mt-3 rounded-3xl p-3 flex flex-col gap-1 max-w-7xl mx-auto"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm hover:text-primary hover:bg-primary/5 rounded-2xl transition-colors"
              >
                <span className="font-mono text-xs text-primary/60">{l.n}</span>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};
