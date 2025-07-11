import { useState } from "react"
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
  ArrowRight,
  Workflow,
  Star,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import ContactPopUpForm from "../forms/ContactPopUpForm.jsx"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const SkillCard = ({ title, skills, icon: Icon, gradient, delay = 0 }) => {
  return (
    <div className="group relative opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div
        className={`relative h-full min-h-[380px] rounded-2xl p-8 ${gradient} backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1`}
      >
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="relative">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="ml-5">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <div className="flex items-center mt-2">
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
              <ChevronRight className="w-4 h-4 text-indigo-400 ml-2" />
            </div>
          </div>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group/skill opacity-0 animate-fade-in"
              style={{ animationDelay: `${delay + index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-400/40 hover:bg-white/10 transition-all duration-200 hover:scale-105">
                <div className="flex items-center justify-between mb-3">
                  <skill.icon className="w-6 h-6 text-indigo-300" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-indigo-400 fill-current ml-0.5" />
                    ))}
                  </div>
                </div>
                <p className="text-white font-semibold">{skill.name}</p>
                <div className="w-full bg-white/10 rounded-full h-1.5 mt-3">
                  <div
                    className="h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-progress-bar"
                    style={{ animationDelay: `${delay + index * 100 + 500}ms` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Simplified Skill Item
const SkillItem = ({ skill, delay = 0 }) => {
  return (
    <div className="group opacity-0 animate-slide-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-xl p-5 hover:border-indigo-500/40 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
              <p className="text-indigo-300 text-sm font-medium">Expert Level</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-indigo-400 fill-current ml-0.5" />
              ))}
            </div>
            <div className="w-16 bg-white/10 rounded-full h-1">
              <div
                className="h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-progress-bar"
                style={{ animationDelay: `${delay + 300}ms` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Simplified Stats Card
const StatsCard = ({ stat, delay = 0 }) => {
  return (
    <div className="group relative opacity-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative bg-gray-900/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
        <div className="text-center">
          <div className="relative mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
              <stat.icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <h3
            className="text-3xl font-bold text-white mb-2 opacity-0 animate-scale-in"
            style={{ animationDelay: `${delay + 200}ms` }}
          >
            {stat.value}
          </h3>
          <p className="text-indigo-300 font-semibold">{stat.label}</p>
        </div>
      </div>
    </div>
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

  const stats = [
    { label: "Technologies", value: "15+", icon: Code2 },
    { label: "Projects", value: "50+", icon: Target },
    { label: "Experience", value: "3+", icon: TrendingUp },
    { label: "Certifications", value: "8+", icon: Award },
  ]

  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 overflow-hidden bg-black"
    >
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-in">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-3 mb-8 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-400 font-semibold">Technical Expertise</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Skills That
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Drive Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming complex challenges into elegant solutions through
            <span className="text-indigo-400 font-semibold"> cutting-edge technologies</span> and
            <span className="text-purple-400 font-semibold"> creative problem-solving</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatsCard key={stat.label} stat={stat} delay={index * 100} />
          ))}
        </div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            icon={Globe}
            gradient="bg-gradient-to-br from-indigo-600/15 to-blue-700/10"
            delay={0}
          />
          <SkillCard
            title="Backend Development"
            skills={backendSkills}
            icon={Database}
            gradient="bg-gradient-to-br from-purple-600/15 to-indigo-700/10"
            delay={200}
          />
        </div>

        {/* Additional Skills */}
        <div className="mb-20 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional <span className="text-indigo-400">Technologies</span>
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              <Sparkles className="w-6 h-6 text-indigo-400 mx-4" />
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsContactPopupOpen(true)}
            className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <span className="flex items-center">
              Let's Create Something Amazing
              <ArrowRight className="w-6 h-6 ml-3" />
            </span>
          </button>
        </div>
      </div>
      <ContactPopUpForm isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </section>
  )
}

export default Skills