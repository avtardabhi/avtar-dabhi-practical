import { Container, Row, Col, Card } from "react-bootstrap";

import dev1 from "../../assets/images/developer/dev1.png";
import dev2 from "../../assets/images/developer/dev2.png";
import dev3 from "../../assets/images/developer/dev3.png";
import dev4 from "../../assets/images/developer/dev4.png";
import dev5 from "../../assets/images/developer/dev5.png";

const clients = [
  {
    title: "Architects and\nProject Managers",
    description:
      "Providing precise, foundational data for accurate design and planning, reducing errors and costs.",
    icon: dev1,
  },
  {
    title: "Facilities\nManagers",
    description: "Stay ahead of safety, compliance and efficiency challenges.",
    icon: dev2,
  },
  {
    title: "Asset and Property\nManagers",
    description:
      "Everything needed to market, lease and manage portfolios with confidence.",
    icon: dev3,
  },
  {
    title: "Developers",
    description: "Build with confidence, from planning to final sign-off.",
    icon: dev4,
  },
  {
    title: "Property Owners",
    description: "See where space can be optimised, and act on what matters.",
    icon: dev5,
  },
];

export default function DeveloperCard() {
  return (
    <section className="client-section">
      <Container>
        <h2 className="section-heading">
          We work with clients that{" "}
          <strong>
            design,
            <br /> develop
          </strong>{" "}
          and <strong>manage real estate</strong>
        </h2>

        <Row className="g-4 justify-content-center">
          {clients.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl>
              <Card className="client-card border-0 h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="icon-wrapper">
                    <div className="icon-circle"></div>
                    <div className="client-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                  </div>

                  <h5 className="client-title mt-4">
                    {item.title.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </h5>

                  <p className="client-description mt-3">{item.description}</p>

                  <div className="mt-auto text-end">
                    <div class="project-arrow">→</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
