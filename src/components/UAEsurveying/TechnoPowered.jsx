import React from "react";
import { Container, Button } from "react-bootstrap";
import TechnoPower from "../../assets/images/techpower.png";

const TechnoPowered = () => {
  return (
    <section className="techno-powered">
      <Container>
        <div className="techno-powered-header text-center">
          <h2 className="section-heading">
            <strong>Technology-powered</strong> surveying.
            <br />
            <strong>Verified</strong> digital assets
          </h2>

          <p className="techno-powered-description">
            Stak is a leading spatial data platform designed for commercial and
            industrial real estate portfolios that transforms your physical
            buildings into verified digital assets.
            <br />
            Delivered faster, at scale and without compromise.
          </p>

          <Button variant="danger">GET A QUOTE</Button>
        </div>

        <div className="techno-powered-image-wrapper">
          <img
            src={TechnoPower}
            alt="Technology Powered Surveying"
            className="img-fluid"
          />
          <button className="play-btn">
            <span>
              <i class="fa-solid fa-play"></i>
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TechnoPowered;
