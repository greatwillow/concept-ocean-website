import React, { Component } from 'react';
import './contact-form.scss';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form-container">
        <form
          action="https://formspree.io/gregory.g.denys@gmail.com"
          method="POST"
          className="contact-form"
        >
          <label for="email-address">Your Email Address</label>
          <input type="email" name="email-address" className="contact-form-email-input" />
          <label for="message">Your Message</label>

          <textarea name="message" className="contact-form-text-input" />
          <input
            type="submit"
            value="Send Message"
            className="contact-form-submit-button"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
