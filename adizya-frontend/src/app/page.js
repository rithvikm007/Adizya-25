import Image from "next/image";
import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";

export default function Home() {
  return (
    <>
    <AboutUs id="about" />
    <Gallery id="gallery" />
    </>
  );
}
