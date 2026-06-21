import { Container, Button } from "react-bootstrap";

import previewImage from "../../assets/images/teamcollaborate.png";
// import logo from "../../assets/images/strat-logo.svg";

const TeamCollaborates = () => {
  return (
    <section className="team-collaborates-section">
      <Container>
        <h2 className="section-heading">
          The Strat team <strong>collaborates</strong> with our clients’ legal
          and project consultants to ensure <strong>success</strong>
        </h2>

        <div className="team-collaborates-card">
          <div className="team-collaborates-image-wrapper">
            <img
              src={previewImage}
              alt="Strat Preview"
              className="team-collaborates-image"
            />

            <button className="team-collaborates-play-btn">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamCollaborates;
