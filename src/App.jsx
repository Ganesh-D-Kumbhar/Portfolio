"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Apply dark mode class to body
    document.body.className = darkMode ? "dark-mode" : "bright"
    document.getElementById("root").className = darkMode ? "dark-mode" : "bright"
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll("header nav a")

      sections.forEach((sec) => {
        const top = window.scrollY
        const offset = sec.offsetTop - 150
        const height = sec.offsetHeight
        const id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active")
          })
          const activeLink = document.querySelector(`header nav a[href*=${id}]`)
          if (activeLink) {
            activeLink.classList.add("active")
          }
          setActiveSection(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div id="bd" className={darkMode ? "dark-mode" : "bright"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
