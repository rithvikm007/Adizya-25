import LogoLoad from "@/components/LogoLoad";

import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import EatwinedPage from "@/components/eatwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";
export default function Home() {
  return (
    <>
    <LogoLoad />
    <AboutUs id="about" />
      <EatwinedPage />
      <AcknowledgementsPage />
    <Gallery id="gallery" />
    
    
    </>
  );
}
