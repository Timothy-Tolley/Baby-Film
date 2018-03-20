import React from 'react'
import {connect} from 'react-redux'

import './header.css'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <p className = 'header-link'> SYNOPSIS </p>
        <p className = 'header-link'> GALLERY </p>
        <img src = '/images/baby-logo-white.png' className = 'logo-image'/>
        <p className = 'header-link'> PRODUCTION </p>
        <p className = 'header-link'> CONTACT </p>
      </div>
    )
  }
}

export default connect()(Header)
