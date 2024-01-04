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
      year: "2021 - present",
      role: "Frontend Developer",
      company: "InfoLab Technologies",
      id: 1,
      details:
        "LLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      year: "2020 - present",
      role: "Fullstack Developer",
      company: "InfoLab Technologies",
      id: 2,
      details:
        "LLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatLorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
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
