import HomePage from "@/blocks/home";
import "@/styles/home.scss";

export default async function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-foreground">
      <HomePage.Hero />
      <HomePage.AboutUs />
      <HomePage.Hero3 />
      <HomePage.Hero2 />
      <HomePage.CallToAction />
    </main>
  );
}
