import Image from "next/image";
import SyncedSlideshow from "./src/components/slidex";
import Ethos from "./src/components/ethos";
import Header from "./src/components/header";
import FeaturedWorks from "./src/components/featured-work";
import Services from "./src/components/Services";
import LetsCreateTogether from "./src/components/LetsCreateTogether";
import ScrollEffect from "./src/components/ScrollEffect";

export default function Home() {
  return (
    <>
      <ScrollEffect>
        <Header />
      </ScrollEffect>

      <div className="border-x border-black mx-10">
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
