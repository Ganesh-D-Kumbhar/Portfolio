"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code, Gamepad2, Home, Shield, CheckSquare, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState, useRef } from "react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const Projects = () => {
  const projects = [
    {
      image: "/images/quiz-master.webp",
      title: "Quiz Master",
      description:
        "Learn and grow with Quiz Master – Quizzes made fun and engaging!",
      link: "https://ganesh-d-kumbhar.github.io/Quiz-Master/",
      icon: Code,
      category: "Education",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    // {
    //   image: "/placeholder.svg?height=400&width=600",
    //   title: "Speed Typer Pro",
    //   description:
    //     "Boost your typing speed with Speed Typer Pro – Type like a pro!",
    //   link: "https://ganesh-d-kumbhar.github.io/Speed-Typer-Pro/",
    //   icon: Code,
    //   category: "Productivity",
    //   tech: ["React", "CSS", "JavaScript"],
    // },
    {
      image: "/images/snake-game.webp",
      title: "Snake Game",
      description:
        "Relive the classic Snake Game – Fast-paced, fun, and timeless!",
      link: "https://ganesh-d-kumbhar.github.io/Snake-Game/",
      icon: Gamepad2,
      category: "Game",
      tech: ["HTML5", "Canvas", "JavaScript"],
    },
    {
      image: "/images/dream-homes.webp",
      title: "Dream Homes",
      description:
        "Explore stunning Dream Homes – Find the perfect place today!",
      link: "https://ganesh-d-kumbhar.github.io/Dream-Homes/",
      icon: Home,
      category: "Real Estate",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/data-ghost.webp",
      title: "Data Ghost",
      description:
        "Show off your inner genius with Data Ghost – The ultimate prank!",
      link: "https://ganesh-d-kumbhar.github.io/Data-Ghost",
      icon: Shield,
      category: "Entertainment",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/task-tracker.webp",
      title: "Task Tracker",
      description:
        "Track and manage your tasks with ease – Stay organized daily!",
      link: "https://ganesh-d-kumbhar.github.io/Task-Tracker/",
      icon: CheckSquare,
      category: "Productivity",
      tech: ["React", "Local Storage", "CSS"],
    },
  ]

  const autoplayRef = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }))

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1, // Always scroll one at a time
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [autoplayRef.current],
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  const handleMouseEnter = useCallback(() => {
    if (autoplayRef.current) {
      autoplayRef.current.stop()
      setIsAutoplayPaused(true)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (autoplayRef.current) {
      autoplayRef.current.play()
      setIsAutoplayPaused(false)
    }
  }, [])

  return (
    <section className="min-h-screen relative bg-black px-4 sm:px-6 lg:px-8" id="projects">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Explore my latest work and creative solutions</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={prevBtnDisabled}
              className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-indigo-400/20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-8 z-10 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={nextBtnDisabled}
              className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-indigo-400/20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] cursor-pointer">
                    <motion.div

                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-[500px] mx-2"
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                        {/* Floating Elements */}
                        <div className="absolute top-4 left-4">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs font-semibold bg-indigo-500/30 text-indigo-200 rounded-full border border-indigo-400/40 backdrop-blur-md shadow-lg"
                          >
                            {project.category}
                          </motion.span>
                        </div>

                        <div className="absolute top-4 right-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="p-2 bg-black/60 rounded-full backdrop-blur-md border border-indigo-400/30 shadow-lg"
                          >
                            <IconComponent className="w-5 h-5 text-indigo-400" />
                          </motion.div>
                        </div>

                        {/* Overlay Pattern */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative z-10">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-md border border-gray-600 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 backdrop-blur-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 border border-indigo-400/20 cursor-pointer"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-600/10"></div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollTo(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30"
                : "bg-gray-600 hover:bg-gray-500"
                }`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center gap-2 mt-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isAutoplayPaused ? "bg-yellow-500" : "bg-indigo-500 animate-pulse"
              }`}
            ></div>
            <span className="text-xs text-gray-400">{isAutoplayPaused ? "Paused" : "Auto-playing"}</span>
          </div>
        </motion.div> */}

        {/* Bottom CTA */}
        <div className="w-full flex justify-center mt-4">
          <motion.a
            href="https://github.com/Ganesh-D-Kumbhar"
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-400 mb-6 text-center">Want to see more of my work?</p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500 hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2 w-[240px]"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.a>
        </div>

      </div>
    </section>
  )
}

export default Projects
