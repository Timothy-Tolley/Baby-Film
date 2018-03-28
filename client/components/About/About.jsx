import React from 'react'

import './about.css'

class About extends React.Component {
  render () {
    return (
      <div className = 'about-container'>
        <div className = 'about-text'>
          <img src = '/images/baby-logo-white.png' className = 'about-logo'/>
          <h3> A Short Film </h3>
          <h3> By Mark and Marion Prebble </h3>
        </div>
      </div>
    )
  }
}

export default About
