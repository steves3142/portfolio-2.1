import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from '../sanity'; // Ensure this import is correct and works
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, My Name's Steve`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    // Check pageInfo data
    // console.log("Page Info:", pageInfo); 

    const imageUrl = pageInfo?.heroImage ? urlFor(pageInfo.heroImage).url() : '';
    // console.log("Hero Image URL:", imageUrl);

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            {imageUrl && (
                <img
                    className="relative rounded-full h-32 w-32 mx-auto object-cover"
                    src={imageUrl}
                    alt="Hero Image"
                />
            )}
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                {pageInfo?.role}
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#0af7bc" />
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton relative z-10">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton relative z-10">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton relative z-10">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton relative z-10">Projects</button>
                </Link>
            </div>
        </div>
    );
}