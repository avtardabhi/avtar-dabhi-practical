import React from "react";

import project1 from "../../assets/images/project/project1.png";
import project2 from "../../assets/images/project/project2.png";
import project3 from "../../assets/images/project/project3.png";
import project4 from "../../assets/images/project/project4.png";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Measured Building Survey",
      description:
        "RICS-compliant measurements (NIA, GIA & IMPS), floor plans, professional photography, and immersive 360° virtual tours, creating verified digital assets that help you market, manage, and understand your property with confidence.",
    },

    {
      image: project2,
      title: "Scan-to-CAD",
      description:
        "Scan-to-CAD services that turn 3D scans into accurate, ready-to-use 2D floor plans, sections, elevations, lease plan and more.",
    },

    {
      image: project3,
      title: "Scan-to-BIM",
      description:
        "Scan-to-BIM services that turn 3D scans into accurate, fully detailed 3D BIM models and digital twins, including architectural, structural, and MEP elements.",
      tags: ["ASIA", "EUROPE", "MIDDLE EAST", "UK"],
    },

    {
      image: project4,
      title: "UAE Surveying Services",
      description:
        "We are an approved third-party surveyor, specialising in off-plan (Qood, as-planned) and completion (title deed, as-built) surveys. Our strata and real estate expertise ensures faster, compliant approvals for developers and owners.",
      tags: ["MIDDLE EAST"],
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-heading">
          Empowering you with
          <span> fast, verified data </span>
          for
          <br />
          <span>smarter, more confident project delivery</span>
        </h2>

        <div className="row g-4">
          {projects.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="project-card">
                <img src={item.image} alt={item.title} />

                <div className="project-body">
                  <div className="tags">
                    <span>ASIA</span>
                    <span>EUROPE</span>
                    <span>MIDDLE EAST</span>
                    <span>UK</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button className="project-btn">
                    FIND OUT MORE
                    <span>›</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
