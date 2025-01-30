
"use client";
import { Briefcase, Activity, Leaf, Anchor } from "lucide-react";
import ServiceForAboutSection from "../component/ServiceForAboutSection/page";

const AboutPage = () => {

  // flages and name of countries
  const countryFlags = [
    { name: "South Africa", code: "za" },
    { name: "Kenya", code: "ke" },
    { name: "Gabon", code: "ga" },
    { name: "Egypt", code: "eg" },
    { name: "Nigeria", code: "ng" },
    { name: "Sierra Leone", code: "sl" },
    { name: "Singapore", code: "sg" },
    { name: "India", code: "in" },
    { name: "Sri Lanka", code: "lk" },
  ];

  return (
    <div className="min-h-screen p-5 flex flex-col justify-between">
      <div className=" mx-auto">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Company Introduction */}
          <div className=" w-full md:w-1/2 bg-white">
            <h2 className="text-2xl md:text-4xl text-center text-[#3E2723] font-bold mb-4">About Our Company</h2>
            <p className=" text-lg leading-relaxed">
              Bemac Global Services Incorporated was founded in the Summer of 2022 in Toronto, Canada.
              Our strategic location enables us to offer world-class services across multiple regions.
            </p>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 ">
            <img
              src="https://workdesign.com/wp-content/uploads/2014/10/IMG_2114-720x387.jpg"
              alt="About Bemac Global"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Global Presence */}
        <div className="p-4 my-8">
          <h3 className="text-2xl md:text-4xl text-[#3E2723] font-bold mb-4 md:mb-8">Our Global Presence</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-black text-lg">
            {countryFlags.map((country) => (
              <li key={country.code} className=" flex items-center gap-4">
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  alt={country.name}
                  className="w-6 md:w-12 h-6 md:h-12 rounded-full border border-[#3E2723]"
                />
                <span className="border-b-2 border-gray-300 hover:border-[#3E2723]">{ country.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 ">
          <ServiceForAboutSection />
        </div>

        {/* Industry Focus */}
        <div className=" p-8">
          <h3 className="text-2xl md:text-4xl text-[#3E2723] font-bold mb-4">Industry Focus</h3>
         
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 text-lg leading-relaxed space-y-5">
            <li className="border-b-2 border-gray-300 hover:border-[#3E2723] md:mx-auto flex items-center gap-2"><Activity /> Shipping Industry</li>
            <li className="border-b-2 border-gray-300 hover:border-[#3E2723] md:mx-auto flex items-center gap-2"><Anchor /> Fishing </li>
            <li className="border-b-2 border-gray-300 hover:border-[#3E2723] md:mx-auto flex items-center gap-2"><Briefcase /> Healthcare Industry (Nurses, Midwives, Pediatric Care)</li>
            <li className="border-b-2 border-gray-300 hover:border-[#3E2723] md:mx-auto flex items-center gap-2"><Leaf /> Agriculture (Farm Workers)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
