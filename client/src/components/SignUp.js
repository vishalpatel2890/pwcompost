import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import FlatButton from 'material-ui/FlatButton'
import Responsive from 'react-responsive'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const buttonStyle = {
  color: '#2c9ee7',
  fontSize: 20
}

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Default>
          <div>
            <p className="App-intro">
              <FlatButton
                label="Home"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="About"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Service"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Sign Up"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Blog"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Account"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
            </p>
          </div>
        </Default>
      </div>
    )
  }
}

export default SignUp
