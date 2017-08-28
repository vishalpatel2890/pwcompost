import React, { Component } from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import Responsive from 'react-responsive'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    }
  }

  handleChange = (event, index, value) => this.setState({ value })

  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still deciding'
      case false:
        return 'loggedout'
      default:
        return 'loggedin'
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
            <ToolbarTitle text={this.renderContent()} />
            <ToolbarGroup firstChild={true}>
              <FlatButton
                containerElement={<Link to="/" />}
                // linkButton={true}
                label="Home"
              />
              <RaisedButton
                containerElement={<Link to="/signup" />}
                // linkButton={true}
                label="Sign Up"
              />
              <FlatButton
                containerElement={<Link to="/" />}
                // linkButton={true}
                label="Home"
              />
            </ToolbarGroup>
            <ToolbarGroup />
            <ToolbarGroup />
          </Toolbar>
        </div>
        {this.renderContent}
      </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
