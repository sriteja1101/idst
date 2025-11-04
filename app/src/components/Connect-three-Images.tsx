import { Manrope } from "next/font/google";
import Image from "next/image";
import Header from "./header";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function ConnectThreeImages() {
  return (
    <div className="relative w-full overflow-hidden mb-10">
      <div className="hidden md:block h-screen">
        <div className="absolute top-14 left-10">
          <Image
            src="/images/connect-image-4.webp"
            alt="Top Left"
            width={482}
            height={541}
            className="object-cover"
          />
        </div>
        <div className="absolute top-[430px] left-[680px] w-[376px] h-[542px]">
          <Image
            src="/images/connect-image-5.webp"
            alt="Middle Center"
            width={374}
            height={540}
            className="object-cover"
          />
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
        <div className="absolute right-[120px] h-[219px] w-[246px] top-71">
          <Image
            src="/images/connect-image-7.webp"
            alt="Top Right"
            width={145}
            height={218}
            className="object-cover"
          />
        </div>
      </div>
      <div className="block md:hidden px-4">
        <div className="flex flex-col space-y-6 py-8">
          <div className="flex justify-start">
            <Image
              src="/images/connect-image-4.webp"
              alt="Vases and frame"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="flex justify-end pr-6 -mt-25">
            <Image
              src="/images/connect-image-7.webp"
              alt="Vase illustration"
              width={100} 
              height={100} 
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
        <div className="w-full h-px bg-gray-400 mb-4"></div>
      </div>
    </div>
  );
}
