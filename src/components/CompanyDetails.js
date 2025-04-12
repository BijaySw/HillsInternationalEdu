import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CompanyDetails = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            We are a leading company with over 30 years of experience in the industry. Our team is dedicated to providing top-notch services and innovative solutions to our clients.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://via.placeholder.com/500x300?text=Company+Image"
            alt="Company"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDetails;
