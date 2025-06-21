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
} from "lucide-react"
import { AnimatedBackground } from "./AnimatedBackground.jsx"
import { SkillCard } from "./SkillCard.jsx"
import { SectionTitle } from "./SectionTitle.jsx"

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", percentage: 95, icon: FileCode },
    { name: "TypeScript", percentage: 90, icon: Code2 },
    { name: "Java", percentage: 85, icon: Cpu },
    { name: "C++", percentage: 80, icon: Braces },
  ]

  const frontendSkills = [
    { name: "HTML5", percentage: 98, icon: Globe },
    { name: "CSS3", percentage: 95, icon: Palette },
    { name: "React", percentage: 92, icon: Zap },
    { name: "Bootstrap", percentage: 88, icon: Layers },
    { name: "Redux", percentage: 85, icon: Database },
    { name: "jQuery", percentage: 80, icon: Chrome },
  ]

  const otherSkills = [
    { name: "MySQL", percentage: 88, icon: Database },
    { name: "MongoDB", percentage: 85, icon: Database },
    { name: "Git & GitHub", percentage: 92, icon: Github },
    { name: "Testing", percentage: 87, icon: TestTube },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="relative min-h-screen !py-20 !px-36 overflow-hidden bg-black w-full">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto">
        {/* Main Title */}
        <SectionTitle title="My Skills" subtitle="Crafting digital experiences with cutting-edge technologies" />

        {/* Programming Languages */}
        <motion.div
          className="!mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white !mb-2">
              Programming <span style={{ color: "rgb(117, 78, 249)" }}>Languages</span>
            </h3>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: "linear-gradient(90deg, rgb(117, 78, 249), rgb(147, 108, 255))" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-20">
            {programmingSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                delay={index * 0.2}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Frontend Technologies */}
        <motion.div
          className="!mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white !mb-2">
              <span style={{ color: "rgb(117, 78, 249)" }}>Frontend</span> Technologies
            </h3>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: "linear-gradient(90deg, rgb(117, 78, 249), rgb(147, 108, 255))" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                delay={index * 0.15}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Other Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-white !mb-2">
              Other <span style={{ color: "rgb(117, 78, 249)" }}>Technologies</span>
            </h3>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: "linear-gradient(90deg, rgb(117, 78, 249), rgb(147, 108, 255))" }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-20">
            {otherSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                delay={index * 0.2}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.button
            className="w-16 h-16 rounded-full text-white shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgb(117, 78, 249), rgb(147, 108, 255))",
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: ["0 0 20px rgb(117, 78, 249)", "0 0 40px rgb(117, 78, 249)", "0 0 20px rgb(117, 78, 249)"],
            }}
            transition={{
              boxShadow: { duration: 2, repeat:Number.POSITIVE_INFINITY },
              rotate: { duration: 0.6 },
            }}
          >
            <Zap className="w-8 h-8 mx-auto" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
