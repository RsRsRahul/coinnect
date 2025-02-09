"use client"

import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import LoginDialog from "./login-dialog"
import { number } from "zod"

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [loginUser, setLoginUser] = useState();

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
        <div 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 flex flex-wrap" >
       <img src="/coinnect-favicon.png" alt="coinnect-favicon" height="30" width="30" style={{ marginRight: '6px' }} />
          Coinnect
        </div>
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" className="text-gray-300 hover:text-blue-400 transition-colors">
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-blue-400 transition-colors">
           <a href="#about"> About</a>
          </Button> */}
            <Button variant="ghost" className="text-gray-300 hover:text-blue-400 transition-colors">
              <a href="/dashboard">Dashboard</a>
            </Button>
            <LoginDialog/>
        </div>
      </div>
    </nav>
  )
}

export default FloatingNav

