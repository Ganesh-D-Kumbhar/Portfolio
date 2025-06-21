const Projects = () => {
  const projects = [
    {
      image: "/images/portfolio1.jpg",
      title: "Quiz Master",
      description:
        "Elevate your knowledge with our user-friendly Quiz Master platform makes learning enjoyable and accessible to all!",
      link: "https://ganesh-d-kumbhar.github.io/Quiz-Master/",
      icon: "/images/quizMaster.png",
    },
    {
      image: "/images/portfolio2.jpg",
      title: "Speed Typer Pro",
      description:
        "Enhance your typing skills effortlessly with our intuitive Speed Typer Pro web app – the key to typing faster and more accurately!",
      link: "https://ganesh-d-kumbhar.github.io/Speed-Typer-Pro/",
      icon: "/images/speedTyper.webp",
    },
    {
      image: "/images/portfolio3.jpg",
      title: "Snake Game",
      description:
        "Get ready to slither and conquer with our addictive snake game an old-school favorite revamped for endless fun!",
      link: "https://ganesh-d-kumbhar.github.io/Snake-Game/",
      icon: "/images/snakeGame.png",
    },
    {
      image: "/images/portfolio4.jpg",
      title: "Dream Homes",
      description: "Discover Your Ideal Home With Dream Homes...!",
      link: "https://ganesh-d-kumbhar.github.io/Dream-Homes/",
      icon: "/images/homeIcon.png",
    },
    {
      image: "/images/portfolio5.jpg",
      title: "Data Ghost",
      description:
        "Show off your inner genius with Data Ghost – The ultimate prank to make your friends think you're a hacking mastermind!",
      link: "https://ganesh-d-kumbhar.github.io/Data-Ghost",
      icon: "https://media.istockphoto.com/id/1325756751/vector/hacker-cyber-criminal-with-laptop-stealing-user-personal-data-hacker-attack-and-web-security.jpg?s=612x612&w=0&k=20&c=f36goHUkOw5iaN-sun02MEWniCG41ue83YJSix1bQ3w=",
    },
    {
      image: "/images/portfolio6.jpg",
      title: "Task Tracker",
      description:
        "Stay ahead of your goals with our smart task tracker – Your reliable partner for efficient task management.",
      link: "https://ganesh-d-kumbhar.github.io/Task-Tracker/",
      icon: "/images/taskTracker.png",
    },
  ]

  return (
    <section className="projects" id="projects">
      <h2 className="heading font-bold">
        Latest <span>Project</span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="projects-box">
            <img src={project.image || "/placeholder.svg"} alt="" />

            <div className="projects-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.icon || "/placeholder.svg"} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
