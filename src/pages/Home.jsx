import React from "react";
import WelcomeNewHome from "../components/home/WelcomeNewHome";
import Banner from "../components/home/Banner";
import BrandPartner from "../components/home/BrandPartner";
import Projects from "../components/home/Project";
import StackHub from "../components/home/StackHub";
import DeveloperCard from "../components/home/DeveloperCard";
import AllSectorsData from "../components/home/AllSectorsData";
import PartnerProgrammes from "../components/home/PartnerProgrammes";
import ProjectSlider from "../components/home/ProjectSlider";
import Subscribe from "../components/home/Subscribe";
import AllSectorsDataCard from "../components/home/AllSectorDataCard";

function Home() {
  return (
    <>
      <WelcomeNewHome />
      <Banner />
      <BrandPartner />
      <Projects />
      <StackHub />
      <DeveloperCard />
      <AllSectorsDataCard />
      <AllSectorsData />
      <PartnerProgrammes />
      <ProjectSlider />
      <Subscribe />
    </>
  );
}
export default Home;
