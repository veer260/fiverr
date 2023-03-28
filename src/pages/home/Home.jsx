import React from "react";
import ProjectCard from "../../components/card/ProjectCard";
import Featured from "../../components/featured/Featured";
import FiverrBus from "../../components/fiverrBus/FiverrBus";
import ProjectSlider from "../../components/projectSlider/ProjectSlider";
import { Slider } from "../../components/slider/Slider";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import VideoSection from "../../components/videoSection/VideoSection";

const Home = () => {
  return (
    <div>
      <Featured />

      <TrustedBy />

      <Slider />
      <VideoSection />
      <FiverrBus />
      <ProjectSlider />
    </div>
  );
};

export default Home;
