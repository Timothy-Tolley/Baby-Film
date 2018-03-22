import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home/Home'
import Cast from './Cast/Cast'
import Faqs from './faqs/Faqs'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/cast' component = {Cast} />
        <Route exact path = '/faqs' component = {Faqs} />
      </div>
    )
  }
}

export default App
