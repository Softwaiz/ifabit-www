import { CallToAction } from "@/blocks/home/call-to-action";
import "@/styles/home.scss";

function Section01() {
  return (
    <div className="grid grid-cols-2 min-h-[50vh]">
      <div className="bg-orange-500 flex flex-col items-center justify-center">
        <h5 className="font-heading font-bold text-4xl">01</h5>
        <h2 className="font-heading font-bold text-6xl">IFA Exchanges</h2>
      </div>

      <div className="p-8">
        <p>
          Nous facilitons toutes les transactions financières internationales
          grâce à ce service. Vous n'aurez plus aucune raison de ne pas envoyer
          ou recevoir de l'argent de vos proches, car nous offrons des
          transferts instantanés à des coûts très compétitifs. En résumé :
          Envois gratuits, Dépôts gratuits, Retraits presque gratuits.
        </p>
      </div>
    </div>
  );
}

function Section02() {
  return (
    <div className="grid grid-cols-2 min-h-[50vh]">
      <div className="p-8">
        <p>
          Un service qui vous permet d'acheter, de vendre et d'échanger des
          cryptomonnaies ainsi que les monnaies électroniques telles que perfect
          money de manière rapide, sécurisée et discrète. Deux options : retirer
          vos avoirs auprès de nos partenaires sans dépendre d'un réseau local
          et en toute sécurité, ou retirer via le réseau de votre choix,
          moyennant les frais de retrait du réseau.
        </p>
      </div>

      <div className="bg-orange-500 flex flex-col items-center justify-center">
        <h5 className="font-heading font-bold text-4xl">02</h5>
        <h2 className="font-heading font-bold text-6xl">IFA Wallets</h2>
      </div>
    </div>
  );
}

function Section03() {
  return (
    <div className="grid grid-cols-2 min-h-[50vh]">
      <div className="bg-orange-500 flex flex-col items-center justify-center">
        <h5 className="font-heading font-bold text-4xl">03</h5>
        <h2 className="font-heading font-bold text-6xl">IFA Pay</h2>
      </div>

      <div className="p-8">
        <p>
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
    <div className="w-full mt-header text-slate-900">
      <div className="w-full relative flex flex-col items-center justify-center bg-slate-100">
        <div className="container relative text-slate-900 min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center">
          <h2 className="uppercase font-heading font-bold text-6xl max-w-[40ch]">
            IFABIT veut révolutionner l'industrie des transactions numériques en
            Afrique.
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="container py-24 flex flex-col items-center justify-center">
          <p className="max-w-[80ch]">
            IFABIT se présente comme une révolution dans le domaine des
            plateformes d'échange internationales. Cette startup appartient à
            l'une des entreprises pionnières du secteur financier en Afrique
            francophone, enregistrée au RCCM sous le numéro RB/ABC/13B101 depuis
            2013. IFABIT est une plateforme complète, conçue par des
            professionnels pour être simple à utiliser et à naviguer.
          </p>
          <br />
          <p className="max-w-[80ch]">
            Vous trouverez sur notre plateforme un écosystème de produits et de
            services qui permet aux clients de s'engager dans une économie
            décentralisée de diverses manières. Nous offrons un large éventail
            de services financiers et surpassons la concurrence en termes de
            fiabilité et de rentabilité, car nous vous aidons à réaliser des
            économies à court et à long terme. Adopter IFABIT, c'est opter pour
            une solution tout-en-un pour vos besoins financiers.
          </p>
        </div>
        <Section01 />
        <Section02 />
        <Section03 />
        <CallToAction />
      </div>
    </div>
  );
}
