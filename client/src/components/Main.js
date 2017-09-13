import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp/SignUp'
import Dashboard from './Dashboard'
import Blog from './Blog'
import CreateAccount from './CreateAccount'

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </main>
    )
  }
}

export default Main
