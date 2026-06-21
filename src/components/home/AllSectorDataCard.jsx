import { Container, Row, Col, Card, Button } from "react-bootstrap";
import sector1 from "../../assets/images/sectordata/sector1.png";
import sector2 from "../../assets/images/sectordata/sector2.png";
import sector3 from "../../assets/images/sectordata/sector3.png";
import sector4 from "../../assets/images/sectordata/sector4.png";
import sector5 from "../../assets/images/sectordata/sector5.png";
import sector6 from "../../assets/images/sectordata/sector6.png";
import sector7 from "../../assets/images/sectordata/sector7.png";
import sector8 from "../../assets/images/sectordata/sector8.png";
// Replace with your own image
import cityImage from "../../assets/images/verifydata.png";

const sectors = [
  {
    title: "Government\nand Public Spaces",
    icon: sector1,
  },
  {
    title: "Office and\nBusiness Spaces",
    icon: sector2,
  },
  {
    title: "Industrial &\nLogistics",
    icon: sector3,
  },
  {
    title: "Retail and\nLeisure",
    icon: sector4,
  },
  {
    title: "Education",
    icon: sector5,
  },
  {
    title: "Healthcare",
    icon: sector6,
  },
  {
    title: "Transportation",
    icon: sector7,
  },
  {
    title: "Hospitality",
    icon: sector8,
  },
];

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

export default function AllSectorsDataCard() {
  return (
    <section className="all-sectors-section pb-0">
      <Container>
        <div className="sector-panel">
          <h2 className="section-heading mb-5">
            Accurate, compliant building data for
            <br />
            <strong>all sectors</strong> of real estate
          </h2>

          <Row className="g-2">
            {sectors.map((item, index) => (
              <Col xs={12} lg={3} key={index}>
                <Card className="sector-card h-100 border-0">
                  <Card.Body className="text-center">
                    <div className="sector-icon-wrapper">
                      <span className="sector-circle"></span>
                      <div className="sector-icon">
                        <img
                          src={item.icon}
                          alt="Government Authorities"
                          className="img-fluid"
                        />
                      </div>
                    </div>

                    <h6 className="sector-title mt-4">
                      {item.title.split("\n").map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
