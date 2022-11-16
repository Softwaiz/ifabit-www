import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from './Navbar';
import Footer from './Footer'
import '../assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobile from '../assets/img/IFAphone.png';
import paiement from '../assets/img/paiement.png';
import transfert from '../assets/img/Transfert.png';
import computer from '../assets/img/computer1.png';
import download from '../assets/img/Phone-1.png';
import faq from '../assets/img/FAQ ICON.png';
import ios from '../assets/img/ios.png';
import android from '../assets/img/android.png';
import Artboard from '../assets/img/Artboard.png';
import { NavLink, Link } from 'react-router-dom';
import {FaBars, FaTimes, FaCode, FaMoneyCheckAlt, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import {FiArrowUpRight, FiArrowDown, FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import logo from '../assets/img/logo.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import { Helmet } from 'react-helmet';

function Home () {
    return(
        <div>
        <Helmet>
            <title>IFABIT | Effectuez vos transferts d'argent en toute sécurité</title>
        </Helmet>
            <Navbar  />
            <div className='hero'>
            <Carousel id="carousel" indicators={false} >
                <Carousel.Item >
                    <div className='container py-5'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="labelh1p">
                                <h1 className='text-uppercase text-white' style={{fontFamily:'poppins',wordSpacing: 'normal' }}>Devenez partenaire IFA</h1>
                                <p className='text-white' style={{ fontFamily:'Work Sans', fontSize: '20px'}}>En devenant un partenaire IFA, vous gagnez des comissions sur les retraits de fonds par les utilisateurs, à travers votre compte.</p>
                                <a className='btn btn-outline-success' href='https://app.ifabit.com/auth/signup' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>Ouvrir un compte</a>
                            </div>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="divImg">
                                <img className='img-fluid mobile' id="CarouselImgHome"  src={Artboard} alt="mobile" />
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                    
                <Carousel.Item>
                    <div className='container py-5'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="labelh1p">
                                <h1 className='text-uppercase text-white' style={{fontFamily:'poppins', wordSpacing: 'normal' }}>Transférez de l'argent</h1>
                                <p className='text-white' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>Transférez de l'argent en toute sécurité à vos proches à moindre coût. Payez vos factures, achetez des biens et services directement depuis votre portefuille IFA.</p>
                                <a className='btn btn-outline-success'  href='https://app.ifabit.com/auth/signup' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>Ouvrir un compte</a>
                            </div>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="divImg">
                                <img className='img-fluid  mobile' id="CarouselImgHome"  src={transfert} alt="transfert"/>
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container py-5'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="labelh1p">
                                <h1 className='text-uppercase text-white' style={{fontFamily:'poppins' }}>Recevez des paiements</h1>
                                <p className='text-white' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>Intégrez IFA sur vos plateformes et recevez des paiements de vos clients, directement dans vos portefeuilles.</p>
                                <a className='btn btn-outline-success'  href='https://app.ifabit.com/auth/signup' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>Ouvrir un compte</a>
                            </div>
                            <div className='col-lg-6 col-sm-12 col-xl-6 col-xs-6' id="divImg">
                                <img className='img-fluid  mobile' id="CarouselImgHome"  src={paiement} alt="paiement" />
                            </div>
                        </div>
                    </div> 
                </Carousel.Item>
            </Carousel>
            </div>
            <div className='about py-5'>
                <div className='container py-5'>
                    <div className='row d-flex align-items-center mobile-about'>
                        <div className='col-lg-6 col-sm-12 animate__animated animate__fadeInLeft'>
                            <img className='img-fluid' style={{border:'8px solid #141a28', borderRadius:'9px'}} src={computer} />
                        </div>
                        <div className='col-lg-6 col-sm-12 about-mobile'>
                            <h3 className='text-white text-capitalize' id='about-text-mobile'>A propos de IFABIT</h3>
                            <p className='text-white' style={{textAlign:'justify'}}>IFABIT, qui se présente comme une révolution dans le domaine des plateformes de change internationales, est une Startup de l’une des entreprises pionnières du secteur financier en Afrique Francophone.</p>
                            <p className='text-white' style={{textAlign:'justify'}}> C’est une plateforme complète conçue par des professionnels, simple à utiliser et à parcourir. Vous y trouverez tout un écosystème de produits et de services qui permet aux clients de s'engager dans une économie décentralisée de diverses manières.</p>
                            <NavLink className='btn btn-success' to='/about' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '20px'}}>En savoir plus</NavLink>
                        </div>
                    </div>
                </div>
                <div className='container py-4 animate__animated animate__fadeInDown commentcamarche'>
                    <div className='text-center text-white py-5 commentcamarche'>
                        <h2 className='text-capitalize text-center' id='howdoit'>Comment ça marche ?</h2>
                        <p className='text-center'>Suivez ces étapes pour profiter entièrement de la plateforme IFABIT</p>
                    </div>
                    <div className='text-center'>
                        <div className='row'>
                            <div className='col-lg-6 my-2'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            <h1 className='text-center'>1</h1>
                                            <h3 className='text-center'>Inscrivez-vous</h3>
                                            <p className='text-center'>L'inscription est très facile - elle prend moins de 2 minutes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 my-2'>
                                <div className='card bg-dark py-1'>
                                    <div className='card-body'>
                                        <div className='card-text text-white'>
                                            <h1 className='text-center'>2</h1>
                                            <h4 className='text-center'>Configurez les infos du compte</h4>
                                            <p className='text-center'>Confirmez votre identité.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 my-2'>
                                <div className=''>
                                    <div className='card bg-dark'>
                                        <div className='card-body'>
                                            <div className='card-text text-white'>
                                                <h1 className='text-center'>3</h1>
                                                <h3 className='text-center'>Effectuez un dépôt</h3>
                                                <p className='text-center'>Connectez-vous pour faire un dépôt de fonds.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-sm-12 my-2'>
                                <div>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='card-text'>
                                                <h1 className='text-center'>4</h1>
                                                <h3 className='text-center'>Tradez</h3>
                                                <p className='text-center'>Achetez, Vendez partout et faites-vous du cash.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <a className='btn btn-success py-3' href='https://app.ifabit.com/auth/signup'>Inscrivez-vous maintenant</a>
                    </div>
                </div>
            </div>
            <div className='crypto py-5'>
                <div className='container py-5'>
                            <div className='text-center text-white'>
                                <h2 className='text-uppercase text-center'>Achetez. Vendez. Partout</h2>
                            </div>
                            <div className='row py-5'>
                                <div className='col-lg-4 my-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='card-text'>
                                                <h5 className='text-center'>Opérations sécurisées</h5>
                                                <p style={{textAlign: 'justify'}}>IFABIT protège les données transmises entre votre ordinateur et ses serveurs, et met un accent sur la sécurité de vos données et de vos interactions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 my-2'>
                                    <div className='card pb-4'>
                                        <div className='card-body'>
                                            <div className='card-text'>
                                                <h5 className='text-center'>Disponibilité du site 24H/24</h5>
                                                <p style={{textAlign: 'justify'}}>Nous nous assurons que le service reste disponible 24H/24 avec une équipe à votre écoute.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 my-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='card-text'>
                                                <h5 className='text-center'>Diversité des choix, et rapidité d'exécution</h5>
                                                <p style={{textAlign: 'justify'}}>Avec IFABIT, vous avez accès à un éventail de possibilités pouvant accélérer votre business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div className='devises py-5'>
                <div className='container'>
                    <div className='text-white'>
                        <h2 className='text-uppercase text-center'>Acceptez les paiements en un clic avec <span className='text-success'>IFAPAY</span></h2>
                    </div>
                    <VerticalTimeline className='timeline' >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#2c7a7c', color: '#fff' }}
                            iconStyle={{ background: '#2c7a7c', color: '#fff' }}
                            icon={<FaCode />}
                        >
                            <h3 className="vertical-timeline-element-title">Intégration sur votre site</h3>
                            <p className='timeline-text'>Un module de paiement sans redirection est intégrable sur votre plateforme afin de rendre l'expérience de paiement fluide.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#2c7a7c', color: '#fff' }}
                            icon={<FaBars />}
                        >
                            <h3 className="vertical-timeline-element-title">API facile & documentée</h3>
                            <p className='timeline-text'>Nous vous fournissons une api pour exécuter vos requêtes et manipuler votre compte depuis votre propre système. Les appels et les procédures sont tous documentés.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: '#2c7a7c', color: '#fff' }}
                            icon={<FaMoneyCheckAlt />}
                        >
                            <h3 className="vertical-timeline-element-title">Paiements instantanés</h3>
                            <p className='timeline-text'>Reçevez des paiements intantanément de n'importe qui, n'importe où dans le monde.</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#2c7a7c', color: '#fff' }}
                            iconStyle={{ background: '#2c7a7c', color: '#fff' }}
                            icon={<FaBars />}
                        >
                            <h3 className="vertical-timeline-element-title">Retraits instantanés des fonds collectés</h3>
                            <p className='timeline-text'>Vous pouvez retirer des fonds de votre portefeuilles à n'importe quel moment. Collectez vos paiements aisément et retirez-les quand vous voulez. Vous êtes le maitre à bord 🧘.</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                    <div className='text-center mt-3'>
                        <a className='btn btn-outline-success text-uppercase py-3' href='https://docs.ifabit.com/'>voir le guide d'intégration</a>
                    </div>
                </div>
            </div>
            <div className='call-to-action'>
                <div className='container text-center'>
                    <h2 className='text-center'>Rejoignez-nous dès maintenant.</h2>
                    <p className='text-center'>Créez un compte et commencez à profiter des possibilités offertes par IFABIT.</p>
                    <a className='btn btn-success' href='https://app.ifabit.com/auth/signup'>Rejoignez-nous</a>
                </div>
            </div>
            <div className='download'>
                <div className='container'>
                    <div className='row d-flex align-items-center download-row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h1>Télécharger l'app IFABIT</h1>
                            <p>Avec la nouvelle application IFABit, vous trouverez la crème des services financiers en une seule application. 
                            IFABit, c'est plus de 50 plateformes de services financiers en une seule. Le design et les services intégrés ont été conçus pour vous offrir une meilleure expérience 
                            utilisateur. <strong>Nous aimons nos clients et nos clients aiment nos services</strong></p>
                            <div className='row download-app'>
                                <div className='download-app-img-mobile'>
                                    <img src={download} className='img-fluid' />
                                </div>
                                <div className='col-lg-6'>
                                    <a><img src={ios} className='img-fluid  img-andios' /></a>
                                </div>
                                <div className='col-lg-6'>
                                    <a><img src={android} className='img-fluid img-andios' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 download-app-img app-img animate__animated animate__fadeInRight'>
                            <img src={download} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='faq py-5'>
                <h2 className='text-capitalize text-center text-white' id='questions' style={{fontSize: '50px', fontFamily: 'poppins'}}>Questions fréquentes</h2>
                <div className='container py-5'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-5'>
                            <img src={faq} className='img-fluid' />
                        </div>
                        <div className='col-lg-7'>
                            <Accordion defaultActiveKey="0" className='bg-dark'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h5>L'inscription sur IFABIT est-elle payante ?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <p>Non. S'inscrire sur IFABIT est totalement gratuit.</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h5>Puis-je échanger mes cryptomonnaies contre d'autres cryptomonnaies ?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <p>Oui, nous appelons ce processus "<strong>Faire un swap</strong>". Un large éventail de choix de cryptos vous est offert.</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header ><h5>Puis-je vendre mes devises numériques et cryptos, et recevoir l'équivalent sur mon compte mobile (MTN MOBILE MONEY et autres) ?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <p>Tout à fait. Vous pouvez également acheter des devises numériques en payant depuis votre compte mobile.</p>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>Que puis-je faire concrètement avec votre service IFAPAY ?</h5></Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                            Avec IFAPAY, vous pouvez reçevoir de l'argent de n'importe qui dans vos portefeuilles. 
                                            Et pour diversifier les devises de vos actifs, nousimport Portefeuilles from './Portefeuilles';
 offrons des portefeuilles XOF (IFAXOF) et USD (IFAUSD).import { Helmet } from 'react-helmet';

                                            Vous pouvez intégrer notre service sur vos plateformes ou dans vos autres processus afin de demander et reçevoir des paiements, d'orchestrer des paiements de masse pour votre business ou même le paiement de salaires pour vos employés.
                                            Les possibilités, ne dépendent que de l'usage que vous souhaitez en faire.
                                            </p>
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home ;