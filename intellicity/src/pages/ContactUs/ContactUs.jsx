import React from "react";
import MainHeading from "../../Shared/MainHeading";
import MainHeader from "../../Shared/MainHeader";
import ContactForm from "./components/ContactForm";
import "./style/contact.css";
import img from "../../Assest/Images/contact us/contact-us.png";
import { Link } from "react-router-dom";
import { PiGithubLogoFill } from "react-icons/pi";
import { GrLinkedinOption } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function ContactUs() {
  return (
    <>
      <MainHeader
        title={"Get in Touch with Intellicity"}
        paragraph={
          "Whether you need help , want to provide feedback, or just want to say hello, we're here for you"
        }
      />
      <section className="contact">
        <div className="container">
          <div className="content">
            <div className="right">
              <ContactForm />
            </div>
            <div className="left">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="container">
          <MainHeading haeding={"stay connected"} />
          <div className="links">
            <div className="link">
              <Link to={"https://github.com/AliiMuhammed"}>
                <PiGithubLogoFill />
              </Link>
            </div>
            <div className="link">
              <Link to={"https://www.linkedin.com/in/ali-muhammed-470b18222/"}>
                <GrLinkedinOption />
              </Link>
            </div>
            <div className="link">
              <Link to="mailto:ali.muhammed.dev@gmail.com">
                <MdAlternateEmail />
              </Link>
            </div>
            <div className="link">
              <Link to={"https://www.facebook.com/"}>
                <FaFacebookF />
              </Link>
            </div>
            <div className="link">
              <Link to={"https://twitter.com/"}>
                <FaTwitter />
              </Link>
            </div>
            <div className="link">
              <Link to={"https://www.instagram.com/"}>
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
