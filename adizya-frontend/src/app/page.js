import LogoLoad from "@/components/LogoLoad";

import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";

export default function Home() {
  return (
    <>
    <LogoLoad />
    <AboutUs id="about" />
    <Gallery id="gallery" />
    </>
  );
}
