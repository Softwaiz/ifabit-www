import HomePage from "@/blocks/home";
import { Currency } from "@/core/types";
import "@/styles/home.scss";

export default async function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-foreground">
      <HomePage.Header />
      <HomePage.Hero />
      <HomePage.AboutUs />
      <HomePage.Hero2 />
      <HomePage.Hero3 />
      <HomePage.CallToAction />
      <HomePage.Footer />
    </main>
  );
}
