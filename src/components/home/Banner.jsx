import React from "react";
import { Button } from "react-bootstrap";

import bannerImage from "../../assets/images/banner-bg.png";

function Banner() {
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
          <h1>
            <strong>
              Technology-
              <br />
              Powered
            </strong>

            <span className="ps-2">
              Surveying,
              <br />
              Verified Digital
              <br />
              Assets
            </span>
          </h1>

          <Button variant="danger">
            Get a quete <i class="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
