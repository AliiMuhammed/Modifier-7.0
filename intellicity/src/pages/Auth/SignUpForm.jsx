import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [sign, setSign] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    loading: false,
    err: [],
    success: "",
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
        setSign({
          ...sign,
          loading: false,
          err: [],
          success:
            "Congratulations! You have successfully signed up. Welcome aboard!, Redirecting to login page in 5 seconds.",
        });
        // Navigate to the login page after 5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((err) => {
        setSign({ ...sign, loading: false, err: err.response.data.errors });
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* errors handling */}
      {sign.err.map((error, index) => (
        <Alert key={index} variant="danger">
          {error.msg}
        </Alert>
      ))}
      {/* successfully sign up */}
      {sign.success !== "" && <Alert variant="success">{sign.success}</Alert>}
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
      <Button
        type="submit"
        className="main-btn"
        disabled={sign.loading === true}
      >
        {sign.loading === true ? <Spinner animation="border" /> : "Sign Up"}
      </Button>
    </Form>
  );
};

export default SignUpForm;
