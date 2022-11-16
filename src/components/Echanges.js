import React from 'react';
import Navbar from './Navbar';
import '../assets/css/echanges.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import airtel from '../assets/img/devises/airtel.jpg';
import binance from '../assets/img/devises/binance.png';
import btc from '../assets/img/devises/btc.jpg';
import cardano from '../assets/img/devises/cardano.png';
import chainlink from '../assets/img/devises/chainlink.jpg';
import decetralana from '../assets/img/devises/decetralana.jpg';
import eos from '../assets/img/devises/eos.jpg';
import ether from '../assets/img/devises/ether.png';
import freesn from '../assets/img/devises/freesn.jpg';
import moovbj from '../assets/img/devises/moovbj.jpg';
import mtnbj from '../assets/img/devises/mtnbj.png';
import moovtg from '../assets/img/devises/moovtg.jpg';
import mtnci from '../assets/img/devises/mtnci.jpg';
import orangeci from '../assets/img/devises/orangeci.jpg';
import orangemali from '../assets/img/devises/orangemali.jpg';
import orangesn from '../assets/img/devises/orangesn.png';
import PM from '../assets/img/devises/PM.png';
import polkadot from '../assets/img/devises/polkadot.png';
import polygon from '../assets/img/devises/polygon.jpg';
import ripple from '../assets/img/devises/ripple.jpg';
import sandbox from '../assets/img/devises/sandbox.jpg';
import solana from '../assets/img/devises/solana.jpg';
import tetherusd from '../assets/img/devises/tetherusd.png';
import tmoney from '../assets/img/devises/tmoney.png';
import CarousselEchange from './CarousselEchange'
import {Helmet} from 'react-helmet'

function Echanges () {
   
    return(
        <div>
        <Helmet>
            <title>Echanges de devises numériques | IFABIT</title>
        </Helmet>
            <Navbar />
                <div className='bg-ifa'>
                    <div className='container py-5 text-white'>
                        <h2 className='text-uppercase text-center title'>IFA Exchanges</h2>
                    </div>
                </div>
                <div className='container py-5'>
                    <p>
                    IFABIT offre la possibilité d’échanges, de ventes et d’achats de plusieurs produits.
                    En dehors de cette possibilité, envoyer de l’argent vers d’autres réseaux est aussi possible.
                    </p>
                    <h2 className='text-center py-5'><strong className='text-success'>25</strong> devises disponibles</h2>
                    
                    <CarousselEchange />
                </div>
            <Footer />
        </div>
    )
}

export default Echanges ;