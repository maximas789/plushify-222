import { DemoCarousel } from "@/components/landing/demo-carousel";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { HeroSection } from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeatureShowcase />
      <DemoCarousel />
      <Testimonials />
      <PricingSection />
    </main>
  );
}
