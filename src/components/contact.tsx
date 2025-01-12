import { Phone, Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Phone className="h-6 w-6" />
                Phone
              </CardTitle>
              <CardDescription>Give me a call</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <a href="tel:+12269989245" className="text-3xl font-bold hover:text-pink-600 transition-colors">
                +1 (226) 998-9245
              </a>
            </CardContent>
          </Card>
          <Card className="flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Mail className="h-6 w-6" />
                Email
              </CardTitle>
              <CardDescription>Send me an email</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <a href="mailto:dwijvirani23@gmail.com" className="text-3xl font-bold hover:text-pink-600 transition-colors">
                dwijvirani23@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

