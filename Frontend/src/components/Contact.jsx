import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">Contact Us</header>

      <main className="contact-main">
        <div className="contact-form-wrapper">
          <h2>We'd love to hear from you</h2>

          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your message..."></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>

      <footer className="contact-footer">© 2025 Art Gallery</footer>
    </div>
  );
};

export default ContactPage;
