import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../App.css'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(App)
