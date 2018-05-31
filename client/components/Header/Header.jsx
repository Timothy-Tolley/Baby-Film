import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <Link to = {'/'} className = 'logo-image-cont'>
          <img src = '/images/baby-logo-white.png' className = 'logo-image'/>
        </Link>
        <div className = 'header-link-cont'>
          <a href = '/' className = 'header-link'>
          HOME
          </a>
          <a href = '/#teaser' className = 'header-link'>
          TEASER
          </a>
          <a href = '/#contact' className = 'header-link'>
          CONTACT
          </a>
        </div>
      </div>
    )
  }
}

export default Header
