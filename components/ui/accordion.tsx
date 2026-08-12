"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Lightweight, dependency-free accordion. One item open at a time. */
export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: React.ReactNode }[];
  className?: string;
}) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-border rounded-2xl border border-border bg-card", className)}>
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-accent/50 sm:px-6"
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  expanded && "rotate-180 text-primary"
                )}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={cn("overflow-hidden transition-all duration-300", expanded ? "max-h-[60rem]" : "max-h-0")}
            >
              <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:px-6">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
