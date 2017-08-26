import React, { Component } from 'react'
import '../App.css'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import IconContactMail from 'material-ui/svg-icons/communication/contact-mail'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import ContentGesture from 'material-ui/svg-icons/content/gesture'
import Responsive from 'react-responsive'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const nearbyIcon = <IconLocationOn />
const accountCircle = <ActionAccountCircle />
const contact = <IconContactMail />
const blog = <ContentGesture />

const paperStyle1 = {
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  marginLeft: 50,
  marginRight: 0,
  width: 400,
  display: 'flex'
}

class Footer extends Component {
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
            <Paper zdepth={1}>
              <BottomNavigation>
                <BottomNavigationItem label="Account" icon={accountCircle} />
                <BottomNavigationItem label="Blog" icon={blog} />
                <BottomNavigationItem label="Contact Us" icon={contact} />
              </BottomNavigation>
            </Paper>
          </div>
        </Default>

        <Mobile />
      </div>
    )
  }
}

export default Footer
