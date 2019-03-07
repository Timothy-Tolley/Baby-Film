import React from 'react'

import './bulk-head.css'

class BulkHead extends React.Component {
  render () {
    return (
      <div className = 'bulk-head-container'>
        <div className = 'top-box-cont laurels-div-cont'>
          <div className = 'laurels-div'>
            <img src = '/laurels/sms-best-actor.png' alt = 'SMS Best Actor Laurel' className = 'laurel laurel1' />
            <img src='/laurels/retff-winner-laurel.png' alt='RETFF Winner Laurel' className='laurel laurel2' />
            <img src = '/laurels/sms-official-selection.png' alt = 'SMS Official Selection Laurel' className = 'laurel laurel3'/>
            <img src='/laurels/kerry-laurel.png' alt='Kerry Official Selection Laurel' className='laurel laurel4' />
            <img src = '/laurels/dub-laurel.png' alt = 'DUB Laurel' className = 'laurel laurel5'/>
            <img src='/laurels/cinevue-laurel.png' alt='Cinevue Laurel' className='laurel laurel6' />
            <img src='/laurels/fifo-laurel.png' alt='Fifo Laurel' className='laurel laurel7' />
            <img src='/laurels/retff-laurel.png' alt='RETFF Laurel' className='laurel laurel8' />

          </div>
        </div>
        <div className = 'top-box-cont bulk-text-cont'>
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
