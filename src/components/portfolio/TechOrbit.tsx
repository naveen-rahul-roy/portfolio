import { motion } from "framer-motion";

export const TechOrbit = () => {
  const innerR = 100;
  const outerR = 158;

  return (
    <div className="relative w-full max-w-[360px] aspect-square mx-auto flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-8 bg-gradient-radial-glow blur-2xl" />

      {/* Outer ring circle (rotating) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-tertiary/20"
        style={{ width: outerR * 2, height: outerR * 2 }}
      />
      {/* Inner ring circle (rotating reverse) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-primary/30 border-dashed"
        style={{ width: innerR * 2, height: innerR * 2 }}
      />

      {/* Center core */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-28 h-28 rounded-full bg-gradient-aurora animated-gradient flex items-center justify-center shadow-[0_0_70px_hsl(var(--primary)/0.55)] z-20"
      >
        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-background/85 backdrop-blur-md flex items-center justify-center font-display font-bold text-2xl text-gradient-aurora animated-gradient">
          NRR
        </div>
      </motion.div>



    </div>
  );
};
