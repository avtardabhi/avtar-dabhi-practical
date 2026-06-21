import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const developerData = [
  {
    title: "Regulatory assurance",
    description:
      "We don’t just meet UAE property laws and surveying regulations — we set the benchmark. Every project is delivered fully compliant, giving you confidence your assets are audit-ready and future-proof.",
  },
  {
    title: "Proven expertise",
    description:
      "Our licensed survey engineers, architects, and civil engineers bring unrivalled knowledge of International Property Measurement Standards and extensive experience on large-scale UAE projects.",
  },
  {
    title: "Trusted partner",
    description:
      "Developers including Emaar, Aldar, Dubai Holding, and Select Group rely on us for precision, reliability, and results across some of the region’s most high-profile developments.",
  },
];

const LeadingDeveloper = () => {
  return (
    <section className="leading-developer-section">
      <Container>
        <h2 className="section-heading">
          <strong>Trusted</strong> by the UAE’s{" "}
          <strong>leading developers</strong>
        </h2>

        <Row className="g-0">
          {developerData.map((item, index) => (
            <Col lg={4} md={4} key={index}>
              <div
                className={`leading-developer-card ${
                  index !== developerData.length - 1
                    ? "leading-developer-border"
                    : ""
                }`}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LeadingDeveloper;
