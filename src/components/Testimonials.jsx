import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Guntur",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5,
      text: "Pavan Interiors transformed our home completely. The attention to detail and creativity exceeded our expectations. Our living space now feels like a luxury hotel!"
    },
    {
      name: "Rajesh Kumar",
      location: "Vijayawada",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5,
      text: "Professional, timely, and within budget. The team understood our vision perfectly and delivered beyond what we imagined. Highly recommended for anyone looking for quality interior design."
    },
    {
      name: "Anita Patel",
      location: "Guntur",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5,
      text: "The commercial space design for our restaurant was outstanding. It perfectly captures our brand identity and creates the perfect ambiance for our customers."
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="text-center text-muted mb-5 lead">
          Don't just take our word for it - hear from our satisfied clients across India
        </p>

        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={index} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="text-center mb-3">
                    <Quote className="text-warning mb-3" size={32} />
                  </div>
                  
                  <div className="mb-3 text-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-warning" size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <Card.Text className="mb-4 fst-italic">
                    "{testimonial.text}"
                  </Card.Text>
                  
                  <div className="text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <h6 className="mb-1">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.location}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;