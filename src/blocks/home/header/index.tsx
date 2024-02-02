"use client";
import { HeaderWrapper } from "@/components/header/wrapper";
import Link from "next/link";
import { useState } from "react";
import { LogIn, Menu, UserPlus } from "lucide-react";
import { HeaderMobile } from "./mobile";
import { Logo } from "@/components/logo";
import { HeaderLinks } from "./links";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper className="bg-layer text-slate-100">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full bg-overlay py-1 text-white font-body text-sm hidden lg:flex flex-row items-center justify-center gap-4">
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
            <Logo />
            <nav className="grow navigation">
              <ul className="hidden lg:flex flex-row items-center justify-center gap-4">
                {HeaderLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      {!link.pure ? (
                        <Link href={link.href}>{link.title}</Link>
                      ) : (
                        <a href={link.href}>{link.title}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav className="hidden lg:flex flex-row items-center justify-center gap-4">
              <a
                href="https://app.ifabit.com/auth/signin"
                className="px-4 py-2 text-sm whitespace-nowrap border border-primary-600 rounded-md text-primary-600 transition-all hover:bg-primary-500 hover:text-slate-100 flex flex-row items-center justify-start gap-4"
              >
                <LogIn fontSize={24} />
                Se connecter
              </a>
              <a
                href="https://app.ifabit.com/auth/signup"
                className="px-4 py-2 text-sm whitespace-nowrap bg-teal-500 rounded-md text-slate-200 transition-all hover:bg-teal-700 flex flex-row items-center justify-start gap-4"
              >
                <UserPlus fontSize={24} />
                S'inscrire
              </a>
            </nav>
            <nav className="flex lg:hidden">
              <button className="p-4" onClick={() => setMenuOpen(true)}>
                <Menu fontSize={"24px"} />
              </button>
            </nav>
          </div>
        </div>
      </HeaderWrapper>
      <div className="block lg:hidden">
        <HeaderMobile
          open={menuOpen}
          onOpenChange={(is) => {
            setMenuOpen(false);
          }}
        />
      </div>
    </>
  );
}
