import React from 'react'
import {connect} from 'react-redux'

import './about.css'

class About extends React.Component {
  render () {
    return (
      <div className = 'about-container'>
        <img src = 'baby-logo.png'/>
      </div>
    )
  }
}

export default connect()(About)
