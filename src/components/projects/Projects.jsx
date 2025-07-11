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
      description: "Learn and grow with Quiz Master – Quizzes made fun and engaging!",
      link: "https://ganesh-d-kumbhar.github.io/Quiz-Master/",
      icon: Code,
      category: "Education",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/quick-cart.webp",
      title: "Quick-Cart",
      description:
        "A responsive e-commerce platform with dynamic product listings, cart functionality, and seamless user experience.",
      link: "https://quick-cart-silk-theta.vercel.app/",
      icon: Code,
      category: "Productivity",
      tech: ["React", "CSS", "JavaScript"],
    },
    {
      image: "/images/snake-game.webp",
      title: "Snake Game",
      description: "Relive the classic Snake Game – Fast-paced, fun, and timeless!",
      link: "https://ganesh-d-kumbhar.github.io/Snake-Game/",
      icon: Gamepad2,
      category: "Game",
      tech: ["HTML5", "Canvas", "JavaScript"],
    },
    {
      image: "/images/dream-homes.webp",
      title: "Dream Homes",
      description: "Explore stunning Dream Homes – Find the perfect place today!",
      link: "https://dream-homes-alpha.vercel.app/",
      icon: Home,
      category: "Real Estate",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/data-ghost.webp",
      title: "Data Ghost",
      description: "Show off your inner genius with Data Ghost – The ultimate prank!",
      link: "https://ganesh-d-kumbhar.github.io/Data-Ghost",
      icon: Shield,
      category: "Entertainment",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/images/task-tracker.webp",
      title: "Task Tracker",
      description: "Track and manage your tasks with ease – Stay organized daily!",
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
      slidesToScroll: 1,
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
    <section className="min-h-screen relative pb-8 bg-black px-4 sm:px-6 lg:px-8" id="projects">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Explore my latest work and creative solutions</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button
              onClick={scrollPrev}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={prevBtnDisabled}
              className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-indigo-400/20 cursor-pointer hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-8 z-10">
            <button
              onClick={scrollNext}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              disabled={nextBtnDisabled}
              className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-indigo-400/20 cursor-pointer hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] cursor-pointer"
                  >
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 h-[500px] mx-2 hover:scale-105"
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
                        <div className="absolute top-4 right-4">
                          <div className="p-2 bg-black/60 rounded-full backdrop-blur-md border border-indigo-400/30 shadow-lg hover:rotate-360 transition-transform duration-500">
                            <IconComponent className="w-5 h-5 text-indigo-400" />
                          </div>
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
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-md border border-gray-600 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 border border-indigo-400/20 cursor-pointer hover:scale-105"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-600/10"></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-120 ${
                index === selectedIndex
                  ? "bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="w-full flex justify-center mt-4">
          <a
            href="https://github.com/Ganesh-D-Kumbhar"
            target="_blank"
            className="flex flex-col items-center opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
            rel="noreferrer"
          >
            <p className="text-gray-400 mb-6 text-center">Want to see more of my work?</p>
            <button className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500 hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2 w-[240px] hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
              <span>View All Projects</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
