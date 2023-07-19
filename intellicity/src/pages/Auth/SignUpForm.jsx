import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [sign, setSign] = useState({
    name: "", // Add name property to the state
    email: "",
    password: "",
    phoneNumber: "", // Add phoneNumber property to the state
    loading: false,
    err: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSign({ ...sign, loading: true, err: [] });
    axios
      .post("http://localhost:5000/signup", {
        email: sign.email,
        password: sign.password,
        name: sign.name,
        phone: sign.phoneNumber,
      })
      .then((resp) => {
        console.log("success");
        setSign({ ...sign, loading: false, err: [] });
      })
      .catch((err) => {
        console.log(err);
        setSign({ ...sign, loading: false, err: err.response.data.errors });
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
       {sign.err.map((error, index) => (
        <Alert key={index} variant="danger">
          {error.msg}
        </Alert>
      ))}

      <Form.Group controlId="name">
        <Form.Control
          type="text"
          name="name"
          value={sign.name}
          onChange={(e) => setSign({ ...sign, name: e.target.value })}
          placeholder="Name"
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control
          type="email"
          name="email"
          value={sign.email}
          onChange={(e) => setSign({ ...sign, email: e.target.value })}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Control
          type="password"
          name="password"
          value={sign.password}
          onChange={(e) => setSign({ ...sign, password: e.target.value })}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Control
          type="text"
          name="phoneNumber"
          value={sign.phoneNumber}
          onChange={(e) => setSign({ ...sign, phoneNumber: e.target.value })}
          placeholder="Phone Number"
        />
      </Form.Group>

      <Button className="main-btn" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
