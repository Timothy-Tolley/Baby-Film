import React from 'react'
import ModalVideo from 'react-modal-video'
import ScrollableAnchor from 'react-scrollable-anchor'

import './trailer.css'
import './modal-video.scss'

class Trailer extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div className = 'trailer-container'>
        <ScrollableAnchor id = {'teaser'}>
          <div className = 'trailer-content-cont trailer-modal'>
            <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='221048246' portrait={false} onClose={() => this.setState({isOpen: false})} />
          </div>
        </ScrollableAnchor>
        <div className = 'trailer-content-cont trailer-main'>
          <h3 className = 'trailer-header'> TEASER </h3>
          <button onClick={this.openModal} className = 'trailer-button'>
            <img className = 'play-icon' alt = 'play icon'/>
            <p className = 'button-text'>
              Watch Now
            </p>
          </button>
        </div>
        <div className = 'laurels-div-teaser'>
          <img src = '/laurels/sms-best-actor.png' alt = 'SMS Best Actor Laurel' className = 'laurel-teaser laurel1-teaser' />
          <img src = '/laurels/kerry-laurel.png' alt = 'Kerry Official Selection Laurel' className = 'laurel-teaser laurel2-teaser'/>
          <img src = '/laurels/sms-official-selection.png' alt = 'SMS Official Selection Laurel' className = 'laurel-teaser laurel3-teaser'/>
          <img src = '/laurels/cinevue-laurel.png' alt = 'Cinevue Laurel' className = 'laurel-teaser laurel4-teaser'/>
          <img src = '/laurels/dub-laurel.png' alt = 'DUB Laurel' className = 'laurel-teaser laurel5-teaser'/>
          <img src = '/laurels/retff-laurel.png' alt = 'RETFF Laurel' className = 'laurel-teaser laurel6-teaser'/>
        </div>
      </div>
    )
  }
}

export default Trailer
