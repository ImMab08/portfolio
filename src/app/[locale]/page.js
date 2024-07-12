import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Navbard from "@/components/shared/Navbar/Nav";

export default function Home() {
  return (
    <main className="bg-primary">
      <Navbard />
      <Hero />
    </main>
  );
}
