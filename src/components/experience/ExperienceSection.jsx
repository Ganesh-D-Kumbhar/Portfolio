import { Calendar, MapPin, Code, Briefcase, Trophy, Zap, ExternalLink } from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "ReactJs Developer",
      company: "Seven Mentor Pvt. Ltd.",
      location: "Pune, Maharashtra",
      duration: "October 2024 – Present",
      type: "Full-time",
      description:
        "Working on modern web applications using React.js, developing user interfaces and implementing responsive designs.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
      achievements: [
        "Developed responsive web applications",
        "Collaborated with cross-functional teams",
        "Implemented modern UI/UX designs",
      ],
      icon: Code,
      current: true,
    },
  ]

  return (
    <section className="py-8 relative bg-black" id="experience">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-2">
            Professional <span className="text-indigo-500">Experience</span>
          </h2>
          <p className="text-gray-400">My journey in the tech industry</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-500/30 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative opacity-0 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-1/2 hidden md:block border-2 border-indigo-300 shadow-lg shadow-indigo-500/50"></div>

                {/* Content */}
                <div className="md:ml-16 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-indigo-500/30 rounded-3xl p-8 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      {/* Title & Company */}
                      <div className="flex items-start mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/30">
                          <exp.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-indigo-400 text-lg font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.type}
                        </div>
                        {exp.current && (
                          <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                            <span className="text-green-400 text-xs font-medium">Current</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-indigo-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm border border-indigo-500/30 hover:bg-indigo-500/30 hover:scale-105 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-indigo-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-300">
                          <Zap className="w-4 h-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <p className="text-gray-400 mb-4">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
          >
            <span>Let's Connect</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection