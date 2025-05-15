"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  {
    src: "/landing3.jpg?height=1000&width=1920&text=Construction+Site+1",
    alt: "Construction site with cranes and workers",
  },
  {
    src: "/complex.jpg?height=1080&width=1920&text=Modern+Building",
    alt: "Modern building designed by Sayan Construction",
  },
  {
    src: "/office2.jpg?height=1080&width=1920&text=Skyscraper+Project",
    alt: "Skyscraper project in progress",
  },
  {
    src: "/cargo.jpg?height=1080&width=1920&text=Interior+Design",
    alt: "Interior design project by Sayan Construction",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover filter blur-[0.3px] transition-transform duration-1000"
          />
        </div>
      ))}
    </div>
  )
}
