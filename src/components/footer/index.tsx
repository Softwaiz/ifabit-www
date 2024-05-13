import { Twitter, X, Facebook } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="w-full px-4 sm:px-4 lg:px-0 py-10 bg-layer sm:pt-16 lg:pt-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 lg:gap-0">
          <img
            src="/logo.png"
            alt="Logo Ifabit"
            className="bg-transparent h-[56px] w-auto object-cover object-center aspect-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 md:gap-x-12 gap-y-12 ">
          <div>
            <p className="text-base text-gray-400">Navigation</p>

            <ul className="mt-8 space-y-4">
              <li>
                <Link
                  href="/about-us"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/wallets"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Les wallets
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Devenez partenaire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-400">API</p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="https://docs.ifabit.com"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Guides d'intégration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-400">Aide</p>
            <ul className="mt-8 space-y-4">
              <li>
                <Link
                  href="/contact-us"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Nous Joindre
                </Link>
              </li>

              <li>
                <a
                  href="https://app.ifabit.com/legal/cgu.htm"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Termes & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-400">Contact</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="tel:+22967218584"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Appel: (+229) 67 21 85 84
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ifabit.com"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Email: contact@ifabit.com
                </a>
              </li>
            </ul>
            <ul className="flex items-center space-x-3 mt-4">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/FMISCAPITAL/"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 p-1 focus:bg-primary-600 hover:bg-primary-600 hover:border-primary-600 focus:border-primary-600"
                >
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/DangoKader?t=YFBIWZf21q7RQC6NOa95GA&s=09"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 p-1 focus:bg-primary-600 hover:bg-primary-600 hover:border-primary-600 focus:border-primary-600"
                >
                  <Twitter fontSize={"14px"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col flex-wrap items-center justify-center gap-2 mt-8">
          <p className="text-sm text-center text-gray-100">
            © Copyright 2024. Tous droits réservés.
          </p>
          <p className="text-sm text-center text-gray-200 opacity-75">
            ⚡ ERGOSTREAMS x {" "}
            <a
              className="hover:underline"
              target="_blank"
              href="https://www.softwaiz.co"
            >
              Softwaiz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
