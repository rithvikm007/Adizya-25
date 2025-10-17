"use client";

import { useEffect } from "react";
import LogoLoad from "@/components/LogoLoad";
import AboutUs from "@/components/AboutUs/AboutUs";
import Gallery from "./gallery/page.temp";
import EntwinedPage from "@/components/entwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";

    // Enable scrolling after 6.5 seconds
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }, 6500);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, []);

  return (
    <>
      <Navbar />
      <LogoLoad />
      <AboutUs id="about" />
      <EntwinedPage />
      <AcknowledgementsPage />
      <FAQ />
      <Gallery id="gallery" />
    </>
  );
}
