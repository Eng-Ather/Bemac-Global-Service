// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Logo from "@/app/lib/Logo.png";
// import copyright from "@/app/lib/copyright.png";

// const Footer = () => {
//     return (
//         <div className="bg-[#3E2723] pt-20 pb-8 px-16"> {/* Dark brown background */}
//             <div className="text-white flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
//                 {/* Footer details and pages link box */}
//                 <div className="flex flex-col md:flex-row justify-between w-full md:w-auto">
//                     {/* Logo and Description */}
//                     <div className="flex flex-col space-y-4 max-w-[300px] md:max-w-[350px]">
//                         <Image
//                             className="filter brightness-0 invert mx-auto"
//                             src="https://nextjs.org/icons/next.svg"
//                             alt="Next.js Logo"
//                             width={150}
//                             height={40}
//                             priority
//                         />
//                         {/* <Image src={Logo} alt="Logo" width={191} height={34} /> */}
//                         <p className="font-Inter font-normal text-lg leading-7 tracking-tight text-gray-300">
//                             Bemac Global Services was created for the new ways we live and work. We make a better workspace around the world.
//                         </p>
//                     </div>

//                     {/* Product Links */}
//                     <div className="flex flex-col space-y-2">
//                         <Link href="/" className="font-bold text-xl mb-2">
//                             Services
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Overview
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Pricing
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Customer Stories
//                         </Link>
//                     </div>

//                     {/* Resources Links */}
//                     <div className="flex flex-col space-y-2">
//                         <Link href="/" className="font-bold text-xl mb-2">
//                             Resources
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Blog
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Guides & Tutorials
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Help Center
//                         </Link>
//                     </div>

//                     {/* Company Links */}
//                     <div className="flex flex-col space-y-2">
//                         <Link href="/" className="font-bold text-xl mb-2">
//                             Company
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             About Us
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Careers
//                         </Link>
//                         <Link href="/" className="text-gray-300 hover:text-[#FFE492] transition duration-300">
//                             Media Kit
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Section */}
//             <div className="mt-8 border-t border-gray-600 pt-6 text-center">
//                 <div className="flex justify-center items-center space-x-2">
//                     <Image src={copyright} alt="Copyright" width={20} height={20} />
//                     <p className="text-gray-300 text-sm">© 2025 Bemac Global Services. All rights reserved.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;
// ----------------------------------------

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaLinkedin, FaPhone } from "react-icons/fa";
import copyright from "@/app/lib/copyright.png";

function Footer() {
  return (
    <footer className="text-white">
      <div
        className="mx-auto text-center bg-cover bg-center "
        style={{ backgroundImage: `url(/images/footerImage.jpg)` }} // Place footerImage.jpg in the public/images folder
      >
        <div className="bg-[#3E2723] flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-12 lg:px-24">
          {/* Left Side: Logo and Links */}
          <div className="flex flex-col md:flex-row items-center md:w-1/2 space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="hidden md:block md:w-1/3 rounded-xl">
              <Image
                src="https://nextjs.org/icons/next.svg"
                width={100}
                height={100}
                alt="company Logo"
                className="p-4 w-full max-h-40  dark:invert filter brightness-0 invert"
              />
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="text-sm flex justify-around md:justify-start space-x-6">
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="text-white hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  About
                </Link>
                <Link
                  href="/Notification"
                  className="text-white hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  Services
                </Link>
              </div>

              {/* Contact Links */}
              <div className="text-sm flex justify-center items-center md:justify-start mt-3 space-x-2">
                <p>(0000) 000 000 000</p>
                <p className="text-green-500">
                  <FaPhone size={15} />
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-around md:justify-start mt-3 space-x-6">
                <a
                  href="https://www.facebook.com/saylani.smit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-blue-500 hover:text-blue-500 hover:scale-150 duration-300"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PL47LaC9-GaXXwcuZ0Ho_AxbjEjO087AD_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-red-500 hover:text-red-500 hover:scale-150 duration-300"
                >
                  <FaYoutube size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/saylanimasstraining/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-blue-500 hover:text-blue-500 hover:scale-150 duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map and Address */}
          <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-0">
            <p className="text-sm md:text-base text-gray-200 text-center md:text-left font-semibold mb-4">
              <u>Bemac Global Service</u>, 2nd Floor, Abc Building, Block 2 XYZ CIty
            </p>

            <iframe
              className="w-full pb-2 md:w-2/3 h-48 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.9438027226124!2d-121.9979614!3d49.1446914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548438ab69540a2f%3A0x18117e01a7fcf76!2s44322%20Yale%20Rd%20%23292%2C%20Chilliwack%2C%20BC%20V2R%204H1%2C%20Canada!5e0!3m2!1sen!2s!4v1738108751578!5m2!1sen!2s"
              loading="lazy"
            >
            </iframe>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className=" bg-[#3E2723] ">
          <div className="flex justify-center items-center space-x-2">
            <Image src={copyright} alt="Copyright" width={20} height={20} />
            <p className="text-gray-300 text-sm">© 2025 Bemac Global Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
