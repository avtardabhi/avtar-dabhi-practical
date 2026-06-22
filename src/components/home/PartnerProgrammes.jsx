import { Container, Row, Col, Card, Button } from "react-bootstrap";

import referralImage from "../../assets/images/partner1.png";
import captureImage from "../../assets/images/partner2.png";
import partnertestimonial from "../../assets/images/partner-testimonial.png";

const programmes = [
  {
    title: "Referral Programme",
    subtitle: "UNLOCK NEW REVENUE OPPORTUNITIES",
    description:
      "We're growing our network through our referral programme and are looking for individuals with strong networks and access to potential clients who could benefit from our services.",
    button: "FIND OUT MORE",
    image: referralImage,
  },
  {
    title: "Capture Programme",
    subtitle: "SCALE YOUR CAPABILITIES",
    description:
      "We're launching a programme for skilled surveyors who want to work on global projects and use cutting-edge tools like our proprietary capture technology.",
    button: "REGISTER INTEREST",
    image: captureImage,
  },
];

export default function PartnerProgrammes() {
  return (
    <>
      <section className="partner-programmes-section">
        <Container>
          <h2 className="section-heading">
            Discover our <strong>Partner Programmes</strong>
          </h2>

          <Row className="g-4">
            {programmes.map((item, index) => (
              <Col lg={6} key={index}>
                <Card className="partner-card border-0 h-100">
                  <div className="partner-card-content">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>

                    <p>{item.description}</p>

                    <Button variant="danger">
                      {item.button} <i class="fa-solid fa-chevron-right"></i>
                    </Button>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid partner-image"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="partner-testimonial">
        <div className="partner-testimonial-box">
          <p className="partner-testimonial-text">
            Stak by Digital Reality Corp is a
            <strong>
              game changer for data <br /> accuracy, usability and fast output.
            </strong>{" "}
            The power of this <br /> accurate and smart data capture tool has
            been used by our <br /> teams with great success.
          </p>

          <div className="partner-testimonial-footer">
            — JAMES MADDOCK, HEAD OF OCCUPIER SERVICES, EMEA, CUSHMAN &
            WAKEFIELD
          </div>
          <div className="partner-testimonial-footer">
            <img
              src={partnertestimonial}
              alt={partnertestimonial}
              className="img-fluid "
            />
          </div>
          <div className="partner-testimonial-logo">
            CUSHMAN &amp; WAKEFIELD
          </div>
        </div>
      </div>
    </>
  );
}
