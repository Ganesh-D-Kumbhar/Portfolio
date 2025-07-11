import { useState } from "react"
import {
  Code,
  Database,
  Layers,
  Award,
  ExternalLink,
  Sparkles,
  Trophy,
  Star,
  Zap,
  Target,
  BookOpen,
} from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const certifications = [
    {
      icon: Code,
      title: "JavaScript Basic",
      description:
        "Completed HackerRank's JavaScript Basics Certification demonstrates mastery of core JavaScript principles, essential for web development roles.",
      link: "https://www.hackerrank.com/certificates/15eb66c0e5e6",
      level: "Basic",
      provider: "HackerRank",
    },
    {
      icon: Database,
      title: "MySQL Basic",
      description:
        "HackerRank's MySQL Basics Certification demonstrates essential database skills, boosting employability in the tech industry with validated proficiency.",
      link: "https://www.hackerrank.com/certificates/d536ccb7004d",
      level: "Basic",
      provider: "HackerRank",
    },
    {
      icon: Layers,
      title: "React",
      description:
        "HackerRank's React Certification signifies proficiency in React, essential for front-end development roles, enhancing recognition and credibility in the industry.",
      link: "https://www.hackerrank.com/certificates/11f62b637b64",
      level: "Professional",
      provider: "HackerRank",
    },
    {
      icon: Code,
      title: "JavaScript Intermediate",
      description:
        "Completed HackerRank's JavaScript Intermediate Certification showcases advanced mastery, crucial for specialized web development roles and projects.",
      link: "https://www.hackerrank.com/certificates/81e4395e7632",
      level: "Intermediate",
      provider: "HackerRank",
    },
    {
      icon: Database,
      title: "MySQL Intermediate",
      description:
        "HackerRank's MySQL Intermediate Certification validates advanced expertise in database management and optimization, essential for specialized tech roles, elevating career prospects.",
      link: "https://www.hackerrank.com/certificates/1a96e24f8ef2",
      level: "Intermediate",
      provider: "HackerRank",
    },
    {
      icon: Award,
      title: "Employability & Skill Development",
      description:
        "TCS iON offers skill development programs for diverse industries, ensuring career readiness and employability.",
      link: "https://drive.google.com/file/d/1CTGFNNZnBSAc9bpOg7dpucbns5WX-tcB/view?usp=drivesdk",
      level: "Professional",
      provider: "TCS iON",
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Basic":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Professional":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="certifications" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Center - Main Header */}
          <div className="text-center flex-1 opacity-0 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Showcasing my commitment to continuous learning and professional excellence through industry-recognized
              certifications
            </p>

            {/* Stats */}
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{certifications.length}</div>
                <div className="text-indigo-400 text-sm">Certifications</div>
              </div>
              <div className="w-px h-12 bg-indigo-500/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-indigo-400 text-sm">Platforms</div>
              </div>
              <div className="w-px h-12 bg-indigo-500/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-indigo-400 text-sm">Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div
                key={index}
                className="group relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 hover:scale-105">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Level badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(cert.level)}`}
                  >
                    {cert.level}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {hoveredIndex === index && (
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-6 h-6 text-indigo-400 animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-indigo-400" />
                      <span className="text-indigo-300 text-sm font-medium">{cert.provider}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {cert.description}
                    </p>

                    {/* CTA Button */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 active:scale-95"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Award className="w-12 h-12 text-purple-500" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="inline-flex items-center gap-2 text-indigo-400 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>More certifications coming soon</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
