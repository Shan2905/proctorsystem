import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="hero-content">
            <div className="d-flex align-items-center mb-3">
              <Star className="text-warning me-2" size={24} />
              <span className="text-warning fw-bold">Premium Interior Design</span>
            </div>
            
            <h1 className="hero-title">
              Transform Your Space Into 
              <span className="text-warning d-block">Something Extraordinary</span>
            </h1>
            
            <p className="hero-subtitle">
              We create stunning, functional interiors that reflect your personality and lifestyle. 
              From concept to completion, we bring your vision to life with expert craftsmanship 
              and attention to detail.
            </p>
            
            <div className="d-flex flex-wrap gap-3">
              <Button 
                className="btn-primary-custom"
                onClick={scrollToContact}
              >
                Get Free Consultation
                <ArrowRight className="ms-2" size={20} />
              </Button>
              
              <Button 
                variant="outline-light" 
                size="lg"
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </div>
            
            <div className="mt-4 d-flex align-items-center">
              <div className="me-4">
                <div className="fw-bold fs-4">500+</div>
                <small>Happy Clients</small>
              </div>
              <div className="me-4">
                <div className="fw-bold fs-4">15+</div>
                <small>Years Experience</small>
              </div>
              <div>
                <div className="fw-bold fs-4">1000+</div>
                <small>Projects Completed</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;