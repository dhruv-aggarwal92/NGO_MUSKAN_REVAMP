export function GirlWithFlower() {
  return (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="60" rx="35" ry="40" fill="#F5C4B3" />
      <path d="M75 50 Q 70 30, 80 20 Q 100 10, 120 20 Q 130 30, 125 50 Z" fill="#3D2020" />
      <ellipse cx="100" cy="130" rx="45" ry="60" fill="#D4768F" />
      <path d="M80 120 Q 60 140, 55 180" stroke="#D4768F" strokeWidth="18" strokeLinecap="round" fill="none" />
      <path d="M120 120 Q 140 140, 145 180" stroke="#D4768F" strokeWidth="18" strokeLinecap="round" fill="none" />
      <path d="M65 190 Q 100 200, 135 190 L 130 270 Q 100 275, 70 270 Z" fill="#B5C9B0" />
      <circle cx="92" cy="58" r="2" fill="#3D2020" />
      <circle cx="108" cy="58" r="2" fill="#3D2020" />
      <circle cx="100" cy="50" r="3" fill="#C45C78" />
      <ellipse cx="140" cy="180" rx="15" ry="15" fill="#F0C4CF" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx="140"
          cy="180"
          rx="12"
          ry="5"
          fill="#D4768F"
          transform={`rotate(${angle} 140 180)`}
        />
      ))}
      <circle cx="140" cy="180" r="4" fill="#F9E8EC" />
    </svg>
  );
}
