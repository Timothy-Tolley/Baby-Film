import React from 'react'
import {connect} from 'react-redux'

import './cast.css'
import Header from '../Header/Header'
import {crew, production, cast} from '../../data/data.js'

class Cast extends React.Component {
  render () {
    return (
      <div className = 'cc-page-container'>
        <Header />
        <div className = 'cc-container'>
          <div className = 'cast-container'>
            <h2> CAST </h2>
            {cast.map((role, idx) => {
              return (
                <p key = {idx}> {role} </p>
              )
            })}
            <br/>
            <h2> PRODUCTION </h2>
            {production.map((role, idx) => {
              return (
                <p key = {idx}> {role} </p>
              )
            })}
          </div>
          <div className = 'crew-container'>
            <h2> CREW </h2>
            {crew.map((role, idx) => {
              return (
                <p key = {idx}> {role} </p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Cast)
