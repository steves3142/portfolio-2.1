import React from 'react';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0af7bc]/80">
                {projects.map((project, i) => (
                    <div key={project._id} className="w-25 h-25 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
                        <img
                            src={urlFor(project?.image).url()}
                            alt=""
                            className="transform transition-transform duration-1000 ease-out"
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#0af7bc]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>

                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map(technology => (
                                    <img
                                        className="h-10 w-10"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>

                            <p className="text-lg text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#0af7bc]/10 left-0 h-[500px] -skew-y-12" />
        </div>
    );
}

export default Projects;