
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/lib/images/logo1.jpg";

const Header = () => {
  return (
    <header className="w-full bg-[#3E2723] py-4 px-6 shadow-md">
      <div className="max-w-6xl  mx-auto flex justify-between items-center ">
        {/* Logo and Brand Name */}
        <div className="w-1/4  flex items-center gap-4 space-x-3">
          <Image
            className=" rounded-full border border-white shadow-lg"
            src={Logo1}
            alt="Bemac Global Logo"
            width={60}
            height={60}
          />
          <Link
            href="/"
            className="hidden md:block font-serif text-lg md:text-2xl text-white font-bold"
          >
            Bemac Global Services
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="md:text-lg">
          <ul className=" flex space-x-6 px-3">
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
