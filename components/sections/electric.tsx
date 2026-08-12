import Image from "next/image";
import { BatteryCharging, Volume2, Wind } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";
import { img, imgPos } from "@/content/site-data";

const points = [
  {
    icon: Volume2,
    title: "No noisy motor",
    body: "No polluting gas fumes. No noisy motor. Just you and the majesty of the Great Lakes.",
  },
  {
    icon: BatteryCharging,
    title: "Swedish engineering",
    body: "Experience the power of silence aboard the X Shore Eelex 8000 cruiser, which melds Swedish maritime craftsmanship with innovative technology solutions that contribute to a future free of fossil fuels.",
  },
  {
    icon: Wind,
    title: "Zero emissions",
    body: "Electric boats are extremely quiet, have zero emissions, no unpleasant gas odors, and are eco-friendly.",
  },
];

export function Electric() {
  return (
    <section id="electric" className="container-px mx-auto max-w-6xl py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            <Image
              src={img(26)}
              alt="The Sycorax cruising the Detroit riverfront with guests aboard"
              width={900}
              height={700}
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn("aspect-[4/3] w-full object-cover", imgPos(26))}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Our approach
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
              All of the joy&hellip; none of the guilt.
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-muted-foreground">
              At Sycorax Cruises, we&apos;re here to celebrate you &mdash; a birthday, a
              bachelor/ette party, an anniversary or engagement, or just a relaxing
              summer day on the water &mdash; while doing no harm to Mother Nature.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 space-y-5">
            {points.map((p) => (
              <RevealItem key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
