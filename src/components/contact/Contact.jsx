import React, {useState} from 'react';
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event)=>{
    event.preventDefault();
    setMessage(true);
  }

  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="assets/me_ride.jpg" alt="" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I will reply soon!</span>}
          </form>
        </div>
    </div>
  )
}
