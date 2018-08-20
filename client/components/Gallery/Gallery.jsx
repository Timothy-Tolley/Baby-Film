import React from 'react'
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
      showNav: false,
      thumbnailPosition: 'left'
    }
  }

  render () {
    const images = [
      {
        original: '/images/isabelle.jpg',
        thumbnail: '/images/isabelle-thumb.jpg'
      },
      {
        original: '/images/isabelle-looks-at-connor.jpg',
        thumbnail: '/images/isabelle-looks-at-connor-thumb.jpg'
      },
      {
        original: 'images/leisha-remembering-connor.jpg',
        thumbnail: 'images/leisha-remembering-connor-thumb.jpg'
      },
      {
        original: 'images/leisha.jpg',
        thumbnail: 'images/leisha-thumb.jpg'
      },
      {
        original: 'images/we-dont-know-you.jpg',
        thumbnail: 'images/we-dont-know-you-thumb.jpg'
      }
    ]
    return (
      <div className = 'gallery-container'>
        <ScrollableAnchor id={'gallery'}>
          <h2 className = 'gallery-header'> GALLERY </h2>
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

export default Gallery
