import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/magic/reveal";
import { Gallery } from "@/components/magic/gallery";
import { galleryImages, img, imgPos } from "@/content/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Sycorax Electric Cruises is a premium private electric boat charter in Detroit for couples, families, and small groups seeking a quiet, upscale, eco-friendly Detroit River experience.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="100% Electric. 100% Awesome."
          title="Sycorax Electric Cruises is a premium private electric boat charter in Detroit"
          subtitle="For couples, families, and small groups seeking a quiet, upscale, eco-friendly Detroit River experience."
          image={img(14)}
          imagePos={imgPos(14)}
          imageAlt="Guests aboard the Sycorax cruising the Detroit riverfront"
        />

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <Gallery images={galleryImages} />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
