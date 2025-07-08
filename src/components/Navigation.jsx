import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Home, User, Briefcase, Image, Phone } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Home className="me-2" size={24} />
          Pavan Interiors
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>
              <Home size={18} className="me-1" />
              Home
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>
              <User size={18} className="me-1" />
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('services')}>
              <Briefcase size={18} className="me-1" />
              Services
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('portfolio')}>
              <Image size={18} className="me-1" />
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>
              <Phone size={18} className="me-1" />
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;