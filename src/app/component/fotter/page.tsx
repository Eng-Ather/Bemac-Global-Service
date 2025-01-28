import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/lib/Logo.png";
import copyright from "@/app/lib/copyright.png";

const Footer = () => {
    return (
        <div className="bg-[#3E2723] pt-20 pb-8 px-16"> {/* Dark brown background */}
            <div className="text-white flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
                {/* Footer details and pages link box */}
                <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
                    {/* Logo and Description */}
                    <div className="flex flex-col space-y-4 max-w-[300px] md:max-w-[350px]">
                        <Image
                            className="filter brightness-0 invert mx-auto"
                            src="https://nextjs.org/icons/next.svg"
                            alt="Next.js Logo"
                            width={150}
                            height={40}
                            priority
                        />
                        {/* <Image src={Logo} alt="Logo" width={191} height={34} /> */}
                        <p className="font-Inter font-normal text-lg leading-7 tracking-tight text-gray-300">
                            Bemac Global Services was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="font-bold text-xl mb-2">
                            Services
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Overview
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Pricing
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Customer Stories
                        </Link>
                    </div>

                    {/* Resources Links */}
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="font-bold text-xl mb-2">
                            Resources
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Blog
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Guides & Tutorials
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Help Center
                        </Link>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col space-y-2">
                        <Link href="/" className="font-bold text-xl mb-2">
                            Company
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            About Us
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Careers
                        </Link>
                        <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
                            Media Kit
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-600 pt-6 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <Image src={copyright} alt="Copyright" width={20} height={20} />
                    <p className="text-gray-300 text-sm">© 2025 Bemac Global Services. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
