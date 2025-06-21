const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>
          <span>Ganesh</span> Kumbhar
        </h1>

        <p>
          I'm a Fullstack Web Developer who loves to create beautiful and functional websites for people who want to
          make a difference in the world.
        </p>
        <p>I am recently engineering graduate from Karmayogi Institue of Technology Shelve, Pandharpur</p>

        <div className="social-media">
          <a target="_blank" href="https://www.linkedin.com/in/ganesh-d-kumbhar/" id="linkedin" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin">
              <path
                fill="currentColor"
                d="M6.975 20.667H3.117V9.059h3.858ZM5.072 3.462a2.011 2.011 0 1 0-.051 4.012h.026a2.012 2.012 0 1 0 .025-4.012Zm4.039 17.205h3.858v-6.482a2.639 2.639 0 0 1 .127-.941 2.111 2.111 0 0 1 1.98-1.411c1.4 0 1.955 1.064 1.955 2.625v6.209h3.858v-6.656c0-3.565-1.9-5.225-4.442-5.225A3.828 3.828 0 0 0 12.97 10.7V9.059H9.111c.051 1.089 0 11.609 0 11.609Z"
              ></path>
            </svg>
          </a>
          <a target="_blank" href="https://github.com/Ganesh-D-Kumbhar" id="github" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="github">
              <path
                fill="currentColor"
                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ganesh_kumbhar_211/profilecard/?igsh=MXFzbTNjNDJvcXByOA=="
            target="_blank"
            id="instagram"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="instagram">
              <path
                fill="currentColor"
                d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
              ></path>
              <path
                fill="currentColor"
                d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
              ></path>
              <circle cx="12.3" cy="3.7" r=".533" fill="currentColor"></circle>
            </svg>
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1hgJriQ9y8RXgzvi-eIgF2VN4yUjWBbp5/view?usp=sharing"
          target="blank"
          id="cv"
          className="btn"
        >
          Download CV
        </a>
      </div>

      <div className="profession-container">
        <div className="profession-box">
          <div className="profession" style={{ "--i": 0 }}>
            <img src="/images/developer.png" alt="" />
            <h3>Web Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 1 }}>
            <img src="/images/pro.png" alt="" />
            <h3>Programmer</h3>
          </div>
          <div className="profession" style={{ "--i": 2 }}>
            <img src="/images/des.png" alt="" />
            <h3>Web Designer</h3>
          </div>
          <div className="profession" style={{ "--i": 3 }}>
            <img src="/images/vid.png" alt="" />
            <h3>Video Editor</h3>
          </div>

          <div className="circle"></div>
        </div>

        <div className="overlay"></div>
      </div>

      <div className="home-img">
        <img src="/images/home.png" alt="" />
      </div>
    </section>
  )
}

export default Home
