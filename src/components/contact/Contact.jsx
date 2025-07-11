import {
  Mail,
  Phone,
  MapPin,
  User,
  Code,
  Clock,
  Target,
  Heart,
} from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"
import ContactForm from "../forms/ContactForm.jsx"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ganeshhh2003@gmail.com",
      href: "mailto:ganeshhh2003@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9096378354",
      href: "tel:+919096378354",
      description: "Let's have a quick chat",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: "#",
      description: "Available for remote work",
    },
  ]

  const stats = [
    { icon: Target, label: "Projects", value: "10+", description: "Completed successfully" },
    { icon: Code, label: "Technologies", value: "15+", description: "Mastered & counting" },
    { icon: Clock, label: "Response", value: "24h", description: "Average reply time" },
    { icon: Heart, label: "Satisfaction", value: "100%", description: "Client happiness" },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 overflow-hidden bg-black w-full py-10"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 opacity-0 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital experiences. Let's collaborate and create something extraordinary
            that makes a real impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group opacity-0 animate-fade-in hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-6 text-center hover:border-indigo-400/50 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8 opacity-0 animate-slide-in" style={{ animationDelay: "200ms" }}>
            {/* Profile Card */}
            <div className="relative bg-gradient-to-br from-indigo-600/90 to-indigo-700/90 rounded-3xl p-8 overflow-hidden border border-indigo-400/30 shadow-2xl shadow-indigo-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm hover:scale-110 hover:rotate-5 transition-all duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-3xl font-bold text-white">Ganesh Kumbhar</h3>
                    <p className="text-indigo-200 text-lg font-medium">Full-stack Developer</p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  Passionate about crafting exceptional digital experiences with modern technologies. I transform
                  complex ideas into elegant, scalable solutions that drive real business results.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="block group opacity-0 animate-fade-in hover:scale-102 hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-300 shadow-lg shadow-indigo-500/10">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-indigo-400 font-semibold">{info.label}</p>
                        <p className="text-white font-bold text-lg">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
