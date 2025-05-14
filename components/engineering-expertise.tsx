import { Building2, HardHat, Ruler, Award, Users } from "lucide-react"

export default function EngineeringExpertise() {
  const expertiseAreas = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Structural Engineering",
      description: "Expert structural analysis and design for buildings of all scales",
    },
    {
      icon: <HardHat className="h-10 w-10" />,
      title: "Construction Management",
      description: "Efficient project management from planning to completion",
    },
    {
      icon: <Ruler className="h-10 w-10" />,
      title: "Architectural Design",
      description: "Innovative and functional architectural solutions",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Quality Assurance",
      description: "Rigorous quality control throughout the construction process",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Expert Team",
      description: "Highly qualified engineers and construction professionals",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engineering Excellence</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We are well known for our team of expert engineers who bring innovation and precision to every project
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-transform hover:scale-105"
            >
              <div className="mb-4 rounded-full bg-yellow-100 p-3 text-yellow-600">{area.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{area.title}</h3>
              <p className="text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
