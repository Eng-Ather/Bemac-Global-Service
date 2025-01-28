// "use client"

// import React from "react";
// import Image from "next/image";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// // Register required components for Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const HeroSection = () => {
//     // Chart Data
//     const data = {
//         labels: ["Recruitment", "Training", "Education", "Investment", "E-Commerce"],
//         datasets: [
//             {
//                 label: "Services Provided",
//                 data: [75, 85, 90, 60, 70], // Example data
//                 backgroundColor: [
//                     "rgba(255, 99, 132, 0.5)",
//                     "rgba(54, 162, 235, 0.5)",
//                     "rgba(255, 206, 86, 0.5)",
//                     "rgba(75, 192, 192, 0.5)",
//                     "rgba(153, 102, 255, 0.5)",
//                 ],
//                 borderColor: [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(153, 102, 255, 1)",
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     // Chart Options
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//             },
//             title: {
//                 display: true,
//                 text: "Service Performance Chart",
//             },
//         },
//     };

//     return (
//         <div>
//             <div className="h-screen relative">
//                 {/* Background Image */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <Image
//                         className="object-cover"
//                         src="https://economics.illinois.edu/sites/default/files/inline-images/consultant_orig.jpg"
//                         alt="Consultant Team"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                     />
//                 </div>

//                 {/* Text Content */}
//                 <div className="absolute inset-0 flex items-start justify-center z-10">
//                     <h1 className="mt-14 text-4xl font-bold text-red-900 drop-shadow-lg">
//                         Bemac Global Services
//                     </h1>
//                 </div>

//                 {/* States Section */}
//                 <div className="absolute bottom-4 left-0 w-full z-20">
//                     <div className="flex justify-around bg-black bg-opacity-60 text-white py-6 rounded-lg shadow-lg mx-4 md:mx-16">
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">15+</h2>
//                             <p className="text-sm">Years of Experience</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">500+</h2>
//                             <p className="text-sm">Manpower Recruited</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">20+</h2>
//                             <p className="text-sm">Partner Companies</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">1000+</h2>
//                             <p className="text-sm">Consultations Delivered</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Additional Graph Section */}
//             <div className="py-10 flex items-start justify-center">
//                 <div>
//                 <h2 className="py-5 text-center text-2xl font-bold mb-4 text-red-900">
//                     Service Performance (2024)
//                 </h2>
//                 <p className="text-center w-3/4 mx-auto">
//                     A graphical representation of the services provided by the company in 2024.
//                     This bar graph illustrates the percentage of services in Recruitment, Training, Education,
//                     Investment, and E-Commerce. The data is currently hardcoded but can be replaced with
//                     dynamic data from an API or database.
//                 </p>
//                 </div>
                
//                 <div className="mx-auto h-72 w-full px-4 md:px-16">
//                     <Bar data={data} options={options} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;
// -----------------------------------------

// "use client";

// import React from "react";
// import Image from "next/image";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// // Register required components for Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const HeroSection = () => {
//     // Chart Data
//     const data = {
//         labels: ["Recruitment", "Training", "Education", "Investment", "E-Commerce"],
//         datasets: [
//             {
//                 label: "Services Provided",
//                 data: [75, 85, 90, 60, 70], // Example data
//                 backgroundColor: [
//                     "rgba(255, 99, 132, 0.5)",
//                     "rgba(54, 162, 235, 0.5)",
//                     "rgba(255, 206, 86, 0.5)",
//                     "rgba(75, 192, 192, 0.5)",
//                     "rgba(153, 102, 255, 0.5)",
//                 ],
//                 borderColor: [
//                     "rgba(255, 99, 132, 1)",
//                     "rgba(54, 162, 235, 1)",
//                     "rgba(255, 206, 86, 1)",
//                     "rgba(75, 192, 192, 1)",
//                     "rgba(153, 102, 255, 1)",
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     // Chart Options
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: "top",
//             },
//             title: {
//                 display: true,
//                 text: "Service Performance Chart",
//             },
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: "Services",
//                 },
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: "Performance (%)",
//                 },
//                 min: 0,
//                 max: 100,
//             },
//         },
//     };

//     return (
//         <div>
//             <div className="h-screen relative">
//                 {/* Background Image */}
//                 <div className="absolute top-0 left-0 w-full h-full">
//                     <Image
//                         className="object-cover"
//                         src="https://economics.illinois.edu/sites/default/files/inline-images/consultant_orig.jpg"
//                         alt="Consultant Team"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                     />
//                 </div>

//                 {/* Text Content */}
//                 <div className="absolute inset-0 flex items-start justify-center z-10">
//                     <h1 className="mt-14 text-4xl font-bold text-red-900 drop-shadow-lg">
//                         Bemac Global Services
//                     </h1>
//                 </div>

//                 {/* States Section */}
//                 <div className="absolute bottom-4 left-0 w-full z-20">
//                     <div className="flex justify-around bg-black bg-opacity-60 text-white py-6 rounded-lg shadow-lg mx-4 md:mx-16">
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">15+</h2>
//                             <p className="text-sm">Years of Experience</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">500+</h2>
//                             <p className="text-sm">Manpower Recruited</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">20+</h2>
//                             <p className="text-sm">Partner Companies</p>
//                         </div>
//                         <div className="text-center">
//                             <h2 className="text-2xl font-bold">1000+</h2>
//                             <p className="text-sm">Consultations Delivered</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Additional Graph Section */}
//             <div className="py-10 flex items-start justify-center">
//                 <div>
//                     <h2 className="py-5 text-center text-2xl font-bold mb-4 text-red-900">
//                         Service Performance (2024)
//                     </h2>
//                     <p className="text-center w-3/4 mx-auto">
//                         A graphical representation of the services provided by the company in 2024.
//                         This bar graph illustrates the percentage of services in Recruitment, Training, Education,
//                         Investment, and E-Commerce. The data is currently hardcoded but can be replaced with
//                         dynamic data from an API or database.
//                     </p>
//                 </div>

//                 <div className="mx-auto h-72 w-full px-4 md:px-16">
//                     <Bar data={data} options={options} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;
// -----------------------------------
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
            <label className="block text-lg font-medium text-red-900 mb-2">{label}</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <div>
            <div className="h-screen relative">
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
                    <h1 className="mt-14 text-4xl font-bold text-red-900 drop-shadow-lg">
                        Bemac Global Services
                    </h1>
                </div>

                {/* States Section */}
                <div className="absolute bottom-4 left-0 w-full z-20">
                    <div className="flex justify-around bg-black bg-opacity-60 text-white py-6 rounded-lg shadow-lg mx-4 md:mx-16">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">15+</h2>
                            <p className="text-sm">Years of Experience</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">500+</h2>
                            <p className="text-sm">Manpower Recruited</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">20+</h2>
                            <p className="text-sm">Partner Companies</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">1000+</h2>
                            <p className="text-sm">Consultations Delivered</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Progress Bar Section */}
            <div className="py-10 flex flex-col md:flex-row items-start justify-center">
                <div>
                    <h2 className="py-5 text-center text-2xl font-bold mb-4 text-red-900">
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
                <div className="w-full max-w-4xl mx-auto px-4 md:px-16 py-5">
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

