import React from 'react'
import {connect} from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import './contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div className = 'contact-container'>
        <ScrollableAnchor id={'contact'}>
          <h2 className = 'contact-header'> - CONTACT - </h2>
        </ScrollableAnchor>
        <div className = 'contact-form'>
          <a href="mailto:webmaster@example.com" className = 'email-link'>
            <p> E: webmaster@example.com </p>
          </a>
          <p> P: +64210044331</p>
        </div>
      </div>
    )
  }
}

export default connect()(Contact)
