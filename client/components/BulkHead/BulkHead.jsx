import React from 'react'
import {connect} from 'react-redux'

import './bulk-head.css'

class BulkHead extends React.Component {
  render () {
    return (
      <div className = 'bulk-head-container'>
        <img src = '/images/bulk-header.jpg' className = 'bulk-head-img'/>
      </div>
    )
  }
}

export default connect()(BulkHead)