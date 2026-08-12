import Image from "next/image";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

/**
 * PageHero — the consistent hero treatment used on every inner page.
 * Real photo in its own rounded card below the copy, never a dark scrim overlay.
 * The image is this page's one `priority` next/image (see CLAUDE.md image rules).
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <AuroraBackground className="opacity-70" />
      <GridPattern />
      <div className="container-px mx-auto max-w-6xl pt-16 pb-4 text-center sm:pt-24">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {image && (
        <Reveal delay={0.18}>
          <div className="container-px mx-auto max-w-5xl pb-20">
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                quality={75}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}
