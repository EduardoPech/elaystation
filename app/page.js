import Image from "next/image";
import { Chart } from "./components/Chart";
import { AChart } from "./components/AChart";
import { Section } from "./components/Section";
import { Vision } from "./components/Vision";
import { OurTeam } from "./components/OurTeam";
import { Sensors } from "./components/Sensors";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <Section />
        <Vision />
        <OurTeam />
        <Sensors />
      </main>
      <Footer />
    </>
  );
}
