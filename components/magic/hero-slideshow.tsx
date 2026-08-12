"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type SlideshowImage = { src: string; alt: string; pos?: string };

/**
 * HeroSlideshow — full-bleed crossfading background images for a hero section.
 * Absolutely positioned; place as the first child of a `relative overflow-hidden` section.
 */
export function HeroSlideshow({
  images,
  interval = 5000,
}: {
  images: SlideshowImage[];
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [reduce, images.length, interval]);

  return (
    <div className="absolute inset-0 size-full" aria-hidden="true">
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt=""
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out",
            img.pos
          )}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
