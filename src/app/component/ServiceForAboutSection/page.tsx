
"use client";

import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string }) => {
    return (
        <div className="bg-gradient-to-br from-[#3498DB] to-[#3E2723]  text-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            {/* <div className="relative">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={1000}
                    height={500}
                    className="object-cover w-full h-64"
                />
            </div> */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

const ServiceForAboutSection = () => {
    const services = [
        { title: "Recruitment", description: "We provide top-tier recruitment services, helping businesses find the best talent.", imgSrc: "/recruitment.jpg" },
        { title: "Training", description: "Empowering employees with necessary skills through in-person & virtual training.", imgSrc: "/training.jpg" },
        { title: "Education", description: "Offering tailored educational programs to enhance learning experiences.", imgSrc: "/education.jpg" },
        { title: "Investment", description: "Helping businesses make smart investment decisions for maximum returns.", imgSrc: "/investment.jpg" },
        { title: "E-Commerce", description: "Assisting businesses in establishing and growing their online presence.", imgSrc: "/ecommerce.jpg" },
        { title: "Consulting", description: "Providing expert advice on business growth and process improvement.", imgSrc: "/consulting.jpg" },
    ];

    return (
        <div className=" py-2 px-3">
            {/* Services Description */}
            <div className=" mx-auto text-center">
                <h2 className="text-2xl md:text-4xl text-[#3E2723]  font-extrabold mb-6">
                    Our Expertise at <span className="text-[#E94560]">Bemac Global Services</span>
                </h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    We provide exceptional solutions in recruitment, training, education, investment, and more. Our services are tailored to help individuals and organizations grow effectively.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceForAboutSection;
