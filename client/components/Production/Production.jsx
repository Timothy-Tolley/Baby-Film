import React from 'react'
import {connect} from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import './production.css'

class Production extends React.Component {
  render () {
    return (
      <div className = 'production-container'>
        <div className = 'production-header'>
          <ScrollableAnchor id={'production'}>
            <h2> PRODUCTION </h2>
          </ScrollableAnchor>
        </div>
        <div className = 'production-text-cont'>
          <p className = 'production-links'> - Cast and Crew </p>
          <p className = 'production-links'> - The Director </p>
          <p className = 'production-links'> - The Producers </p>
          <p className = 'production-links'> - Credits </p>
          <a href="/docs/press-kit.pdf" download="baby-press-kit" className = 'press-kit-link'>
            <p className = 'production-links'> - PressKit </p>
          </a>
        </div>
      </div>
    )
  }
}

export default connect()(Production)
