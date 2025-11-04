import { Manrope } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function LetsConnect() {
  return (
    <>
      <div className="mx-4 md:mx-10">
        <div className={`${manrope.className} w-full border-b border-black pb-10`}>
          <div className="hidden md:flex justify-between text-black">
            <div className="flex flex-col justify-center">
              <div className="w-[630px] pt-38">
                <h3 className="text-[24px] pb-2 font-normal font-serif">
                  let’s connect
                </h3>
                <h1 className="text-[48px] leading-none tracking-tight">
                  Every story starts with a connection.
                </h1>
              </div>

              <div className="mt-28 ml-72 w-[260px] space-y-3">
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
                  <p className="text-[13px] uppercase tracking-widest mt-2">
                    enjoy our sounds
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-7">
              <Image
                src="/images/Connect-image-1.webp"
                alt="Connection"
                width={388}
                height={460}
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
          <div
            className="flex flex-col md:hidden text-black"
          >
            <main className="p-6 space-y-8">
              <div>
                <h3 className="text-[22px] font-normal font-serif">
                  let’s connect
                </h3>
                <h1 className="text-[28px] leading-tight mt-2 w-[90%]">
                  Every story starts with a connection.
                </h1>
                <p className="text-[15px] text-gray-800 leading-snug mt-5">
                  Share your vision and let’s bring it to life.
                </p>
                <p className="text-[12px] uppercase tracking-widest mt-1">
                  start a project
                </p>
              </div>
              <div>
                <p className="text-[15px] text-gray-800 leading-snug">
                  Grow with a studio built on creativity and authenticity.
                </p>
                <p className="text-[12px] uppercase tracking-widest mt-1">
                  join our team
                </p>
              </div>
              <div>
                <p className="text-[15px] text-gray-800 leading-snug">
                  Tune into the playlists that inspire our design process.
                </p>
                <p className="text-[12px] uppercase tracking-widest mt-1">
                  enjoy our sounds
                </p>
              </div>
              <div className="w-full">
                <div className="relative w-full h-[380px]">
                  <Image
                    src="/images/Connect-image-1.webp"
                    alt="Connection"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <footer className="text-[13px] leading-relaxed text-left text-gray-800 space-y-3">
                <p>
                  Office 07, Floor 5,
                  <br />
                  Saaha Offices B, Souk Al Bahar
                  <br />
                  Dubai, United Arab Emirates
                </p>
                <div>
                  <p>info@idst.ae</p>
                  <p>+971 56 825 3043</p>
                </div>
                <div className="flex flex-col">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </div>
              </footer>

            </main>
          </div>
          <div className="flex justify-center items-center mt-10">
            <Image
              src="/images/arrow-downside.webp"
              alt="Arrow"
              width={48}
              height={45}
              className="object-cover"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}