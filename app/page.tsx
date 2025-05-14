import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"
import OurBrands from "@/components/our-brands"
import InteriorShowcase from "@/components/interior-showcase"
import EngineeringExpertise from "@/components/engineering-expertise"
import EnquiryForm from "@/components/enquiry-form"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Hero Section with Full Screen Image Carousel */}
      <section className="relative h-screen w-full">
        <ImageCarousel />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-2 tracking-wider uppercase">
              Welcome
            </h2>
            <h1 className="mb-6 text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl">
              SAYAN CONSTRUCTION
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
              Crafting Tomorrow's Skylines, Today.
            </p>
            <Button
              asChild
              className="relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <Link href="/portfolio">
                Explore Now
                <svg
                  className="ml-3 w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Engineering Expertise Section */}
      <EngineeringExpertise />

      {/* Interior Design Showcase */}
      <InteriorShowcase />

      {/* Our Other Brands */}
      <OurBrands />

      {/* Enquiry Form */}
      <EnquiryForm />
    </main>
  )
}
