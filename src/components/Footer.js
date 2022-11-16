import React from 'react';
import '../assets/css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';
import Moment from 'moment';

function Footer () {

    const Year = Moment().format('Y');
   
    return(
        <div className='footer'>
            <div className='container col-md-12 col-sm-12 py-5'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-xl-3 mx-auto text-white'>
                        <img src={logo} className='img-fluid' />
                        <p>IFABIT, est une plateforme qui se présente comme une révolution dans le domaine des plateformes de change internationales, est une Startup de l’une des entreprises pionnières du secteur financier en Afrique Francophone.</p>
                    </div>
                    <div className='col-lg-2 col-md-2 col-xl-2 mx-auto'>
                        <h2 className='text-capitalize font-weight-bold text-white'>Liens Utiles</h2>
                        <p>
                            <a href='https://app.ifabit.com/' target='blank' style={{textDecoration: 'none', color: '#fff'}}>Espace Client</a>
                        </p>
                        <p>
                            <a href='https://app.ifabit.com/auth/signup' target='blank' style={{textDecoration: 'none', color: '#fff'}}>S'inscrire</a>
                        </p>
                        <p>
                            <NavLink to='/portefeuilles' style={{textDecoration: 'none', color: '#fff'}}>IFA Wallets</NavLink>
                        </p>
                        <p>
                            <NavLink to='/brokers' style={{textDecoration: 'none', color: '#fff'}}>Brokers</NavLink>
                        </p>
                        <p>
                            <NavLink to='/business' style={{textDecoration: 'none', color: '#fff'}}>Offres Business</NavLink>
                        </p>
                    </div>
                    <div className='col-lg-2 col-md-3 col-xl-2'>
                        <h2 className='text-capitalize font-weight-bold text-white'>Légales</h2>
                        <p>
                            <NavLink to='/#faq' style={{textDecoration: 'none', color: '#fff'}}>FAQ</NavLink>
                        </p>
                        <p>
                            <a href='https://app.ifabit.com/legal/cgu.htm' style={{textDecoration: 'none', color: '#fff'}}>Conditions Générales d'utilisation</a>
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-4 col-xl-3 mx-auto text-white'>
                        <h2  className='text-capitalize font-weight-bold'>Contact</h2>
                        <p>
                            <FaEnvelope /> contact@ifabit.com
                        </p>
                        <p>
                            <FaPhoneAlt /> +229 62157575
                        </p>
                    </div>
                </div>
            </div>
            <div className='copyright py-2 d-flex align-items-center justify-content-center'>
                <p className='text-center text-white'>Copyright - {Year}</p>
            </div>
        </div>
        
    )
}

export default Footer ;