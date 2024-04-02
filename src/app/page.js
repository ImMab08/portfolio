import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <main className="bg-primary">
      <PageTransition />
      <Hero />
    </main>
  );
}
