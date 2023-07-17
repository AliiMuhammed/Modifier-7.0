import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    image: null,
  });

  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (errors.length > 0) {
      setFormErrors(errors);
    } else {
      // Process form data or send it to the server
      console.log(formData);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        image: null,
      });
      setFormErrors([]);
    }
  };

  const validateForm = (data) => {
    const errors = [];
    if (!data.name) {
      errors.push("Name is required");
    }
    if (!data.email) {
      errors.push("Email address is required");
    } else if (!isValidEmail(data.email)) {
      errors.push("Invalid email address");
    }
    if (!data.password) {
      errors.push("Password is required");
    } else if (data.password.length < 6) {
      errors.push("Password should be at least 6 characters");
    }
    if (data.password !== data.confirmPassword) {
      errors.push("Passwords do not match");
    }
    if (!data.phoneNumber) {
      errors.push("Phone number is required");
    } else if (!isValidPhoneNumber(data.phoneNumber)) {
      errors.push("Invalid phone number");
    }
    if (!data.image) {
      errors.push("Image is required");
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^01[0-9]{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formErrors.length > 0 && (
        <Alert variant="danger">
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}


      <Form.Group controlId="name">
        <Form.Control
          type="text"
          name="name"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Name"
          
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          
        />
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          
        />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Control
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Control
          type="file"
          name="image"
          onChange={handleChange}
          
        />
      </Form.Group>

      <Button className="main-btn" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
