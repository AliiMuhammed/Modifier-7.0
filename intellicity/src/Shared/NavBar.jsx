import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import logo from "../Assest/Images/h-logo.png";
import "../Style/nav.css";
import profile from "../Assest/Images/profile.jpg";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { getAuthUser, removeAuthUser } from "../Helper/Storage";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth = getAuthUser();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const targetId = location.hash.substr(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 150; // Adjust the offset value as needed
      const topPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  const LogOut = () => {
    removeAuthUser();
    navigate("/");
  };

  const [isNavShowing, setIsNavShowing] = useState(false);
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/#home",
    },
    {
      id: 2,
      name: "Our Services",
      path: "/#our-services",
    },
    {
      id: 3,
      name: "About Us",
      path: "/#about",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/#contact-us",
    },
  ];

  return (
    <nav>
      <div className="container nav-container">
        <Link
          to="/#home"
          className="logo"
          onClick={() => setIsNavShowing(false)}
        >
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}

          {/* Authenticated Routes */}
          {auth && auth.type !== "admin" && (
            <>
              <li className="profile-circle">
                <div className="profile">
                  <NavLink to={"/profile/" + auth.type}>
                    <img src={profile} alt="" />
                  </NavLink>
                </div>
              </li>
              <li className={"profile-link"}>
                <NavLink
                  to={"/profile/" + auth.type}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  My Profile
                </NavLink>
              </li>
            </>
          )}
          {/* Authenticated Routes */}
          {auth && auth.type === "admin" && (
            <li>
              <NavLink to={"/admin"}>DashBoard</NavLink>
            </li>
          )}
          {auth && (
            <li>
              <NavLink
                className={"main-btn login-btn nav-btn  "}
                onClick={() => {
                  setIsNavShowing((prev) => !prev);
                  setTimeout(() => {
                    LogOut();
                  }, 2000);
                }}
                to={"/"}
              >
                log out
              </NavLink>
            </li>
          )}
          {/* unAuthenticated Routes*/}
          {!auth && (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsNavShowing((prev) => !prev)}
                  className={"main-btn login-btn  nav-btn"}
                >
                  log in
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsNavShowing((prev) => !prev)}
                  className="main-btn login-btn nav-btn signUp-btn"
                  to="/sign-up"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <button
          className="nav-toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <AiFillCloseSquare /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
