import React from 'react'

import './cast.css'
import {crew, production, cast} from '../../data/data.js'

class Cast extends React.Component {
  render () {
    return (
      <div className = 'cc-page-container'>
        <div className = 'cc-container'>
          <div className = 'cast-container'>
            <h2 className = 'cast-text'> CAST </h2>
            {cast.map((role, idx) => {
              return (
                <p key = {idx} className = 'cast-text'> {role} </p>
              )
            })}
            <br/>
            <h2 className = 'cast-text'> PRODUCTION </h2>
            {production.map((role, idx) => {
              return (
                <p key = {idx} className = 'cast-text'> {role} </p>
              )
            })}
          </div>
          <div className = 'crew-container'>
            <h2 className = 'cast-text'> CREW </h2>
            {crew.map((role, idx) => {
              return (
                <p key = {idx} className = 'cast-text'> {role} </p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Cast
