import _ from 'lodash'
import './App.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Responsive from 'react-responsive'
import RaisedButton from 'material-ui/RaisedButton'
import SignUpField from './SignUpField'
import { Link } from 'react-router-dom'

const FIELDS = [
  { label: 'Neighborhood', name: 'neighborhood', type: 'radio' },
  { label: 'If Other Please Indicate', name: 'otherneighbor', type: 'radio' },
  { label: 'Phone Number', name: 'phone' }
]

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

class SignUpPage2 extends Component {
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

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = 'You must provide a name'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SignUpPage2)
