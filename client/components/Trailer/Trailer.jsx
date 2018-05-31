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
          <div className = 'trailer-content-cont'>
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
      </div>
    )
  }
}

export default Trailer
