import React, {useState} from 'react';
import "./contact.scss";

export default function Contact() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="./assets/me_ride.jpg" alt="" />
        </div>
        <div className="right">
          <h2>Let's Connect</h2>
          <button onClick={() => openInNewTab("https://www.linkedin.com/in/adrianjchin")}>LinkedIn</button>
        </div>
    </div>
  )
}
