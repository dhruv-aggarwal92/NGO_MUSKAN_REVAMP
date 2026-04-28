import { motion } from "motion/react";

export function FloatingPetals() {
  const petals = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    color: i % 2 === 0 ? '#F0C4CF' : '#B5C9B0',
    delay: i * 0.6,
    duration: 6 + i * 0.5,
    rotation: i * 45,
    xOffset: (i - 3) * 60,
  }));

  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute pointer-events-none"
          style={{
            top: '-20px',
            left: `${50 + petal.xOffset}%`,
            width: '20px',
            height: '8px',
            zIndex: 1,
          }}
          initial={{
            y: -20,
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: ['-20px', '300px'],
            x: [0, petal.xOffset / 2, -petal.xOffset / 3, 0],
            rotate: [0, 360],
            opacity: [0, 0.25, 0.2, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundColor: petal.color,
              borderRadius: '50%',
              transform: `rotate(${petal.rotation}deg)`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
