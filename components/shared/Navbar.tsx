"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-[#0a2647] p-4 flex items-center justify-between">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 mr-2 text-white"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="text-white text-xl font-bold">ELITE DIGITS</span>
      </div>
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <Button variant="secondary">Book now</Button>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#0a2647] text-white">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Book now</Button>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  )
}