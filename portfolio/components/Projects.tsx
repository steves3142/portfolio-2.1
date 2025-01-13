import React from 'react';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-20 px-6">
            {/* Heading Section */}
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl sm:text-3xl mb-12">
                Projects
            </h3>

            {/* Projects Section */}
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0af7bc]/80">
                {projects.map((project, i) => (
                    <div
                        key={project._id}
                        className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-6 sm:p-10 md:p-12"
                    >
                        <img
                            src={urlFor(project?.image).url()}
                            alt={project?.title}
                            className="transform transition-transform duration-1000 ease-out"
                        />

                        <div className="space-y-6 px-4 sm:px-6 md:px-10 max-w-6xl">
                            <h4 className="text-2xl sm:text-3xl font-semibold text-center">
                                <span className="underline decoration-[#0af7bc]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>

                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map((technology) => (
                                    <img
                                        className="h-8 w-8 sm:h-10 sm:w-10"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>

                            <p className="text-sm sm:text-base text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Background Decoration */}
            <div className="w-full absolute top-[30%] bg-[#0af7bc]/10 left-0 h-[500px] -skew-y-12" />
        </div>
    );
}

export default Projects;
