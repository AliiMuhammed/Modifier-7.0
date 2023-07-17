import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      // Perform login authentication logic here
      console.log("Username:", username);
      console.log("Password:", password);
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>

      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
