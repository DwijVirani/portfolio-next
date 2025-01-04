'use client'

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-2xl text-primary">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden md:inline-flex rounded" onClick={openResume}>
            Resume
          </Button>
          {/* <Button onClick={() => router.push('#contact')}>
            Contact Me
          </Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="#about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#skills">Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={openResume}>
                Resume
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

