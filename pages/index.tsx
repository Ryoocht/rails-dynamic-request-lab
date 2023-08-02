import type { NextPage } from "next";
import Header from "../components/header";
import HomeFinderContainer from "../components/home-finder-container";
import PropertiesByAreaImagesSectionC from "../components/properties-by-area-images-section-c";
import PropertiesByAreaFeatureCardsCo from "../components/properties-by-area-feature-cards-co";
import RentCardContainer from "../components/rent-card-container";
import RentCardContainer1 from "../components/rent-card-container1";
import RentCardContainer2 from "../components/rent-card-container2";
import FormContainer from "../components/form-container";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <HomeFinderContainer />
      <PropertiesByAreaImagesSectionC />
      <PropertiesByAreaFeatureCardsCo />
      <RentCardContainer />
      <RentCardContainer1 />
      <RentCardContainer2 />
      <FormContainer
        houseLine="/houseline1.svg"
        socialMediaLogo="/social-media-logo.svg"
        socialMediaLogo1="/social-media-logo1.svg"
        socialMediaLogo2="/social-media-logo2.svg"
        socialMediaLogo3="/social-media-logo3.svg"
        socialMediaLogo4="/social-media-logo4.svg"
      />
    </div>
  );
};

export default LandingPage;
