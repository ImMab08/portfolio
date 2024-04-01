import Image from "next/image";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-primary flex items-center justify-center h-screen w-screen px-5">
      <Hero />
    </main>
  );
}
