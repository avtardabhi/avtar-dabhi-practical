import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import optionalImage from "../../assets/images/optionalservice.png";
import optionalservice1 from "../../assets/images/optionservices/optionservice1.png";
import optionalservice2 from "../../assets/images/optionservices/optionservice2.png";
import optionalservice3 from "../../assets/images/optionservices/optionservice3.png";
import optionalservice4 from "../../assets/images/optionservices/optionservice4.png";
import optionalservice5 from "../../assets/images/optionservices/optionservice5.png";
import optionalservice6 from "../../assets/images/optionservices/optionservice6.png";

const services = [
  {
    id: 1,
    title: "Initial Area Calculation",
    description:
      "Accurate preliminary area calculations to support planning, approvals, and project feasibility assessments.",
    icon: optionalservice1,
  },
  {
    id: 2,
    title: "SPA plans (unit site plans)",
    description:
      "Detailed SPA unit site plans prepared to meet authority and developer requirements.",
    icon: optionalservice2,
  },
  {
    id: 3,
    title: "Marketing plans",
    description:
      "High-quality marketing plans designed for brochures, sales presentations, and property listings.",
    icon: optionalservice3,
  },
  {
    id: 4,
    title: "Area verification",
    description:
      "Independent verification of built-up areas using industry-standard measurement practices.",
    icon: optionalservice4,
  },
  {
    id: 5,
    title: "Master community registration",
    description:
      "Preparation of documentation and plans required for master community registration processes.",
    icon: optionalservice5,
  },
  {
    id: 6,
    title: "Plots demarcation",
    description:
      "Professional plot demarcation services for land identification and project execution.",
    icon: optionalservice6,
  },
];

const OptionalServices = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="optional-services-section">
      <Container>
        <h2 className="section-heading">
          <strong>Optional</strong> services we offer
        </h2>

        <Row className="align-items-start g-5">
          <Col lg={7}>
            <div className="optional-services-list">
              {services.map((service) => (
                <div className="optional-services-item" key={service.id}>
                  <div className="optional-services-header">
                    <div className="optional-services-title-wrap">
                      <img
                        src={service.icon}
                        alt="logo"
                        style={{ height: "35px" }}
                      />

                      <h4>{service.title}</h4>
                    </div>

                    <button
                      className="optional-services-toggle"
                      onClick={() => toggleItem(service.id)}
                    >
                      <i
                        className={`fa-solid ${
                          activeId === service.id ? "fa-minus" : "fa-plus"
                        }`}
                      ></i>
                    </button>
                  </div>

                  {activeId === service.id && (
                    <div className="optional-services-body">
                      <p>{service.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>

          <Col lg={5}>
            <div className="optional-services-image-wrapper">
              <img
                src={optionalImage}
                alt="Optional Services"
                className="optional-services-image img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OptionalServices;
