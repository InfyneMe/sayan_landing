import Image from "next/image"
import Link from "next/link"

export default function OurBrands() {
  const brands = [
    {
      id: 1,
      name: "Loadzo",
      logo: "/placeholder.svg?height=200&width=200&text=Sayan+Homes",
      description: "Bricks. Roads. On the Go.",
      url: "https://sayan-store-i7ec.vercel.app/",
    },
    {
      id: 2,
      name: "Sayan Commercial",
      logo: "/placeholder.svg?height=200&width=200&text=Sayan+Commercial",
      description: "Office and retail space construction",
    },
    {
      id: 3,
      name: "Sayan Infrastructure",
      logo: "/placeholder.svg?height=200&width=200&text=Sayan+Infrastructure",
      description: "Roads, bridges and public infrastructure",
    },
    {
      id: 4,
      name: "Hoomi",
      logo: "/placeholder.svg?height=200&width=200&text=Sayan+Interiors",
      description: "Style Your Space, Love Your Place.",
    },
  ]

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Other Brands</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            The Sayan Group encompasses specialized divisions to serve diverse construction needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => {
            // If brand has a url, wrap in Link, otherwise just div
            const content = (
              <div
                key={brand.id}
                className="flex flex-col items-center rounded-lg bg-gray-800 p-6 text-center transition-transform hover:scale-105 cursor-pointer"
              >
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-white">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{brand.name}</h3>
                <p className="text-gray-400">{brand.description}</p>
              </div>
            )

            return brand.url ? (
              <Link key={brand.id} href={brand.url} target="_blank" rel="noopener noreferrer">
                {content}
              </Link>
            ) : (
              <div key={brand.id}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
