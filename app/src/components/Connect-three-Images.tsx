import { Manrope } from "next/font/google";
import Image from "next/image";
import Header from "./header";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function ConnectThreeImages() {
  return (
    <div className="relative w-full  overflow-hidden mb-10">
      <div className="hidden md:block h-[900px] md:h-[1100px]">
        <div className="absolute top-14 left-10">
          <Image
            src="/images/connect-image-4.webp"
            alt="Top Left"
            width={482}
            height={541}
            className="object-cover"
          />
        </div>
        <div className="absolute top-[430px] left-[680px] md:left-[480px] md:top-[620px] w-[376px] h-[442px]">
          <video
            src="/images/connect.mp4"
            width="482"
            height="541"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-[100px] right-18">
          <Image
            src="/images/Connect-image-6.webp"
            alt="Top Right"
            width={207}
            height={311}
            className="object-cover"
          />
        </div>
        <div className="absolute right-[100px] h-[219px] w-[246px] top-73">
          <Image
            src="/images/connect-image-7.webp"
            alt="Top Right"
            width={125}
            height={198}
            className="object-cover"
          />
        </div>
      </div>
      <div className="block md:hidden px-2">
        <div className="flex flex-col space-y-6 py-8">
          <div className="flex justify-start ml-2">
            <video
              src="/images/connect.mp4"
              width="220"
              height="294"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex justify-end -mt-23 pr-17">
            <Image
              src="/images/connect-image-7.webp"
              alt="Vase illustration"
              width={70}
              height={70}
              className="object-cover"
            />
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/connect-image-5.webp"
              alt="Person with book"
              width={180}
              height={184}
              className="object-cover"
            />
          </div>
          <div className="flex justify-start">
            <Image
              src="/images/Connect-image-6.webp"
              alt="Person with sunflowers"
              width={180}
              height={120}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
