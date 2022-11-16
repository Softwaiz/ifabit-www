import React from 'react';
import Navbar from './Navbar';
import '../assets/css/brokers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import binance from '../assets/img/Binance2.jpg';
import fbs from '../assets/img/fbs.jpg';
import ironfx from '../assets/img/ironfx.jpg';
import {Helmet} from 'react-helmet';

function Brokers () {
   
    return(
        <div>
        <Helmet>
            <title>Brokers | IFABIT</title>
        </Helmet>
            <Navbar />
                <div className='bg-ifa'>
                    <div className='container py-5 text-white'>
                        <h2 className='text-uppercase text-center title'>Brokers</h2>
                    </div>
                </div>
                <div className='container py-5'>
                    <p>Un broker est un élément éssentiel à tout Trader. Vous cherchez les meilleurs brokers Forex ? Vous êtes au bon endroit, voir ici...</p>
                    <div className='row py-5'>
                        <div className='col-md-6 col-12'>
                            <img src={fbs} className='img-fluid' />
                        </div>
                        <div className='col-md-6 col-12'>
                            <h1>FBS</h1>
                            <h4>FBS est un courtier international présent dans plus de 190 pays. Plus de 13 000 000 traders ont déjà choisi FBS pour trader sur le Forex.</h4>
                            <p>
                            FBS a été fondée en 2009 et depuis lors a reçu de nombreux prix internationaux : the Best FX IB Program, Best FX Broker Indonesia, Best Forex Broker Southeast Asia, Best Forex Broker Thailand, Best International Forex Broker, Best Customer Service Broker Asia 2016, Top IB Program 2016, Highly Recommended Broker Insurance Company in Indonesia of the year, Best Forex Brand, Asia 2015, Best Safety of Client Funds Asia 2015, Best broker in Asia-Pacific region 2015, Best broker in the Middle East, Most Transparent Forex Broker – 2018, Best Forex Trading Account 2018, Best Copy Trading Application Global – 2018, Best Forex Broker Asia-2018, Best Investor Education – 2017, Best FX IB Program – China 2017, the Most Progressive Forex Broker Europe 2019, Best Forex Broker Vietnam 2019.
                            </p>
                            <a className='btn btn-success btn-lg text-uppercase py-2' href='https://frfbs.com/?ppk=FMISCapital'>voir le broker</a>
                        </div>
                    </div>
                    <div className='row py-5 binance'>
                        <div className='col-md-6'>
                            <h1>BINANCE</h1>
                            <h4>Binance est une plateforme d’échange de cryptomonnaie mondiale qui permet d’échanger plus de 100 cryptomonnaies.</h4>
                            <p>
                                Depuis le début 2018, Binance est considérée comme la plus grande plateforme d’échange de cryptomonnaies dans le monde en termes de volume. Le site a été lancé le 14 juillet 2017 et est basée à Hong-Kong.
                            </p>
                            <a className='btn btn-binance btn-lg text-uppercase py-2' href='https://www.binance.com/fr/activity/referral/offers/claim?ref=CPA_00OSJ4OG7M'>voir le broker</a>
                        </div>
                        <div className='col-md-6'>
                            <img src={binance} className='img-fluid' />
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='col-md-6'>
                            <img src={ironfx} className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h1>IRONFX</h1>
                            <h4>IronFX est un courtier basé à Chypre qui donne accès aux spéculateurs au marché de détail des changes.</h4>
                            <p>Créer un environnement sans égal pour le trading en ligne Nous avons identifié et mis en œuvre les meilleures conditions de trading pour vous: nous fournissons une variété d’outils de trading pour votre satisfaction, nous vous proposons les toutes dernières plateformes de trading pour assurer la mise en œuvre de votre stratégie et fournissons un support multilingue 24 heures sur 24, adapté à vos besoins..</p>
                            <a className='btn btn-danger btn-lg text-uppercase py-2' href='https://www.ironfx.com/fr/register?utm_source=13127940&utm_medium=ib_link&utm_campaign=IB'>voir le broker</a>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Brokers ;