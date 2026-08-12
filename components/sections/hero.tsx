import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";
import { img } from "@/content/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground />
      <GridPattern />

      <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-16 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <Reveal>
            <Badge variant="accent">
              <Leaf className="size-3.5" />
              Detroit&apos;s only zero-emissions power boat rental
            </Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Sycorax Boat Cruises&mdash;see Belle Isle and the downtown riverfront
              aboard Detroit&apos;s exclusive electric boat rental!
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg text-pretty text-muted-foreground">
              Indulge in one of our daily cruises aboard the fully electric Sycorax
              and enjoy the best of summer in Detroit. Book instantly online to
              celebrate your special occasion today!
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/boat-rental-book-online">
                  book our boat today <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/gallery">See the gallery</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
            <Image
              src={img(14)}
              alt="Guests cruising the Detroit riverfront aboard the fully electric Sycorax"
              width={900}
              height={1000}
              priority
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[9/10] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
