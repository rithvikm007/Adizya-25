// components/Loading.jsx
"use client"
import { motion } from "framer-motion"

export default function Loading() {
  const spinnerColors = ["#D7570E", "#DF913E", "#EECE7B", "#849E17", "#6777B5"]

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#f9eac6] z-50">
      <div className="absolute w-32 h-32 flex justify-around items-center">
        {spinnerColors.map((color, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ y: ["0%", "-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: i * 0.1,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
