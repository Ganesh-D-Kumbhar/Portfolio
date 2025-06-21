const Certifications = () => {
  const certifications = [
    {
      icon: "bx bx-code-alt",
      title: "JavaScript Basic",
      description:
        "Completed HackerRank's JavaScript Basics Certification demonstrates mastery of core JavaScript principles, essential for web development roles.",
      link: "https://www.hackerrank.com/certificates/15eb66c0e5e6",
    },
    {
      icon: "bx bxs-paint",
      title: "MySQL Basic",
      description:
        "HackerRank's MySQL Basics Certification demonstrates essential database skills, boosting employability in the tech industry with validated proficiency.",
      link: "https://www.hackerrank.com/certificates/d536ccb7004d",
    },
    {
      icon: "bx bx-bar-chart-alt",
      title: "React",
      description:
        "HackerRank's React Certification signifies proficiency in React, essential for front-end development roles, enhancing recognition and credibility in the industry.",
      link: "https://www.hackerrank.com/certificates/11f62b637b64",
    },
    {
      icon: "bx bx-bar-chart-alt",
      title: "JavaScript Intermediate",
      description:
        "Completed HackerRank's JavaScript Intermediate Certification showcases advanced mastery, crucial for specialized web development roles and projects.",
      link: "https://www.hackerrank.com/certificates/81e4395e7632",
    },
    {
      icon: "bx bx-bar-chart-alt",
      title: "MySQL Intermediate",
      description:
        "HackerRank's MySQL Intermediate Certification validates advanced expertise in database management and optimization, essential for specialized tech roles, elevating career prospects.",
      link: "https://www.hackerrank.com/certificates/1a96e24f8ef2",
    },
    {
      icon: "bx bx-bar-chart-alt",
      title: "Employability & Skill Developement",
      description:
        "TCS iON offers skill development programs for diverse industries, ensuring career readiness and employability.",
      link: "https://drive.google.com/file/d/1CTGFNNZnBSAc9bpOg7dpucbns5WX-tcB/view?usp=drivesdk",
    },
  ]

  return (
    <section className="certifications" id="certifications">
      <h2 className="heading font-bold">
        My <span>Certifications</span>
      </h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certifications-box">
            <i className={cert.icon}></i>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} className="btn" target="_blank" rel="noreferrer">
              See Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
