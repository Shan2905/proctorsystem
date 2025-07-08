import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Stats = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;