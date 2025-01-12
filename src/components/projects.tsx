import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 highlighting its main functionalities.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["TypeScript", "Node.js", "Express"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Project 3",
    description: "Explaining the purpose and technologies used in Project 3.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Vuex", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore a collection of my recent work, showcasing my skills in web and mobile development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="default">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

