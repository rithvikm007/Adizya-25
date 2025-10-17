"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QRCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative h-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[index]}
            alt={`QR ${index + 1}`}
            width={220}
            height={220}
            className="rounded-lg shadow-md w-50 sm:w-62 md:w-70 lg:w-82 h-auto"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </>
      )}

      <div className="flex space-x-2 mt-2 justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-gray-800 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
