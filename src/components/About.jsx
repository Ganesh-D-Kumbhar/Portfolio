const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/about.png" alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading font-bold">
          About <span>Me</span>
        </h2>
        <br />
        <br />
        <div className="mobile-view-about-img">
          <img src="/images/about.png" alt=""  className=" !w-[70vw]" />
        </div>
        <h3>
          Hi there, welcome to my website! I'm Ganesh Kumbhar, a passionate web developer who enjoys learning new
          technologies and solving problems with code!
        </h3>

        <p>
          Thank you for visiting my website and getting to know me better. If you have any feedback or suggestions,
          please let me know. I'd love to hear from you.
        </p>
        <a href="https://github.com/Ganesh-D-Kumbhar" target="_blank" className="btn" rel="noreferrer">
          Read More
        </a>
      </div>
    </section>
  )
}

export default About
