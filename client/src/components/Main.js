import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Dashboard from './Dashboard'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
    )
  }
}

export default Main
