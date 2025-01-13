import React from 'react';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly max-w-7xl mx-auto px-6 py-20">
            {/* Heading Section - Sticky for larger screens */}
            {/* <h3 className="uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl md:text-3xl 
                md:sticky md:top-0 md:mt-0 mt-12 sm:mt-20 md:mt-32">
                About
            </h3> */}

            {/* Profile Image Section */}
            <img
                src={urlFor(pageInfo?.profilePic).url()}
                className="w-40 h-40 mb-6 sm:mb-0 rounded-full object-cover md:w-64 md:h-64 xl:w-[500px] xl:h-[600px] flex-shrink-0"
                alt="Profile Picture"
            />

            {/* Text Content Section with added padding */}
            <div className="space-y-6 px-6 md:px-10 md:space-y-8 mt-10 sm:mt-16">
                <h4 className="text-3xl sm:text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#0af7bc]/50">little</span>{" "}
                    background
                </h4>
                <p className="text-base sm:text-lg leading-relaxed">{pageInfo?.backgroundInformation}</p>
            </div>
        </div>
    );
}