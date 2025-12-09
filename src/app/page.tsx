import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyUs from "@/components/WhyUs/WhyUs";
import Process from "@/components/Process/Process";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
      <Contact />
    </main>
  );
}
