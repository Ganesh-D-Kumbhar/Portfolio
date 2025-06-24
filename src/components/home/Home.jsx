import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Linkedin, Github, Instagram, Download, Code, Palette, Video, Monitor, Mail } from "lucide-react"

const professions = [
  { name: "Web Developer", icon: Monitor },
  { name: "Programmer", icon: Code },
  { name: "Web Designer", icon: Palette },
  { name: "Video Editor", icon: Video },
]

export default function Home() {
  const controls = useAnimation();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 90);
      controls.start({
        rotate: angle + 90,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [angle, controls]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfession((prev) => (prev + 1) % professions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative max-h[100vh-84px] bg-black flex items-center overflow-hidden mt-16 lg:mt-20">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-5 animate-pulse bg-[rgb(117,78,249)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 mt-4 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">Hello, I am</h3>

              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-[rgb(117,78,249)] to-[rgba(117,78,249,0.8)] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Ganesh
                  </motion.span>
                  <span className="text-white ">Kumbhar</span>
                </h1>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 lg:space-y-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-[rgb(117,78,249)]">Fullstack Web Developer</span> who loves to
                create beautiful and functional websites for people who want to make a difference in the world.
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                I am currently working at <span className="font-medium">SevenMentor Pvt. Ltd.</span> as a <br />
                <span className="font-semibold text-[rgb(117,78,249)]">React Developer since Oct 2024</span>
              </p>
            </motion.div>

            {/* Mobile Professions Display */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                {professions.map((profession, index) => (
                  <motion.div
                    key={profession.name}
                    className="flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-[rgb(117,78,249)] min-h-[100px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgb(117, 78, 249)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <profession.icon className="w-6 h-6 mb-2 text-white" />
                    <h3 className="text-sm font-semibold text-center leading-tight text-[rgb(117,78,249)]">
                      {profession.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="flex space-x-4 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {[
                { href: "https://www.linkedin.com/in/ganesh-d-kumbhar/", icon: Linkedin },
                { href: "https://github.com/Ganesh-D-Kumbhar", icon: Github },
                {
                  href: "https://www.instagram.com/ganesh_kumbhar_211/profilecard/?igsh=MXFzbTNjNDJvcXByOA==",
                  icon: Instagram,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-2 bg-white/5 backdrop-blur-sm rounded-full border-2 border-[rgb(117,78,249)] transition-all duration-300 hover:bg-[rgb(117,78,249)] hover:border-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <div className="flex items-center justify-start gap-[50px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.a
                  href="https://drive.google.com/file/d/1hgJriQ9y8RXgzvi-eIgF2VN4yUjWBbp5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 bg-[rgb(117,78,249)] shadow-[0_20px_40px_rgba(117,78,249,0.3)] border border-white "
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  Download CV
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span
                  className="inline-flex items-center px-6 py-3 text-base sm:text-lg font-semibold text-white rounded-full transition-all duration-300 bg-[rgb(117,78,249)] shadow-[0_20px_40px_rgba(117,78,249,0.3)] border border-white cursor-pointer"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  Contact Me
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Desktop Only */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Custom Overlay Shape */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[48vh] border-r-[350px] border-b-[48vh] border-l-[350px] border-t-[rgb(117,78,249)] border-r-[rgb(117,78,249)] border-b-[rgb(117,78,249)] border-l-transparent -mr-[120px] !z-30 overflow-hidden" />

            {/* Home Image */}
            <div className="absolute top-[162px] left-[190px] pointer-events-none min-w-[480px]  max-h-screen !z-40">
              <img src="/images/home.png" alt="Profile" className="w-full h-auto" />
            </div>

            {/* Profession Container */}
            <div className="relative w-full h-full flex items-center justify-center z-20">
              <motion.div
                className="relative w-[500px] h-[500px]"
                animate={controls}
              >
                {/* Circle Border */}
                <div className="absolute inset-8 rounded-full border-4 border-[rgb(117,78,249)]" />

                {/* Profession Items */}
                {professions.map((profession, index) => {
                  const stepAngle = index * 90 - 90;
                  const radius = 200;
                  const x = Math.cos((stepAngle * Math.PI) / 180) * radius;
                  const y = Math.sin((stepAngle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={profession.name}
                      className="absolute flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-[rgb(117,78,249)] min-w-[140px] min-h-[100px] z-10"
                      style={{
                        left: `calc(50% + ${x}px - 70px)`,
                        top: `calc(50% + ${y}px - 50px)`,
                      }}
                      animate={{ rotate: -angle }} // Counter-rotate
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(117, 78, 249)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <profession.icon className="w-8 h-8 mb-2 text-white" />
                      <h3 className="text-sm font-semibold text-center leading-tight text-[rgb(117,78,249)]">
                        {profession.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Center Glow */}
              <div className="absolute w-32 h-32 rounded-full blur-2xl opacity-20 bg-[rgb(117,78,249)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
