import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" border-b-2 shadow-md py-4 px-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <Image
            className="dark:invert filter brightness-0 invert "
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js Logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/" className=" font-serif text-3xl text-white font-bold">
            Bemac Global Services
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/"
                className=" text-white hover:text-orange-600 font-semibold transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="  text-white p-10 hover:text-orange-600 font-semibold transition duration-300"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
