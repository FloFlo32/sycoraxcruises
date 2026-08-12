import Link from "next/link";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { occasions } from "@/content/site-data";

export function Occasions() {
  return (
    <section id="occasions" className="border-y border-border/60 bg-muted/30 py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            What&apos;s your occasion?
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Your Bespoke Celebration
          </h2>
        </Reveal>
      </div>

      <div className="container-px mx-auto mt-12 max-w-6xl">
        <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
          {occasions.map((o) => (
            <div
              key={o.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={o.image}
                  alt={o.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.icon} alt="" aria-hidden className="size-6" />
                  <h3 className="font-semibold">{o.label}</h3>
                </div>
                {o.body && (
                  <p className="text-pretty text-sm text-muted-foreground">{o.body}</p>
                )}
                <Link
                  href="/boat-rental-book-online"
                  className="mt-auto pt-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
