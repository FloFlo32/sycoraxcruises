import { ArrowUpRight, Clock, Users } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BorderBeam } from "@/components/magic/border-beam";
import { BookButton } from "@/components/ui/book-button";
import { packages } from "@/content/site-data";

export function Packages() {
  return (
    <section id="packages" className="container-px mx-auto max-w-6xl py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
          Cruise packages
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          We offer an array of cruise options, 7 days a week, May through September
        </h2>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {packages.map((p, i) => (
          <RevealItem
            key={p.name}
            className={
              "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10" +
              (i === 2 ? " md:col-span-1 ring-1 ring-primary/20" : "")
            }
          >
            {i === 2 && <BorderBeam duration={9} />}
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" /> {p.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-4 text-primary" /> {p.guests}
                </span>
              </div>
              <p className="text-pretty text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-auto flex items-center justify-between pt-3">
                <span className="text-2xl font-bold text-primary">{p.price}</span>
                <BookButton
                  activityId={p.activityId}
                  variant="link"
                  className="h-auto p-0 text-sm font-medium"
                >
                  Book <ArrowUpRight className="size-3.5" />
                </BookButton>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
