export default function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 sm:gap-3 my-3 sm:my-6 ${className}`}>
      <div className="h-px flex-1 max-w-12 sm:max-w-24 bg-gradient-to-r from-transparent to-rose-gold-light" />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-4 h-4 sm:w-6 sm:h-6 text-rose-gold shrink-0"
      >
        <path
          d="M12 2C9 2 7 5 7 8c0 2 1 4 3 5-2 1-3 3-3 5 0 3 2 4 5 4s5-1 5-4c0-2-1-4-3-5 2-1 3-3 3-5 0-3-2-6-5-6z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M12 6l1.5 3 3.5.5-2.5 2.5.5 3.5L12 14l-3 1.5.5-3.5L7 9.5 10.5 9z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
      <div className="h-px flex-1 max-w-12 sm:max-w-24 bg-gradient-to-l from-transparent to-rose-gold-light" />
    </div>
  );
}
