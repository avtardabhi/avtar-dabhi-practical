import React from "react";
import pupil from "../../assets/images/pupil.png";
import stak from "../../assets/images/stak.png";
import strat from "../../assets/images/strat.png";

function WelcomeNewHome() {
  return (
    <div className="welcome-new-home">
      <div className="welcome-content">
        <span>Welcome to the new home of</span>

        <span className="brand pupi">
          <img src={pupil} alt="pupil" />
        </span>

        <span className="divider">|</span>

        <span className="brand">
          <span className="stak-icon">
            <img src={stak} alt="stak" />
          </span>
          stak
        </span>

        <span className="divider">|</span>

        <span className="brand">
          <span className="strat-icon">
            {" "}
            <img src={strat} alt="strat" />
          </span>
          strat
        </span>

        <span className="read-more">
          Read more <a href="#">here.</a>
        </span>
      </div>
    </div>
  );
}

export default WelcomeNewHome;
