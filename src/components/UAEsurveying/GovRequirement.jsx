import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import building from "../../assets/images/building.png";

const requirements = [
  {
    title: "Compliant",
    description:
      "Compliant with Dubai, Abu Dhabi and Ras Al Khaimah property laws, survey directions and regulations.",
  },
  {
    title: "Licensed",
    description:
      "Issued with a trade licence by the Dubai Department of Economic Development (DED) in the category of Real Estate Survey Services and Abu Dhabi Department of Economic Development.",
  },
  {
    title: "Approved",
    description:
      "Approved as a registered survey company by the Dubai Land Department (DLD), Dubai Development Authority (DDA), Dubai Silicon Oasis (DSO), Dubai International Financial Centre (DIFC), Abu Dhabi Department of Municipalities and Transport (DMT), Abu Dhabi Real Estate Centre (ADREC), and Abu Dhabi Global Market (ADGM).",
  },
];

const GovRequirement = () => {
  return (
    <section className="gov-requirement-section">
      <Container>
        <h2 className="section-heading">
          As a registered survey company, we are <strong>compliant</strong>
          <br />
          with <strong>government requirements and laws</strong>
        </h2>

        <Row className="align-items-start gy-5">
          <Col lg={4}>
            <div className="gov-requirement-left">
              <h3>
                We offer regulatory <strong>assurance</strong>
              </h3>

              <p>
                We work in partnership with the Dubai Land Department (DLD), Abu
                Dhabi City Municipality and Ras Al Khaimah Municipality to
                fulfil their requirements for the preparation of plans. We also
                ensure title strategies meet the Regulatory Agency (RERA)
                submission standards.
              </p>

              <Button variant="danger">GET A QUOTE</Button>
            </div>
          </Col>

          <Col lg={8}>
            <div className="gov-requirement-list">
              {requirements.map((item, index) => (
                <div className="gov-requirement-item" key={index}>
                  <div className="gov-requirement-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>

                  <div className="gov-requirement-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={12}>
            <div className="gov-requirement-authorities">
              <img
                src={building}
                alt="Government Authorities"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GovRequirement;
