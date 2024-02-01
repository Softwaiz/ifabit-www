import { CallToAction } from "@/blocks/home/call-to-action";
import { cn } from "@/lib/utils";
import "@/styles/home.scss";

export default function OurWallets() {
  return (
    <>
      <div className="w-full mt-header text-slate-900">
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-layer">
          <div className="text-slate-100 hero-size flex flex-col items-center justify-center gap-6 max-w-2xl">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-left">
              Nos <span className="text-primary-500">#Wallets</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start">
          <div className="max-w-4xl grid grid-cols-3 gap-4 text-md py-8 md:py-12 lg:py-24 px-8 lg:px-0">
            <div className="col-span-3 flex flex-col items-start justify-start gap-4">
              <div className="w-full">
                <h2 className="font-heading font-bold text-2xl">
                  Les wallets IFA XOF
                </h2>
                <p>
                  Les IFA XOF sont des devises détenues dans les portefeuilles
                  en X et représentant vos avoirs en FCFA.
                </p>
              </div>

              <div className="w-full">
                <h2 className="font-heading font-bold text-2xl">
                  Les wallets IFA USD
                </h2>
                <p>
                  Les IFA USD sont des devises détenues dans les portefeuilles
                  en U et représentant vos avoirs en dollar américain.
                </p>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <p>
                  À partir de vos portefeuilles, vous pouvez envoyer des fonds à
                  d'autres personnes, effectuer des paiements et/ou souscrire à
                  des services. Les transferts effectués via ces portefeuilles
                  peuvent générer des couts de transactions.
                </p>

                <p>
                  Pour effectuer un dépôt ou un retrait sur ces portefeuilles,
                  vous avez la possibilité de contacter un partenaire IFA le
                  plus proche de vous. Si les swaps sont disponibles sur nos
                  portefeuilles, vous pouvez procéder à vos retraits de fonds
                  via le réseau de votre choix.
                </p>

                <p>
                  Chaque utilisateur a droit à un maximum de trois
                  portefeuilles.
                </p>

                <p>
                  Il n'est pas possible de transférer des fonds entre les deux
                  types de portefeuilles sans passer par un swap, si cette
                  option est disponible au moment de la demande.
                </p>
              </div>
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </>
  );
}
