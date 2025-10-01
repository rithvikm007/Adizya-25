"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const workshops = [
  {
    id: 1,
    title: "POTTERY WORKSHOP",
    img: "/imgs/event1.jpg",
    color: "#e07a5f",
    borderColor: "#b85d42",
    info: "Learn traditional pottery techniques",
    date: "March 15, 2024",
    timings: "10:00 AM - 4:00 PM",
    menu: "Light refreshments included",
  },
  {
    id: 2,
    title: "ARCHITECTURAL WORKSHOP",
    img: "/imgs/event2.jpg",
    color: "#3d405b",
    borderColor: "#2a2d3f",
    info: "Explore modern architectural design",
    date: "March 22, 2024",
    timings: "9:00 AM - 5:00 PM",
    menu: "Lunch and coffee provided",
  },
  {
    id: 3,
    title: "DIGITAL ART WORKSHOP",
    img: "/imgs/event3.jpg",
    color: "#81b29a",
    borderColor: "#5d8270",
    info: "Master digital illustration techniques",
    date: "March 29, 2024",
    timings: "11:00 AM - 3:00 PM",
    menu: "Snacks and beverages available",
  },
  {
    id: 4,
    title: "CULINARY WORKSHOP",
    img: "/imgs/event4.jpg",
    color: "#f4a261",
    borderColor: "#d18843",
    info: "Cook gourmet dishes with expert chefs",
    date: "April 5, 2024",
    timings: "2:00 PM - 6:00 PM",
    menu: "Full course meal included",
  },
  {
    id: 5,
    title: "PHOTOGRAPHY WORKSHOP",
    img: "/imgs/event5.jpg",
    color: "#264653",
    borderColor: "#1a3038",
    info: "Capture stunning portraits and landscapes",
    date: "April 12, 2024",
    timings: "8:00 AM - 2:00 PM",
    menu: "Continental breakfast provided",
  },
]

export default function WorkshopSlider() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideRef = useRef(null)
  const pauseTimeoutRef = useRef(null)

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
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [])

  const nextWorkshop = () => {
    setIndex((prev) => (prev + 1) % workshops.length)
  }

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf6e3]"
      style={{
        backgroundImage: "url(/imgs/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-6xl tracking-wider mb-6 text-[#19213E] silver-font ml-10 mt-5 text-left">
        EVENTS AND WORKSHOPS
      </h1>

      <div className="flex flex-col items-center w-full">
        <div className="relative w-[90%] h-[800px] overflow-hidden rounded-2xl">
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-24 z-10">
            {workshops.map((w, i) => (
              <button
                key={w.id}
                onClick={() => selectWorkshop(i)}
                className={`w-24 h-24 rounded-full transition-all duration-300 ${
                  i === index ? "border-8 shadow-lg scale-105" : "border-2 hover:scale-105"
                }`}
                style={{
                  backgroundColor: w.color,
                  borderColor: w.borderColor,
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute w-full h-full flex"
            >
              <div className="w-2/3 flex justify-center p-8">
                <img
                  src={current.img || "/placeholder.svg"}
                  alt={current.title}
                  className="w-full h-4/5 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div
                className="flex-1 flex flex-col justify-center p-6 text-black"
                style={{ backgroundColor: current.color,
                  backgroundImage: "url(/imgs/background.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                 }}
              >
                <h2 className="text-4xl pearl-font font-bold">{current.title}</h2>
                <ul className="mt-6 space-y-3 hellas-font text-xl">
                  <li>
                    <span className="font-semibold">Info:</span> {current.info}
                  </li>
                  <li>
                    <span className="font-semibold">Date:</span> {current.date}
                  </li>
                  <li>
                    <span className="font-semibold">Timings:</span> {current.timings}
                  </li>
                  <li>
                    <span className="font-semibold">Menu:</span> {current.menu}
                  </li>
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
