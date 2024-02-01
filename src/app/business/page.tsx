import { CallToAction } from "@/blocks/home/call-to-action";
import { cn } from "@/lib/utils";
import "@/styles/home.scss";
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from "react";

export default function BusinessOffer() {
  return (
    <>
      <div className="w-full mt-header text-slate-900">
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-layer">
          <div className="text-slate-100 hero-size flex flex-col items-start justify-center gap-6 max-w-2xl px-4 lg:px-0 ">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-left">
              Devenez <span className="text-primary-500">#IFAPartner</span>
              <br />
              et gagnez de l'argent !
            </h2>
            <p className="text-base lg:text-lg">
              Les partenaires reçoivent une commission sur les processus de
              retrait effectués à partir de leur compte.
              <br /> La commission leur est automatiquement reversée sans délai
              et ils ont la possibilité de retirer leur argent à tout moment.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start">
          <div className="max-w-4xl grid grid-cols-3 gap-4 text-md py-16 lg:py-24 px-4 lg:px-0">
            <div className="col-span-3 flex flex-col items-start justify-start gap-4">
              <h5 className="font-heading text-4xl font-bold">
                Comment devenir partenaire de IFABIT ?
              </h5>

              <p>
                Vous devez disposer d'un compte standard vérifié.
                <br />
                <br />
                Les partenaires IFA sont des entités indépendantes et
                importantes dans le système IFA.
                <br /> C'est grâce à eux que les autres utilisateurs ont la
                possibilité d'effectuer des dépôts et des retraits sur leurs
                portefeuilles.
                <br />
                <br /> Être partenaire signifie se donner les moyens d'être
                rémunéré par une commission sur chaque retrait effectué par nos
                utilisateurs sur votre portefeuille.
                <br /> On parle de retrait lorsqu'un utilisateur transfère des
                fonds vers un partenaire.
                <br /> Dans ce cas, une grille tarifaire différente de celle
                applicable sur les transferts directs entre utilisateurs est
                appliquée.
              </p>

              <div className="py-4 flex flex-col items-start justify-start gap-4">
                <h5 className="font-heading text-4xl font-bold">
                  Conditions et liste des pièces à fournir
                </h5>
                <div className="w-full border p-4">
                  <ul className="*:py-2">
                    <li>
                      Fournir le dossier de demande (CNI/CIP, copie registre de
                      commerce, IFU, preuve d’adresse)
                    </li>
                    <li>Remplir le contrat de demande</li>
                    <li>Un plan de localisation géographique du local</li>
                    <li>Etre âgé de 18 ans au 31 / 12 / 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <CallToAction />
        </div>
      </div>
    </>
  );
}
