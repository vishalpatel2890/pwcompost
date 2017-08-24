import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path='/about' component={About}/>
          <Route path='/service' component={Service}/> */}
        </Switch>
      </main>
    );
  }
}

export default Main;
