import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Team1 from "../../assets/images/team/team1.png";
import Team2 from "../../assets/images/team/team2.png";
import Team3 from "../../assets/images/team/team3.png";
import Team4 from "../../assets/images/team/team4.png";
import Team5 from "../../assets/images/team/team5.png";
import Team6 from "../../assets/images/team/team6.png";
import Team7 from "../../assets/images/team/team7.png";
import Team8 from "../../assets/images/team/team8.png";
import Team9 from "../../assets/images/team/team9.png";
import Team10 from "../../assets/images/team/team10.png";

const teamMembers = [
  {
    name: "Bruce Wells",
    designation: "CHIEF EXECUTIVE OFFICE",
    image: Team1,
    points: [
      "20+ years' leadership in real estate technology, SaaS and customer experience.",
      "Former Asia-Pacific leader at Matterport and Procore.",
      "Senior roles at Medallia and Synovate plus advisory work with growth-stage tech companies.",
    ],
  },
  {
    name: "Majdi Ibrahim Alkhanafseh",
    designation: "REGIONAL HEAD - UAE",
    image: Team2,
    points: [
      "Distinguished Civil Engineer with UAE survey experience.",
      "Worked with Dubai Land Department for over 8 years.",
      "Specialist in strata and area registration projects.",
    ],
  },
  {
    name: "Batoul Sarraj",
    designation: "STRAT TECHNICAL MANAGER",
    image: Team3,
    points: [
      "Licensed Survey Engineer.",
      "Experience with Abu Dhabi Municipality.",
      "Architectural design and rehabilitation specialist.",
    ],
  },
  {
    name: "Melanie Ugale",
    designation: "SENIOR PROJECT MANAGER",
    image: Team4,
    points: [
      "Bachelor of Science in Architecture.",
      "Licensed engineering consultant.",
      "Extensive UAE surveying experience.",
    ],
  },
  {
    name: "Sami Husenat",
    designation: "BUSINESS DEVELOPMENT MANAGER",
    image: Team5,
    points: [
      "Civil Engineering graduate.",
      "Expert in project and survey engineering.",
      "Experienced in UAE registration and ADRES.",
    ],
  },
  {
    name: "Krishna Mohan",
    designation: "FIELD SURVEYOR",
    image: Team6,
    points: [
      "Civil Engineering graduate.",
      "Surveyed multi-storey buildings and villas.",
      "Licensed Survey Engineer with Abu Dhabi Municipality.",
    ],
  },
  {
    name: "Ravi Kumar",
    designation: "Senior Surveyor",
    image: Team7,
    points: [
      "Started career in 1991 with a Bachelor's degree in Civil Engineering",
      "Over 30 years of experience in all types of surveying, including topographic, hydrographic, and aeronautical",
      "Supervises, monitors, and provides technical guidance in all field works",
    ],
  },
  {
    name: "Haneen Almeer Ahmad",
    designation: "Project Manager",
    image: Team8,
    points: [
      "Obtained her Bachelor's Degree in Architecture from QPU in 2019",
      "Started professional journey in 2015",
      "Expertise in rehabilitation, fit-out, and surveying domains",
      "Contributed significantly to various projects with commitment to excellence",
    ],
  },
  {
    name: "Yasmin Kayali",
    designation: "Project Manager",
    image: Team9,
    points: [
      "Graduated with a Bachelor's Degree in Architecture from the American University in Dubai in 2022",
      "Commenced professional journey as an interior designer",
      "Two years of experience with expertise in design and problem-solving",
    ],
  },
  {
    name: "Hamna Nahan Janeesali",
    designation: "Junior Project Coordinator",
    image: Team10,
    points: [
      "Seasoned engineering professional with a Bachelor's degree in Civil Engineering",
      "Post Graduate Diploma in Construction Management",
      "Over 4 years of experience in construction and commercial sectors",
      "Efficiently manages technical and managerial responsibilities",
    ],
  },
];

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <Container>
        <h2 className="section-heading">
          Meet our <strong>team</strong>
        </h2>

        <p className="our-team-description">
          Our licensed surveyors, architects, and engineers combine IPMS
          expertise with UAE project experience to solve complex property
          challenges with confidence.
        </p>

        <div className="text-center mb-5">
          <Button variant="danger">CONTACT THE TEAM</Button>
        </div>

        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col lg={6} key={index}>
              <div className="our-team-card">
                <div className="our-team-content">
                  <h3>{member.name}</h3>

                  <span>{member.designation}</span>

                  <div className="our-team-line"></div>

                  <ul>
                    {member.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="our-team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeam;
