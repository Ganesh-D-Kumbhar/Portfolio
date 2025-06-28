import { motion } from "framer-motion"
import { useState } from "react"

export const SkillCard = ({ name, percentage, icon: Icon, delay, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, rgb(117, 78, 249), transparent, rgb(117, 78, 249))",
          filter: "blur(8px)",
        }}
        animate={isHovered ? { rotate: 360 } : {}}
        transition={{ duration: 2, ease: "linear", repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
      />

      {/* Main Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full">
        {/* Icon Container */}
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto"
          style={{
            background: "linear-gradient(135deg, rgb(117, 78, 249), rgb(147, 108, 255))",
          }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Skill Name */}
        <h3 className="!text-3xl font-bold text-center mb-6 text-white">{name}</h3>

        {/* Circular Progress */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            {/* Progress Circle */}
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgb(117, 78, 249)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: percentage / 100 }}
              transition={{ duration: 2, delay: delay + 0.5, ease: "easeOut" }}
              style={{
                filter: "drop-shadow(0 0 8px rgb(117, 78, 249))",
              }}
              strokeDasharray="314"
            />
          </svg>

          {/* Percentage Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 1 }}
          >
            <span className="text-2xl font-bold text-white">{percentage}%</span>
          </motion.div>
        </div>

        {/* Skill Level Bar */}
        <div className="relative">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, rgb(117, 78, 249), rgb(147, 108, 255))",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, delay: delay + 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Floating Dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 5}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
