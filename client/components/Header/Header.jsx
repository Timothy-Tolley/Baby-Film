import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <a href='#synopsis' className = 'header-link'>
          <p className = 'header-link'> SYNOPSIS </p>
        </a>
        <a href='#gallery' className = 'header-link'>
          <p className = 'header-link'> GALLERY </p>
        </a>
        <Link to = {'/'} className = 'logo-image-cont'>
          <img src = '/images/baby-logo-white.png' className = 'logo-image'/>
        </Link>
        <a href='#production' className = 'header-link'>
          <p className = 'header-link'> PRODUCTION </p>
        </a>
        <a href='#contact' className = 'header-link'>
          <p className = 'header-link'> CONTACT </p>
        </a>
      </div>
    )
  }
}

export default Header
