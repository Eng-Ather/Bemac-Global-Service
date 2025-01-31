
"use client";

import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={1000}
                    height={500}
                    className="object-cover w-full h-64"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-red-900 mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div>
            
            {/* Services Description */}
            <div className="py-10 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
                    Our Expertise at Bemac Global Services
                </h2>
                <p className="text-center text-lg text-gray-700 mb-12">
                    At Bemac Global Services, we offer comprehensive solutions tailored to your needs.
                    Our team of experts provides exceptional services across multiple domains including recruitment, training, education, and more.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Recruitment"
                        description="We provide top-tier recruitment services, helping businesses find the best talent. Our recruitment solutions are designed to cater to a wide range of industries and job levels."
                        imgSrc="https://via.placeholder.com/500"
                    />
                    <ServiceCard
                        title="Training"
                        description="Our training services are designed to empower employees with the necessary skills to thrive in their roles. We offer both in-person and virtual training solutions."
                        imgSrc="https://via.placeholder.com/500"
                    />
                    <ServiceCard
                        title="Education"
                        description="We offer a wide range of educational services to help individuals and organizations stay ahead. Our educational programs are tailored to provide the best learning experience."
                        imgSrc="https://via.placeholder.com/500"
                    />
                    <ServiceCard
                        title="Investment"
                        description="Our investment services help businesses make smart decisions in various sectors. We provide insights and strategies to maximize your returns and secure a stable future."
                        imgSrc="https://via.placeholder.com/500"
                    />
                    <ServiceCard
                        title="E-Commerce"
                        description="We specialize in helping businesses establish and grow their e-commerce presence. From website design to sales strategies, our team ensures your business thrives online."
                        imgSrc="https://via.placeholder.com/500"
                    />
                    <ServiceCard
                        title="Consulting"
                        description="Our consulting services offer expert advice on various aspects of business growth. We help companies improve their processes, strategies, and overall performance."
                        imgSrc="https://via.placeholder.com/500"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
