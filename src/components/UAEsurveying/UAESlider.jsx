import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import UAESlider1 from "../../assets/images/UAEslider/UAEslider1.png";
import UAESlider2 from "../../assets/images/UAEslider/UAEslider2.png";
import UAESlider3 from "../../assets/images/UAEslider/UAEslider3.png";
import UAESlider4 from "../../assets/images/UAEslider/UAEslider4.png";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    image: UAESlider1,
    tag: "UAE SURVEYING SERVICES",
    title: "One Za’abeel, Dubai",
  },
  {
    image: UAESlider2,
    tag: "MEASURED BUILDING SURVEY",
    title: "Jumeirah Living Business Bay",
  },
  {
    image: UAESlider3,
    tag: "SCAN-TO-CAD",
    title: "The Royal Atlantis Resort & Residences, Dubai",
  },
  {
    image: UAESlider4,
    tag: "MEASURED BUILDING SURVEY",
    title: "Ghaf Woods, Dubai",
  },
];

export default function UAESlider() {
  return (
    <section className="project-slider-section">
      <Container fluid="xl">
        <h2 className="section-heading">
          We’ve worked on over <strong>1,000+ projects</strong> totalling over
          <br />
          <strong>300,000 units</strong>
        </h2>

        <Row className="align-items-center mb-4">
          <Col lg={8}>
            <h3 className="project-slider-subtitle">
              Trusted to deliver{" "}
              <strong>
                accuracy and <br /> reliability
              </strong>{" "}
              across portfolios
            </h3>
          </Col>

          <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
            <Button className="btn-outline-custom">
              VIEW ALL PROJECTS <span>&#8250;</span>
            </Button>
          </Col>
        </Row>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3.3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-content">
                  <span className="project-tag">{project.tag}</span>

                  <h4>{project.title}</h4>

                  <div className="project-arrow">→</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
