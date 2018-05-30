import React from 'react'

import './home.css'

import About from '../About/About'
// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'
import Synopsis from '../Synopsis/Synopsis'
import BulkHead from '../BulkHead/BulkHead'
import Production from '../Production/Production'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        {/* <Header /> */}
        <BulkHead />
        <About />
        <Synopsis />
        <Gallery />
        <Production />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home
