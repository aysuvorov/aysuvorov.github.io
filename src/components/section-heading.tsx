import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  accent = "green",
  className,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  accent?: "orange" | "green";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "font-mono text-xs uppercase tracking-[0.22em]",
          accent === "orange" ? "text-orange-700 dark:text-orange-300" : "text-emerald-700 dark:text-emerald-300"
        )}
      >
        {index} · {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
