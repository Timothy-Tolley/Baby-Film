import React from 'react'
import {connect} from 'react-redux'

import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className = 'footer-container'>
        <p className = 'footer-text'>
          MARION PREBBLE  JULIE COLLIS  NISHA MADHAN       <br/>
          DIRECTOR MARK PREBBLE {'WRITERS MARK & MARION PREBBLE'}
          <br/>
          {'PRODUCERS RUBY REIHANA-WILSON, MARION & MARK PREBBLE'}
          <br/>
          PRODUCED IN ASSOCIATION WITH NEW ZEALAND FILM COMMISSION AND GENERA
          <br/>
          DOP TAMMY WILLIAMS EDITOR KERRI ROGGIO ORIGINAL MUSIC CLAIRE COWAN
        </p>
      </div>
    )
  }
}

export default connect()(Footer)
