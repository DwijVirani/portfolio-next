import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Backend",
    skills: ["Node.js", "Typescript", "Python", "Express.js", "GraphQL", "Kotlin", "Swift"]
  },
  {
    title: "Frontend",
    skills: ["Javascript", "Angular", "React.js", "Next.js", "Typescript"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "Redis", "Firebase Firestore"]
  },
  {
    title: "DevOps",
    skills: ["AWS", "CI/CD", "Jenkins", "Gitlab", "MS Azure"]
  },
  {
    title: "Tools & Methodologies",
    skills: ["Agile", "Git", "GitHub", "Azure"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

