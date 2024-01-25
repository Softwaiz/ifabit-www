import HomePage from "@/blocks/home";
import "@/styles/home.scss";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-foreground">
      <HomePage.Header />
      <HomePage.Hero />
      <HomePage.AboutUs />
    </main>
  );
}
