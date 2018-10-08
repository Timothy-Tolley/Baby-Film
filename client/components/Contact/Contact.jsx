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
            <form action='https://formspree.io/marionshortt@gmail.com' method='POST' className = 'contact-form'>
              <input type='text' name='Name' placeholder = 'Name' className = 'inputField'/>
              <input type='email' name='Return Email' placeholder = 'Email' className = 'inputField'/>
              <textarea type='text' name='Message' className = 'inputField' placeholder='Your Message' id = 'text-area'/>
              <button type='submit' value='Send' className = 'formButton'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
