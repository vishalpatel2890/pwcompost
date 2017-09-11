import _ from 'lodash'
import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Responsive from 'react-responsive'
import RaisedButton from 'material-ui/RaisedButton'
import SignUpField from './SignUpField'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const FIELDS = [
  { label: '# of adults in the household', name: 'adultno' },
  { label: '# of children in the household', name: 'childrenno' },
  {
    label: 'Where can we pick up your compost bin?',
    name: 'pickup'
  },
  {
    label:
      'Would you like finished compost back, or would like to donate it to New Haven Farms?',
    name: 'donate'
  }
]

class SignUpPage4 extends Component {
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
    const { formValues, submitUser } = this.props
    return (
      <div className="App">
        <Default>
          <div className="container">
            <form
              onSubmit={this.props.handleSubmit(() => submitUser(formValues))}
            >
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
                label="Submit"
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

function mapStateToProps(state) {
  return { formValues: state.form.signupForm.values }
}

SignUpPage4 = reduxForm({
  validate,
  form: 'signupForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SignUpPage4)

SignUpPage4 = connect(mapStateToProps, actions)(SignUpPage4)

export default SignUpPage4
