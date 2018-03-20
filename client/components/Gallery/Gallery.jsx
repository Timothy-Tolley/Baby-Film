import React from 'react'
import {connect} from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import './gallery.css'

class Gallery extends React.Component {
  render () {
    return (
      <div className = 'gallery-container'>
        <ScrollableAnchor id={'gallery'}>
        </ScrollableAnchor>
      </div>
    )
  }
}

export default connect()(Gallery)
