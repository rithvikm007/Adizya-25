"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Loading from "@/components/Loading";
import localFont from "next/font/local";

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  display: "swap",
})

const pearlJean = localFont({
  src: "../../../public/fonts/pearl-jean.ttf",
  display: "swap",
})

const silverCrown = localFont({
  src: "../../../public/fonts/SILVER_CROWN.ttf",
  display: "swap",
})

const WorkshopDesc1 = () => (
  <div className={`${hellasFun.className} text-lg sm:text-xl lg:text-2xl space-y-2`}>
    <p><span className="font-semibold">Date-</span> 24th October</p>
    <p><span className="font-semibold">Time-</span> 2:00 to 4:00 PM</p>
    <p><span className="font-semibold">Reg fee-</span> Rs 250</p>
  </div>
);

const WorkshopDesc2 = () => (
  <div className={`${hellasFun.className} text-base sm:text-xl lg:text-2xl space-y-2`}>
    <p><span className="font-semibold">Date-</span> 25th - 2:00-4:00</p>
    <p><span className="font-semibold invisible">Date-</span> 26th - 2:00-5:00</p>
    <p><span className="font-semibold">Reg fee-</span> single- Rs 400</p>
    <p><span className="font-semibold invisible">Reg fee-</span> pair- Rs 700</p>
  </div>
);

const WorkshopDesc3 = () => (
  <div className={`${hellasFun.className} text-base sm:text-lg lg:text-2xl space-y-2`}>
    <p><span className="font-semibold">Date-</span> 25th October</p>
    <p><span className="font-semibold">Time-</span> 4:00-6:00 PM</p>
    <p><span className="font-semibold">Hand building-</span> single entry: Rs 200</p>
    <p><span className="font-semibold invisible">Hand building-</span> pair entry: Rs 350</p>
    <p><span className="font-semibold">Wheel Pottery-</span> single entry: Rs 250</p>
    <p><span className="font-semibold invisible">Wheel Pottery-</span> pair entry: Rs 400</p>
  </div>
);

// --- Workshop Data ---
const workshops = [
  {
    id: 1,
    title: "PYROGRAPHY",
    subtitle: "FIREART WORKSHOP",
    imgs: ["/imgs/events-workshops/pyro1.webp", "/imgs/events-workshops/pyro2.webp", "/imgs/events-workshops/pyro3.webp"],
    color: "#D7570E",
    secColor: "#953600",
    instructor: "Arta Raituma",
    desc: <WorkshopDesc1 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" },
    ],
  },
  {
    id: 2,
    title: "BEYOND THE SHOT",
    subtitle: "PHOTOGRAPHY LECTURE & WORKSHOP",
    imgs: ["/imgs/events-workshops/bts1.webp", "/imgs/events-workshops/bts2.webp", "/imgs/events-workshops/bts3.webp"],
    color: "#DF913E",
    secColor: "#8E4E09",
    instructor: "Fabien Charau",
    desc: <WorkshopDesc2 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" },
    ],
  },
  {
    id: 3,
    title: "TERRACRAFT",
    subtitle: "POTTERY WORKSHOP",
    imgs: ["/imgs/events-workshops/terra1.webp", "/imgs/events-workshops/terra2.webp"],
    color: "#EECE7B",
    secColor: "#CBA045",
    instructor: "Plant Aura",
    desc: <WorkshopDesc3 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" },
    ],
  },
  {
    id: 4,
    title: "CULINARY",
    subtitle: "WORKSHOP",
    imgs: ["/imgs/event4.webp"],
    color: "#849E17",
    secColor: "#516307",
    instructor: "Chef Mike",
    desc: (
      <div className={`${hellasFun.className} text-base sm:text-lg lg:text-2xl space-y-2`}>
        <p><span className="font-semibold">Date-</span> April 5, 2024</p>
        <p><span className="font-semibold">Time-</span> 2:00 PM - 6:00 PM</p>
        <p><span className="font-semibold">Reg fee-</span> Rs 600</p>
      </div>
    ),
    contacts: [{ name: "Contact", phone: "+91 12345 67890" }],
  },
  {
    id: 5,
    title: "PHOTOGRAPHY",
    subtitle: "WORKSHOP",
    imgs: ["/imgs/event5.webp"],
    color: "#6777B5",
    secColor: "#304081",
    instructor: "Photo Pro",
    desc: (
      <div className={`${hellasFun.className} text-base sm:text-lg lg:text-2xl space-y-2`}>
        <p><span className="font-semibold">Date-</span> April 12, 2024</p>
        <p><span className="font-semibold">Time-</span> 8:00 AM - 2:00 PM</p>
        <p><span className="font-semibold">Reg fee-</span> Rs 450</p>
      </div>
    ),
    contacts: [{ name: "Contact", phone: "+91 12345 67890" }],
  },
];

export default function WorkshopSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const autoSlideRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const current = workshops[index];
  const images = useMemo(() => current.imgs || [], [current]);

  // --- Initial Load ---
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // --- Detect Mobile ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Auto Slide ---
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % workshops.length);
      }, 6000);
    }
    return () => clearInterval(autoSlideRef.current);
  }, [isPaused]);

  // --- Reset on manual select ---
  const selectWorkshop = (newIndex) => {
    if (newIndex !== index) {
      setDirection(newIndex > index ? 1 : -1);
      setIndex(newIndex);
      setImageIndex(0);
      setIsPaused(true);
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 30000);
    }
  };

  // --- Animations ---
  const slideVariants = {
    enter: (dir) => ({
      y: isMobile ? (dir > 0 ? 200 : -200) : 0,
      x: isMobile ? 0 : (dir > 0 ? 200 : -200),
      opacity: 0,
    }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: (dir) => ({
      y: isMobile ? (dir > 0 ? -200 : 200) : 0,
      x: isMobile ? 0 : (dir > 0 ? -200 : 200),
      opacity: 0,
    }),
  };

  const imageSlideVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return loading ? <Loading /> : (
    <div
      className="flex flex-col overflow-x-hidden bg-[#f9eac6]"
      style={{
        backgroundImage: "url(/imgs/background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={`text-5xl sm:text-6xl tracking-wider mb-4 sm:mb-6 text-[#19213E] ${silverCrown.className} px-4 lg:ml-10 mt-6 sm:mt-8 lg:text-left text-center`}>
        EVENTS AND WORKSHOPS
      </h1>

      {/* --- Mobile Navigation Circles --- */}
      <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/3 flex flex-col space-y-4 z-30">
        {workshops.map((w, i) => (
          <button
            key={w.id}
            onClick={() => selectWorkshop(i)}
            className={`w-10 h-10 rounded-full border-2 cursor-pointer transition-all duration-300 ${
              i === index ? "border-4 shadow-lg scale-110" : "hover:scale-105"
            }`}
            style={{ backgroundColor: w.color, borderColor: w.secColor }}
            aria-label={`View ${w.title}`}
          />
        ))}
      </div>

      {/* --- Main Content --- */}
      <div className="flex flex-col items-center w-full lg:pl-12 px-4 mb-6 sm:px-6 lg:px-0">
        <div className="relative w-full h-auto lg:h-[700px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
                {/* --- Desktop: Static Images --- */}
                <div className="hidden lg:flex w-full lg:w-2/3 justify-center items-start px-4">
                  {images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${current.title} ${i + 1}`}
                      width={500}
                      height={700}
                      priority={i === 0}
                      className="w-1/3 h-full object-cover rounded-lg mx-1 shadow-lg"
                    />
                  ))}
                </div>

                {/* --- Mobile: Animated Image Slider --- */}
                <div className="lg:hidden relative w-full h-64 sm:h-80 md:h-96">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imageIndex}
                      variants={imageSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[imageIndex]}
                        alt={`${current.title} ${imageIndex + 1}`}
                        fill
                        sizes="100vw"
                        className="object-cover rounded-lg shadow-lg"
                        priority={imageIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setImageIndex((p) => (p - 1 + images.length) % images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                      </button>
                      <button
                        onClick={() => setImageIndex((p) => (p + 1) % images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImageIndex(i)}
                            className={`w-2 h-2 rounded-full ${
                              i === imageIndex ? "bg-white w-6" : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* --- Info Section --- */}
                <div
                  className="w-full lg:w-1/3 flex flex-col justify-between p-6 rounded-xl text-black"
                  style={{ backgroundColor: current.color }}
                >
                  <div>
                    <h2 className={`text-5xl ${pearlJean.className} font-bold text-[#19213E] leading-tight`}>
                      {current.title}-
                    </h2>
                    <p className={`text-2xl ${hellasFun.className} text-[#19213E] mt-1`}>
                      {current.subtitle}
                    </p>
                    <p className={`text-3xl font-bold ${hellasFun.className}`}>
                      <span className="font-bold">by-</span> {current.instructor}
                    </p>
                  </div>

                  <div className={`${hellasFun.className} text-xl lg:text-2xl space-y-3 mt-4 flex-grow`}>
                    {current.desc}
                    <div>
                      <p className="font-semibold">Contact-</p>
                      {current.contacts.map((c, i) => (
                        <p key={i}>
                          {c.name}: {c.phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  <button
                    className="w-full py-4 rounded-lg text-xl font-semibold hover:opacity-90 transition-opacity mt-4"
                    style={{ backgroundColor: current.secColor, color: "#000" }}
                  >
                    register here
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- Desktop Navigation --- */}
      <div className="hidden lg:flex justify-center space-x-24 z-30 p-8">
        {workshops.map((w, i) => (
          <button
            key={w.id}
            onClick={() => selectWorkshop(i)}
            className={`w-24 h-24 rounded-full border-2 transition-all duration-300 ${
              i === index ? "border-8 shadow-lg scale-105" : "hover:scale-105"
            }`}
            style={{ backgroundColor: w.color, borderColor: w.secColor }}
          />
        ))}
      </div>
    </div>
  );
}
