"use client"

import { useState, useEffect } from "react"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header")
      const sticky = window.scrollY > 100

      setIsSticky(sticky)
      if (header) {
        header.classList.toggle("sticky", sticky)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <a href="#" className="logo">
        <p id="dev">Developer</p>GK
      </a>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className="active"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#home")
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#about")
          }}
        >
          About
        </a>
        <a
          href="#certifications"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#certifications")
          }}
        >
          Certifications
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#projects")
          }}
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#skills")
          }}
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#contact")
          }}
        >
          Contact
        </a>
      </nav>

      <img
        id="mode"
        src={darkMode ? "/images/sun.png" : "/images/moon.png"}
        alt="theme toggle"
        onClick={toggleDarkMode}
      />

      <div
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: window.innerWidth <= 768 ? "block" : "none" }}
      >
        ☰
      </div>
    </header>
  )
}

export default Header
