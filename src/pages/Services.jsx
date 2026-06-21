import React from "react";
import Banner from "../components/services/Banner";
import ServiceInfoCard from "../components/services/ServiceInfoCard";
import AllSectorsData from "../components/home/AllSectorsData";
import AllSectorsDataCard from "../components/home/AllSectorDataCard";
import ProjectSlider from "../components/home/ProjectSlider";
import PartnerProgrammes from "../components/home/PartnerProgrammes";
import Subscribe from "../components/home/Subscribe";
import DeveloperCard from "../components/home/DeveloperCard";
import ServiceSubscribe from "../components/services/ServiceSubscribe";

function Services() {
  return (
    <>
      <Banner />
      <ServiceInfoCard />
      <AllSectorsData />
      <DeveloperCard />
      <ProjectSlider />
      <ServiceSubscribe />
    </>
  );
}

export default Services;
