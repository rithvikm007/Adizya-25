"use client"

import { useRef, useState } from "react"

export default function TiltedCard({
  imageSrc,
  altText = "",
  captionText,
  containerHeight = "100%",
  containerWidth = "100%",
  imageHeight = "100%",
  imageWidth = "100%",
  rotateAmplitude = 12,
  scaleOnHover = 1.08,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
  className = "", // remove trailing comma after the last parameter to avoid parse errors
}) {
  const ref = useRef(null)
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")
  const [isHover, setIsHover] = useState(false)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    const rx = (py - 0.5) * (rotateAmplitude * 2)
    const ry = (0.5 - px) * (rotateAmplitude * 2)
    const scale = isHover ? scaleOnHover : 1
    setTransform(`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`)
  }

  const handleEnter = () => {
    setIsHover(true)
  }

  const handleLeave = () => {
    setIsHover(false)
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)")
  }

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl overflow-hidden will-change-transform transition-transform duration-150 ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 120ms ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      title={showTooltip && captionText ? captionText : undefined}
      aria-label={captionText || altText}
      role="img"
    >
      {/* Image */}
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={altText || captionText || "Gallery image"}
        className="h-full w-full object-cover"
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
        crossOrigin="anonymous"
      />

      {/* Overlay content */}
      {(displayOverlayContent || captionText) && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}

      {displayOverlayContent && overlayContent && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white text-sm">{overlayContent}</div>
      )}

      {!displayOverlayContent && captionText && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white text-sm">{captionText}</div>
      )}

      {showMobileWarning && (
        <div className="md:hidden absolute top-2 right-2 rounded bg-black/60 px-2 py-1 text-[10px] text-white">
          Tilt works best on desktop
        </div>
      )}
    </div>
  )
}
