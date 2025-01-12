'use client'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32 text-center">
      <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
        🚀 Welcome to my portfolio
        <svg
          className="ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        The easiest path to{" "}
        <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
          building amazing things
        </span>
      </h1>
      <p className="text-muted-foreground md:text-xl">
        I’m a Full Stack Developer with expertise in React, Angular, Node.js, and AWS. I specialize in building intuitive web applications, automating deployments, and integrating third-party APIs. With experience leading teams and optimizing workflows, I deliver efficient, user-focused solutions that drive business success.
      </p>
      <div className="flex gap-4">
        <Button 
          size="lg"
          className="rounded"
          onClick={() => {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
          View Projects
        </Button>
        <Button 
          size="lg" 
          className="rounded"
          variant="outline" 
          onClick={() => {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
          Get in Touch
        </Button>
      </div>
    </section>
  )
}

