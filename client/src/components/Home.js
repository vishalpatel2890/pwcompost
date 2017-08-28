import React, { Component } from 'react'
import '../App.css'
import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Responsive from 'react-responsive'

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

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })
  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Default>
          <div>
            <div className="background">
              <div className="content-cell1">
                <div className="title">
                  Peels & Wheels<br /> Compost
                </div>
                <div className="subtitle">
                  A Neighborhood Food Waste Pickup <br />& Composting Operation
                </div>
              </div>
              <div className="content-cell2">
                <Paper style={paperStyle1} zDepth={2}>
                  Content This is mobile! This is mobile! This is mobile! This
                  is mobile! This is mobile! This is mobile! This is mobile!
                  <br />
                  This is mobile! This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                  This is mobile!
                  <br />
                </Paper>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div />
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

export default Home
