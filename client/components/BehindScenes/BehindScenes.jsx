import React from 'react'
import ImageGallery from 'react-image-gallery'

import './behind-scenes.css'
import 'react-image-gallery/styles/css/image-gallery.css'

class BehindScenes extends React.Component {
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
        original: '/behind-the-scenes/282C2065.jpg',
        thumbnail: '/behind-the-scenes/282C2065-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2273.jpg',
        thumbnail: '/behind-the-scenes/282C2273-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2277.jpg',
        thumbnail: '/behind-the-scenes/282C2277-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2277.jpg',
        thumbnail: '/behind-the-scenes/282C2277-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2307.jpg',
        thumbnail: '/behind-the-scenes/282C2307-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2324.jpg',
        thumbnail: '/behind-the-scenes/282C2324-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2325.jpg',
        thumbnail: '/behind-the-scenes/282C2325-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2343.jpg',
        thumbnail: '/behind-the-scenes/282C2343-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C2653.jpg',
        thumbnail: '/behind-the-scenes/282C2653-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C7894.jpg',
        thumbnail: '/behind-the-scenes/282C7894-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C7952.jpg',
        thumbnail: '/behind-the-scenes/282C7952-thumb.jpg'
      },
      {
        original: '/behind-the-scenes/282C7978.jpg',
        thumbnail: '/behind-the-scenes/282C7978-thumb.jpg'
      }
    ]
    return (
      <div className = 'gallery-container'>
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

export default BehindScenes
