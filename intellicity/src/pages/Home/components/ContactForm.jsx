import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focused");
  };

  const handleBlur = (e) => {
    e.target.parentNode.classList.remove("focused");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data or send it to the server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-group ${formData.name && "focused"}`}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <label htmlFor="name">Name:</label>
      </div>

      <div className={`form-group ${formData.email && "focused"}`}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <label htmlFor="email">Email:</label>
      </div>

      <div className={`form-group ${formData.message && "focused"}`}>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        ></textarea>
        <label htmlFor="message">Message:</label>
      </div>

      <input type="submit" className="btn contact-us-btn" value="Submit" />
    </form>
  );
}

export default ContactForm;
