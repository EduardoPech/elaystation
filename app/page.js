import Image from "next/image";
import { Chart } from "./components/Chart";
import { AChart } from "./components/AChart";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <Section />
        <AChart />
        <Chart />
      </main>
      <Footer />
    </>
  );
}
