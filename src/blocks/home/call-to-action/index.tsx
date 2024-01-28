import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="w-full py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full text-center">
          <h2 className="font-bold leading-tight text-black sm:text-4xl text-4xl lg:text-5xl">
            Prêt à découvrir ifabit ?
          </h2>

          <p className="mt-4 text-lg lg:text-2xl text-black/60 lg:text-black/80 font-medium">
            Achetez et vendez vos cryptos et monnaies fiats aux meilleurs taux
            du marché. Envoyez et recevez des fonds en Afrique de l'Ouest et
            ailleurs, en toute sécurité.
          </p>

          <div className="w-full flex flex-col items-center justify-center px-0 lg:px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
            <a
              href="https://app.ifabit.com/auth/signup"
              title=""
              className="w-full flex flex-row items-center justify-center gap-4 px-8 py-4 text-base whitespace-nowrap font-semibold text-white transition-all duration-200 bg-primary-600 border border-transparent rounded-md sm:w-auto hover:bg-primary-700 focus:bg-primary-700"
              role="button"
            >
              Commencez aujourd'hui
              <ArrowRight fontSize={18} />
            </a>
          </div>

          <p className="mt-6 text-base text-black">
            Vous avez deja un compte ?{" "}
            <a
              href="https://app.ifabit.com/auth/signin"
              title=""
              className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Connectez-vous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
