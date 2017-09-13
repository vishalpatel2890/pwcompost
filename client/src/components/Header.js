import React, { Component } from 'react'
import '../App.css'
import Responsive from 'react-responsive'
import { connect } from 'react-redux'
import HeaderIn from './HeaderIn'
import HeaderOut from './HeaderOut'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <HeaderOut />
      case false:
        return <HeaderOut />
      default:
        return <HeaderIn />
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
