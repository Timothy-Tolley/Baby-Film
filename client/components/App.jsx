import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home/Home'
import Cast from './Cast/Cast'
import Faqs from './Faqs/Faqs'
import Director from './Director/Director'
import Producers from './Producers/Producers'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/cast' component = {Cast} />
        <Route exact path = '/faqs' component = {Faqs} />
        <Route exact path = '/director' component = {Director} />
        <Route exact path = '/producers' component = {Producers} />
      </div>
    )
  }
}

export default App
