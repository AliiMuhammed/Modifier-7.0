/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../style/location.css"
import MainHeading from "../../../Shared/MainHeading"
function OurLocation() {
  return (
    <section className="location">
      <div className="container">
        <MainHeading haeding={"visit us"} />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.0368487135347!2d31.31056087622279!3d29.86321112713349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458368becfaa68d%3A0xb8a6f7d9576f81f8!2z2YPZhNmK2Kkg2KfZhNit2KfYs9io2KfYqiDZiNin2YTYsNmD2KfYoSDYp9mE2KfYtdi32YbYp9i52YrYjCDYrNin2YXYudipINit2YTZiNin2YY!5e0!3m2!1sen!2seg!4v1689871579898!5m2!1sen!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;
