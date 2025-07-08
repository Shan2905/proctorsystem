import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <Home className="me-2" size={24} />
              <h5 className="mb-0">Pavan Interiors</h5>
            </div>
            <p className="mb-3">
              Transforming spaces across Andhra Pradesh and India with innovative design solutions. 
              We create beautiful, functional interiors that reflect your personality and lifestyle.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none"
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#" 
                  className="text-white-50 text-decoration-none"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-white-50">Residential Design</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">Commercial Spaces</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">Interior Styling</span>
              </li>
              <li className="mb-2">
                <span className="text-white-50">Renovation Services</span>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <MapPin size={16} className="me-2 text-warning" />
              <span className="text-white-50">Vijayawada, Andhra Pradesh</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={16} className="me-2 text-warning" />
              <span className="text-white-50">+91 98765 43210</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="me-2 text-warning" />
              <span className="text-white-50">pavanncherukuri@gmail.com</span>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col md={6}>
            <p className="mb-0 text-white-50">
              © {currentYear} Pavan Interiors. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <span className="text-white-50">
              Privacy Policy | Terms of Service | Sitemap
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;