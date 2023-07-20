import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../Assest/Images/h-logo.png";
import "../Style/nav.css";
import profile from "../Assest/Images/profile.jpg";

// Rest of the code...

const NavBar = () => {
  const location = useLocation();

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
      path: "/services",
    },
    {
      id: 3,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/#contact-us",
    },
  ];

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to={"/#home"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="/#about">About us</Link>
          </li>
          <li>
            <Link to="/#our-services">Our Services</Link>
          </li>
          <li>
            <Link to="/#contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="nav-btns">
          <Link className="main-btn login-main-btn" to="/login">
            Login
          </Link>
          <Link className="main-btn sign-main-btn" to="/sign-up">
            Sign Up
          </Link>
        </div>

        {/* <div className="profile">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="profile-btn">
              <img src={profile} alt="" />
            </Dropdown.Toggle>
            <Dropdown.Menu
            className="drop-down-profile"
              style={{
                transform: "translate(-50%, 0)",
                top: "100%",
                left: "50%",
              }}
            >
              <Dropdown.Item href="#/action-1">Your Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/logout" className="btn login-btn">
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
