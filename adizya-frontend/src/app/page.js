import LogoLoad from "@/components/LogoLoad";

import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
    <LogoLoad />
    <AboutUs id="about" />
     <FAQ/> 
    <Gallery id="gallery" />
    </>
  );
}
