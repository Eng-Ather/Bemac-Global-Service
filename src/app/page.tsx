import Image from "next/image";
import HeroSection from "./component/Herosection/page";
import SuccessStories from "./component/bottombox";
import RatingAndReview from "./component/Rating";
export default function Home() {
  return (
     <div>
      <HeroSection/>
      <SuccessStories/>
      {/* <RatingAndReview/> */}
    </div>
  );
}
