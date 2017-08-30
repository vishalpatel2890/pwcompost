import React, { Component } from 'react'
import '../App.css'
import Paper from 'material-ui/Paper'
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation'
import IconContactMail from 'material-ui/svg-icons/communication/contact-mail'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle'
import ContentGesture from 'material-ui/svg-icons/content/gesture'
import Responsive from 'react-responsive'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const accountCircle = <ActionAccountCircle />
const contact = <IconContactMail />
const blog = <ContentGesture />

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Default>
          <div>
            <Paper>
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

export default Dashboard
