
"use client";

import React from "react";
import Image from "next/image";

// Define types for the ProgressBar props
interface ProgressBarProps {
    label: string;
    value: number;
}

// Progress Bar Component
const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
    return (
        <div className="mb-4">
            <label className="block text-xl mb-2">{label}</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                    className="bg-red-900 h-2.5 rounded-full"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <div>
            {/* <div className=" h-1/2 md:h-screen relative"> */}
            <div className="h-96 md:h-screen relative">

                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        className="object-cover"
                        src="https://economics.illinois.edu/sites/default/files/inline-images/consultant_orig.jpg"
                        alt="Consultant Team"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Text Content */}
                <div className="absolute inset-0 flex items-start justify-center z-10">
                    <h1 className="hidden md:block mt-14 text-4xl font-bold text-red-900 drop-shadow-lg">
                        Bemac Global Services
                    </h1>
                </div>

                {/* States Section */}
                <div className="absolute bottom-1 md:bottom-4 left-0 w-full z-20">
                    <div className="flex justify-around bg-black bg-opacity-50 md:bg-opacity-60 text-white py-2 md:py-6 rounded-lg shadow-lg mx-2 md:mx-16">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">15+</h2>
                            <p className="text-xs md:text-sm">Years of Experience</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">500+</h2>
                            <p className="text-xs md:text-sm">Manpower Recruited</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">20+</h2>
                            <p className="text-xs md:text-sm">Partner Companies</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">1000+</h2>
                            <p className="text-xs md:text-sm">Consultations Delivered</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Progress Bar Section */}
            <div className=" py-5 flex flex-col md:flex-row items-center justify-center">
                <div  className="w-full md:w-1/2 ">
                    <h2 className="py-5 text-center font-bold text-2xl md:text-2xl lg:text-2xl mb-4 text-red-900">
                        Service Performance (2024)
                    </h2>
                    <p className="text-center w-3/4 mx-auto">
                        A graphical representation of the services provided by the company in 2024.
                        This section illustrates the percentage of services in Recruitment, Training, Education,
                        Investment, and E-Commerce. The data is currently hardcoded but can be replaced with
                        dynamic data from an API or database.
                    </p>
                </div>

                {/* Progress Bars */}
                <div className="  w-full md:w-1/2 mx-auto px-4 md:px-16 py-5">
                    <ProgressBar label="Recruitment" value={75} />
                    <ProgressBar label="Training" value={85} />
                    <ProgressBar label="Education" value={90} />
                    <ProgressBar label="Investment" value={60} />
                    <ProgressBar label="E-Commerce" value={70} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

