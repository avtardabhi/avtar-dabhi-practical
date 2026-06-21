import React from "react";
import { Button } from "react-bootstrap";

import bannerImage from "../../assets/images/service-banner.png";

function UAESurveyingBanner() {
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
            <strong>
              UAE Surveying <br />
              Services
            </strong>
          </h1>
          <p>
            From off-plan to title deed, we are approved and licenced to ensure
            your seamless strata registration.
          </p>

          <Button variant="danger">
            Get a quete <i class="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UAESurveyingBanner;
