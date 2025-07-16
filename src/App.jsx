import { useState, useEffect, useRef } from "react"
import axios from "axios"
import Navbar from "./components/navbar/Navbar.jsx"
import Home from "./components/home/Home.jsx"
import About from "./components/about/About.jsx"
import Certifications from "./components/certifcations/Certifications.jsx"
import Projects from "./components/projects/Projects.jsx"
import Skills from "./components/skills/Skills.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"
import ToastProvider from "./components/toaster/ToastProvider.jsx"
import ExperienceSection from "./components/experience/ExperienceSection.jsx"
import EducationSection from "./components/education/EducationSection.jsx"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Refs for each section
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const skillsRef = useRef(null)
  const certificationsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // Apply dark/bright mode
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "bright"
    document.getElementById("root").className = darkMode ? "dark-mode" : "bright"
  }, [darkMode])

  // Scroll tracking logic using refs
  useEffect(() => {
    const handleScroll = () => {
      const sectionRefs = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "education", ref: educationRef },
        { id: "skills", ref: skillsRef },
        { id: "certifications", ref: certificationsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]

      const scrollPosition = window.scrollY

      for (let section of sectionRefs) {
        const el = section.ref.current
        if (el) {
          const offsetTop = el.offsetTop - 150
          const offsetBottom = offsetTop + el.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Wake up server logic
  useEffect(() => {
    const wakeServer = async () => {
      try {
        await axios.get("https://portfolio-form-backend-t69y.onrender.com/api/wake-up", {
          timeout: 5000,
        })
      } catch (err) {
        // Ignore silently
      }
    }

    wakeServer()
  }, [])

  return (
    <div id="bd" className={darkMode ? "dark-mode" : "bright relative !overflow-x-hidden"}>
      <ToastProvider />
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        sectionRefs={{
          home: homeRef,
          about: aboutRef,
          experience: experienceRef,
          education: educationRef,
          skills: skillsRef,
          certifications: certificationsRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={experienceRef}><ExperienceSection /></div>
      <div ref={educationRef}><EducationSection /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={certificationsRef}><Certifications /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
