import React from 'react'
import {connect} from 'react-redux'
import ImageGallery from 'react-image-gallery'
import ScrollableAnchor from 'react-scrollable-anchor'

import './gallery.css'
import 'react-image-gallery/styles/css/image-gallery.css'

class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: false,
      showNav: true,
      thumbnailPosition: 'left'
    }
  }

  render () {
    const images = [
      {
        original: '/images/isabelle.png',
        thumbnail: '/images/isabelle.png'
      },
      {
        original: '/images/isabelle-looks-at-connor.png',
        thumbnail: '/images/isabelle-looks-at-connor.png'
      },
      {
        original: 'images/leisha-remembering-connor.png',
        thumbnail: 'images/leisha-remembering-connor.png'
      },
      {
        original: 'images/leisha.png',
        thumbnail: 'images/leisha.png'
      },
      {
        original: 'images/we-dont-know-you.png',
        thumbnail: 'images/we-dont-know-you.png'
      }
    ]
    return (
      <div className = 'gallery-container'>
        <ScrollableAnchor id={'gallery'}>
          <h2 className = 'gallery-header'> - GALLERY - </h2>
        </ScrollableAnchor>
        <ImageGallery
          items={images}
          className = 'gallery-images'
          lazyLoad={false}
          onImageLoad={this._onImageLoad}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          thumbnailPosition={this.state.thumbnailPosition}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}/>
      </div>
    )
  }
}

export default connect()(Gallery)
