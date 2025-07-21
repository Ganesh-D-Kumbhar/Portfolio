import { AnimatedBackground } from "../skills/AnimatedBackground.jsx";
import { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  ShoppingCart,
  Home,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";
import dreamHomesImage from "../../../public/images/dream-homes.png";
import quickCartImage from "../../../public/images/quick-cart.png";

const projects = [
  {
    id: 1,
    title: "Dream Homes",
    category: "Real Estate Platform",
    description:
      "Next-generation real estate platform featuring virtual tours, AI property matching, and comprehensive market analytics.",
    features: [
      "Admin Dashboard for Property Management",
      "User Favorite Properties List",
      "Profile Update with Image Upload",
      "Secure Admin Authentication",
      "Email & WhatsApp Communication Support",
      "Responsive Contact and Inquiry System",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: dreamHomesImage,
    liveUrl: "https://dream-homes-fawn.vercel.app/",
    githubUrl: "https://github.com/Ganesh-D-Kumbhar/Dream-Homes",
    icon: Home,
    color: "from-purple-500 to-indigo-600",
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    stats: { properties: "20+", agents: "5+", cities: "5+" },
  },
  {
    id: 2,
    title: "Quick Cart",
    category: "E-Commerce Platform",
    description:
      "Revolutionary e-commerce solution with AI-powered recommendations, real-time analytics, and seamless payment processing.",
    features: [
      "Add to Cart & Wishlist Functionality",
      "Advanced Property Filtering",
      "Responsive Design for All Devices",
      "Secure User Profile Management",
    ],
    technologies: ["React.js", "Vite", "REST APIs", "Tailwind CSS"],
    image: quickCartImage,
    liveUrl: "https://quick-cart-silk-theta.vercel.app/",
    githubUrl: "https://github.com/Ganesh-D-Kumbhar/Quick-Cart",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-purple-500/10 via-indigo-500/5 to-blue-500/10",
    stats: { users: "10K+", transactions: "$2M+", uptime: "99.9%" },
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="!bg-black min-h-screen relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Featured Work</span>
          </div>

          <h1 className="text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              My
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Two comprehensive platforms showcasing full-stack expertise and
            innovative solutions
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-2">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-500 ${
                    activeProject === index
                      ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Project Display */}
        <div className="relative">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${
                  activeProject === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Project Info */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`p-4 bg-gradient-to-br ${project.bgGradient} rounded-2xl border border-gray-700/50`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-bold text-white">
                            {project.title}
                          </h2>
                          <p
                            className={`text-lg bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold`}
                          >
                            {project.category}
                          </p>
                        </div>
                      </div>

                      <p className="text-xl text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-indigo-400" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg border border-gray-700/30"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
                            ></div>
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-indigo-400" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-2 bg-gradient-to-r ${project.bgGradient} border border-gray-700/50 rounded-full text-sm text-gray-200 hover:scale-105 transition-transform duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        target="_blank"
                        href={project.liveUrl}
                        className={`flex items-center justify-center bg-gradient-to-r ${project.color} hover:scale-105 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 group`}
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        View Live Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                      <a
                        target="_blank"
                        href={project.githubUrl}
                        variant="outline"
                        className="flex border-2 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border-gray-500 py-4 px-8 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                    ></div>
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-2 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500">
                      <div className="aspect-video rounded-2xl overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Floating Action Buttons */}
                      <div className="absolute top-8 right-8 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <button
                          size="sm"
                          className={`bg-gradient-to-r ${project.color} text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300`}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <a
                          target="_blank"
                          href={project.githubUrl}
                          size="sm"
                          className="bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 hover:scale-110 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          target="_blank"
                          href={project.liveUrl}
                          size="sm"
                          className="bg-gray-800/80 backdrop-blur-sm text-white rounded-full p-3 hover:scale-110 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-32">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Let's collaborate and create the next breakthrough digital
                experience together.
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                Start a Project
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
