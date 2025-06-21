"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobNo: "",
    sub: "",
    msg: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form will be submitted to Web3Forms
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="f0d51e85-7006-4ad4-a4ec-86330d610401" />
        <div className="input-box">
          <input
            name="fullName"
            id="name"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            name="mobNo"
            id="mobNo"
            type="number"
            placeholder="Mobile Number"
            value={formData.mobNo}
            onChange={handleChange}
          />
          <input
            name="sub"
            id="sub"
            type="text"
            placeholder="Email Subject"
            value={formData.sub}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="5"
          placeholder="Your Message"
          value={formData.msg}
          onChange={handleChange}
        ></textarea>
        <input id="btn" type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  )
}

export default Contact
