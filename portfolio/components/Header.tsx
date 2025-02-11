// import React, { useEffect, useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; 
import Link from 'next/link';
import { MdOutlineMailOutline } from "react-icons/md";
// import { fetchSocial } from '../utils/fetchSocials'; 

// Define a mapping for the icons with the correct type
// const iconMapping: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
//     X: FaXTwitter,          // Map X to FaXTwitter
//     LinkedIn: FaLinkedin,   // Map LinkedIn to FaLinkedin
//     GitHub: FaGithub,       // Map GitHub to FaGithub
//     // Add more mappings here if necessary
// };

export default function Header() {
    // const [socials, setSocials] = useState<{ title: string, url: string }[]>([]); // State to store fetched socials data

    // Fetch the socials data when the component mounts
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const fetchedSocials = await fetchSocial(); // Fetch socials using the fetchSocial function
    //             setSocials(fetchedSocials); // Update state with fetched data
    //         } catch (error) {
    //             console.error('Error fetching socials data:', error);
    //         }
    //     };

    //     fetchData(); // Call the function to fetch data
    // }, []);

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <div className="flex flex-row items-center">
                {/* Render Social Icons only on the client */}
                <a href="https://x.com/Steves314" target="" rel="">
                    <FaXTwitter size={25} />
                </a>
                <a href="https://www.linkedin.com/in/steve-susanibar" target="" rel="">
                    <FaLinkedin size={25} />
                </a>
                <a href="https://github.com/steves3142" target="" rel="">
                    <FaGithub size={25} />
                </a>
            </div>


            <Link href="#contact">
                <div className="flex flex-row items-center text-gray-300 cursor-pointer">
                    <MdOutlineMailOutline size={25} />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </div>
            </Link>
        </header>
    );
}