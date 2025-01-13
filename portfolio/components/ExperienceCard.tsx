import React from 'react';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 w-[350px] sm:w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-6 sm:p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* Company Image */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center mb-6">
        <a href="#">
          <img
            src={urlFor(experience?.companyImage).url()}
            alt="Company"
            className="w-full h-full rounded-full object-cover object-center"
          />
        </a>
      </div>

      <div className="px-6 sm:px-10">
        {/* Job Title */}
        <h4 className="font-bold text-xl sm:text-2xl mt-2">
          {experience.jobTitle}
        </h4>

        {/* Technologies */}
        <div className="flex space-x-2 my-3">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>

        {/* Dates */}
        <p className="uppercase py-3 text-gray-300 text-sm sm:text-base">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        {/* Responsibilities List */}
        <ul className="list-disc space-y-4 ml-5 text-sm sm:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;