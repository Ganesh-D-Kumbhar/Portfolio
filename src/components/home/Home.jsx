import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Linkedin, Github, Instagram, Download, Code, Palette, Video, Monitor, Mail } from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx";
import PopUpForm from "../forms/PopUpForm.jsx";
const professions = [
  { name: "Web Developer", icon: Monitor },
  { name: "Programmer", icon: Code },
  { name: "Web Designer", icon: Palette },
  { name: "Video Editor", icon: Video },
]

export default function Home() {
  const [angle, setAngle] = useState(0)
  const [currentProfession, setCurrentProfession] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 90)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleDownloadClick = () => {
    setIsFormOpen(true)
  }
  const [isResume, setIsResume] = useState(false)

  return (
    <section id="home" className="relative max-h[100vh-84px] bg-black flex items-center overflow-hidden mt-16 lg:mt-20">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-8 relative z-10 mt-4 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 opacity-0 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-3 opacity-0 animate-slide-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">Hello, I am</h3>

              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="inline-block bg-gradient-to-r from-[rgb(117,78,249)] to-[rgba(117,78,249,0.8)] bg-clip-text text-transparent">
                    Ganesh
                  </span>
                  <span className="text-white ">Kumbhar</span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <div
              className="space-y-4 lg:space-y-6 max-w-2xl opacity-0 animate-slide-in"
              style={{ animationDelay: "400ms" }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-[rgb(117,78,249)]">Fullstack Web Developer</span> who loves to
                create beautiful and functional websites for people who want to make a difference in the world.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                I am currently working at <span className="font-medium">SevenMentor Pvt. Ltd.</span> as a <br />
                <span className="font-semibold text-[rgb(117,78,249)]">React Developer since Oct 2024</span>
              </p>
            </div>

            {/* Mobile Professions Display */}
            <div className="lg:hidden opacity-0 animate-slide-in" style={{ animationDelay: "500ms" }}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {professions.map((profession, index) => (
                  <div
                    key={profession.name}
                    className="flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-[rgb(117,78,249)] min-h-[100px] opacity-0 animate-fade-in hover:scale-105 hover:bg-[rgb(117,78,249)] transition-all duration-300"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <profession.icon className="w-6 h-6 mb-2 text-white" />
                    <h3 className="text-sm font-semibold text-center leading-tight text-[rgb(117,78,249)]">
                      {profession.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 sm:space-x-6 opacity-0 animate-slide-in" style={{ animationDelay: "600ms" }}>
              {[
                { href: "https://www.linkedin.com/in/ganesh-d-kumbhar", icon: Linkedin },
                { href: "https://github.com/Ganesh-D-Kumbhar", icon: Github },
                {
                  href: "https://www.instagram.com/ganesh_kumbhar_211/profilecard/?igsh=MXFzbTNjNDJvcXByOA==",
                  icon: Instagram,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-2 bg-white/5 backdrop-blur-sm rounded-full border-2 border-[rgb(117,78,249)] transition-all duration-300 hover:bg-[rgb(117,78,249)] hover:border-white hover:scale-110"
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="flex items-center justify-start gap-[50px]">
              <div className="opacity-0 animate-slide-in" style={{ animationDelay: "800ms" }}>
                <div
                  className="inline-flex items-center px-6 py-3 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 bg-[rgb(117,78,249)] shadow-[0_20px_40px_rgba(117,78,249,0.3)] border border-white cursor-pointer hover:scale-105 hover:shadow-[0_25px_50px_rgba(117,78,249,0.4)]"
                  onClick={() => {
                    handleDownloadClick()
                    setIsResume(true)
                  }}
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  Download CV
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Desktop Only */}
          <div
            className="hidden lg:flex relative items-center justify-center h-[700px] opacity-0 animate-slide-in"
            style={{ animationDelay: "300ms" }}
          >
            {/* Custom Overlay Shape */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[50vh] border-r-[350px] border-b-[50vh] border-l-[350px] border-t-[rgb(117,78,249)] border-r-[rgb(117,78,249)] border-b-[rgb(117,78,249)] border-l-transparent -mr-[120px] !z-30 overflow-hidden" />

            {/* Home Image - Positioned to align bottom with overlay shape bottom */}
            <div className="absolute bottom-0 left-[180px] pointer-events-none min-w-[580px] max-h-screen !z-40">
              <img src="/images/home.png" alt="Profile" className="w-full h-auto" />
            </div>

            {/* Profession Container */}
            <div className="relative w-full h-full flex items-center justify-center z-20">
              <div
                className="relative w-[500px] h-[500px] transition-transform duration-500 ease-in-out"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                {/* Circle Border */}
                <div className="absolute inset-8 rounded-full border-4 border-[rgb(117,78,249)]" />

                {/* Profession Items */}
                {professions.map((profession, index) => {
                  const stepAngle = index * 90 - 90
                  const radius = 200
                  const x = Math.cos((stepAngle * Math.PI) / 180) * radius
                  const y = Math.sin((stepAngle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={profession.name}
                      className="absolute flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-[rgb(117,78,249)] min-w-[140px] min-h-[100px] z-10 transition-all duration-500 hover:scale-110 hover:bg-[rgb(117,78,249)]"
                      style={{
                        left: `calc(50% + ${x}px - 70px)`,
                        top: `calc(50% + ${y}px - 50px)`,
                        transform: `rotate(${-angle}deg)`, // Counter-rotate
                      }}
                    >
                      <profession.icon className="w-8 h-8 mb-2 text-white" />
                      <h3 className="text-sm font-semibold text-center leading-tight text-[rgb(117,78,249)]">
                        {profession.name}
                      </h3>
                    </div>
                  )
                })}
              </div>

              {/* Center Glow */}
              <div className="absolute w-32 h-32 rounded-full blur-2xl opacity-20 bg-[rgb(117,78,249)] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      <PopUpForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} isResume={isResume} />
    </section>
  )
}
