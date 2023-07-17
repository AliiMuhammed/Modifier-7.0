import React from "react";
import "./style/login.css";
import LoginForm from "./loginForm";
import {Link} from "react-router-dom"
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
              <Link to={"/sign-up"}>Don't have an account ?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
