export default function FloralCorner({
  position,
  className = "",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1,-1)",
  };

  const positions: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute ${positions[position]} pointer-events-none opacity-30 sm:opacity-40 ${className}`}
      style={{ transform: transforms[position] }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="w-14 h-14 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40"
      >
        <g opacity="0.8">
          <path
            d="M10 190 C40 150, 60 120, 80 80 C90 60, 85 40, 70 25"
            stroke="#b76e79"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M80 80 C100 70, 120 60, 130 35"
            stroke="#b76e79"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M60 120 C80 110, 100 105, 120 90"
            stroke="#b76e79"
            strokeWidth="1.5"
            fill="none"
          />
          <ellipse cx="65" cy="30" rx="18" ry="10" transform="rotate(-30 65 30)" fill="#d4a0a7" opacity="0.5" />
          <ellipse cx="75" cy="50" rx="15" ry="8" transform="rotate(-50 75 50)" fill="#c9a96e" opacity="0.3" />
          <ellipse cx="125" cy="40" rx="16" ry="9" transform="rotate(-20 125 40)" fill="#d4a0a7" opacity="0.4" />
          <ellipse cx="115" cy="92" rx="14" ry="8" transform="rotate(-15 115 92)" fill="#d4a0a7" opacity="0.35" />
          <ellipse cx="50" cy="140" rx="12" ry="7" transform="rotate(-60 50 140)" fill="#c9a96e" opacity="0.25" />
          <ellipse cx="35" cy="160" rx="14" ry="8" transform="rotate(-70 35 160)" fill="#d4a0a7" opacity="0.3" />
          <circle cx="70" cy="25" r="4" fill="#b76e79" opacity="0.4" />
          <circle cx="130" cy="35" r="3" fill="#b76e79" opacity="0.35" />
          <circle cx="120" cy="88" r="3.5" fill="#b76e79" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
