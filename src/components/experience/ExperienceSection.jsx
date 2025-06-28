import { motion } from "framer-motion"
import { Calendar, MapPin, Building, TrendingUp, CheckCircle } from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Seven Mentor Corporate Services",
      position: "ReactJs Developer",
      type: "Full Time",
      location: "Pune, Maharashtra",
      duration: "Feb 2025 – Present",
      status: "Current",
      achievements: [
        "Led technical problem-solving with 15% bug reduction",
        "Enhanced workflows with Vite, 10% faster builds",
        "Conducted code reviews for scalability",
      ],
      skills: ["React.js", "Vite", "Leadership"],
    },
    {
      id: 2,
      company: "Seven Mentor Corporate Services",
      position: "ReactJs Developer",
      type: "Internship",
      location: "Pune, Maharashtra",
      duration: "Oct 2024 – Jan 2025",
      status: "Completed",
      achievements: [
        "Built scalable web apps, 25% performance boost",
        "Real-time issue resolution for client satisfaction",
        "Optimized development workflows with modern tools",
      ],
      skills: ["React.js", "Node.js", "MongoDB"],
    },
  ]

  return (
    <section className="py-8 relative bg-black" id="experience">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-indigo-500">1yr </span>Experience In Software Development</h2>
          <p className="text-gray-400">Professional journey & achievements</p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300">
                {/* Status & Type */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium  ${
                      exp.status === "Current"
                        ? "bg-green-500 text-white animate-pulse"
                        : "bg-gray-700/50 text-gray-300 border border-gray-600/30"
                    }`}
                  >
                    {exp.status === "Current" ? (
                      <TrendingUp className="w-3 h-3 inline mr-1 animate-bounce" />
                    ) : (
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                    )}
                    {exp.status}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">{exp.type}</span>
                </div>

                {/* Position & Company */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {exp.position}
                </h3>
                <h4 className="text-indigo-400 font-medium mb-4">{exp.company}</h4>

                {/* Duration & Location */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
