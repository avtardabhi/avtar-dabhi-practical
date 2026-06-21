import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProjectSlider1 from "../../assets/images/project-slider/projectslider1.png";
import ProjectSlider2 from "../../assets/images/project-slider/projectslider2.png";
import ProjectSlider3 from "../../assets/images/project-slider/projectslider3.png";
import ProjectSlider4 from "../../assets/images/project-slider/projectslider4.png";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    image: ProjectSlider1,
    tag: "UAE SURVEYING SERVICES",
    title: "Palm Beach Towers, Dubai",
  },
  {
    image: ProjectSlider2,
    tag: "MEASURED BUILDING SURVEY",
    title: "Grosvenor HQ, London",
  },
  {
    image: ProjectSlider3,
    tag: "SCAN-TO-CAD",
    title: "1 Bridewell Street, Bristol, UK",
  },
  {
    image: ProjectSlider4,
    tag: "MEASURED BUILDING SURVEY",
    title: "TIDE Bankside",
  },
];

export default function ProjectSlider() {
  return (
    <section className="project-slider-section">
      <Container fluid="xl">
        <h2 className="section-heading">
          We've digitised <strong>180,000+ spaces</strong>, totalling
          <br />
          <strong>390+ million</strong> square feet
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
