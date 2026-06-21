import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/css/footer.css";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        {/* Top */}
        <div className="footer-top">
          <img src={logo} alt="Logo" className="footer-logo" />

          <button className="footer-scroll-top">▲</button>
        </div>

        {/* Links */}
        <Row className="footer-links-row gy-5">
          <Col lg={2} md={4} sm={6}>
            <h6>SERVICES</h6>
            <ul>
              <li>Measured Building Survey</li>
              <li>Scan-to-CAD</li>
              <li>Scan-to-BIM</li>
              <li>UAE Surveying Services</li>
              <li>Spatial Intelligence Platform</li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6>CUSTOMERS</h6>
            <ul>
              <li>Architects</li>
              <li>Facilities Managers</li>
              <li>Asset Managers</li>
              <li>Developers</li>
              <li>Property Owners</li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6>SECTORS</h6>
            <ul>
              <li>Government</li>
              <li>Office</li>
              <li>Healthcare</li>
              <li>Industrial</li>
              <li>Retail</li>
              <li>Education</li>
              <li>Transportation</li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6>PRODUCTS</h6>
            <ul>
              <li>Stak</li>
              <li>Strat</li>
              <li>Spatial-iQ</li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6>OUR COMPANY</h6>
            <ul>
              <li>Projects</li>
              <li>Technology</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </Col>

          <Col lg={2} md={4} sm={6}>
            <h6>CONNECT</h6>

            <ul>
              <li>Contact Us</li>
              <li>LinkedIn</li>
            </ul>

            <Button variant="danger" className="mt-4">
              GET A QUOTE <i class="fa-solid fa-chevron-right"></i>
            </Button>
          </Col>
        </Row>

        {/* Offices */}
        <Row className="footer-office-row gy-4">
          <Col lg={3} md={6}>
            <h6>● UK</h6>
            <p>
              Office 202, Cubo Soho, Ilona Rose House, Manette Street, London,
              W1D 4AL.Digital Reality Corp Ltd is registered in England and
              Wales number 09696838. VAT number 222755223.
            </p>
          </Col>

          <Col lg={3} md={6}>
            <h6>● UAE</h6>
            <p>
              Office G64, Building 17, Dubai Internet City, UAE. Call +971 (4)
              554 3747. Digital Reality FZ-LLC is registered in the UAE with
              commercial license number 99164.
            </p>
          </Col>

          <Col lg={3} md={6}>
            <h6>● SINGAPORE</h6>
            <p>150 Beach Road, #35-00 Gateway West, Singapore 189720.</p>
          </Col>

          <Col lg={3} md={6}>
            <h6>● USA</h6>
            <p>Chicago, Illinois.</p>
          </Col>
        </Row>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© 2025 Logoipsum Ltd</span>

          <div className="footer-bottom-links">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
