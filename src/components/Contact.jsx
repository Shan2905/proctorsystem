import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtitle: "Mon-Sat 9AM-7PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["pavanncherukuri@gmail.com", "projects@pavaninteriors.com"],
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["Design Plaza, MG Road", "Vijayawada, Andhra Pradesh 520010"],
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9AM - 7PM", "Sunday: 10AM - 4PM"],
      subtitle: "Free consultations available"
    }
  ];

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted mb-5 lead">
          Ready to transform your space? Contact us for a free consultation and let's bring your vision to life
        </p>

        <Row className="mb-5">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="text-center">
                  <div className="service-icon mb-3">
                    <IconComponent size={32} />
                  </div>
                  <h5 className="mb-3">{info.title}</h5>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                  <small className="text-muted">{info.subtitle}</small>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success" className="mb-4">
                Thank you for your message! We'll get back to you within 24 hours.
              </Alert>
            )}
            
            <div className="contact-form">
              <h3 className="text-center mb-4">Send Us a Message</h3>
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Project Type</Form.Label>
                      <Form.Select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Space</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation Only</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Budget Range</Form.Label>
                  <Form.Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5">Under ₹5 Lakhs</option>
                    <option value="5-10">₹5 - 10 Lakhs</option>
                    <option value="10-25">₹10 - 25 Lakhs</option>
                    <option value="25-50">₹25 - 50 Lakhs</option>
                    <option value="above-50">Above ₹50 Lakhs</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Project Details *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project, space dimensions, timeline, and any specific requirements..."
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="btn-primary-custom">
                    <Send size={20} className="me-2" />
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;