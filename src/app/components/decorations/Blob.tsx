import { motion } from "motion/react";

interface BlobProps {
  size?: number;
  color: string;
  opacity?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}

export function Blob({ size = 200, color, opacity = 0.5, top, left, right, bottom, delay = 0 }: BlobProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 0,
      }}
      animate={{
        borderRadius: [
          "60% 40% 70% 30% / 50% 60% 40% 70%",
          "40% 60% 50% 70% / 60% 30% 70% 40%",
          "70% 30% 40% 60% / 40% 70% 60% 50%",
          "60% 40% 70% 30% / 50% 60% 40% 70%",
        ],
        x: [0, 15, -10, 0],
        y: [0, -12, 10, 0],
      }}
      transition={{
        duration: 10 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundColor: color,
          opacity,
          borderRadius: "inherit",
        }}
      />
    </motion.div>
  );
}
