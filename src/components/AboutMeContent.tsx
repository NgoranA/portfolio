import React from "react";
import Experiences from "./Experiences";
import Education from "./Education";

function AboutMeContent() {
  return (
    <section className="text-neutral-50 flex flex-col gap-5 md:gap-20 md:w-8/12">
      <div className="flex flex-col gap-8">
        <p className="text-3xl font-medium">About Me</p>
        <p className="text-md font-thin text-justify tracking-wider">
          A passionate and results-driven Fullstack developer with a proven
          track record in delivering impactful projects. My journey in web
          development has been marked by a diverse range of experiences, from
          spearheading the development of customer-centric features in
          Saas platforms to optimizing performance using React and
          JavaScript.
        </p>
        <p className="font-thin text-justify tracking-wider">
          I thrive on solving complex challenges and am deeply committed to
          creating seamless user experiences. With a focus on collaboration and
          effective communication, I&apos;ve honed my skills in fullstack
          development, consistently achieving results that positively impact
          user satisfaction and business metrics.
        </p>
      </div>
      <Experiences />
      <Education />
    </section>
  );
}

export default AboutMeContent;
