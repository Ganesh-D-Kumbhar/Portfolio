import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react"
import { AnimatedBackground } from "../skills/AnimatedBackground.jsx"

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "B.Tech",
      field: "Electronics & Telecommunications",
      institution: "Karmayogi Institute of Technology",
      location: "Solapur, Maharashtra",
      duration: "2020 – 2024",
      grade: "8.4 CGPA",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "HSC",
      field: "Science Stream",
      institution: "Abasaheb Khebudkar Junior College",
      location: "Atpadi, Maharashtra",
      duration: "2018 – 2020",
      grade: "67%",
      icon: BookOpen,
    },
    {
      id: 3,
      degree: "SSC",
      field: "General Education",
      institution: "Vithalapur High School",
      location: "Vithalapur, Maharashtra",
      duration: "2017 – 2018",
      grade: "88%",
      icon: Award,
    },
  ]

  const getGradeColor = (grade) => {
    if (grade.includes("CGPA")) {
      const cgpa = Number.parseFloat(grade.split(" ")[0])
      return cgpa >= 8.0 ? "text-indigo-400" : "text-indigo-300"
    } else {
      const percentage = Number.parseInt(grade.replace("%", ""))
      return percentage >= 80 ? "text-indigo-400" : "text-indigo-300"
    }
  }

  return (
    <section className="py-8 relative bg-black" id="education">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-2">
            Educational <span className="text-indigo-500"> Journey</span>
          </h2>
          <p className="text-gray-400">Academic background & qualifications</p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-500/30 hidden md:block"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="relative opacity-0 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-3 h-3 bg-indigo-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>

                {/* Content */}
                <div className="md:ml-16 bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Icon & Degree */}
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-3">
                          <edu.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-indigo-400 text-sm font-medium">{edu.field}</p>
                        </div>
                      </div>

                      {/* Institution */}
                      <h4 className="text-gray-300 font-medium mb-3">{edu.institution}</h4>

                      {/* Duration & Location */}
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-xs text-gray-400">Grade</span>
                      </div>
                      <div className={`text-xl font-bold ${getGradeColor(edu.grade)}`}>{edu.grade}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
