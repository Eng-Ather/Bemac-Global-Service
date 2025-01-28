import Image from "next/image";
import HeroSection from "./component/Herosection/page";
import BottomBox1 from "./component/bottombox";
import BottomBox2 from "./component/bottombox2";
import Footer from "./component/fotter/page";
export default function Home() {
  return (
     <div>
      <HeroSection/>
      <Footer/>
    </div>
  );
}
