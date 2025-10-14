import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './styles/fonts.css';
import localFont from "next/font/local";

const silverCrown = localFont({
  src: "../../public/fonts/SILVER CROWN.ttf",
  variable: "--font-silvercrown",
});

const pearlJean = localFont({
  src: "../../public/fonts/PearlJean.ttf",
  variable: "--font-pearljean",
});

const hellasFun = localFont({
  src: "../../public/fonts/hellasfun-plain.ttf",
  variable: "--font-hellasfun",
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adizya 25",
  description: "NIT Calicut Architecture Fest",
  icons: {
    icon: "/imgs/adizya.svg", // Path inside the public/ folder
    shortcut: "/imgs/adizya.svg",
    apple: "/imgs/adizya.svg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
