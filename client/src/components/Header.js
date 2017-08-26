import React from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import Responsive from 'react-responsive'
import { Link } from 'react-router-dom'

const buttonStyle = {
  color: '#2c9ee7',
  fontSize: 20
}

export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    }
  }

  handleChange = (event, index, value) => this.setState({ value })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <FlatButton
                containerElement={<Link to="/" />}
                linkButton={true}
                label="Home"
              />
              <RaisedButton
                containerElement={<Link to="/signup" />}
                linkButton={true}
                label="Sign Up"
              />
            </ToolbarGroup>
            <ToolbarGroup />
          </Toolbar>
        </div>
      </div>
    )
  }
}
