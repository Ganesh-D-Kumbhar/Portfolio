import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  Palette,
  TestTube,
  Layers,
  Zap,
  Cpu,
  FileCode,
  Braces,
  Chrome,
  Github,
  Sparkles,
  ArrowRight,
  Terminal,
  Workflow,
} from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"
import PopUpForm from "../forms/PopUpForm.jsx"
// Large Feature Card
const FeatureCard = ({ title, skills, icon: Icon, gradient }) => {
  return (
    <motion.div
      className="col-span-full md:col-span-2 row-span-1 md:row-span-2 relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className={`h-full min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden ${gradient} border border-indigo-500/20`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60" />

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white ml-3 md:ml-4">{title}</h3>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-300 mb-2" />
                <p className="text-white font-medium text-xs md:text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Compact Skill Card
const CompactCard = ({ skill, delay }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center">
            <skill.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full opacity-60" />
            ))}
          </div>
        </div>
        <h4 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">{skill.name}</h4>
        <p className="text-gray-400 text-xs md:text-sm">Advanced</p>
      </div>
    </motion.div>
  )
}

// Stats Card
const StatsCard = () => {
  return (
    <motion.div
      className="col-span-1 row-span-1 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden min-h-[150px] md:min-h-[200px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
      <div className="relative z-10">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white mb-3 md:mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">15+</h3>
        <p className="text-indigo-100 text-xs md:text-sm">Technologies Mastered</p>
      </div>
      <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full" />
    </motion.div>
  )
}

// Quote Card
const QuoteCard = () => {
  return (
    <motion.div
      className="col-span-1 row-span-1 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-6 relative overflow-hidden min-h-[150px] md:min-h-[200px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="relative z-10">
        <Terminal className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mb-3 md:mb-4" />
        <p className="text-white text-xs md:text-sm font-medium mb-1 md:mb-2">"Code is poetry written in logic"</p>
        <p className="text-gray-400 text-xs">- Developer Mindset</p>
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-2xl md:rounded-3xl" />
    </motion.div>
  )
}

const Skills = () => {
  const frontendSkills = [
    { name: "React", icon: Zap },
    { name: "TypeScript", icon: Code2 },
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Palette },
  ]

  const backendSkills = [
    { name: "Node.js", icon: Cpu },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: Github },
  ]

  const otherSkills = [
    { name: "JavaScript", icon: FileCode },
    { name: "Java", icon: Braces },
    { name: "Bootstrap", icon: Layers },
    { name: "jQuery", icon: Chrome },
    { name: "Testing", icon: TestTube },
    { name: "Redux", icon: Workflow },
  ]

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleDownloadClick = () => {
    setIsFormOpen(true)
  }

  return (
    <section className="relative min-h-screen py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 overflow-hidden bg-black w-full">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-300 text-xs md:text-sm font-medium">Technical Expertise</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            My <span className="text-indigo-500">Skills</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Transforming ideas into digital reality through cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Frontend Technologies - Large Card */}
          <FeatureCard
            title="Frontend"
            skills={frontendSkills}
            icon={Globe}
            gradient="bg-gradient-to-br from-indigo-600/80 to-blue-700/80"
          />

          {/* Stats Card */}
          <StatsCard />

          {/* Quote Card */}
          <QuoteCard />

          {/* Backend Technologies - Large Card */}
          <FeatureCard
            title="Backend"
            skills={backendSkills}
            icon={Database}
            gradient="bg-gradient-to-br from-purple-600/80 to-indigo-700/80"
          />
        </div>

        {/* Other Skills Grid */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Additional <span className="text-indigo-500">Technologies</span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherSkills.map((skill, index) => (
              <CompactCard key={skill.name} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300 cursor-pointer"
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadClick}
          >
            <span>Let's Build Something Amazing</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 180 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 40px rgba(99, 102, 241, 0.6)",
                "0 0 20px rgba(99, 102, 241, 0.3)",
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </motion.div>
      </div>
      <PopUpForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}

export default Skills
