export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9"
        className="fill-teal-600/10 stroke-teal-700/40 dark:fill-teal-400/10 dark:stroke-teal-300/50"
        strokeWidth="1.4"
      />
      <path
        d="M9 23V9M9 23h14"
        className="stroke-muted-foreground/60"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 12h4.5v4H18v4h5"
        className="stroke-teal-700 dark:stroke-teal-300"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="23" cy="20" r="1.6" className="fill-teal-700 dark:fill-teal-300" />
    </svg>
  );
}
