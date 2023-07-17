import React from "react";
import "./style/login.css";
import LoginForm from "./loginForm";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="content">
            <div className="left">
              <span>Nice to see you again</span>
              <h1>welcome back</h1>
            </div>
            <div className="right">
              <h2>Login</h2>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
