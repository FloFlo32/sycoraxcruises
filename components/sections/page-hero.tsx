import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

/**
 * PageHero — full-bleed real photo + gradient overlay + centered white text.
 * The same treatment as the homepage hero, just shorter, so every inner page
 * opens with a real, unique, photographic moment instead of a flat panel.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imagePos,
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  imagePos?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[58vh] items-center overflow-hidden bg-foreground",
        className
      )}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          quality={78}
          sizes="100vw"
          className={cn("object-cover", imagePos)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75" />

      <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            {eyebrow}
          </Badge>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
