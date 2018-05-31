import React from 'react'

import './home.css'

import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Trailer from '../Trailer/Trailer'
import BulkHead from '../BulkHead/BulkHead'
import Production from '../Production/Production'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <BulkHead />
        <About />
        <Production />
        <Trailer />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home
