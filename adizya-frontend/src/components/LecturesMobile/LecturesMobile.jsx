import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import localFont from "next/font/local";

const silverCrown = localFont({
  src: "../../../public/fonts/SILVER_CROWN.ttf",
  variable: "--font-silver-crown",
});

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellas-fun",
});

export default function CircularProfileGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);

  const profiles = [
    {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
      description:
        "Passionate about creating intuitive user experiences and leading design systems. 8+ years of experience in tech startups and Fortune 500 companies.",
    },
    {
      name: "Marcus Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      description:
        "Building scalable web applications with React and Node.js. Open source enthusiast and tech speaker at major conferences.",
    },
    {
      name: "Elena Rodriguez",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop",
      description:
        "Strategic marketing leader with a record of driving 300% growth. Specializing in digital transformation and brand strategy.",
    },
    {
      name: "David Kim",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop",
      description:
        "Transforming data into insights. PhD in Machine Learning from MIT. Published researcher with 20+ papers.",
    },
  ];

  const animateToIndex = (newIndex, direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    const rotate = direction === "next" ? 15 : -15;
    const offset = direction === "next" ? 80 : -80;

    tl.to(cardRef.current, {
      rotateY: rotate,
      opacity: 0,
      x: offset,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .call(() => setSelectedIndex(newIndex))
      .fromTo(
        cardRef.current,
        { rotateY: -rotate, x: -offset, opacity: 0 },
        { rotateY: 0, x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
  };

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" }
    );
  }, []);

  const rotateLeft = () =>
    animateToIndex(
      (selectedIndex - 1 + profiles.length) % profiles.length,
      "prev"
    );
  const rotateRight = () =>
    animateToIndex((selectedIndex + 1) % profiles.length, "next");

  const current = profiles[selectedIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/imgs/background.png')] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden">
      <h1
        className={`${silverCrown.className} absolute top-8 text-5xl md:text-7xl text-slate-200 tracking-wider`}
      >
        GUESTS & MEMBERS
      </h1>

      <button
        onClick={rotateLeft}
        disabled={isAnimating}
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-black/20 border border-slate-400/50 hover:border-slate-200 transition-colors duration-300 backdrop-blur-md"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      <button   
        onClick={rotateRight}
        disabled={isAnimating}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-black/20 border border-slate-400/50 hover:border-slate-200 transition-colors duration-300 backdrop-blur-md"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      <div
        ref={cardRef}
        className="w-[90%] max-w-4xl bg-amber-100 shadow-xl rounded-2xl overflow-hidden transform-gpu"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img
              src={current.image}
              alt={current.name}
              className="h-64 md:h-full w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2
              className={`${hellasFun.className} text-4xl font-semibold mb-3 text-black`}
            >
              {current.name}
            </h2>
            <div className="h-0.5 w-16 mb-6 rounded-full bg-amber-900/50"></div>
            <p className="text-lg leading-relaxed text-black font-medium">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
