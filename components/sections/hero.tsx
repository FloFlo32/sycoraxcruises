import Link from "next/link";
import { Anchor, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookButton } from "@/components/ui/book-button";
import { HeroSlideshow } from "@/components/magic/hero-slideshow";
import { Reveal } from "@/components/magic/reveal";
import { img } from "@/content/site-data";

const slides = [14, 38, 54, 32, 30].map((n) => ({
  src: img(n),
  alt: "Guests aboard the fully electric Sycorax on the Detroit River",
}));

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(90vh-5rem)] items-center overflow-hidden">
      <HeroSlideshow images={slides} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />

      <div className="container-px relative z-10 mx-auto max-w-3xl py-20 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            <Anchor className="size-3.5" />
            100% Electric. 100% Awesome.
          </Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-left backdrop-blur-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(52)} alt="" aria-hidden className="h-7 w-auto shrink-0" />
            <div className="leading-tight">
              <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white">
                <Award className="size-3.5 shrink-0" /> Featured on
              </p>
              <p className="text-xs text-white/80">Kayak Guides</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
            Sycorax Boat Cruises&mdash;see Belle Isle and the downtown riverfront
            aboard Detroit&apos;s exclusive electric boat rental!
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Indulge in one of our daily cruises aboard the fully electric Sycorax
            and enjoy the best of summer in Detroit. Book instantly online to
            celebrate your special occasion today!
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookButton size="lg" className="h-12 rounded-lg px-7 text-base">
              book our boat today <ArrowRight className="size-4" />
            </BookButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-white/30 bg-white/5 px-7 text-base text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/gallery">See the gallery</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
