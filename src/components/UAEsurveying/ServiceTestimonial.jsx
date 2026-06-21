import { Container, Row, Col, Card, Button } from "react-bootstrap";

import referralImage from "../../assets/images/partner1.png";
import captureImage from "../../assets/images/partner2.png";

export default function ServiceTestimonial() {
  return (
    <>
      <div className="partner-testimonial">
        <div className="partner-testimonial-box">
          <p className="partner-testimonial-text">
            Great working with the <br />
            Strat team, thank you for all <br />
            your <strong>diligence and commitment.</strong> <br />
            Thank you also to the team at DLD.
          </p>

          <div className="partner-testimonial-footer">
            — MATTHEW SHAW, GENERAL MANAGER
          </div>

          <div className="partner-testimonial-logo">
            CUSHMAN &amp; WAKEFIELD
          </div>
        </div>
      </div>
    </>
  );
}
