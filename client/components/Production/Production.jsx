import React from 'react'
import {Link} from 'react-router-dom'
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
          <Link to = {'/cast'} className = 'production-links'>
            - Cast and Crew
          </Link>
          <Link to = {'/director'} className = 'production-links'>
            - The Director
          </Link>
          <Link to = {'/producers'} className = 'production-links'>
             - The Producers
          </Link>
          <Link to = {'/faqs'} className = 'production-links'>
            - FAQs
          </Link>
          <a href="/docs/press-kit.pdf" download="baby-press-kit" className = 'press-kit-link'>
            <p className = 'production-links'> - PressKit </p>
          </a>
        </div>
      </div>
    )
  }
}

export default Production
