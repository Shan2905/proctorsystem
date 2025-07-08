import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Eye, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "A contemporary living space with clean lines and warm textures",
      details: "Complete transformation of a 1200 sq ft living area with modern furniture, ambient lighting, and custom storage solutions."
    },
    {
      id: 2,
      title: "Luxury Bedroom Suite",
      category: "Residential",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Elegant master bedroom with custom furniture and lighting",
      details: "Designed a serene master bedroom with custom headboard, walk-in closet, and spa-like ensuite bathroom."
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      category: "Residential",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Functional kitchen design with modern appliances",
      details: "Open-concept kitchen with island, premium appliances, and smart storage solutions for a family of four."
    },
    {
      id: 4,
      title: "Corporate Office",
      category: "Commercial",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Professional workspace design for productivity",
      details: "Modern office design for 50+ employees with collaborative spaces, private offices, and recreational areas."
    },
    {
      id: 5,
      title: "Boutique Restaurant",
      category: "Commercial",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Intimate dining space with warm ambiance",
      details: "Cozy restaurant interior with custom seating, ambient lighting, and traditional Indian design elements."
    },
    {
      id: 6,
      title: "Minimalist Bathroom",
      category: "Residential",
      image: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Clean and serene bathroom design",
      details: "Spa-inspired bathroom with natural materials, rainfall shower, and smart storage solutions."
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="portfolio" className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container>
        <h2 className="section-title">Our Portfolio</h2>
        <p className="text-center text-muted mb-5 lead">
          Explore our recent projects and see how we transform spaces into beautiful, functional environments
        </p>

        <Row>
          {projects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <div 
                className="portfolio-item"
                onClick={() => handleProjectClick(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="portfolio-overlay">
                  <div>
                    <h5 className="mb-2">{project.title}</h5>
                    <p className="mb-3">{project.description}</p>
                    <Button variant="outline-light" size="sm">
                      <Eye size={16} className="me-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button className="btn-primary-custom">
            View All Projects
            <ArrowRight className="ms-2" size={20} />
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="img-fluid rounded mb-3"
              />
              <p className="lead">{selectedProject.description}</p>
              <p>{selectedProject.details}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge bg-primary">{selectedProject.category}</span>
                <Button className="btn-primary-custom">
                  Contact for Similar Project
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Portfolio;