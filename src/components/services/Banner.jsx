import React from "react";
import { Button } from "react-bootstrap";

import bannerImage from "../../assets/images/service-banner.png";

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
          <h1 className="mb-3">
            Turning Buildings into
            <strong>Digital Assets</strong>
          </h1>
          <p>Delivering speed, verified accuracy, and global compliance.</p>

          <Button variant="danger">
            Get a quete <i class="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
