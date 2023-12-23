import React from "react";
import MailIcon from "./images/mail-icon.png";
import PhoneIcone from "./images/phone-icon.png";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={PhoneIcone} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={MailIcon} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
