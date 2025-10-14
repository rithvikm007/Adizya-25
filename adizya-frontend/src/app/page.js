import LogoLoad from "@/components/LogoLoad";

import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import EntwinedPage from "@/components/entwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";
export default function Home() {
  return (
    <>
    <LogoLoad />
    <AboutUs id="about" />
      <EntwinedPage />
      <AcknowledgementsPage />
    <Gallery id="gallery" />
    
    
    </>
  );
}
