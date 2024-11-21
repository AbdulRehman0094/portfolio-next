import React from "react";
import HeroSection from "./components/HeroSection";
import GithubProjects from "./components/GithubProjects";
import SkillsSection from "./components/Skills";
import WorkExperince from "./components/WorkExperience";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkExperince />
      <GithubProjects />
      <SkillsSection />
    </div>
  );
};

export default Home;
