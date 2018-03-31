import React from 'react'
import {Link} from 'react-router-dom'

import './detached-head.css'

class DetachedHead extends React.Component {
  render () {
    return (
      <div className = 'det-header-container'>
        <Link to ={'/#synopsis'} className = 'det-header-link'>
          <p className = 'det-header-link'> SYNOPSIS </p>
        </Link>
        <Link to='/#gallery' className = 'det-header-link'>
          <p className = 'det-header-link'> GALLERY </p>
        </Link>
        <Link to = {'/'} className = 'det-logo-image-cont'>
          <img src = '/images/baby-logo-white.png' className = 'det-logo-image'/>
        </Link>
        <Link to='/#production' className = 'det-header-link'>
          <p className = 'det-header-link'> PRODUCTION </p>
        </Link>
        <Link to='/#contact' className = 'det-header-link'>
          <p className = 'det-header-link'> CONTACT </p>
        </Link>
      </div>
    )
  }
}

export default DetachedHead
