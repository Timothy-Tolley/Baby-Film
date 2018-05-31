import React from 'react'

import './bulk-head.css'

class BulkHead extends React.Component {
  render () {
    return (
      <div className = 'bulk-head-container'>
        <div className = 'top-box-cont'>
          <div className = 'laurels-div'>
            <img src = '/images/best-actor-laurel.png' alt = 'best actor laurel' className = 'laurel' />
            <img src = '/images/official-selection-laurel.png' alt = 'official selection laurel' className = 'laurel'/>
          </div>
        </div>
        <div className = 'top-box-cont'>
          <div className = 'logo-div'>
            <img src = '/images/baby-logo-white.png' alt = 'Baby Logo' className = 'baby-logo-top-box' />
          </div>
          <h3 className = 'header-text'> A Short Film </h3>
          <h3 className = 'header-text'> By Mark and Marion Prebble </h3>
          <div className ='link-trailer-cont'>
            <a className = 'trailer-link' href = '/#teaser'> Watch Teaser </a>
          </div>
        </div>
      </div>
    )
  }
}

export default BulkHead
