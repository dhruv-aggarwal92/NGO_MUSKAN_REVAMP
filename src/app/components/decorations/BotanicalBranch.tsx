import { motion } from "motion/react";

interface BotanicalBranchProps {
  color: string;
  opacity?: number;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export function BotanicalBranch({
  color,
  opacity = 0.22,
  size = 120,
  top,
  left,
  right,
  bottom,
}: BotanicalBranchProps) {
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
        transformOrigin: 'bottom center',
      }}
      animate={{
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 110 Q 50 80, 45 50 Q 42 30, 45 10"
          stroke={color}
          strokeWidth="2"
          opacity={opacity}
          fill="none"
        />
        <ellipse cx="35" cy="40" rx="12" ry="20" fill={color} opacity={opacity} transform="rotate(-30 35 40)" />
        <ellipse cx="55" cy="60" rx="14" ry="22" fill={color} opacity={opacity} transform="rotate(20 55 60)" />
        <ellipse cx="50" cy="25" rx="10" ry="18" fill={color} opacity={opacity} transform="rotate(-15 50 25)" />
      </svg>
    </motion.div>
  );
}
