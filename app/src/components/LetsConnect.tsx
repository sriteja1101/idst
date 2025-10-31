import { Manrope } from "next/font/google";
import Image from "next/image";
import Header from "./header";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function LetsConnect() {
  return (
    <>
      <Header />
      <div className="border-x border-black mx-4 md:mx-10">
        <div className={`${manrope.className} w-full`}>
          <div className="hidden md:flex justify-between text-black px-9 pt-16">
            <div className="flex flex-col justify-center">
              <div className="w-[630px]">
                <h3 className="text-[30px] font-normal font-serif">
                  let’s connect
                </h3>
                <h1 className="text-[57px] leading-none tracking-tight mt-2">
                  Every story starts with a connection.
                </h1>
              </div>

              <div className="mt-36 ml-80 w-[310px] space-y-3">
                <div>
                  <p className="text-[17px] text-gray-800 leading-tight">
                    Share your vision and let’s bring it to life.
                  </p>
                  <p className="text-[13px] uppercase tracking-widest mt-1">
                    start a project
                  </p>
                </div>

                <div>
                  <p className="text-[17px] text-gray-800 leading-tight mt-8">
                    Grow with a studio built on creativity and authenticity.
                  </p>
                  <p className="text-[13px] uppercase tracking-widest mt-1">
                    join our team
                  </p>
                </div>

                <div>
                  <p className="text-[17px] text-gray-800 leading-tight mt-8">
                    Tune into the playlists that inspire our design process.
                  </p>
                  <p className="text-[13px] uppercase tracking-widest mt-1">
                    enjoy our sounds
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col pr-10 pt-8">
              <Image
                src="/images/Connect-image-1.webp"
                alt="Connection"
                width={438}
                height={560}
                className="object-cover"
              />
              <div className="text-[13px] leading-tight font-light tracking-tight mt-3">
                <p>
                  Office 07, Floor 5,
                  <br />
                  Saaha Offices B, Souk Al Bahar
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <p className="pt-2">
                  info@idst.ae
                  <br />
                  +971 56 825 3043
                </p>
                <div className="pt-2">
                  <p>Instagram</p>
                  <p className="pt-4">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:hidden text-black p-6 min-h-screen">
            <div className="self-start mt-10">
              <h3 className="text-[22px] font-normal font-serif">let’s connect</h3>
              <h1 className="text-[28px] leading-tight mt-2 w-[90%]">
                Every story starts with a connection.
              </h1>

              <div className="mt-8 w-[85%] space-y-4">
                <div>
                  <p className="text-[15px] text-gray-800 leading-snug">
                    Share your vision and let’s bring it to life.
                  </p>
                  <p className="text-[12px] uppercase tracking-widest mt-1">
                    start a project
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-gray-800 leading-snug mt-5">
                    Grow with a studio built on creativity and authenticity.
                  </p>
                  <p className="text-[12px] uppercase tracking-widest mt-1">
                    join our team
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-gray-800 leading-snug mt-5">
                    Tune into the playlists that inspire our design process.
                  </p>
                  <p className="text-[12px] uppercase tracking-widest mt-1">
                    enjoy our sounds
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start ml-30 w-[300] h-[500px] mt-10 space-y-3">
              <div className="relative w-[220px] h-[380px]">
                <Image
                  src="/images/Connect-image-1.webp"
                  alt="Connection"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-[13px] leading-relaxed text-left text-gray-800">
                <p>
                  Office 07, Floor 5,
                  <br />
                  Saaha Offices B, Souk Al Bahar
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <div className="mt-3">
                  <p>info@idst.ae</p>
                  <p>+971 56 825 3043</p>
                </div>
                <div className="mt-3 flex flex-col">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow bottom */}
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/images/arrow-downside.webp"
              alt="Arrow"
              width={118}
              height={105}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
