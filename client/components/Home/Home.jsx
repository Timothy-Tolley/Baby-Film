import React from 'react'
import {connect} from 'react-redux'

import './home.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Synopsis from '../Synopsis/Synopsis'
import BulkHead from '../BulkHead/BulkHead'
import Production from '../Production/Production'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <Header />
        <BulkHead />
        <Synopsis />
        <Production />
        <h1 className = 'home-header'> BABY </h1>
        <h1 className = 'home-header'>  - Short Film </h1>
        <Footer />
      </div>
    )
  }
}

export default connect()(Home)
