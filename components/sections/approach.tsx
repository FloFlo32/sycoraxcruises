import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";
import { crew } from "@/content/site-data";

export function Approach() {
  return (
    <section id="approach" className="border-y border-border/60 bg-muted/30 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Crew &amp; service
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Your voyage is our passion
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground">
            Our crew is here for you! We pledge to give you the best service to
            make your outing on the water unforgettable, from complimentary
            beverages and snacks to great tunes and more.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr]">
          {crew.map((c) => (
            <RevealItem
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                    c.pos
                  )}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  {c.role}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.bio}</p>
              </div>
            </RevealItem>
          ))}

          <RevealItem className="relative flex flex-col justify-center gap-5 overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-[oklch(0.55_0.16_225)] p-7 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <GridPattern className="opacity-20" />
            <span className="grid size-12 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25">
              <MapPin className="size-6" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Where we cast off
              </p>
              <h3 className="mt-1 text-xl font-semibold">Departure</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-white/85">
                Our dock, Stanton Yards, is conveniently located near downtown
                Detroit directly across from Belle Isle, in the nationally
                acclaimed up-and-coming Little Village neighborhood.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/detroitboatcruise-about"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-white/90"
              >
                <Sparkles className="size-4" /> Meet the whole crew
              </Link>
              <Link
                href="/detroitboatcruise-contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white"
              >
                Get directions <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
