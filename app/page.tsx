import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { Electric } from "@/components/sections/electric";
import { Approach } from "@/components/sections/approach";
import { Packages } from "@/components/sections/packages";
import { Occasions } from "@/components/sections/occasions";
import { SycoraxBoat } from "@/components/sections/sycorax-boat";
import { Testimonial } from "@/components/sections/testimonial";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <Electric />
        <Approach />
        <Packages />
        <Occasions />
        <SycoraxBoat />
        <Testimonial />
        <BlogTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
