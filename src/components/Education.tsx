import React from "react";

export type Education = {
  year: string;
  department?: string;
  university: string;
  field: string;
  id: number;
};

function Education() {
  const experiences: Education[] = [
    {
      year: "2021 - present",
      // department: "Computer Science",
      university: "University of Yaounde 1",
      id: 1,
      field: " Masters Degree Data Science",
    },
    {
      year: "2021 - present",
      // department: "Computer Science",
      university: "University of Yaounde 1",
      id: 2,
      field: " Bachelor Degree in Software Engineering",
    },
  ];
  return (
    <article>
      <p className="text-3xl font-medium">Education</p>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="py-5 text-justify flex flex-col gap-2"
        >
          <p className="text-neutral-500 text-md"> {experience.year} </p>
          <p className="text-2xl font-medium text-blue-500">
            {" "}
            {experience.field}{" "}
          </p>
          <p className="text-neutral-700"> {experience.university} </p>
          {experience.department && (
            <p className="text-md font-thin"> {experience.department} </p>
          )}{" "}
        </div>
      ))}
    </article>
  );
}

export default Education;
