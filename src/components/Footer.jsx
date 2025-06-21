"use client"

const Footer = () => {
  const scrollToTop = () => {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 | Ganesh Kumbhar</p>
      </div>
      <div className="footer-iconTop">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
        >
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
