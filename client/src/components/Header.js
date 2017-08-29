import React, { Component } from 'react'
import '../App.css'
import Responsive from 'react-responsive'
import { connect } from 'react-redux'
import HeaderIn from './HeaderIn'
import HeaderOut from './HeaderOut'

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
        return
      case false:
        return <HeaderOut />
      default:
        console.log(this.props.auth.googleId)
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
