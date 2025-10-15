"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import localFont from "next/font/local"

const pearlJean = localFont({
  src: "../../public/fonts/pearl-jean.ttf",
  display: "swap",
})

const silverCrown = localFont({
  src: "../../public/fonts/SILVER_CROWN.ttf",
  display: "swap",
})

const FAQ = () => {
  const [selectedFAQIndex, setSelectedFAQIndex] = useState(-1)

  const faqs = [
    {
      question: "How can I register for events?",
      answer:
        "Registrations are available through the official Adizya website as well as through social media handles. Each competition or workshop page/post includes a direct registration link and details about eligibility, deadlines, and submission formats.",
    },
    {
      question: "Are there any registration fees?",
      answer:
        "Some competitions and workshops may have limited entry or material fees, while others are free to participate in. Packages are also available with subsidised prices. Detailed fee information is provided on each event page. Outstation students would have to pay for accommodation that would be specified while registering.",
    },
    {
      question: "Will accommodation be provided for participants from other colleges?",
      answer:
        "Yes. Outstation participants can avail accommodation facilities arranged by the organizers, subject to prior registration and availability. Details regarding accommodation will be shared closer to the fest dates.",
    },
    {
      question: "What can I expect from Adizya as a student?",
      answer:
        "Adizya provides you with a platform to interact with prominent professionals and like-minded peers, acquaint yourselves with the fresh concepts and insights and hone your skills with our exclusively curated workshops and competitions! Be sure to avail KTU and activity points for participation and winning!",
    },
  ]

  return (
    <div className="w-full flex flex-col gap-10 bg-[var(--secondary-color)] p-8 lg:p-20 bg-[url('/imgs/herobg.webp')] bg-cover bg-center bg-no-repeat  text-black">
      <h1 className={`${silverCrown.className} text-8xl ml-8`}>FAQ</h1>
      <div className={`${pearlJean.className} flex flex-col text-3xl`}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`width-100 ${index === 0 ? "border-t-2" : ""} border-black border-b-2 cursor-pointer`}
            onClick={() => {
              selectedFAQIndex === index ? setSelectedFAQIndex(-1) : setSelectedFAQIndex(index)
            }}
          >
            <div className="flex justify-between items-center gap-4 p-4 text-xl md:text-2xl lg:text-4xl">
              <h2 className="m-0 flex-1">{faq.question}</h2>
              <div className="flex-shrink-0 flex items-center justify-center">
                <FaChevronDown
                  className={`text-xl lg:text-3xl transition-transform duration-300 ${
                    index === selectedFAQIndex ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                index === selectedFAQIndex ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              aria-hidden={index !== selectedFAQIndex}
              style={{ willChange: "grid-template-rows, opacity" }}
            >
              <div className="overflow-hidden">
                <h3 className="p-4 font-extralight text-sm md:text-lg lg:text-xl pt-0 pl-8">{faq.answer}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
