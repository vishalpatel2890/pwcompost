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
import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import Responsive from 'react-responsive'
import { Link } from 'react-router-dom'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const paperStyle1 = {
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  marginLeft: 50,
  marginRight: 0,
  width: 400,
  display: 'flex'
}

class HeaderOut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    }
  }
  handleToggle = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })
  render() {
    return (
      <div>
        <Default>
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
        </Default>
        <Mobile>
          <div>
            <RaisedButton
              label="Menu"
              labelColor="#2c9ee7"
              onClick={this.handleToggle}
              hoverStyle="#7aca45"
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
            <Paper style={paperStyle1} zDepth={2}>
              This is mobile! This is mobile! This is mobile! This is mobile!
              This is mobile! This is mobile! This is mobile!
            </Paper>
            <br />
            <br />
          </div>
        </Mobile>
      </div>
    )
  }
}

export default HeaderOut
