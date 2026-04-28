import { motion } from "motion/react";

interface BotanicalLeafProps {
  color: string;
  opacity?: number;
  size?: number;
  rotation?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}

export function BotanicalLeaf({
  color,
  opacity = 0.4,
  size = 60,
  rotation = 30,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: BotanicalLeafProps) {
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
        zIndex: 1,
      }}
      animate={{
        rotate: [rotation - 5, rotation + 5, rotation - 5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 5 C 40 15, 50 30, 50 50 C 50 65, 40 75, 30 78 C 20 75, 10 65, 10 50 C 10 30, 20 15, 30 5 Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M30 5 L30 78"
          stroke={color}
          strokeWidth="1"
          opacity={opacity * 0.6}
        />
      </svg>
    </motion.div>
  );
}
