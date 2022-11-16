import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/img/logo.png';
import '../assets/css/navbar.css';
import {FiArrowUpRight, FiLogIn} from 'react-icons/fi';

function OffcanvasExample() {
  return (
    <>
    <header>
        <div className='bannerf'>
        {[false,].map((expand) => (
            <Navbar key={expand} expand={'xl'} >
          <Container >
            <Navbar.Brand className='logo' href="#">
                    <NavLink to='/'><img className='logo-img' src={logo}/></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor: '#fff'}} aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'xl'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                    <NavLink to='/'><img className='logo-img' src={logo}/></NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{backgroundColor :'#000'}} >
                <Nav className="justify-content-center flex-grow-1 pe-3" id='nav'>
                  <NavLink to="/about" className='lien'>A propos</NavLink>
                  <NavLink to="/portefeuilles" className='lien'>Portefeuilles</NavLink>
                  <NavLink to="/echanges" className='lien'>Echanges</NavLink>
                  <NavLink to="/brokers" className='lien'>Brokers</NavLink>
                  <NavLink to="/business" className='lien'>Business</NavLink>
                  <a href="https://docs.ifabit.com/" className='lien'>Docs API</a>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <a href="https://app.ifabit.com/auth/signin" id='signinMenu' className='btn btn-success' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '15px', color:'#fff', fontSize:'18px'}}><FiLogIn size={25} /></a>
                  <a href="https://app.ifabit.com/auth/signup" id='signupMenu' className='btn btn-success' style={{textAlign:'justify', fontFamily:'Work Sans', fontSize: '15px', marginLeft : '10px', color:'#fff', fontSize:'18px'}}>Ouvrir un compte</a>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
</Navbar>
        ))}
        </div>
        </header>
     
    </>
  );
}

export default OffcanvasExample;
