import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './detached-head.css'

class DetachedHead extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <Link to ={'/#synopsis'} className = 'header-link'>
          <p className = 'header-link'> SYNOPSIS </p>
        </Link>
        <Link to='/#gallery' className = 'header-link'>
          <p className = 'header-link'> GALLERY </p>
        </Link>
        <Link to = {'/'} className = 'logo-image-cont'>
          <img src = '/images/baby-logo-white.png' className = 'logo-image'/>
        </Link>
        <Link to='/#production' className = 'header-link'>
          <p className = 'header-link'> PRODUCTION </p>
        </Link>
        <Link to='/#contact' className = 'header-link'>
          <p className = 'header-link'> CONTACT </p>
        </Link>
      </div>
    )
  }
}

export default connect()(DetachedHead)
