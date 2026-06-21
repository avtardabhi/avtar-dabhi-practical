import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Replace with your own image
import cityImage from "../../assets/images/verifydata.png";

const processData = [
  {
    title: "Capture",
    text: "We use advanced 3D scanning to capture every detail of your building or project site.",
  },
  {
    title: "Process",
    text: "Our platform transforms the scan into structured point clouds and accurate digital models.",
  },
  {
    title: "Verify",
    text: "Every deliverable is quality checked against standards and local regulations.",
  },
  {
    title: "Deliver",
    text: "Receive reports, BIM models and digital twins with consistency and speed.",
  },
];

export default function AllSectorsData() {
  return (
    <section className="all-sectors-section">
      <Container>
        <Row className="align-items-center  g-5">
          <Col lg={8}>
            <img
              src={cityImage}
              alt="Verified Data"
              className="img-fluid rounded-4"
            />
          </Col>

          <Col lg={4}>
            <h2 className="verified-title">
              Turning Spaces
              <br />
              into <strong>Verified Data</strong>
            </h2>

            <p className="verified-text">
              Our technology-driven approach transforms how property data is
              captured and delivered, giving complete confidence in every
              measurement and decision.
            </p>

            <Button variant="danger">
              GET STARTED TODAY <i class="fa-solid fa-chevron-right"></i>
            </Button>
          </Col>
        </Row>

        <Row className="mt-5 g-4">
          {processData.map((item) => (
            <Col md={6} lg={3} key={item.title}>
              <div className="process-item">
                <div className="process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
