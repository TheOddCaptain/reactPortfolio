import React from 'react';
import './contact.css'

const Contact = () => {
    return (
<div className="form-container">
  <div className="contact-form box">
      <form action="https://formspree.io/erik.har@hotmail.no" method="POST" data-netlify="true">
        <label>
        Fullname/Organisation
          <div className="text-box">
            <input type="text" name="name" className="name" placeholder="Mandatory" autofocus/>
          </div>
        </label><br/>
        <label>
        E-mail
          <div className="text-box">
            <input type="email" name="email" className="email" placeholder="Mandatory"/>
          </div>
        </label><br/>
        <label>
        Phone
          <div className="text-box">
            <input type="tel" name="phone" pattern="[0-9]{8}" className="telephone" placeholder="Optional"/>
          </div>
        </label><br/>
        <label>
        Message
          <div className="text-box">
            <textarea name="message" className="message" rows="10" cols="22">Your message here:</textarea>
          </div>
        </label><br/>
          <div  className="status"><br/>
          </div>
        <button type="submit" value="Send" className="btn">Send</button>
    </form>
  </div>
</div>

    );
}

export default Contact;