import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const QuoteCard = () => {
  return (
    <section className="quote-card">
      <Container>
        <div className="quote-card-wrapper">
          <Row className="align-items-center">
            <Col lg={9} md={8}>
              <h2 className="quote-card-title">
                As <strong>UAE-approved surveyors</strong>, we ensure your
                property survey is{" "}
                <strong>fast, accurate, and compliant.</strong>
              </h2>
            </Col>

            <Col lg={3} md={4} className="text-md-end mt-4 mt-md-0">
              <Button variant="danger">GET A QUOTE</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default QuoteCard;
