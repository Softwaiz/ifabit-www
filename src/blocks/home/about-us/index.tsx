import IconHandshake from "@/components/icons/handshake";
import IconSendDollars from "@/components/icons/send-dollars";
import IconSendReceive from "@/components/icons/send-receive";

export function AboutUs() {
  return (
    <div className="section w-full flex flex-col items-center justify-center bg-slate-100 text-slate-900 about">
      <div className="container p-8 py-14 lg:p-16 min-h-screen flex flex-col items-center justify-center gap-4 lg:gap-8">
        <div className="w-full flex flex-col items-start lg:items-center justify-center">
          <h2 className="font-heading font-bold text-4xl lg:text-6xl">Avec ifabit,</h2>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div data-feature="cash" className="feature">
            <IconSendDollars className="w-16 h-auto" />
            <h4 className="title">Transférez de l’argent à qui vous voulez.</h4>
            <p className="subtitle">
              Notre plateforme vous permet d’envoyer facilement de l’argent à
              vos proches ou vos partenaires commerciaux au Nigeria, au Ghana,
              en Côte d’Ivoire... En toute sécurité et à moindre frais.
            </p>
          </div>

          <div data-feature="exchange" className="feature">
            <IconSendReceive className="w-16 h-auto" />
            <h4 className="title">Profitez des taux de change imbattables.</h4>
            <p className="subtitle">
              Vous souhaitez acheter ou vendre des Nairas, des Cedis, des Francs
              CFA ou d’autres devises ? Profitez de notre place de marché avec
              des taux très avantageux et zéro frais cachés.
            </p>
          </div>

          <div data-feature="partner" className="feature">
            <IconHandshake className="w-16 h-auto" />
            <h4 className="title">
              Devenez partenaire, et gagnez de l'argent avec nous.
            </h4>
            <p className="subtitle">
              Vous êtes une boutique, une petite entreprise ? Devenez point de
              vente pour nos services et touchez des commissions sur chaque
              transaction effectuée par vos clients. Un complément de revenu
              facile !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
