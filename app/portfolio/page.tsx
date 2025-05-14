import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    {
      id: "skyscrapers",
      name: "Skyscrapers",
      projects: [
        { id: 1, name: "Sayan Tower", location: "Mumbai", year: "2022" },
        { id: 2, name: "Horizon Heights", location: "Delhi", year: "2021" },
        { id: 3, name: "Sky Pinnacle", location: "Bangalore", year: "2020" },
      ],
    },
    {
      id: "airports",
      name: "Airports",
      projects: [
        { id: 1, name: "Metro International Airport", location: "Chennai", year: "2023" },
        { id: 2, name: "Regional Air Terminal", location: "Kolkata", year: "2021" },
      ],
    },
    {
      id: "complex",
      name: "Complex",
      projects: [
        { id: 1, name: "Sayan Business Park", location: "Hyderabad", year: "2022" },
        { id: 2, name: "Urban Square Mall", location: "Pune", year: "2021" },
        { id: 3, name: "Tech Hub Complex", location: "Gurgaon", year: "2020" },
      ],
    },
    {
      id: "hospitals",
      name: "Hospitals",
      projects: [
        { id: 1, name: "Sayan Medical Center", location: "Mumbai", year: "2023" },
        { id: 2, name: "City General Hospital", location: "Delhi", year: "2022" },
      ],
    },
    {
      id: "colleges",
      name: "Colleges",
      projects: [
        { id: 1, name: "Engineering Institute", location: "Bangalore", year: "2021" },
        { id: 2, name: "Business School Campus", location: "Chennai", year: "2020" },
        { id: 3, name: "Science & Technology Center", location: "Hyderabad", year: "2019" },
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Our Portfolio</h1>
        <p className="text-muted-foreground">Explore our previous works across various construction sectors</p>
      </div>

      <Tabs defaultValue="skyscrapers" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project) => (
                <div key={project.id} className="overflow-hidden rounded-lg border bg-card shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=${category.name}+${project.id}`}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  )
}
