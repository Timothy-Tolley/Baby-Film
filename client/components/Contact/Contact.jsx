import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div className = 'contact-container'>
        <div className = 'contact-content-cont'>
        </div>
        <div className = 'contact-content-cont'>
          <ScrollableAnchor id = 'contact'>
            <h2 className = 'contact-header'>
                CONTACT
            </h2>
          </ScrollableAnchor>
          <div className = 'contact-text-cont'>
            <p>MARION PREBBLE </p>

            <a href="mailto:marionshortt@gmail.com" className = 'email-link'>
              marionshortt@gmail.com
            </a>

            <a href="tel:+64221559027" className = 'phone-link'>
              +64 22 1559 027
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
