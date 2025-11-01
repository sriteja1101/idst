import ProjectInquiryForm from "../src/components/Project-Inquiry-form";
import { Manrope } from "next/font/google";
import LetsConnect from "../src/components/LetsConnect";
import ConnectThreeImages from "../src/components/Connect-three-Images";
import LetsCreateTogether from "../src/components/LetsCreateTogether";
import ScrollEffect from "../src/components/ScrollEffect";
import Header from "../src/components/header";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Connect() {
  return (
    <div>
      <Header />
      <div className="border-x border-black mx-10">
        <ScrollEffect>
          <LetsConnect />
        </ScrollEffect>
        <ScrollEffect>
          <ProjectInquiryForm />
        </ScrollEffect>
        <ScrollEffect>
          <ConnectThreeImages />
        </ScrollEffect>
        <ScrollEffect>
          <LetsCreateTogether />
        </ScrollEffect>
      </div>
    </div>
  );
}
