import { motion } from "motion/react";

interface RosetteProps {
  size?: number;
  color: string;
  opacity?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration?: number;
}

export function Rosette({
  size = 300,
  color,
  opacity = 0.06,
  top,
  left,
  right,
  bottom,
  duration = 25,
}: RosetteProps) {
  return (
    <motion.div
      className="absolute pointer-events-none overflow-hidden"
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
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx="80"
            ry="30"
            fill={color}
            opacity={opacity}
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="20" fill="#FDF8F3" opacity={opacity * 1.5} />
      </svg>
    </motion.div>
  );
}
