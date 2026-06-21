import { Container, Row, Col, Card, Button } from "react-bootstrap";

import mainservice1 from "../../assets/images/mainservices/mainservice1.png";
import mainservice2 from "../../assets/images/mainservices/mainservice2.png";
import mainservice3 from "../../assets/images/mainservices/mainservice3.png";

const services = [
  {
    id: 1,
    image: mainservice1,
    title: "DLD submissions",
    subtitle: "(Oqood, Final, and EJARI)",
  },
  {
    id: 2,
    image: mainservice2,
    title: "DDA and DSO Third-party survey",
    subtitle: "(GFA/BUA)",
  },
  {
    id: 3,
    image: mainservice3,
    title: "Abu Dhabi submissions",
    subtitle: "(ADREC/ADGM)",
  },
];

const MainServices = () => {
  return (
    <section className="main-services-section">
      <Container>
        <h2 className="section-heading">
          <strong>Discover</strong> our main <strong>services</strong>
        </h2>

        <p className="main-services-description">
          At Strat, we pride ourselves on the caliber of our team. Our engineers
          bring decades of experience to every project, combining technical
          expertise with professionalism to deliver accurate, compliant, and
          timely survey results.
        </p>

        <div className="text-center mb-5">
          <Button variant="danger">GET A QUOTE</Button>
        </div>

        <p className="main-services-tagline">
          DELIVERING ACCURATE, TIMELY AND COMPLIANT SURVEY RESULTS.
        </p>

        <Row className="g-4">
          {services.map((service) => (
            <Col lg={4} md={6} key={service.id}>
              <Card className="main-services-card h-100">
                <Card.Img
                  variant="top"
                  src={service.image}
                  className="main-services-image"
                />

                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MainServices;
