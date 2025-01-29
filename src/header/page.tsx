
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
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
        <nav className="md:text-xl">
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
