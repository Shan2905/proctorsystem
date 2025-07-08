import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Home, Building, Palette, Sofa, Lightbulb, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home makeovers including living rooms, bedrooms, kitchens, and bathrooms with modern aesthetics.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"]
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Professional office designs, retail spaces, restaurants, and hospitality interiors that enhance business.",
      features: ["Office Layouts", "Retail Design", "Restaurant Interiors", "Hotel Design"]
    },
    {
      icon: Palette,
      title: "Interior Styling",
      description: "Expert styling services to refresh your existing space with new colors, textures, and accessories.",
      features: ["Color Schemes", "Textile Selection", "Art Curation", "Accessory Styling"]
    },
    {
      icon: Sofa,
      title: "Furniture Design",
      description: "Custom furniture design and selection to perfectly fit your space and lifestyle requirements.",
      features: ["Custom Furniture", "Space Optimization", "Ergonomic Design", "Material Selection"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description: "Comprehensive lighting design including ambient, task, and accent lighting for perfect ambiance.",
      features: ["LED Solutions", "Smart Lighting", "Mood Lighting", "Energy Efficient"]
    },
    {
      icon: Hammer,
      title: "Renovation Services",
      description: "Complete renovation and remodeling services with project management from start to finish.",
      features: ["Project Management", "Contractor Coordination", "Timeline Management", "Quality Control"]
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-muted mb-5 lead">
          We offer comprehensive interior design services to transform your space into something extraordinary
        </p>

        <Row>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Body>
                    <div className="service-icon mb-3">
                      <IconComponent size={32} />
                    </div>
                    <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                    <Card.Text className="mb-3">{service.description}</Card.Text>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <span className="text-warning me-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;