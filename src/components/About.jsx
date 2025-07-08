import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in interior design across India"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled designers with years of experience and creativity"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We complete projects on time without compromising quality"
    },
    {
      icon: Heart,
      title: "Client Focused",
      description: "Your satisfaction is our priority in every project"
    }
  ];

  return (
    <section id="about" className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={6}>
            <h2 className="section-title text-start">About Elegant Interiors</h2>
            <p className="lead mb-4">
              With over 15 years of experience in transforming spaces across India, 
              we are passionate about creating interiors that inspire and delight.
            </p>
            <p className="mb-4">
              Our team of expert designers combines creativity with functionality to deliver 
              spaces that not only look beautiful but also enhance your daily living experience. 
              From residential homes to commercial spaces, we handle projects of all sizes with 
              the same level of dedication and attention to detail.
            </p>
            <p>
              We believe that great design should be accessible to everyone, which is why we 
              offer flexible packages and work closely with our clients to understand their 
              vision, budget, and timeline.
            </p>
          </Col>
          <Col lg={6}>
            <div className="position-relative">
              <img 
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Interior Design Studio" 
                className="img-fluid rounded-3 shadow-lg"
              />
              <div 
                className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '80px', height: '80px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              >
                <Heart className="text-danger" size={32} />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Body className="text-center">
                    <div className="service-icon mb-3">
                      <IconComponent size={32} />
                    </div>
                    <Card.Title className="h5 mb-3">{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
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

export default About;