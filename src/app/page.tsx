import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import Process from "@/components/Process/Process";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import MapSection from "@/components/MapSection/MapSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pollos - Agencja Marketingowa | Social Media, Foto, Wideo",
  description: "Zwiększ widoczność swojego biznesu z Pollos. Oferujemy prowadzenie social media, profesjonalne sesje, strony internetowe i skuteczne reklamy w Białymstoku i online.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <Testimonials />
      <MapSection />
      <Contact />
    </main>
  );
}
