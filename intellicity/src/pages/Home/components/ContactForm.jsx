import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    success: "",
    loading: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
    loading: false,
    err:""
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
    setFormData({ ...formData, loading: true });
    setFormErrors({ ...formErrors, loading: true });
    if (validateForm()) {
      axios
        .post("http://localhost:5000/contact/create", formData)
        .then((response) => {
          setFormData({
            name: "",
            email: "",
            message: "",
            success: response.data,
            loading: false,
          });
          
          setFormErrors({
            name: "",
            email: "",
            message: "",
            loading: false,
            err:""
          });
        })
        .catch((error) => {
          setFormData({
            name: "",
            email: "",
            message: "",
            success: "",
            loading: false,
          });
          
          setFormErrors({
            name: "",
            email: "",
            message: "",
            loading: false,
            err:"Something went wrong please try again later"
          });
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (formData.message.trim() === "") {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* success handling */}
      {formData.loading === false && formData.success !== "" && (
        <div className="alert-container ">
          <Alert variant="success" className="alert">
            {formData.success.msg}
          </Alert>
        </div>
      )}
      {/* formErrors handling */}
      {formErrors.loading === false && formErrors.err !== "" && (
        <div className="alert-container ">
          <Alert variant="danger" className="alert">
            {formErrors.err}
          </Alert>
        </div>
      )}

<div className={`form-group ${formData.name && "focused"}`}>
        {formErrors.name && <span className="error">{formErrors.name}</span>}
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className={`form-group ${formData.email && "focused"}`}>
        {formErrors.email && <span className="error">{formErrors.email}</span>}
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className={`form-group ${formData.message && "focused"}`}>
        {formErrors.message && (
          <span className="error">{formErrors.message}</span>
        )}
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>

      <input
        type="submit"
        className="main-btn contact-us-main-btn"
        value="Send"
      />
    </form>
  );
}

export default ContactForm;
