import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Lead the frontend development team in creating cutting-edge web applications using React and Next.js. Implemented state-of-the-art UI/UX designs and improved overall performance."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions."
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description: "Started my career working on various client projects, focusing on responsive web design and basic JavaScript interactivity."
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
            }`}>
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

