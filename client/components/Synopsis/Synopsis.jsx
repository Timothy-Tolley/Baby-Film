import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './synopsis.css'

class Synopsis extends React.Component {
  render () {
    return (
      <div className = 'synopsis-container'>
        <ScrollableAnchor id={'synopsis'}>
          <h2 className = 'synopsis-header'> - SYNOPSIS -  </h2>
        </ScrollableAnchor>
        <p className = 'synopsis-text'>
          {"Isabelle is determined not to spend her 65th birthday alone. When her daughter doesn't turn up for dinner, Isabelle invites herself into the home of her newneighbour, Leisha."}
          <br/>
          {"Once inside and eating cake, Isabelle soon discovers that thisyoung woman has recently lost her baby to cot death. When Isabelle's prying triggersa nervous breakdown in Leisha, she helps her in a way nobody else can."}
        </p>
      </div>
    )
  }
}

export default Synopsis
