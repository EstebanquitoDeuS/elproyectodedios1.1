import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/img/umg-logo.png'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import twitter from '../assets/img/logotipo-de-twitter-sobre-fondo-negro.png'
import { HashLink } from 'react-router-hash-link';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState ('home')
    const [scrolled, seScrolled] = useState(false)
    const onUpdateActiveLink = (value) =>{
        setActiveLink (value);
    }

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50){ //basicamente, esto podra detectar cuando estemos bajando en la pagina
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return(
    <Navbar expand="md" className={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ activeLink === 'home' ? 'active nabvar-link' : 'navbar-link' } onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#nosotros" className={ activeLink === 'computadoras' ? 'active nabvar-link' : 'navbar-link' } onClick={() =>onUpdateActiveLink('computadoras')}>Nosotros</Nav.Link>
            <Nav.Link href="#computadoras" className={ activeLink === 'components' ? 'active nabvar-link' : 'navbar-link' } onClick={() =>onUpdateActiveLink('components')}>Computadoras</Nav.Link>
            <Nav.Link href="#nosotros" className={ activeLink === 'about-us' ? 'active nabvar-link' : 'navbar-link' } onClick={() =>onUpdateActiveLink('about-us')}>Extras</Nav.Link>
            <NavDropdown title="Productos" className="basic-nav-dropdown color100">
              {/* <NavDropdown.Item href="/audio">Audio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Video</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gaming</NavDropdown.Item> */}

                <NavLink
                  to="/audio"
                  className={({ isActive, isPending }) =>
                    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                  }
                >
                  audio
                </NavLink>
                <NavLink
                  to="/video"
                  className={({ isActive, isPending }) =>
                    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                  }
                >
                  video
                </NavLink>
                <NavLink
                  to="/gaming"
                  className={({ isActive, isPending }) =>
                    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                  }
                >
                  gaming
                </NavLink>
              </NavDropdown>
            </Nav>
            

          

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.facebook.com/esteban.vicente.5201?mibextid=ZbWKwL' target=""><img src={facebook} alt=''></img></a>
                <a href='https://www.instagram.com/vh_estebaan?igsh=MTFldnM0Y3hrcmFpaA=='><img src={instagram} alt=''></img></a>
                <a href='https://twitter.com/?lang=es'><img src={twitter} alt=''></img></a>
            </div>
          </span>
             
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}