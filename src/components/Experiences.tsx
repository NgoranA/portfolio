import React from "react";

export type ExperienceEdu = {
  year: string;
  role: string;
  company: string;
  details: string;
  id: number;
};

function Experiences() {
  const experiences: ExperienceEdu[] = [
    {
      year: "October 2023 - Present",
      role: "Support Staff and Nodejs Tutor",
      company: "Rebase Code Camp",
      id: 1,
      details:
        "A student guide and Teaching Nodejs Fundamentals",
    },
    {
      year: "2021 - 2023",
      role: "Frontend Developer",
      company: "InfoLab Technologies",
      id: 1,
      details:
        "Building Laundry Management System for Cameroon Laundry Businesses built with Next.js, Reactjs, Prime-react, Prime-flex, Typescript and Django",
    },
    {
      year: "2020 - present",
      role: "Developer",
      company: "Freelancing ",
      id: 2,
      details:
        "Building Customer based projects and Devoting to continuous Learning, Growth and Skill uplifting",
    },
  ];
  return (
    <article>
      <p className="text-3xl font-medium">Experience</p>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="py-5 text-justify flex flex-col gap-2"
        >
          <p className="text-neutral-500 text-md"> {experience.year} </p>
          <p className="text-2xl font-medium text-blue-500">
            {" "}
            {experience.role}{" "}
          </p>

          <p className="text-neutral-700"> {experience.company} </p>
          <p className="text-md font-thin"> {experience.details} </p>
        </div>
      ))}
    </article>
  );
}

export default Experiences;
