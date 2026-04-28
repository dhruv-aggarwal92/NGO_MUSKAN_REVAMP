interface DotGridProps {
  opacity?: number;
}

export function DotGrid({ opacity = 0.15 }: DotGridProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(212, 118, 143, ${opacity}) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        zIndex: 0,
      }}
    />
  );
}
