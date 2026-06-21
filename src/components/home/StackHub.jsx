import React from "react";
import stackPreview from "../../assets/images/stakhub.png";
import { Button } from "react-bootstrap";

function StackHub() {
  return (
    <section className="stack-hub">
      <div className="container">
        <h2 className="section-heading">
          Through <strong>Stak Hub,</strong> explore and manage your
          <br />
          spatial data <strong>effortlessly.</strong>
        </h2>
        <div className="stack-content">
          <p>
            Stak Hub brings all your verified spatial data together in one
            secure, intuitive platform. Access floor plans, CAD, BIM,
            photography and digital twins instantly — all produced through DRC’s
            proprietary technology. With every asset structured, standardised
            and easy to navigate, you gain complete visibility and control
            across your portfolio.
          </p>

          <div className="stack-action">
            {/* <CommonButton>GET A QUOTE</CommonButton> */}

            <Button variant="danger">
              Get a quete <i class="fa-solid fa-chevron-right"></i>
            </Button>
          </div>
        </div>

        <div className="stack-preview">
          <img src={stackPreview} alt="Stack Hub" />

          <button className="play-btn">
            <span>
              <i class="fa-solid fa-play"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StackHub;
