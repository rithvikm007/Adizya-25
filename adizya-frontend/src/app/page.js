import LogoLoad from "@/components/LogoLoad";
import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import EntwinedPage from "@/components/entwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <LogoLoad />
      <AboutUs id="about" />
      <EntwinedPage />
      <AcknowledgementsPage />
      <FAQ />
      <Gallery id="gallery" />
    </div>
  );
}
