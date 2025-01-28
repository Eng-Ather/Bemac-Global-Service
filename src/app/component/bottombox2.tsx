
import React from "react";
import Image from "next/image";
import Link from "next/link";
import appleimage from "@/app/lib/appleimage.png"
import msofficeimage from "@/app/lib/msofficeimage.png"
import Slack from "@/app/lib/Slack.png"
import Google from "@/app/lib/Google.png"

const BottomBox2 = () => {
    return (
        <div className=" flex flex-col justify-around  h-[538px] py-[140px] px-[220px]">

            <div className=" w-[1482px] h-[87px] ">
                <Link href="/" className="flex justify-center font-Inter font-bold text-[#212529] text-[72px] leading-[87px] tracking-[2%] ">
                    Our Sponsors
                </Link>
            </div>

            <div className=" flex justify-between w-[1482px] h-[71px] ">

                <Link href="/"><Image
                    src={appleimage}
                    alt="image"
                    width={55}
                    height={68}
                /></Link>

                <Link href="/"><Image
                    src={msofficeimage}
                    alt="image"
                    width={287}
                    height={62}
                /></Link>

                <Link href="/"><Image
                    src={Slack}
                    alt="image"
                    width={280}
                    height={71}
                /></Link>

                <Link href="/">
                    <Image
                        src={Google}
                        alt="image"
                        width={211}
                        height={69}
                    /></Link>
            </div>
        </div>
    )
}

export default BottomBox2