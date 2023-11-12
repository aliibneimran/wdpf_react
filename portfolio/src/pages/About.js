import React from "react";
import AboutUs from "../components/AboutUs";
import Skill from "../components/Skill";
import Fact from "../components/Fact";
import Testimonial from "../components/Testimonial";

export default function About() {
  return (
    <>
      <main id="main">
        <AboutUs></AboutUs>
        <Skill></Skill>
        <Fact></Fact>
        <Testimonial></Testimonial>
      </main>
    </>
  );
}
