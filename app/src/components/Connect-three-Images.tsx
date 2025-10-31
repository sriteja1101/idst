import { Manrope } from "next/font/google";
import Image from "next/image";
import Header from "./header";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function ConnectThreeImages() {
  return (
    <div className="relative h-[1047px] w-[1610px] border-r border-l border-black  overflow-hidden ml-10">
      <div>
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
            src="/images/connect-image-6.webp"
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
    </div>
  );
}
