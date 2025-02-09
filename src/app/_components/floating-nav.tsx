"use client"

import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import LoginDialog from "./login-dialog"

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-950 bg-opacity-90 backdrop-blur-md" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Coinnect
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-blue-400 transition-colors">
            Features
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-blue-400 transition-colors">
            About
          </Button>
          <LoginDialog />
        </div>
      </div>
    </nav>
  )
}

export default FloatingNav

