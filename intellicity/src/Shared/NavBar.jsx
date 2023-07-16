import React from 'react';
import { Link } from 'react-router-dom';
import logo from"../Assest/Images/h-logo.png"
import "../Style/nav.css"
const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"#about"}>about us</Link></li>
                    <li><Link to={"#our-services"}>Our Services</Link></li>
                    <li><Link to={"/contact-us"}>Contact Us</Link></li>
                </ul>
                <Link className='btn login-btn' to={"/login"}>Login</Link>
            </div>
        </nav>
    );
};

export default NavBar;