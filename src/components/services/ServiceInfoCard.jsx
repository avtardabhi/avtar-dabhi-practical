import { Container, Row, Col, Button } from "react-bootstrap";

import ServiceInfo1 from "../../assets/images/serviceinfo/serviceinfo1.png";
import ServiceInfo2 from "../../assets/images/serviceinfo/serviceinfo2.png";
import ServiceInfo3 from "../../assets/images/serviceinfo/serviceinfo3.png";
import ServiceInfo4 from "../../assets/images/serviceinfo/serviceinfo4.png";

const serviceData = [
  {
    id: 1,
    title: "Measured Building Survey",
    subtitle: "VERIFIED. VISUAL. RICS-COMPLIANT.",
    description:
      "Our measured building surveys deliver accuracy you can trust. From RICS-compliant floor plans to high-quality photography and immersive 360° virtual tours, we create a single verified dataset that helps you understand and showcase your property with confidence.",
    image: ServiceInfo1,
    imageLeft: false,
  },
  {
    id: 2,
    title: "Scan-to-CAD",
    subtitle: "ACCURATE. DETAILED. RELIABLE.",
    description:
      "We transform 3D scans into detailed 2D CAD drawings, delivering accurate floor plans, sections, and elevations derived from verified point cloud data. Our Scan-to-CAD service provides a precise digital representation of your building, ready for design, planning, and documentation.",
    image: ServiceInfo2,
    imageLeft: true,
  },
  {
    id: 3,
    title: "Scan-to-BIM",
    subtitle: "INTELLIGENT. DATA-DRIVEN. SCALABLE.",
    description:
      "Using advanced laser scanning and BIM technology, we create high-accuracy 3D models with full architectural, structural, and MEP detail. Built from verified point cloud data, our models streamline design coordination and enhance lifecycle asset management.",
    image: ServiceInfo3,
    imageLeft: false,
  },
  {
    id: 4,
    title: "UAE Surveying Services",
    subtitle: "COMPLIANT. LICENSED. APPROVED.",
    description:
      "We are an approved third-party surveyor specialising in off-plan (Oqood, as-planned) and completion (title deed, as-built) surveys. Our strata and real estate expertise ensures faster, compliant approvals for developers and owners.",
    image: ServiceInfo4,
    imageLeft: true,
  },
];

const ServiceInfoCard = () => {
  return (
    <section className="service-info-section p-0">
      <Container>
        {serviceData.map((service) => (
          <Row key={service.id} className="align-items-center service-info-row">
            {service.imageLeft ? (
              <>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="service-info-section-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-info-section-image img-fluid"
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="service-info-section-content">
                    <h2 className="service-info-section-title">
                      {service.title}
                    </h2>

                    <p className="service-info-section-subtitle">
                      {service.subtitle}
                    </p>

                    <p className="service-info-section-description">
                      {service.description}
                    </p>

                    <Button variant="danger">
                      LEARN MORE <i class="fa-solid fa-chevron-right"></i>
                    </Button>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="service-info-section-content">
                    <h2 className="service-info-section-title">
                      {service.title}
                    </h2>

                    <p className="service-info-section-subtitle">
                      {service.subtitle}
                    </p>

                    <p className="service-info-section-description">
                      {service.description}
                    </p>

                    <Button variant="danger">
                      LEARN MORE <i class="fa-solid fa-chevron-right"></i>
                    </Button>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="service-info-section-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-info-section-image img-fluid"
                    />
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default ServiceInfoCard;
