import { CallToAction } from "@/blocks/home/call-to-action";
import "@/styles/home.scss";
import { AboutPageMotions } from "./motions";

const TextOVerflow = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="absolute bottom-0 left-0 opacity-5 flex flex-row items-center justify-center gap-8 py-4 px-4">
      <h6 className={className}>{text}</h6>
      <h6 className={className}>{text}</h6>
      <h6 className={className}>{text}</h6>
      <h6 className={className}>{text}</h6>
      <h6 className={className}>{text}</h6>
    </div>
  );
};

function Section01() {
  return (
    <div className="feature grid grid-cols-2 min-h-[60vh]">
      <div className="bg-primary-400/80 relative overflow-hidden flex flex-col items-center justify-center">
        <TextOVerflow
          text="ifa exchange"
          className="text-6xl font-bold uppercase font-heading whitespace-nowrap"
        />

        <h5 className="font-heading font-bold text-9xl">01</h5>
        <h2 className="font-heading font-bold text-6xl">Echange de devises</h2>
      </div>

      <div className="p-8 flex flex-col items-start justify-center">
        <p className="text-lg">
          Un service qui vous permet d'acheter, de vendre et d'échanger des
          cryptomonnaies ainsi que les monnaies électroniques telles que perfect
          money de manière rapide, sécurisée et discrète. Deux options : retirer
          vos avoirs auprès de nos partenaires sans dépendre d'un réseau local
          et en toute sécurité, ou retirer via le réseau de votre choix,
          moyennant les frais de retrait du réseau.
        </p>
      </div>
    </div>
  );
}

function Section02() {
  return (
    <div className="feature grid grid-cols-2 min-h-[60vh]">
      <div className="p-8 flex flex-col items-start justify-center">
        <p className="text-lg">
          Nous facilitons toutes les transactions financières internationales
          grâce à ce service. Vous n'aurez plus aucune raison de ne pas envoyer
          ou recevoir de l'argent de vos proches, car nous offrons des
          transferts instantanés à des coûts très compétitifs.
          <br />
          En résumé : Dépôts gratuits, Retraits presque gratuits.
        </p>
      </div>

      <div className="relative overflow-hidden bg-emerald-500 flex flex-col items-center justify-center">
        <TextOVerflow
          text="ifa pay"
          className="text-6xl font-bold uppercase font-heading whitespace-nowrap"
        />
        <h5 className="font-heading font-bold text-9xl">02</h5>
        <h2 className="font-heading font-bold text-6xl">IFA Pay</h2>
      </div>
    </div>
  );
}

function Section03() {
  return (
    <div className="feature grid grid-cols-2 min-h-[60vh]">
      <div className="relative overflow-hidden bg-pink-500 flex flex-col items-center justify-center">
        <TextOVerflow
          text="ifa api"
          className="text-6xl font-bold uppercase font-heading whitespace-nowrap"
        />
        <h5 className="font-heading font-bold text-9xl">03</h5>
        <h2 className="font-heading font-bold text-6xl">IFA API</h2>
      </div>

      <div className="p-8 flex flex-col items-start justify-center">
        <p className="text-lg">
          Que vous ayez un commerce physique ou en ligne, profitez de la
          puissance de la blockchain en intégrant notre agrégateur de paiement
          de nouvelle génération. Grâce à notre service IFA Pay, vous pouvez
          recevoir des paiements en FCFA de tous les pays du monde, sans être
          exposé aux fluctuations des cryptomonnaies. Ce service est gratuit
          pour soutenir votre commerce, et il n'y a aucun frais pour les
          encaissements ou les décaissements. Cependant, des frais de 1%
          s'appliquent pour toutes les demandes de retrait.
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <AboutPageMotions />
      <div className="w-full mt-header text-slate-900">
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center bg-layer">
          <div className="absolute top-0 left-0 bg-primary-500/50 w-4/6 aspect-square rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="container relative text-slate-100 min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center">
            <h2 className="font-heading font-bold text-6xl max-w-[30ch] text-center">
              IFABIT: révolutionner les transactions numériques en Afrique.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="container py-24 flex flex-col items-center justify-center">
            <p className="max-w-[80ch] text-lg">
              IFABIT se présente comme une révolution dans le domaine des
              plateformes d'échange internationales. Cette startup appartient à
              l'une des entreprises pionnières du secteur financier en Afrique
              francophone, enregistrée au RCCM sous le numéro RB/ABC/13B101
              depuis 2013. IFABIT est une plateforme complète, conçue par des
              professionnels pour être simple à utiliser et à naviguer.
            </p>
            <br />
            <p className="max-w-[80ch] text-lg">
              Vous trouverez sur notre plateforme un écosystème de produits et
              de services qui permet aux clients de s'engager dans une économie
              décentralisée de diverses manières. Nous offrons un large éventail
              de services financiers et surpassons la concurrence en termes de
              fiabilité et de rentabilité, car nous vous aidons à réaliser des
              économies à court et à long terme. Adopter IFABIT, c'est opter
              pour une solution tout-en-un pour vos besoins financiers.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="font-heading font-bold uppercase text-4xl">
              Les services que nous offrons
            </h2>
          </div>
          <div className="w-full flex flex-col items-center justify-start">
            <Section01 />
            <Section02 />
            <Section03 />
          </div>
          <CallToAction />
        </div>
      </div>
    </>
  );
}
