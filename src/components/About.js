import React from 'react';
import {FaMoneyBillWave, FaPhoneAlt, FaLock} from 'react-icons/fa';
import '../assets/css/about.css';
import logo from '../assets/img/logo.png'; 
import Navbar from './Navbar';
import Footer from './Footer';
import ifaPay from '../assets/img/paiement.png';
import ifaEchange from '../assets/img/Transfert.png';
import ifaPhone from '../assets/img/IFAphone.png';
import { Helmet } from 'react-helmet';


function About (){
    return(
        <div>
        <Helmet>
            <title>A propos de la plateforme | IFABIT</title>
        </Helmet>
        <Navbar />
            <div className='bg-ifa'>
                <div className='container text-center text-white'>
                    <h2 className='text-uppercase title-about'>Révolutionner l'industrie des transactions numériques.</h2>
                    <div className='about-btn text-center py-5'>
                        <a className='btn btn-success py-2' href='https://app.ifabit.com/auth/signup'>Créer un compte</a>
                        <a className='btn btn-outline-success py-2' href='https://app.ifabit.com/auth/signin' id='connecter'>Se connecter</a>
                    </div>
                </div>
            </div>
            <div className='about py-5 text-white'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-6'>
                            <img className='img-fluid' src={logo} />
                        </div>
                        <div className='col-lg-6'>
                            <h2>A propos de IFABIT</h2>
                            <p>
                                IFABit, qui se présente comme une révolution dans le domaine des plateformes de change internationales, est une Startup de l’une des entreprises pionnières du secteur financier en Afrique Francophone ; entreprise enregistrée au RCCM : RB/ABC/13B101 depuis 2013. C’est une plateforme complète conçue par des professionnels, simple à utiliser et à parcourir.
                            </p>
                            <p>
                                Vous y trouverez tout un écosystème de produits et de services qui permet aux clients de s'engager dans une économie décentralisée de diverses manières. La plateforme offre un large éventail de services financiers et surpasse la concurrence en termes de fiabilité et de rentabilité, car elle vous aide à réaliser des économies à court et à long terme. Adopter IFABit c’est se donner les moyens d’avoir tout en un.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container py-5'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-6'>
                            <h1>IFA Exchange</h1>
                            <p>
                            Service vous permettant de pouvoir éffectuer des achats, des ventes et des échanges de cryptomonnaies sans oublier les monnaies électroniques comme Perfect Money, Ifaxof, Ifausd, Payeer et autres.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <img className='img-fluid' src={ifaPhone} />
                        </div>
                    </div>
                </div>
                <div className='container py-5'>
                    <div className='row d-flex align-items-center ifapay'>
                        <div className='col-lg-6' id='ifaPayImg'>
                            <img className='img-fluid' src={ifaPay} />
                        </div>
                        <div className='col-lg-6' id='ifaPaytext'>
                            <h1>IFA Pay</h1>
                            <p>
                            Grâce à ce service, vous avez non seulement la possibilité d'envoyer, de reçevoir des FCFA via votre portefeuille IFAXOF mais aussi des USD via le portefeuille IFAUSD.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-6'>
                            <h1>IFA Money</h1>
                            <p>
                            Service vous permettant de pouvoir éffectuer des achats, des ventes et des échanges de cryptomonnaies sans oublier les monnaies électroniques comme Perfect Money, Ifaxof, Ifausd, Payeer et autres.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <img className='img-fluid' src={ifaEchange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5'>
                <div className='container'>
                    <h2 className='text-center text-capitalize'>Pourquoi nous choisir ?</h2>
                    <div className='row py-5'>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <FaLock size={50} />
                            <h2 className='text-center'>Sécurité Robuste</h2>
                            </div>
                            <p className='text-center'>
                            Protection des données contre les attaques, sécurité lors de la transmission, méthodes d'authentifications renforcées, et conformité aux normes de sécurité financière, pour protéger vos fonds.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <FaPhoneAlt size={50} />
                            <h2 className='text-center'>Assistance 24h/24 et 7j/7</h2>
                            </div>
                            <p className='text-center'>
                            Une assistance dédiée par e-mail, téléphone et chat en direct 24 heures sur 24 pour répondre à vos questions à tout moment. Nous vous garantissons une expérience exceptionnelle en matière de service à la clientèle.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <FaMoneyBillWave size={50} />
                            <h2 className='text-center'>Commissions compétitives</h2>
                            </div>
                            <p className='text-center'>
                            Des commissions raisonnables, des conditions spéciales et des offres solides pour les apporteurs d’affaires.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default About;