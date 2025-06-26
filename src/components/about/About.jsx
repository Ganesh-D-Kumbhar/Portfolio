import { motion, useScroll, useTransform } from "framer-motion"
import PopUpForm from "../forms/PopUpForm.jsx"
import {
  Award,
  MapPin,
  GraduationCap,
  Star,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Trophy,
  Sparkles,
  CheckCircle,
  Calendar,
  Briefcase,
  User,
  Heart,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react"
import { useRef, useState } from "react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const achievements = [
    {
      icon: Trophy,
      title: "Gold Badge",
      subtitle: "JavaScript & Java",
      platform: "HackerRank",
      color: "from-yellow-400 to-yellow-600",
      glow: "shadow-yellow-500/25",
      bgGlow: "from-yellow-400/10 to-yellow-600/10",
    },
    {
      icon: Star,
      title: "90+ Scores",
      subtitle: "Mathematics Excellence",
      platform: "SSC, HSC, Engineering",
      color: "from-blue-400 to-blue-600",
      glow: "shadow-blue-500/25",
      bgGlow: "from-blue-400/10 to-blue-600/10",
    },
    {
      icon: Code2,
      title: "50+ Challenges",
      subtitle: "Coding Problems",
      platform: "HackerRank",
      color: "from-green-400 to-green-600",
      glow: "shadow-green-500/25",
      bgGlow: "from-green-400/10 to-green-600/10",
    },
    {
      icon: GraduationCap,
      title: "8.4 CGPA",
      subtitle: "B.Tech Degree",
      platform: "Electronics & Telecom",
      color: "from-purple-400 to-purple-600",
      glow: "shadow-purple-500/25",
      bgGlow: "from-purple-400/10 to-purple-600/10",
    },
  ]

  const certifications = [
    { name: "React", platform: "HackerRank", date: "June 2024", verified: true },
    { name: "CSS", platform: "HackerRank", date: "June 2024", verified: true },
    { name: "JavaScript", platform: "HackerRank", date: "May 2024", verified: true },
    { name: "MySQL", platform: "HackerRank", date: "Nov 2023", verified: true },
  ]

  const skills = [
    // Core Languages
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML",
    "CSS",
    "JSON",

    // Frameworks & Libraries
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "jQuery",
    "Express",
    "Bootstrap",
    "Tailwind CSS",

    // Backend & Databases
    "Node.js",
    "MongoDB",
    "MySQL",
    "REST APIs",

    // Tools & Others
    "Git",
    "GitHub",
    "NPM",
    "Babel",
    "Jest",

    // Additional Skills
    "Responsiveness",
    "SEO",
    "UI/UX"
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }
  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleDownloadClick = () => {
    setIsFormOpen(true)
  }
  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-black  overflow-hidden pt-8"
      aria-label="About Ganesh Kumbhar - Full Stack Developer"
    >
      {/* Enhanced Background Elements */}
      {/* <div className="absolute inset-0">
        
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[rgb(117,78,249)]/30 to-[rgb(147,108,255)]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-[rgb(147,108,255)]/25 to-[rgb(117,78,249)]/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(117,78,249,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(117,78,249,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 ? "rgb(117,78,249)" : i % 3 === 1 ? "rgb(147,108,255)" : "rgb(59,130,246)",
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            About{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] bg-clip-text text-transparent">
                Me
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] mx-auto rounded-full shadow-lg shadow-[rgb(117,78,249)]/50"
          />
        </motion.header>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 mb-20"
        >
          {/* Left Column - Enhanced Profile */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="sticky top-8">
              {/* Profile Card */}
              <div className="relative group">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-gray-800/50 rounded-3xl p-8 shadow-2xl">
                  {/* Profile Image with Enhanced Effects */}
                  <div className="relative mb-8 group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] rounded-2xl blur-lg opacity-40 group-hover/image:opacity-60 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-[rgb(117,78,249)]/10 via-transparent to-[rgb(147,108,255)]/10 rounded-2xl p-1 border border-[rgb(117,78,249)]/30">
                      <div className="bg-gray-900/50 rounded-xl p-1 backdrop-blur-xl">
                        <img
                          src="/images/gk-about-2.png"
                          alt="Ganesh Kumbhar - Full Stack Developer"
                          className="w-auto h-80 rounded-xl object-cover transition-transform duration-500 group-hover/image:scale-105"
                        />
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 flex items-center space-x-2 bg-green-500/20 backdrop-blur-xl border border-green-500/30 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">Available</span>
                    </div>
                  </div>

                  {/* Enhanced Name & Title */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-3">Ganesh Kumbhar</h2>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 backdrop-blur-xl border border-[rgb(117,78,249)]/30 rounded-full px-4 py-2 mb-4">
                      <Code2 className="w-4 h-4 text-[rgb(117,78,249)]" />
                      <span className="text-[rgb(117,78,249)] font-semibold">Fullstack Developer</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Pune, Maharashtra, India</span>
                    </div>
                  </div>

                  {/* Enhanced Contact Info */}
                  <div className="space-y-3 mb-8">
                    <motion.a
                      href="mailto:ganeshhh2003@gmail.com"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl hover:from-[rgb(117,78,249)]/10 hover:to-[rgb(147,108,255)]/10 transition-all duration-300 border border-gray-700/50 hover:border-[rgb(117,78,249)]/40 group"
                    >
                      <div className="p-2 bg-[rgb(117,78,249)]/20 rounded-lg group-hover:bg-[rgb(117,78,249)]/30 transition-colors duration-300">
                        <Mail className="w-4 h-4 text-[rgb(117,78,249)]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-300 text-sm font-medium">ganeshhh2003@gmail.com</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[rgb(117,78,249)] transition-colors duration-300" />
                    </motion.a>

                    <motion.a
                      href="tel:+919096378354"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl hover:from-[rgb(117,78,249)]/10 hover:to-[rgb(147,108,255)]/10 transition-all duration-300 border border-gray-700/50 hover:border-[rgb(117,78,249)]/40 group"
                    >
                      <div className="p-2 bg-[rgb(117,78,249)]/20 rounded-lg group-hover:bg-[rgb(117,78,249)]/30 transition-colors duration-300">
                        <Phone className="w-4 h-4 text-[rgb(117,78,249)]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-300 text-sm font-medium">+91 9096378354</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[rgb(117,78,249)] transition-colors duration-300" />
                    </motion.a>
                  </div>

                  {/* Enhanced Social Links */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <motion.a
                      href="https://github.com/Ganesh-D-Kumbhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-xl border border-gray-700/50 hover:border-[rgb(117,78,249)]/50 transition-all duration-300 text-center group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(117,78,249)]/0 to-[rgb(147,108,255)]/0 group-hover:from-[rgb(117,78,249)]/10 group-hover:to-[rgb(147,108,255)]/10 transition-all duration-300" />
                      <Github className="w-6 h-6 text-gray-400 group-hover:text-[rgb(117,78,249)] mx-auto mb-2 transition-colors duration-300 relative z-10" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10">
                        GitHub
                      </span>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/ganesh-d-kumbhar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-gradient-to-br from-gray-800/60 to-gray-700/60 rounded-xl border border-gray-700/50 hover:border-[rgb(117,78,249)]/50 transition-all duration-300 text-center group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(117,78,249)]/0 to-[rgb(147,108,255)]/0 group-hover:from-[rgb(117,78,249)]/10 group-hover:to-[rgb(147,108,255)]/10 transition-all duration-300" />
                      <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[rgb(117,78,249)] mx-auto mb-2 transition-colors duration-300 relative z-10" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10">
                        LinkedIn
                      </span>
                    </motion.a>
                  </div>

                  {/* Download Resume Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-4 bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] rounded-xl font-semibold text-white shadow-lg shadow-[rgb(117,78,249)]/25 hover:shadow-[rgb(117,78,249)]/40 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                    onClick={handleDownloadClick}
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Content */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
            {/* Enhanced Introduction */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-gray-900/40 backdrop-blur-2xl border border-gray-800/50 rounded-2xl p-8 hover:border-[rgb(117,78,249)]/30 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 rounded-xl">
                    <User className="w-6 h-6 text-[rgb(117,78,249)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Hi there, welcome to my website!</h3>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    I'm{" "}
                    <span className="font-bold bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] bg-clip-text text-transparent">
                      Ganesh Kumbhar
                    </span>
                    , a passionate <span className="font-semibold text-[rgb(117,78,249)]">Fullstack Developer</span> who
                    enjoys learning new technologies and solving problems with code!
                  </p>

                  <p>
                    I specialize in building scalable web applications using modern JavaScript frameworks. I'm skilled
                    at translating business requirements into optimized code, ensuring technical solutions align with
                    client needs.
                  </p>

                  <p>
                    Dedicated to continuous learning and self-improvement, I showcase a diverse portfolio of engaging
                    interactive projects designed to enhance user experiences and drive user engagement across
                    platforms.
                  </p>

                  <div className="flex items-center space-x-2 p-4 bg-gradient-to-r from-[rgb(117,78,249)]/10 to-[rgb(147,108,255)]/10 rounded-xl border border-[rgb(117,78,249)]/20">
                    <Heart className="w-5 h-5 text-[rgb(117,78,249)]" />
                    <p className="text-[rgb(117,78,249)] font-medium">
                      Thank you for visiting my website and getting to know me better. If you have any feedback or
                      suggestions, please let me know. I'd love to hear from you!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Role - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(117,78,249)]/30 to-[rgb(147,108,255)]/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-[rgb(117,78,249)]/10 via-gray-900/50 to-[rgb(147,108,255)]/10 backdrop-blur-2xl border border-[rgb(117,78,249)]/30 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-r from-[rgb(117,78,249)]/30 to-[rgb(147,108,255)]/30 rounded-2xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-2xl font-bold text-white">Currently Working</h4>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <span className="text-green-400 text-xs font-medium">Active</span>
                      </div>
                    </div>
                    <p className="text-[rgb(117,78,249)] font-semibold text-lg mb-2">
                      ReactJs Developer at Seven Mentor Pvt. Ltd.
                    </p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>October 2024 – Present</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>Full Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-gray-900/40 backdrop-blur-2xl border border-gray-800/50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[rgb(117,78,249)]/20 to-[rgb(147,108,255)]/20 rounded-xl">
                    <Zap className="w-6 h-6 text-[rgb(117,78,249)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-700/50 hover:border-[rgb(117,78,249)]/50 rounded-xl text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <PopUpForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}

export default About
