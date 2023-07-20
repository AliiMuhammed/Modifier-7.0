import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../Style/index.css";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import {setAuthUser}from "../../Helper/Storage"
import {useNavigate} from "react-router-dom"
const LoginForm = () => {
  const navigate=useNavigate()
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [],
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLogin({ ...login, loading: true, err: [] });
      axios
        .post("http://localhost:5000/login", {
          email: login.email,
          password: login.password,
        })
        .then((resp) => {
          setLogin({ ...login, loading: false, err: [] });
          setAuthUser(resp.data)
          navigate("/")
        })
        .catch((err) => {
          setLogin({ ...login, loading: false, err: err.response.data.errors });
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      email: "",
      password: "",
    };

    if (!login.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!login.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <>
      {/* errors handling */}
      {login.err.map((error, index) => (
        <Alert
          key={index}
          variant="danger"
          style={{ width: "80%", marginTop: "1rem" }}
        >
          {error.msg}
        </Alert>
      ))}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          {formErrors.email && (
            <Form.Text className="text-danger">{formErrors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          {formErrors.password && (
            <Form.Text className="text-danger">{formErrors.password}</Form.Text>
          )}
        </Form.Group>
        <Button
          type="submit"
          className="main-btn login-btn"
          disabled={login.loading === true}
        >
          {login.loading === true ? <Spinner animation="border" /> : "Login"}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
