import ProjectInquiryForm from "../src/components/Project-Inquiry-form";
import { Manrope } from "next/font/google";
import LetsConnect from "../src/components/LetsConnect";
import ConnectThreeImages from "../src/components/Connect-three-Images";
import LetsCreateTogether from "../src/components/LetsCreateTogether";
import ScrollEffect from "../src/components/ScrollEffect";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Connect() {
  return (
    <>
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
    </>
  );
}
