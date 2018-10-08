import React from 'react'

import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className = 'footer-container'>
        <img className = 'NZFC-logo' src = '/images/NZFC.png' alt = 'NZFC logo' />
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
        <img className = 'Genera-logo' src = '/images/Genera.png' alt = 'Genera logo' />
      </div>
    )
  }
}

export default Footer
