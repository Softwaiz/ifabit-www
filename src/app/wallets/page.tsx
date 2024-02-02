import { CallToAction } from "@/blocks/home/call-to-action";
import { cn } from "@/lib/utils";
import "@/styles/home.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Les portefeuilles numériques IFAWALLETS | IFABIT",
    description: "Decouvrez les portefeuilles IFA",
    keywords:
      "achat crypto, vente crypto, échange crypto, plateforme crypto Afrique, transférer argent Afrique de l'Ouest, envoyer argent, recevoir argent, frais transfert, taux de change",
  };

  
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
          <div className="max-w-7xl grid grid-cols-3 gap-4 text-md py-8 md:py-12 lg:py-24 px-8 md:px-4">
            
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow-md border rounded-lg p-4">
                <h2 className="font-heading font-bold text-2xl">
                  Les wallets IFA XOF
                </h2>
                <p>
                  Les IFA XOF sont des devises détenues dans les portefeuilles
                  en X et représentant vos avoirs en FCFA.
                </p>
              </div>

              <div className="shadow-md border rounded-lg p-4">
                <h2 className="font-heading font-bold text-2xl">
                  Les wallets IFA USD
                </h2>
                <p>
                  Les IFA USD sont des devises détenues dans les portefeuilles
                  en U et représentant vos avoirs en dollar américain.
                </p>
              </div>

            </div>

            <div className="col-span-3 flex flex-col items-start justify-start gap-4">
              
              <p>
                À partir de vos portefeuilles, vous pouvez envoyer des fonds à
                d'autres personnes, effectuer des paiements et/ou souscrire à
                des services. Les transferts effectués via ces portefeuilles
                peuvent générer des couts de transactions.
              </p>

              <p>
                Pour effectuer un dépôt ou un retrait sur ces portefeuilles,
                vous avez la possibilité de contacter un partenaire IFA le plus
                proche de vous. Si les swaps sont disponibles sur nos
                portefeuilles, vous pouvez procéder à vos retraits de fonds via
                le réseau de votre choix.
              </p>

              <p>
                Chaque utilisateur a droit à un maximum de trois portefeuilles.
              </p>

              <p>
                Il n'est pas possible de transférer des fonds entre les deux
                types de portefeuilles sans passer par un swap, si cette option
                est disponible au moment de la demande.
              </p>

            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </>
  );
}
