import Image from "next/image"
import './LogoLoad.css';
import localFont from "next/font/local";


const silverCrown = localFont({
  src: '../../public/fonts/SILVER CROWN.ttf'
});
const hornset = localFont({
  src: '../../public/fonts/Hornset.ttf'
});

const pearlJean = localFont({
  src: '../../public/fonts/PearlJean.ttf'
})

export default function LogoLoad() {
    return <main className="h-full">
        <section className="relative">
        <div className="w-full flex flex-col justify-center items-center gap-y-10 absolute z-10 top-0 h-full fade-in-el">
          <h1 className={"md:text-9xl text-6xl text-(--color-headers) " + silverCrown.className}>Adizya  25</h1>
          <h4 className={"md:text-4xl text-2xl text-(--color-headers) " + pearlJean.className}>24TH, 25TH, 26TH OCTOBER</h4>
          <h3 className={"text-[#363636] text-4xl tracking-wider md:text-6xl " + hornset.className}>NIT CALICUT</h3>
        </div>
          <video width="100%" className="fade-out-el"
        autoPlay muted playsInline>
        
        <source 
          src="/output.webm" 
          type="video/webm" />
        </video>

        </section>
    </main>
}