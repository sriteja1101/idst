import Image from "next/image";
import SyncedSlideshow from "./src/components/slidex";
import Ethos from "./src/components/ethos";
import Header from "./src/components/header";
import FeaturedWorks from "./src/components/featured-work";
import Services from "./src/components/Services";
import LetsCreateTogether from "./src/components/LetsCreateTogether";
import ScrollEffect from "./src/components/ScrollEffect";

export const metadata = {
  title: "Boutique Interior Design Studio in Dubai",
  description:
    "IDST is a boutique interior design studio based in Dubai, creating unique and timeless spaces for F&B, retail, and residential clients.",
  openGraph: {
    title: "Boutique Interior Design Studio in Dubai",
    description: "A curated design journey - from vision to reality.",
    url: "https://idst-xu51.vercel.app/",
    images: [
      {
        url: "https://assets.vercel.com/image/upload/v1607554378/nextjs/Icon_light_background.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <ScrollEffect>
        <Header />
      </ScrollEffect>

      <div className="border-x border-black mx-5 md:mx-10">
        <ScrollEffect delay={0.1}>
          <SyncedSlideshow />
        </ScrollEffect>

        <ScrollEffect delay={0.2}>
          <Ethos />
        </ScrollEffect>

        <FeaturedWorks />

        <ScrollEffect delay={0.4}>
          <Services />
        </ScrollEffect>

        <ScrollEffect delay={0.5}>
          <LetsCreateTogether />
        </ScrollEffect>
      </div>
    </>
  );
}