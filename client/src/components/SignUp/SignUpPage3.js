import _ from 'lodash'
import './App.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Responsive from 'react-responsive'
import RaisedButton from 'material-ui/RaisedButton'
import SignUpField from './SignUpField'
import { Link } from 'react-router-dom'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const FIELDS = [
  { label: 'How did you hear about P & W?', name: 'referral' },
  { label: 'If friend please provide his or her name', name: 'referralname' }
]

class SignUpPage3 extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type, component }) => {
      return (
        <div key={name}>
          <Field
            component={SignUpField}
            type={type}
            label={label}
            name={name}
          />
        </div>
      )
    })
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
})(SignUpPage3)
