import React from "react";
import { Button } from "react-bootstrap";

import bannerImage from "../../assets/images/uaebanner.png";

function UAESurveyingBanner() {
  return (
    <section className="uae-survey">
      <div className="uae-survey-image">
        <img src={bannerImage} alt="UAE Surveying Services" />

        <div className="uae-survey-card">
          <h2>
            UAE Surveying
            <br />
            Services
          </h2>

          <p>
            From off-plan to title deed, we are approved and licensed to ensure
            your seamless strata registration.
          </p>

          <button>GET IN TOUCH</button>
        </div>
      </div>
    </section>
  );
}

export default UAESurveyingBanner;
