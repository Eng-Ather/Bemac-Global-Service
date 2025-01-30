import Image from "next/image";
import HeroSection from "./component/Herosection/page";
import SuccessStories from "./component/bottombox";
export default function Home() {
  return (
     <div>
      <HeroSection/>
      <SuccessStories/>
    </div>
  );
}
