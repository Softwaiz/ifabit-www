import React from 'react';
import Navbar from './Navbar';
import '../assets/css/portefeuilles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import {Helmet} from 'react-helmet'

function Portefeuilles () {
   
    return(
        <div>
        <Helmet>
            <title>Les portefeuilles IFA | IFABIT</title>
        </Helmet>
            <Navbar />
                <div className='bg-ifa col-sm-12 col-md-12 col-lg-12 col-xxl-12'>
                    <div className='container py-5 text-white'>
                        <h2 className='text-uppercase text-center'>IFA wallets</h2>
                    </div>
                </div>
                <div className='container py-5'>
                    <p>IFABIT fournit à l'interne deux types de portefeuilles:</p>
                    <ul>
                        <li>Les portefeuilles <span className='badge text-success'>IFAXOF</span> pour contenir de la devise XOF</li>
                        <li>Les portefeuilles <span className='badge text-success'>IFAUSD</span> pour contenir de la devise USD.</li>
                    </ul>
                    <div className='warning py-2'>
                        <h2>Important</h2>
                        <p>Il n'est pas possible de transférer des fonds entre les deux types de portefeuille sans passer par un swap, si disponible au moment de la demande.</p>
                    </div>
                   <div className='py-3'>
                        <p>A partir des ces portefeuilles, vous pouvez donc envoyer des fonds à d'autres personnes, effectuer des paiements et/ou souscrire à des services. Les transferts effectués sur ces portefeuilles sont soumis à des grilles tarifaires.</p>
                        <p>Pour faire un dépot ou un retrait sur ces portefeuilles, vous devez contacter le partenaire IFA le plus proche de vous. Si les swaps sont disponibles sur les portefeuilles, vous pourrez à partir de la section échange déposer à partir d'un réseau, ou retirer vers un réseau tiers.</p>
                   </div>
                    <div className='warning py-2'>
                        <h2>Important</h2>
                        <p>
                            Les partenaires gagnent une commission sur les processus de retraits opérés sur leur compte.
                            La commission leur est automatiquement reversée, sans latence.
                        </p>
                    </div>
                    <p className='py-3'>Chaque utilisateur a droit à un maximum de 03 portefeuilles.</p>
                </div>
            <Footer />
        </div>
    )
}

export default Portefeuilles ;