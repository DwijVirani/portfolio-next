import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "ScaleCapacity",
    companyUrl: "https://www.scalecapacity.com/",
    period: "2024 - Present",
    description: "Lead the frontend development team in creating cutting-edge web applications using React and Next.js. Implemented state-of-the-art UI/UX designs and improved overall performance."
  },
  {
    title: "Full Stack Developer/Team Lead",
    company: "Bexcode Services",
    companyUrl: "https://bexcodeservices.com/",
    period: "2022 - 2024",
    description: "Developed and maintained full-stack applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions."
  },
  {
    title: "Backend Developer",
    company: "Pixer Digital",
    companyUrl: "https://pixer.io/",
    period: "2021 - 2022",
    description: "Enhanced ERP software by integrating APIs, automating GST reporting, and designing a scheduling interface, improving efficiency and user experience for business operations."
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
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
                    <p className="text-sm text-muted-foreground">{exp.company} | <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{exp.company}</a> | {exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

