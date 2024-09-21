import Hero from "@/components/hero/Hero";
import FAWSection from "@/components/nsft/FAWSection";
import NSFTSection from "@/components/nsft/NSFTSection";
import Warmth from "@/components/nsft/Warmth";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NSFTSection/>
      <FAWSection/>
      <Warmth/>

    </main>
  );
}
