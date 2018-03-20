import React from 'react'
import {connect} from 'react-redux'

import './gallery.css'

class Gallery extends React.Component {
  render () {
    return (
      <div className = 'gallery-container'>
      </div>
    )
  }
}

export default connect()(Gallery)
