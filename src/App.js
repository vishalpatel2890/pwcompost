import React, { Component } from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconContactMail from 'material-ui/svg-icons/communication/contact-mail';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ContentGesture from 'material-ui/svg-icons/content/gesture';
import Responsive from 'react-responsive';

const Default = ({ children }) => <Responsive minWidth={500} children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={500} children={children} />;

const nearbyIcon = <IconLocationOn />;
const accountCircle = <ActionAccountCircle />;
const contact = <IconContactMail/>
const blog = <ContentGesture/>

const paperStyle1 = {
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  marginLeft: 50,
  marginRight: 0,
  width: 400,
  display: "flex"
}

const buttonStyle = {
  color : "#2c9ee7",
  fontSize: 20
}



class App extends Component {

  constructor(props) {
  super(props);
  this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
      <div>

      </div>
        <Default>
          <div>
            <p className="App-intro">
              <FlatButton label="Home" labelStyle={{fontSize:20}}  style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
              <FlatButton label="About" labelStyle={{fontSize:20}} style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
              <FlatButton label="Service" labelStyle={{fontSize:20}} style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
              <FlatButton label="Sign Up" labelStyle={{fontSize:20}} style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
              <FlatButton label="Blog" labelStyle={{fontSize:20}} style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
              <FlatButton label="Account" labelStyle={{fontSize:20}} style={buttonStyle} hoverColor="#7aca45" rippleColor="#2c9ee7"/>
            </p>
            <div className="background">
              <div className="content-cell1">
                <div className="title">Peels & Wheels<br/>  Compost</div>
                <div className="subtitle">A Neighborhood Food Waste Pickup <br/>& Composting Operation</div>
              </div>
              <div className="content-cell2">
                <Paper style={paperStyle1} zDepth={2}>
                    Content
                    This is mobile!
                    This is mobile!
                    This is mobile!
                    This is mobile!
                    This is mobile!
                    This is mobile!
                    This is mobile!
                    <br/>
                    This is mobile!
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                    This is mobile!
                    <br/>
                </Paper>
                <br/>
                <br/>
              </div>

            </div>
            <Paper zdepth={1}>
              <BottomNavigation>
                <BottomNavigationItem
                  label="Accout"
                  icon={accountCircle} />
                  <BottomNavigationItem
                    label="Blog"
                    icon={blog} />
                  <BottomNavigationItem
                    label="Contact Us"
                    icon={contact} />
              </BottomNavigation>
            </Paper>
          </div>
        <div>
        </div>
        </Default>
        <Mobile>
          <div>
            <RaisedButton
                 label="Menu"
                 labelColor="#2c9ee7"
                 onClick={this.handleToggle}
                 hoverStyle="#7aca45"
                 rippleStyle="#2c9ee7"
               />
               <Drawer
                   docked={false}
                   width={200}
                   open={this.state.open}
                   onRequestChange={(open) => this.setState({open})}
                 >
                   <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                   <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
               </Drawer>
            <Paper style={paperStyle1} zDepth={2}>
                This is mobile!
                This is mobile!
                This is mobile!
                This is mobile!
                This is mobile!
                This is mobile!
                This is mobile!
            </Paper>
          <br/>
          <br/>
          </div>

        </Mobile>

      </div>

    );
  }
}

export default App;
