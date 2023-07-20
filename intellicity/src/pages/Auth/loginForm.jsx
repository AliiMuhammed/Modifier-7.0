import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../Style/index.css";
import { Alert } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: [] });
    axios.post("http://localhost:5000/login", {
      email: login.email,
      password: login.password,
    }).then(resp=>{
      console.log("succses")
      setLogin({ ...login, loading: false, err: [] });
    }).catch(err=>{
      console.log(err)
      setLogin({ ...login, loading: false, err:[] });
    })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          required
        />
      </Form.Group>
      <Button type="submit" className="main-btn login-btn">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
