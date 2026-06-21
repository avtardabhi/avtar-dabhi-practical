import React from "react";
import UAESurveyingBanner from "../components/UAEsurveying/UAESurveyingBanner";
import TeamCollaborates from "../components/UAEsurveying/TeamCollaborates";
import MainServices from "../components/UAEsurveying/MainServices";
import OptionalServices from "../components/UAEsurveying/OptionalServices";
import LeadingDeveloper from "../components/UAEsurveying/LeadingDeveloper";
import GovRequirement from "../components/UAEsurveying/GovRequirement";
import OurTeam from "../components/UAEsurveying/OurTeam";
import TechnoPowered from "../components/UAEsurveying/TechnoPowered";
import ServiceTestimonial from "../components/UAEsurveying/ServiceTestimonial";
import QuoteCard from "../components/UAEsurveying/QuoteCard";
import UAESlider from "../components/UAEsurveying/UAESlider";

function UAESurveyingServices() {
  return (
    <>
      <UAESurveyingBanner />
      <TeamCollaborates />
      <MainServices />
      <OptionalServices />
      <LeadingDeveloper />
      <GovRequirement />
      <OurTeam />
      <TechnoPowered />
      <ServiceTestimonial />
      <UAESlider />
      <QuoteCard />
    </>
  );
}
export default UAESurveyingServices;
