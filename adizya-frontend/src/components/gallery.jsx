"use client"
import TiltedCard from "./TiltedCard.jsx"

const defaultImages = [
  { src: "/imgs/gallery/gallery1.png", alt: "Gallery Photo 1" },
  { src: "/imgs/gallery/gallery2.png", alt: "Gallery Photo 2" },
  { src: "/imgs/gallery/gallery3.png", alt: "Gallery Photo 3" },
  { src: "/imgs/gallery/gallery4.png", alt: "Gallery Photo 4" },
  { src: "/imgs/gallery/gallery8.png", alt: "Gallery Photo 8" },
  { src: "/imgs/gallery/gallery9.png", alt: "Gallery Photo 9" },
  { src: "/imgs/gallery/gallery5.png", alt: "Gallery Photo 5" },
  { src: "/imgs/gallery/gallery6.png", alt: "Gallery Photo 6" },
  { src: "/imgs/gallery/gallery10.png", alt: "Gallery Photo 10" },
  { src: "/imgs/gallery/gallery7.png", alt: "Gallery Photo 7" },
]

function Gallery({ title = "PREVIOUS ADIZYA", images = defaultImages }) {
  return (
    <div
      style={{
        backgroundImage: "url(/imgs/gallery-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section aria-labelledby="gallery-title" className="w-full py-10 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" >
          <header className="mb-6 sm:mb-8 md:mb-10">
            <h2
              id="gallery-title"
              className="text-pretty silver-font text-left font-serif text-4xl tracking-wide md:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
          </header>

          {/* Responsive bento grid exactly matching spans */}
          <div
            className="
              grid grid-cols-2 gap-4
              md:grid-cols-4 md:grid-rows-11 md:gap-6
              md:max-h-[95vh]
            "

            role="list"
            aria-label="gallery-grid"
          >
            {/* 1 */}
            <div className="md:row-span-4" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[0].src}
                altText={defaultImages[0].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 2 */}
            <div className="md:col-span-2 md:row-span-3" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[1].src}
                altText={defaultImages[1].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 3 */}
            <div className="md:row-span-5 md:col-start-4" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[2].src}
                altText={defaultImages[2].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 4 */}
            <div className="md:row-span-2 md:col-start-1 md:row-start-5" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[3].src}
                altText={defaultImages[3].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 5 */}
            <div className="md:row-span-2 md:col-start-1 md:row-start-7" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[4].src}
                altText={defaultImages[4].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 6 */}
            <div className="md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-9" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[5].src}
                altText={defaultImages[5].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 7 */}
            <div className="md:row-span-5 md:col-start-2 md:row-start-4" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[6].src}
                altText={defaultImages[6].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 8 */}
            <div className="md:row-span-6 md:col-start-3 md:row-start-4" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[7].src}
                altText={defaultImages[7].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 9 */}
            <div className="md:row-span-2 md:col-start-3 md:row-start-10" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[8].src}
                altText={defaultImages[8].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* 10 */}
            <div className="md:row-span-5 md:col-start-4 md:row-start-6" role="listitem">
              <TiltedCard
                className="h-full w-full rounded-2xl overflow-hidden"
                imageSrc={defaultImages[9].src}
                altText={defaultImages[9].alt}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
            <div className="md:row-span-1 md:col-start-4 md:row-start-11 col-span-2" role="listitem">
                <p className="hellas-font text-lg">
                the memories that Adizya has bestowed to everyone who was a part of it !

                </p>
            </div>
          </div>

          <p className="sr-only">Gallery of photos arranged in a responsive bento grid.</p>
        </div>
      </section>
    </div>
  )
}

export default Gallery
