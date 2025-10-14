import LogoLoad from "@/components/LogoLoad";

import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import EntwinedPage from "@/components/entwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
    <LogoLoad />
    <AboutUs id="about" />
      <EntwinedPage />
      <AcknowledgementsPage />
     <FAQ/> 
    <Gallery id="gallery" />
    
    
    </>
  );
}
