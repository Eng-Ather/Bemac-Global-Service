
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    // <header className="w-full bg-[#3E2723] py-4 px-2">
    <header className="w-full bg-[#3E2723] py-4 px-4">

<div className="w-1/2  flex justify-between items-center mx-auto">
        {/* Logo and Brand Name */}
        <div className=" flex items-center space-x-3">
          <Image
            className="dark:invert filter brightness-0 invert hidden md:block"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/" className="py-2 font-serif text-lg md:text-2xl text-white font-bold">
            Bemac Global Services
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="">
          <ul className=" flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Services"
                className="text-white font-semibold"
              >
                Services
              </Link>
            </li>
           
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
// ---------------------------------

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false); // Toggle menu state

//   return (
//     <header className="border-b-2 shadow-lg py-4 px-10 bg-gray-900 text-white">
//       <div className="flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo and Brand Name */}
//         <div className="flex items-center space-x-3">
//           <Image
//             className="hidden md:block"
//             src="https://nextjs.org/icons/next.svg"
//             alt="Next.js Logo"
//             width={40}
//             height={40}
//             priority
//           />
//           <Link href="/" className="font-serif text-2xl font-bold">
//             Bemac Global Services
//           </Link>
//         </div>

//         {/* Hamburger Button (Small Screens) */}
//         <button
//           className="text-white text-2xl md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Navigation Menu */}
//         <nav
//           className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
//             isOpen ? "block" : "hidden md:flex"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
//             <li>
//               <Link
//                 href="/"
//                 className="block text-white hover:text-orange-500 font-semibold transition duration-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/About"
//                 className="block text-white hover:text-orange-500 font-semibold transition duration-300"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/Services"
//                 className="block text-white hover:text-orange-500 font-semibold transition duration-300"
//               >
//                 Services
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
