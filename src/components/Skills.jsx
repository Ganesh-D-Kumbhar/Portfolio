const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <h1 className="subHeading">
        Programming <span className="bk">Languages</span>
      </h1>
      <div className="skillContainer">
        <h2>JavaScript</h2>
        <div className="javaScript skillBox">
          <div className="jsFill skillFill"></div>
        </div>
        <h2>TypeScript</h2>
        <div className="java skillBox">
          <div className="javaFill skillFill"></div>
        </div>
        <h2>Java</h2>
        <div className="java skillBox">
          <div className="javaFill skillFill"></div>
        </div>
        <h2>C++</h2>
        <div className="cpp skillBox">
          <div className="cppFill skillFill"></div>
        </div>
      </div>

      <h1 className="subHeading">
        <span className="bk">Front-End </span> Technologies
      </h1>
      <div className="skillContainer">
        <h2>HTML</h2>
        <div className="html skillBox">
          <div className="htmlFill skillFill"></div>
        </div>
        <h2>CSS</h2>
        <div className="css skillBox">
          <div className="cssFill skillFill"></div>
        </div>
        <h2>Bootstrap</h2>
        <div className="bootstrap skillBox">
          <div className="bootFill skillFill"></div>
        </div>
        <h2>React</h2>
        <div className="react skillBox">
          <div className="reactFill skillFill"></div>
        </div>
        <h2>Redux</h2>
        <div className="skillBox">
          <div className="redux skillFill"></div>
        </div>
        <h2>jQuery</h2>
        <div className="skillBox">
          <div className="redux skillFill"></div>
        </div>
      </div>

      <h1 className="subHeading">Other</h1>
      <div className="skillContainer">
        <h2>MySQL</h2>
        <div className="mysql skillBox">
          <div className="mysqlFill skillFill"></div>
        </div>
        <h2>MongoDB</h2>
        <div className="mysql skillBox">
          <div className="mysqlFill skillFill"></div>
        </div>
        <h2>Git & Github</h2>
        <div className="gitGithub skillBox">
          <div className="gitFill skillFill"></div>
        </div>
        <h2>Testing & Debugging</h2>
        <div className="skillBox">
          <div className="testAndDebug skillFill"></div>
        </div>
      </div>
    </section>
  )
}

export default Skills
