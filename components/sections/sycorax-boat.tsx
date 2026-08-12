import Image from "next/image";
import { Award, Ruler, Ship } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { boatSpecs, img } from "@/content/site-data";

export function SycoraxBoat() {
  return (
    <section id="the-sycorax" className="container-px mx-auto max-w-6xl py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Meet the boat
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
              The Sycorax
            </h2>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            <RevealItem className="rounded-2xl border border-border bg-card p-5">
              <Ruler className="size-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">Length</p>
              <p className="font-semibold">{boatSpecs.length}</p>
            </RevealItem>
            <RevealItem className="rounded-2xl border border-border bg-card p-5">
              <Ship className="size-5 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">Model &amp; year</p>
              <p className="font-semibold">{boatSpecs.model}</p>
            </RevealItem>
            <RevealItem className="col-span-full rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Design awards</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {boatSpecs.awards.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg shadow-primary/5">
            <Image
              src={img(15)}
              alt="The X Shore Eelex 8000 cruising the Detroit River at sunset"
              width={900}
              height={700}
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
