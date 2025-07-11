import { useState } from "react"

export const SkillCard = ({ name, percentage, icon: Icon, delay, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group cursor-pointer opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 rounded-2xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(45deg, rgb(117, 78, 249), transparent, rgb(117, 78, 249))",
          filter: "blur(8px)",
        }}
      />

      {/* Main Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full">
        {/* Icon Container */}
        <div
          className="flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto hover:rotate-360 hover:scale-110 transition-all duration-600"
          style={{
            background: "linear-gradient(135deg, rgb(117, 78, 249), rgb(147, 108, 255))",
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Skill Name */}
        <h3 className="text-3xl font-bold text-center mb-6 text-white">{name}</h3>

        {/* Circular Progress */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgb(117, 78, 249)"
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px rgb(117, 78, 249))",
                strokeDasharray: "314",
                strokeDashoffset: `${314 - (314 * percentage) / 100}`,
                transition: "stroke-dashoffset 2s ease-out",
                transitionDelay: `${delay + 500}ms`,
              }}
            />
          </svg>
          {/* Percentage Text */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 animate-scale-in"
            style={{ animationDelay: `${delay + 1000}ms` }}
          >
            <span className="text-2xl font-bold text-white">{percentage}%</span>
          </div>
        </div>

        {/* Skill Level Bar */}
        <div className="relative">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full animate-progress-bar"
              style={{
                background: "linear-gradient(90deg, rgb(117, 78, 249), rgb(147, 108, 255))",
                animationDelay: `${delay + 800}ms`,
              }}
            />
          </div>
        </div>

        {/* Floating Dots */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 5}%`,
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

