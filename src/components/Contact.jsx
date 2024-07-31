import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-con">
      <div className="box3">
        <h1>Reach Out</h1>
        <p>Get in touch with us for any questions</p>
        <form action="/submit" method="post">
          <label htmlFor="username">First name:</label>
          <br />
          <br />
          <input type="text" id="username" name="username" required />
          <br />
          <br />
          <label htmlFor="email">Email Address:</label>
          <label htmlFor="username">First name:</label>
          <br />
          <br />
          <input type="email" id="email" name="email" required />
          <input type="text" id="username" name="username" required />

          <br />
          <br />
          <label>Select a reason for reaching out:</label>
          <div>
            <button type="button">Support</button>
            <button type="button">Sales</button>
            <button type="button">Feedback</button>
            <button type="button">Other</button>
          </div>
          <br />
          <br />

          <label htmlFor="location">Enter your location:</label>
          <br />
          <br />
          <input type="text" id="location" name="location" required />
          <br />
          <br />
          <label htmlFor="land-area">Land Area Size</label>
          <br />
          <br />
          <input
            type="number"
            id="land-area"
            name="land-area"
            placeholder="6000 sqft"
            required
          />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="box4">
        <div className="latest-up">Latest Updates</div>
        <p>Get in touch with us for any questions</p>
        <a href="https://example.com/link1">linkedin</a>
        <a href="https://example.com/link2">Instagram</a>
        <a href="https://example.com/link3">Facebook</a>
        <p>We are located at-</p>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.189424540261!2d73.80323481555257!3d18.50356938741062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf537e64be23%3A0x15a9e3b5ef8281!2s18%C2%B030&#39;12.9%22N%2073%C2%B048&#39;20.9%22E!5e0!3m2!1sen!2sin!4v1690689157762!5m2!1sen!2sin"
          width="500"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
