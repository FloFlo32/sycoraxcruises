import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";
import { occasions } from "@/content/site-data";

export function Occasions() {
  return (
    <section id="occasions" className="border-y border-border/60 bg-muted/30 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            What&apos;s your occasion?
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Your Bespoke Celebration
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((o) => (
            <RevealItem
              key={o.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.image}
                  alt={o.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "size-full object-cover transition-transform duration-500 group-hover:scale-[1.06]",
                    o.pos
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-3 left-3 grid size-11 place-items-center rounded-xl bg-gradient-to-br shadow-lg ring-2 ring-white/70",
                    o.color
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.icon} alt="" aria-hidden className="size-6 brightness-0 invert" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <h3 className="font-semibold leading-snug">{o.label}</h3>
                <p className="flex-1 text-pretty text-sm text-muted-foreground">{o.body}</p>
                <Link
                  href="/boat-rental-book-online"
                  className="inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn more <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
