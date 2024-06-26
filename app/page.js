import { Section } from "./components/Section";
import { Vision } from "./components/Vision";
import { OurTeam } from "./components/OurTeam";
import { Offer } from "./components/Offer";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <Offer />
        <Section />
        <Vision />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
}
