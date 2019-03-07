import React from 'react'
import Modal from 'react-responsive-modal'

import './production.css'
import Faqs from '../faqs/Faqs'
import Cast from '../Cast/Cast'
import Gallery from '../Gallery/Gallery'
import Director from '../Director/Director'
import Producers from '../Producers/Producers'
import BehindScenes from '../BehindScenes/BehindScenes'

class Production extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cast: false,
      director: false,
      producers: false,
      faqs: false,
      gallery: false,
      behind: false
    }
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal (e) {
    this.setState({
      [e.target.value]: true
    })
  }

  onCloseModal () {
    this.setState({
      cast: false,
      director: false,
      producers: false,
      faqs: false,
      gallery: false,
      behind: false
    })
  }

  render () {
    return (
      <div className = 'production-container'>
        <div className = 'production-content-cont'>
          <h2 className = 'production-header'>
            PRODUCTION
          </h2>
          <div className = 'links-cont'>
            <button className = 'production-links production-button' value = 'cast' onClick = {this.onOpenModal}>
              Cast and Crew
            </button>
            <button className = 'production-links production-button' value = 'director' onClick = {this.onOpenModal}>
              The Director
            </button>
            <button className = 'production-links production-button' value = 'producers' onClick = {this.onOpenModal}>
              The Producers
            </button>
            <button className = 'production-links production-button' value = 'faqs' onClick = {this.onOpenModal}>
              FAQs
            </button>
            <button className = 'production-links production-button' value = 'gallery' onClick = {this.onOpenModal}>
              Film Stills
            </button>
            <button className='production-links production-button' value='behind' onClick={this.onOpenModal}>
              Behind the Scenes
            </button>
            <a href="/docs/press-kit.pdf" download="baby-press-kit" className = 'press-kit-link'>
              <p className = 'production-links'> Download Press Kit </p>
            </a>
          </div>
          <Modal open={this.state.cast} onClose={this.onCloseModal} center>
            <Cast />
          </Modal>
          <Modal open={this.state.director} onClose={this.onCloseModal} center>
            <Director />
          </Modal>
          <Modal open={this.state.producers} onClose={this.onCloseModal} center>
            <Producers />
          </Modal>
          <Modal open={this.state.faqs} onClose={this.onCloseModal} center>
            <Faqs />
          </Modal>
          <Modal open={this.state.gallery} onClose={this.onCloseModal} center>
            <Gallery />
          </Modal>
          <Modal open={this.state.behind} onClose={this.onCloseModal} center>
            <BehindScenes />
          </Modal>
        </div>
        <div className = 'production-content-cont'>
        </div>
      </div>
    )
  }
}

export default Production
