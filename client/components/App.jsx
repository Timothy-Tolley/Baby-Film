import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home/Home'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Route exact path = '/' component = {Home}/>
      </div>
    )
  }
}

export default App
