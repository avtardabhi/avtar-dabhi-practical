import React from "react";
import { Button } from "react-bootstrap";

import bannerImage from "../../assets/images/techbanner.png";

function TechnologyBanner() {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="banner-overlay"></div>

      <div className="container">
        <div className="banner-content">
          <h1 className="mb-3">
            <strong>Technology</strong>
          </h1>
          <p>
            We combine operational innovation, spatial technology, and
            next-generation artificial intelligence to generate verified digital
            twins of commercial real estate with unparalleled speed and
            accuracy.
          </p>

          <Button variant="danger">
            Get a quete <i class="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TechnologyBanner;
