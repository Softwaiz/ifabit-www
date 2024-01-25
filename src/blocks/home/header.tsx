"use client";
import { HeaderWrapper } from "@/components/header/wrapper";
import Link from "next/link";

export function Header() {
  return (
    <HeaderWrapper className="bg-layer">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-overlay py-1 text-white font-body text-sm flex flex-row items-center justify-center gap-4">
          <p>
            Appel:{" "}
            <a href="tel:+22996733534" className="hover:underline">
              (+229) 96 73 35 34
            </a>
          </p>
          <p>
            E-mail:{" "}
            <a href="mailto:contact@ifabit.com" className="hover:underline">
              contact@ifabit.com
            </a>
          </p>
        </div>
        <div className="container flex flex-row items-center justify-between text-sm uppercase font-bold py-4 gap-4">
          <img
            src="/logo.png"
            alt="Logo Ifabit"
            className="bg-transparent h-[56px] w-auto object-cover object-center aspect-auto"
          />
          <nav className="grow navigation">
            <ul className="flex flex-row items-center justify-center gap-4">
              <li>
                <Link href="/about-us">A propos</Link>
              </li>
              <li>
                <Link href="/about-us">Les wallets</Link>
              </li>
              <li>
                <Link href="/about-us">Devenez partenaire</Link>
              </li>
              <li>
                <Link href="/about-us">Nous contacter</Link>
              </li>
              <li>
                <Link href="/about-us">Guides d'intégration</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <Link
              href="https://app.ifabit.com"
              className="px-4 py-3 text-sm bg-primary-600 rounded-md text-slate-200 transition-all hover:bg-primary-500"
            >
              Se connecter
            </Link>
          </nav>
        </div>
      </div>
    </HeaderWrapper>
  );
}
