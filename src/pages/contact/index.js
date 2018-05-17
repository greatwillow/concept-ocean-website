import React, { Component } from 'react';
import CommonPageContainer from '../../components/CommonPageContainer/CommonPageContainer';
import ContactForm from '../../components/ContactForm/ContactForm';

import './contact.scss';
import '../../styles/base.scss';

class ContactPage extends Component {
  render() {
    return (
      <CommonPageContainer>
        <div className="page-head-title">Get in Contact</div>
        <hr />
        <div className="page-section-spacing">
          <div className="page-section-text">
            <p>
              If you're interested in working together or learning more, I am happy to get
              in touch. Feel free to send me a message below and I will be sure to get
              back to you soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </CommonPageContainer>
    );
  }
}

export default ContactPage;
