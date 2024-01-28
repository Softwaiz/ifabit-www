import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-end text-foreground hero-wrapper">
      
      <div className="inert">
        <svg
          className="blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.3,-36.9C72.7,-22.7,61.3,3.1,47.3,24.2C33.3,45.2,16.7,61.6,-1.1,62.3C-18.9,63,-37.9,47.9,-48.9,28.5C-59.9,9.2,-63,-14.5,-53.5,-29.4C-44.1,-44.2,-22,-50.3,3,-52C28,-53.7,56,-51.1,64.3,-36.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <section className="container grid grid-cols-5 hero">
        <div className="col-span-3 flex flex-col items-start justify-center gap-6">
          <h1 className="font-heading font-extrabold text-7xl title">
            Achetez ici des monnaies digitales{" "}
            <span className="on-ramp-text">on-ramp</span>,<br /> Ou vendez{" "}
            <span className="off-ramp-text">off-ramp</span>.
          </h1>
          <p className="font-body text-lg">
            Votre passerelle tout-en-un pour trader facilement cryptos, e-money
            et plus
          </p>
          <div className="w-full">
            <Link
              href="https://app.ifabit.com"
              className="px-6 py-3 text-sm uppercase font-bold rounded-full text-slate-200 transition-all bg-gradient-to-tr bg-primary-700 hover:bg-secondary-600"
            >
              Commencer maintenant
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <img
            src="/hero-1.webp"
            alt=""
            className="w-full h-auto rounded-md bg-transparent"
          />
        </div>
      </section>
    </div>
  );
}
