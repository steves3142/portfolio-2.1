import React, { useEffect, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
// import { Social } from "../typings";

// type Props = {
//     socials: Social[]
// }

export default function Header() {
    const [isClient, setIsClient] = useState(false);

    //Client side rendering only to correct issue with SocialIcon
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <div className="flex flex-row items-center">
                {/* Render Social Icons only on the client */}
                <a href="https://x.com/Steves314" target="" rel="">
                    <FaXTwitter size={50} />
                </a>
                <a href="https://www.linkedin.com/in/steve-susanibar" target="" rel="">
                    <FaLinkedin size={50} />
                </a>

            </div>


            {/* <Link href="#contact">
                <div className="flex flex-row items-center text-gray-300 cursor-pointer">
                        <SocialIcon
                            className="cursor-pointer"
                            network="email"
                            fgColor="gray"
                            bgColor="transparent"
                        />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </div>
            </Link> */}
        </header>
    );
}