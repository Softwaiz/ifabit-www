import IconHandshake from "@/components/icons/handshake";
import IconSendDollars from "@/components/icons/send-dollars";
import IconSendReceive from "@/components/icons/send-receive";

export function AboutUs() {
  return (
    <div className="section w-full flex flex-col items-center justify-center bg-slate-100 text-slate-900 about">
      <div className="container p-8 py-14 lg:p-16 min-h-screen flex flex-col items-center justify-center gap-4 lg:gap-8">
        <div className="w-full flex flex-col items-start lg:items-center justify-center">
          <h2 className="font-heading font-bold text-4xl lg:text-6xl">
            Avec ifabit,
          </h2>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div data-feature="cash" className="feature">
            <IconSendDollars className="w-16 h-auto" />
            <h4 className="title">Transférez de l’argent à qui vous voulez.</h4>
            <p className="subtitle">
              Alimentée par la blockchain, Ifabit supprime les intermédiaires
              pour des transactions transparentes. Dépôts et retraits gratuits.
              Transferts d'argent à seulement 0,50% de frais, quel que soit le
              pays destinataire.
            </p>
          </div>

          <div data-feature="exchange" className="feature">
            <IconSendReceive className="w-16 h-auto" />
            <h4 className="title">Profitez des taux IFA.</h4>
            <p className="subtitle">
              Nos taux IFA vous offrent les meilleurs taux pour échanger vos
              cryptomonnaies contre le franc CFA et retirer gratuitement vos
              fonds auprès de nos partenaires.
            </p>
          </div>

          <div data-feature="partner" className="feature">
            <IconHandshake className="w-16 h-auto" />
            <h4 className="title">
              Devenez partenaire, et gagnez de l'argent avec nous.
            </h4>
            <p className="subtitle">
              Boutique ou petite entreprise ? Devenez point de vente et percevez
              des commissions sur les retraits effectués par vos clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
