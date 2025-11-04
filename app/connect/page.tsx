import ProjectInquiryForm from "../src/components/Project-Inquiry-form";
import { Manrope } from "next/font/google";
import LetsConnect from "../src/components/LetsConnect";
import ConnectThreeImages from "../src/components/Connect-three-Images";
import LetsCreateTogether from "../src/components/LetsCreateTogether";
import ScrollEffect from "../src/components/ScrollEffect";
import Header from "../src/components/header";

export const metadata = {
  title: "Connect - Boutique Interior Design Studio in Dubai",
  description:
    "Get in touch with IDST, a boutique interior design studio in Dubai. Let's create your next space together.",
  openGraph: {
    title: "Connect - Boutique Interior Design Studio in Dubai",
    description:
      "Get in touch with IDST, a boutique interior design studio in Dubai.",
    url: "https://idst-xu51.vercel.app/connect",
    images: [
      {
        url: "https://assets.vercel.com/image/upload/v1607554378/nextjs/Icon_light_background.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Connect() {
  return (
    <div>
      <Header />
      <div className="border-x border-black lg:mx-10 mx-5">
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