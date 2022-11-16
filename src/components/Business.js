import React from 'react';
import Navbar from './Navbar';
import '../assets/css/business.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import {Helmet} from 'react-helmet';



function Business () {
   
    return(
        <div>
        <Helmet>
            <title>Offre de partenariat | IFABIT</title>
        </Helmet>
            <Navbar />
                <div className='bg-ifa'>
                    <div className='container py-5 text-center text-white'>
                        <h2 className='text-uppercase title text-center'>offre de partenariat</h2>
                        <a className='btn btn-secondary' href='https://app.ifabit.com/auth/signup' target='blank'>Devenez partenaire</a>
                    </div>
                </div>
                <div className='container py-5'>
                    <p>Il n’y a rien de plus simple pour devenir partenaire de IFABit.
                        Avant d’être partenaire, vous devez avant tout disposer d’un compte standard vérifié Les partenaires IFA sont les entités indépendantes et importantes dans le système IFA.
                        C'est par eux que les autres utilisateurs auront la possibilité d’effectuer les dépôts et retraits sur leurs portefeuilles.
                        Etre partenaire, c’est se donner les moyens d’être rémunéré par une commission sur chaque retrait effectué par nos utilisateurs sur votre portefeuille.
                        On parle de retrait lorsqu'un utilisateur transfère des fonds vers un partenaire. Et dans ce cas, une grille tarifaire différente de celle applicable sur les transferts directs (entre utilisateur) est appliquée.
                    </p>
                    <div className='py-3'>
                        <div className='card'>
                            <div className='card-header bg-dark text-white'>
                                <h2>Rémunération</h2>
                            </div>
                            <div className='card-body'>
                                <p>Les partenaires gagnent une commission sur les processus de retraits opérés sur leur compte.
                                La commission leur est automatiquement reversée, sans latence et la possibilité de retrait actée.</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div className='card'>
                            <div className='card-header bg-dark text-white'>
                                <h2>Processus d'adhésion</h2>
                            </div>
                            <div className='card-body'>
                                <p>
                                    Pour etre partenaire, vous devez d'abord avoir un compte client standard, et vérifier votre identité.
                                    Ensuite vous suivrez le processus de demande, qui requiert que vous soyez enregistré dans votre pays comme une entreprise (Etablissement, SARL...).
                                    Une copie scannée des documents légaux vous sera demandée.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div className='card'>
                            <div className='card-header bg-dark text-white'>
                                <h2>Conditions et Liste des pièces à fournir pour devenir partenaire IFABIT</h2>
                            </div>
                            <div className='card-body'>
                                <ul className='liste'>
                                    <li>Se constituer en société, établissement ou ONG</li>
                                    <li>Fournir le dossier de demande (CNI/CIP, copie registre de commerce, IFU, preuve d’adresse)</li>
                                    <li>Remplir le contrat de demande</li>
                                    <li>Un plan de localisation géographique du local</li>
                                    <li>Posséder un local physique et identifiable.</li>
                                    <li>Faire un dépôt initial de 100.000 FCFA</li>
                                    <li>Etre âgé de 25 ans au 31 / 12 / 2021</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Business ;