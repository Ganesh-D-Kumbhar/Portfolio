import { useState, useEffect } from "react"
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

  useEffect(() => {
    // Apply dark mode class to body
    document.body.className = darkMode ? "dark-mode" : "bright"
    document.getElementById("root").className = darkMode ? "dark-mode" : "bright"
  }, [darkMode])

  useEffect(() => {
    window.scrollTo(0, 0)
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

  // free server wake up logic 
  useEffect(() => {
    const wakeServer = async () => {
      try {
        await axios.get("https://portfolio-form-backend-t69y.onrender.com/api/wake-up", {
          timeout: 5000, // Don't wait too long
        });
        console.log("✅ Wake-up ping sent successfully");
      } catch (err) {
        console.log("⚠️ Wake-up ping failed. Likely server is cold and starting up.");
      }
    };

    wakeServer();
  }, []);

  // end ****

  return (
    <div id="bd" className={darkMode ? "dark-mode" : "bright relative !overflow-x-hidden"}>
      <ToastProvider />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      <Home />
      <About />
      <ExperienceSection />
      <EducationSection />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
