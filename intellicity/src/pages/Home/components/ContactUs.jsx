import React from "react";
import MainHeading from "../../../Shared/MainHeading";
import ContactForm from "./ContactForm";
import "../style/contact.css";
import img from "../../../Assest/Images/contact us/contact-us.png";


function ContactUs() {
  return (
    <>
      <section className="contact" id="contact-us">
        <div className="container">
          <MainHeading haeding={"contact us"} />
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
    </>
  );
}

export default ContactUs;
