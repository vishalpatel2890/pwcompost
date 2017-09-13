import _ from 'lodash'
import './App.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Responsive from 'react-responsive'
import RaisedButton from 'material-ui/RaisedButton'
import SignUpField from './SignUpField'
import SignUpSelectField from './SignUpSelectField'
import { Link } from 'react-router-dom'
import { required, phoneNumber } from './validate'
import MenuItem from 'material-ui/MenuItem'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

class SignUpPage2 extends Component {
  renderFields() {
    return (
      <div>
        <Field
          component={SignUpSelectField}
          type="text"
          label="Neighborhood"
          name="neighborhood"
          validate={required}
        >
          <MenuItem value="East Rock" primaryText="East Rock" />
          <MenuItem value="Prospect Hill" primaryText="Prospect" />
          <MenuItem value="Wooster Square" primaryText="Wooster Square" />
          <MenuItem value="Fair Haven" primaryText="Fair Haven" />
          <MenuItem value="Downtown" primaryText="Downtown New Haven" />
          <MenuItem value="Westville" primaryText="Westville" />
          <MenuItem value="Other" primaryText="Other" />
        </Field>
        <Field
          component={SignUpField}
          type="text"
          label="If Other Please Indicate"
          name="othernhood"
        />
        <Field
          component={SignUpField}
          type="text"
          label="Phone Number"
          name="phone"
          validate={[required, phoneNumber]}
        />
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <Default>
          <div className="container">
            <form onSubmit={this.props.handleSubmit}>
              {this.renderFields()}
              <RaisedButton
                label="Previous"
                backgroundColor="#59083d"
                labelColor="#ffffff"
                onClick={this.props.previousPage}
                style={{ float: 'left' }}
              />
              <RaisedButton
                style={{ float: 'right' }}
                type="submit"
                label="Next"
                backgroundColor="#59083d"
                labelColor="#ffffff"
              />
            </form>
          </div>
        </Default>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SignUpPage2)
