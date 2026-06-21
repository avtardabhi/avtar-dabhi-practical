import React, { useState } from "react";

import vertexIcon from "../../assets/images/software/softwareicon1.png";
import aiIcon from "../../assets/images/software/softwareicon2.png";
import floorplanIcon from "../../assets/images/software/softwareicon3.png";
import spatialIcon from "../../assets/images/software/softwareicon4.png";
import dimensionsIcon from "../../assets/images/software/softwareicon5.png";
import dpdashIcon from "../../assets/images/software/softwareicon6.png";
import stakhubIcon from "../../assets/images/software/softwareicon7.png";
import VertexModal from "../../assets/images/vertexmodal.png";
import { Button, Modal } from "react-bootstrap";

function ProprietarySoftware() {
  const [showModal, setShowModal] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const softwareData = {
    top: {
      icon: vertexIcon,

      title: "Vertex",

      subtitle: "INTUITIVE. ACCURATE DATA CAPTURE.",

      description:
        "Vertex is our bespoke development tablet and mobile app. Vertex guides accurate real time data capture with room-level metadata and uploads clean organised data to the cloud for fast AI processing.",
    },

    ai: {
      icon: aiIcon,

      title: "AI",

      subtitle: "THE SPATIAL INTELLIGENCE BEHIND DIMENSIONS.",

      description:
        "DRC’s AI Engine transforms raw scans into clean, labelled building models using semantic segmentation and computer vision. It delivers accurate measurements, room detection and editable geometry ready for CAD, BIM and digital twins.",
    },

    branches: [
      {
        icon: floorplanIcon,

        title: "Floorplan automation",

        subtitle: "SEMANTIC INTELLIGENCE",

        description:
          "Semantic understanding of floor plans automates the creation of structured information and delivers accurate digital data.",
      },

      {
        icon: spatialIcon,

        title: "Spatial Insights",

        subtitle: "SEMANTIC INTELLIGENCE",

        description:
          "The same semantic layer powers spatial automation, analysis and insights across your projects.",
      },
    ],

    timeline: [
      {
        icon: dimensionsIcon,

        title: "Dimensions",

        subtitle: "SPATIAL INTELLIGENCE ENGINE",

        description:
          "Dimensions combines point cloud and floorplan editing tools, transforming reality capture into structured digital assets.",
      },

      {
        icon: dpdashIcon,

        title: "DP Dash",

        subtitle: "PRODUCTION INTELLIGENCE CENTRE.",

        description:
          "DP Dash centralises scheduling, task tracking and quality checks, giving teams real-time visibility and control.",
      },

      {
        icon: stakhubIcon,

        title: "Stak Hub",

        subtitle: "YOUR CENTRAL SOURCE OF TRUTH.",

        description:
          "Stak Hub brings all your verified spatial data together in one secure, intuitive platform.",
      },
    ],
  };

  const openModal = (item) => {
    setActiveItem(item);

    setShowModal(true);
  };

  const Card = ({ data }) => (
    <div className="sp-card">
      <i
        class="fa-solid fa-circle-plus sp-plus"
        onClick={() => openModal(data.vertex)}
      ></i>

      <h3>{data.title}</h3>

      <span>{data.subtitle}</span>

      <p>{data.description}</p>
    </div>
  );

  const Icon = ({ data, small }) => (
    <div className={`sp-circle ${small ? "small" : ""}`}>
      <img src={data.icon} alt={data.title} />
    </div>
  );

  return (
    <>
      <section className="software-proprietary">
        <h2 className="section-heading">
          <strong>Understanding</strong> our{" "}
          <strong>proprietary software</strong>
          <br />
          and how our innovation can <strong>benefit</strong>you
        </h2>
        <div className="sp-wrapper">
          <div className="sp-line"></div>

          {/* Vertex */}

          <div className="sp-item">
            <Icon data={softwareData.top} />

            <Card data={softwareData.top} />
          </div>

          {/* AI */}

          <div className="sp-item ai-item">
            <Icon data={softwareData.ai} />

            <Card data={softwareData.ai} />
          </div>

          {/* Branch Items */}

          <div className="sp-branch">
            {softwareData.branches.map((item, index) => (
              <div className="sp-branch-item" key={index}>
                <Icon data={item} small />

                <Card data={item} />
              </div>
            ))}
          </div>

          {/* Bottom Timeline */}

          {softwareData.timeline.map((item, index) => (
            <div className="sp-item" key={index}>
              <Icon data={item} />

              <Card data={item} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="danger">
            Get a quete <i class="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </section>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <div className="vertex-modal">
          <div className="vertex-modal-image">
            <img src={VertexModal} alt="Vertex" />
          </div>

          <div className="vertex-modal-content">
            <h2>Vertex</h2>

            <span>INTUITIVE. ACCURATE DATA CAPTURE.</span>

            <p>
              Vertex is our bespoke development tablet and mobile app, an
              Android data capture application for Digital Surveyors. With
              Vertex, we manage images, scans and photospheres. Vertex connects
              with the BLK2GO LiDAR scanning device, and uploads data to our AWS
              cloud native architecture.
            </p>

            <p>
              A core strength of Vertex is how it ties imagery and metadata
              directly to each room. Every scan, panorama and movement through
              the space is tagged with location-aware metadata, where it was
              taken, what room it belongs to, and what’s already been covered.
            </p>

            <p>
              On the imagery side, Vertex is designed for clarity and
              consistency, not just convenience. When the Digital Surveyor
              captures a photosphere, Vertex doesn’t just store a single
              exposure, it takes multiple exposures and feeds them into a
              backend pipeline that fuses them into a high-dynamic-range image.
            </p>

            <p>
              Efficiency on site is another area where Vertex shines. Because it
              understands the space in real time, it can guide the Digital
              Surveyor through an optimum capture path, reducing redundant
              passes and helping avoid missed corners.
            </p>

            <p>
              All of this intelligence is wrapped in a pipeline that’s
              engineered for speed and reliability. As capture progresses, data
              is compressed and packaged in a way that preserves its structure,
              rooms, metadata, images and point clouds.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProprietarySoftware;
