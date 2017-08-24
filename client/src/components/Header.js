import React, { Component } from "react";
import logo from "../assets/logo.jpg";
import "../App.css";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import FontIcon from "material-ui/FontIcon";
import RaisedButton from "material-ui/RaisedButton";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import IconContactMail from "material-ui/svg-icons/communication/contact-mail";
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import ContentGesture from "material-ui/svg-icons/content/gesture";
import Responsive from "react-responsive";
import { Link } from "react-router-dom";

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />;
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />;

const nearbyIcon = <IconLocationOn />;
const accountCircle = <ActionAccountCircle />;
const contact = <IconContactMail />;
const blog = <ContentGesture />;

const paperStyle1 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  marginLeft: 50,
  marginRight: 0,
  width: 400,
  display: "flex"
};

const buttonStyle = {
  color: "#2c9ee7",
  fontSize: 20
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Default>
          <div>
            <p className="App-intro">
              <Link to="/">
                <FlatButton
                  label="Home"
                  labelStyle={{ fontSize: 20 }}
                  style={buttonStyle}
                  hoverColor="#7aca45"
                  rippleColor="#2c9ee7"
                />
              </Link>
              <FlatButton
                label="About"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Service"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <Link to="/signup">
                <FlatButton
                  label="Sign Up"
                  labelStyle={{ fontSize: 20 }}
                  style={buttonStyle}
                  hoverColor="#7aca45"
                  rippleColor="#2c9ee7"
                />
              </Link>
              <FlatButton
                label="Blog"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
              <FlatButton
                label="Account"
                labelStyle={{ fontSize: 20 }}
                style={buttonStyle}
                hoverColor="#7aca45"
                rippleColor="#2c9ee7"
              />
            </p>
          </div>
        </Default>
      </div>
    );
  }
}

export default Header;
