import React from 'react'
import {connect} from 'react-redux'

import './director.css'
import DetachedHead from '../DetachedHead/DetachedHead'

class Director extends React.Component {
  render () {
    return (
      <div className = 'director-container'>
        <DetachedHead />
        <br/>
        <h2 className = 'director-header'> Director - Mark Prebble </h2>
        <br/>
        <img src = '/images/mark-prebble.jpg' className = 'director-image'/>
        <br/>
        <h2 className = 'director-header'> DIRECTOR’S STATEMENT </h2>
        <p className = 'director-text'>
            Baby? is a heartfelt and funny drama about two mothers connecting. We were inspired to write this story after our first daughter was born. Some things we wanted to talk about were: postnatal depression, the need for community and a story that celebrates older women. We also wanted a project in which mothers of young children could take key creative roles. We hope Baby? willdraw our audience in with warmth and humour. We want to encourage people to talk about mental health and basically make them want call their mums.
        </p>
        <h2 className = 'director-header'> DIRECTOR’S BIOGRAPHY </h2>
        <p className = 'director-text'>
           Mark Prebble Mark has written and directed film and theatre projects in UK, Australia and around New Zealand. His play The Pantry Shelf, co-written with wife Marion, was an award-winner in Edinburgh and Auckland and a finalist for Best Play Script at Moondance Film Festival. His 2005 feature film Futile Attraction was the first feature film completed using internet crowd-funding. This was funded via his website www.MakeMarksMovie.com (now offline) which predates Facebook and Kickstarter.
        </p>
      </div>
    )
  }
}

export default connect()(Director)
