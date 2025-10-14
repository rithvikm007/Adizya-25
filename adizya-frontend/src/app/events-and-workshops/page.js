"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Loading from "@/components/Loading"


const WorkshopDesc1 = () => (
  <div className="hellas-font text-lg sm:text-xl lg:text-2xl space-y-2">
    <p><span className="font-semibold">Date-</span> 24th october</p>
    <p><span className="font-semibold">Time-</span> 2:00 to 4:00 PM</p>
    <p><span className="font-semibold">Reg fee-</span> Rs 250</p>
  </div>
)

const WorkshopDesc2 = () => (
  <div className="hellas-font text-base sm:text-xl lg:text-2xl space-y-2">
    <p><span className="font-semibold">Date-</span> 25th- 2:00- 4:00</p>
    <p><span className="font-semibold invisible">Date-</span> 26th- 2:00- 5:00</p>
    <p><span className="font-semibold">Reg fee-</span> single- Rs 400</p>
    <p><span className="font-semibold invisible">Reg fee-</span> pair- Rs 700</p>
  </div>
)

const WorkshopDesc3 = () => (
  <div className="hellas-font text-base sm:text-lg lg:text-2xl space-y-2">
    <p><span className="font-semibold">Date-</span> 25th October</p>
    <p><span className="font-semibold">Time-</span> 4:00- 6:00PM</p>
    <p><span className="font-semibold">Hand building-</span> single entry: Rs 200</p>
    <p><span className="font-semibold invisible">Hand building-</span> pair entry: Rs 350</p>
    <p><span className="font-semibold">Wheel Pottery-</span> single entry: Rs 250</p>
    <p><span className="font-semibold invisible">Wheel Pottery-</span> pair entry: Rs 400</p>
  </div>
)

const WorkshopDesc4 = () => (
  <div className="hellas-font text-base sm:text-lg lg:text-2xl space-y-2">
    <p><span className="font-semibold">Date-</span> April 5, 2024</p>
    <p><span className="font-semibold">Time-</span> 2:00 PM - 6:00 PM</p>
    <p><span className="font-semibold">Reg fee-</span> Rs 600</p>
  </div>
)

const WorkshopDesc5 = () => (
  <div className="hellas-font text-base sm:text-lg lg:text-2xl space-y-2">
    <p><span className="font-semibold">Date-</span> April 12, 2024</p>
    <p><span className="font-semibold">Time-</span> 8:00 AM - 2:00 PM</p>
    <p><span className="font-semibold">Reg fee-</span> Rs 450</p>
  </div>
)

const workshops = [
  {
    id: 1,
    title: "PYROGRAPHY",
    subtitle: "FIREART WORKSHOP",
    img1: "/imgs/events-workshops/pyro1.png",
    img2: "/imgs/events-workshops/pyro2.png",
    img3: "/imgs/events-workshops/pyro3.png",
    color: "#D7570E",
    secColor: "#953600",
    instructor: "Arta Raituma",
    desc: <WorkshopDesc1 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" }
    ]
  },
  {
    id: 2,
    title: "BEYOND THE SHOT",
    subtitle: "PHOTOGRAPHY LECTURE & WORKSHOP",
    img1: "/imgs/events-workshops/bts1.png",
    img2: "/imgs/events-workshops/bts2.png",
    img3: "/imgs/events-workshops/bts3.png",
    color: "#DF913E",
    secColor: "#8E4E09",
    instructor: "Fabien Charau",
    desc: <WorkshopDesc2 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" }
    ]
  },
  {
    id: 3,
    title: "TERRACRAFT",
    subtitle: "POTTERY WORKSHOP",
    img1: "/imgs/events-workshops/terra1.png",
    img2: "/imgs/events-workshops/terra2.png",
    img3: "",
    color: "#EECE7B",
    secColor: "#CBA045",
    instructor: "Plant Aura",
    desc: <WorkshopDesc3 />,
    contacts: [
      { name: "Reyan", phone: "+91 80893 40470" },
      { name: "Hanna", phone: "+91 85890 01961" }
    ]
  },
  {
    id: 4,
    title: "CULINARY",
    subtitle: "WORKSHOP",
    img1: "/imgs/event4.jpg",
    img2: "",
    img3: "",
    color: "#849E17",
    secColor: "#516307",
    instructor: "Chef Mike",
    date: "April 5, 2024",
    timings: "2:00 PM - 6:00 PM",
    fee: "Rs 600",
    contacts: [
      { name: "Contact", phone: "+91 12345 67890" }
    ]
  },
  {
    id: 5,
    title: "PHOTOGRAPHY",
    subtitle: "WORKSHOP",
    img1: "/imgs/event5.jpg",
    img2: "",
    img3: "",
    color: "#6777B5",
    secColor: "#304081",
    instructor: "Photo Pro",
    date: "April 12, 2024",
    timings: "8:00 AM - 2:00 PM",
    fee: "Rs 450",
    contacts: [
      { name: "Contact", phone: "+91 12345 67890" }
    ]
  },
]

export default function WorkshopSlider() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const autoSlideRef = useRef(null)
  const pauseTimeoutRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % workshops.length)
      }, 5000)
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [isPaused])

  useEffect(() => {
    setImageIndex(0)
  }, [index])

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  const selectWorkshop = (newIndex) => {
    if (newIndex !== index) {
      setDirection(newIndex > index ? 1 : -1)
      setIndex(newIndex)
      setIsPaused(true)
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 30000)
    }
  }

  const current = workshops[index]
  const images = [current.img1, current.img2, current.img3].filter(img => img !== "")

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      y: isMobile ? (direction > 0 ? 300 : -300) : 0,
      x: isMobile ? 0 : (direction > 0 ? 300 : -300),
      opacity: 0,
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: isMobile ? (direction > 0 ? -300 : 300) : 0,
      x: isMobile ? 0 : (direction > 0 ? -300 : 300),
      opacity: 0,
    }),
  }

  const imageSlideVariants = {
    enter: {
      x: 100,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0,
    },
  }

  return loading ? <Loading/> : (
    <div
      className="flex flex-col overflow-x-hidden bg-[#f9eac6]"
      style={{
        backgroundImage: "url(/imgs/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl sm:text-6xl tracking-wider mb-4 sm:mb-6 text-[#19213E] silver-font px-4 lg:ml-10 mt-6 sm:mt-8 lg:text-left text-center">
        EVENTS AND WORKSHOPS
      </h1>
          {/* Navigation Circles - Mobile (Right side vertical) */}
          <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/3 flex flex-col space-y-4 z-30">
            {workshops.map((w, i) => (
              <button
                key={w.id}
                onClick={() => selectWorkshop(i)}
                className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index ? "border-4 shadow-lg scale-110" : "border-2 hover:scale-105"
                }`}
                style={{
                  backgroundColor: w.color,
                  borderColor: w.secColor,
                }}
                aria-label={`View ${w.title}`}
              />
            ))}
          </div>

        

      <div className="flex flex-col items-center w-full lg:pl-12 px-4 sm:px-6 lg:px-0">
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
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full h-full">
                {/* Desktop View - Multiple Images */}
                <div className="hidden lg:flex w-full lg:w-2/3 justify-center items-start px-4">
                  <img
                    src={current.img1}
                    alt={`${current.title} - Image 1`}
                    className="w-1/3 h-full object-cover rounded-lg mx-1 shadow-lg"
                  />
                  {current.img2 !== "" && (
                    <img
                      src={current.img2}
                      alt={`${current.title} - Image 2`}
                      className="w-1/3 h-full object-cover rounded-lg mx-1 shadow-lg"
                    />
                  )}
                  {current.img3 !== "" && (
                    <img
                      src={current.img3}
                      alt={`${current.title} - Image 3`}
                      className="w-1/3 h-full object-cover rounded-lg mx-1 shadow-lg"
                    />
                  )}
                </div>

                {/* Mobile View - Image Slider */}
                <div className="lg:hidden relative w-full h-64 sm:h-80 md:h-96">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIndex}
                      src={images[imageIndex]}
                      alt={`${current.title} - Image ${imageIndex + 1}`}
                      variants={imageSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" 
                          onClick={() => setIsPaused(true)}
                        />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" 
                          onClick={() => setIsPaused(true)}
                        />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === imageIndex ? "bg-white w-6" : "bg-white/60"
                            }`}
                            aria-label={`View image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Info Section - Desktop */}
                <div className="hidden lg:flex absolute right-0 lg:w-1/3 lg:h-full translate-x-0 lg:translate-x-4">
                  <div
                    className="w-full flex flex-col justify-between p-6 rounded-xl text-black h-full"
                    style={{ backgroundColor: current.color }}
                  >
                    {/* Title */}
                    <div>
                      <h2 className="text-5xl pearl-font font-bold text-[#19213E] leading-tight">
                        {current.title}-
                      </h2>
                      <p className="text-2xl hellas-font text-[#19213E] mt-1">
                        {current.subtitle}
                      </p>
                      <p className="text-3xl font-bold hellas-font">
                        <span className="font-bold">by-</span> {current.instructor}
                      </p>
                    </div>

                    {/* Info */}
                    <div className="hellas-font text-2xl space-y-3 flex-grow flex flex-col justify-center">
                      <div className="flex flex-col justify-center">
                      {current.desc}
                    </div>
                      <div>
                        <p className="font-semibold">Contact-</p>
                        {current.contacts.map((contact, idx) => (
                          <p key={idx}>
                            {contact.name}: {contact.phone}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Register Button */}
                    <button
                      className="w-full py-4 rounded-lg text-xl font-semibold hover:opacity-90 transition-opacity mt-4"
                        style={{ backgroundColor: current.secColor, color: "#000" }}
                    >
                      register here
                    </button>
                  </div>
                </div>

                {/* Info Section - Mobile */}
                <div
                  className="lg:hidden w-full flex flex-col justify-between p-6 rounded-xl text-black"
                  style={{ backgroundColor: current.color }}
                >
                  {/* Title */}
                  <div className="mb-4">
                    <h2 className="text-3xl sm:text-4xl pearl-font font-bold text-[#19213E] leading-tight">
                      {current.title}-
                    </h2>
                    <p className="text-xl sm:text-2xl hellas-font text-[#19213E] mt-1">
                      {current.subtitle}
                    </p>
                    <p className="font-bold text-2xl hellas-font">
                      <span className="font-semibold">by-</span> {current.instructor}
                    </p>
                  </div>

                  {/* Info */}
                  <div className="hellas-font text-base sm:text-lg space-y-2 mb-4">
                    <div className="flex-grow flex flex-col justify-center">
                      {current.desc}
                    </div>
                    <div>
                      <p className="font-semibold">Contact-</p>
                      {current.contacts.map((contact, idx) => (
                        <p key={idx}>
                          {contact.name}: {contact.phone}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    className="w-full py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:opacity-90 transition-opacity"
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
      {/* Navigation Circles - Desktop (Bottom horizontal) */}
          <div className="hidden lg:flex justify-center space-x-24 z-30 p-8">
            {workshops.map((w, i) => (
              <button
                key={w.id}
                onClick={() => selectWorkshop(i)}
                className={`w-24 h-24 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index ? "border-8 shadow-lg scale-105" : "border-2 hover:scale-105"
                }`}
                style={{
                  backgroundColor: w.color,
                  borderColor: w.secColor,
                }}
                aria-label={`View ${w.title}`}
              />
            ))}
          </div>
    </div>
  )
}