
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-2 shadow-lg py-4 px-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <Image
            className="dark:invert filter brightness-0 invert hidden md:block"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/" className="font-serif text-2xl text-white font-bold">
            Bemac Global Services
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white hover:text-orange-500 font-semibold transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white hover:text-orange-500 font-semibold transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Services"
                className="text-white hover:text-orange-500 font-semibold transition duration-300"
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
// 'use client'
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Icons for menu

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="border-b-2 shadow-lg py-4 px-10 bg-blue-900 text-white">
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

//         {/* Desktop Navigation (Show only on md and larger screens) */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-orange-500 transition">Home</Link>
//           <Link href="/About" className="hover:text-orange-500 transition">About</Link>
//           <Link href="/Services" className="hover:text-orange-500 transition">Services</Link>
//         </nav>

//         {/* Mobile Menu Button (Show only on small screens) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden block focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu (Show only when isOpen is true) */}
//       <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-800 p-4`}>
//         <Link href="/" className="block py-2 hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
//         <Link href="/About" className="block py-2 hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>About</Link>
//         <Link href="/Services" className="block py-2 hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Services</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

