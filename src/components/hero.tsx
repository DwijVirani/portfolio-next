import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32 text-center">
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
      <p className="max-w-[700px] text-muted-foreground md:text-xl">
        I create beautiful, responsive, and user-friendly websites and applications
        using modern technologies and best practices.
      </p>
      <div className="flex gap-4">
        <Button size="lg">View Projects</Button>
        <Button size="lg" variant="outline">Get in Touch</Button>
      </div>
    </section>
  )
}

