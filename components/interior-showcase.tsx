import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InteriorShowcase() {
  const interiorProjects = [
    {
      id: 1,
      title: "Modern Minimalist",
      description: "Clean lines and open spaces define this contemporary design",
      image: "/placeholder.svg?height=600&width=800&text=Interior+Design+1",
    },
    {
      id: 2,
      title: "Luxury Residence",
      description: "Elegant interiors with premium materials and finishes",
      image: "/placeholder.svg?height=600&width=800&text=Interior+Design+2",
    },
    {
      id: 3,
      title: "Urban Apartment",
      description: "Smart space utilization with stylish urban aesthetics",
      image: "/placeholder.svg?height=600&width=800&text=Interior+Design+3",
    },
    {
      id: 4,
      title: "Corporate Office",
      description: "Productive and inspiring workplace environments",
      image: "/placeholder.svg?height=600&width=800&text=Interior+Design+4",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Interior Design Excellence</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Beautiful living and working spaces designed with attention to detail and functionality
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {interiorProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View All Interior Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
