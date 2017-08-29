import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator
} from 'material-ui/Toolbar'
import Responsive from 'react-responsive'
import { Link } from 'react-router-dom'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'

class HeaderOut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Toolbar>
            <ToolbarTitle text="Peels & Wheels" />
            <ToolbarGroup firstChild={true}>
              <FlatButton label="Home" containerElement={<Link to="/" />} />
              <RaisedButton
                label="About"
                containerElement={<Link to="/signup" />}
              />
              <RaisedButton
                label="Service"
                containerElement={<Link to="/signup" />}
              />
              <RaisedButton
                label="Blog"
                containerElement={<Link to="/signup" />}
              />
              <RaisedButton
                label="Sign Up"
                containerElement={<Link to="/signup" />}
              />
            </ToolbarGroup>

            <ToolbarGroup>
              <ToolbarSeparator />
              <FlatButton
                href="/auth/google"
                label="Login"
                icon={<ActionAccountCircle />}
              />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </div>
    )
  }
}

export default HeaderOut
