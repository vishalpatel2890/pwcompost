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
import { required, number } from './validate'
import { withRouter } from 'react-router-dom'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

class SignUpPage4 extends Component {
  renderFields() {
    return (
      <div>
        <Field
          component={SignUpField}
          type="text"
          label="# of adults in the household"
          name="adultno"
          validate={number}
        />
        <Field
          component={SignUpField}
          type="text"
          label="# of children in the household"
          name="childno"
          validate={[required, number]}
        />
        <Field
          component={SignUpField}
          type="text"
          label="Where can we pick up your bin?"
          name="binloc"
          validate={[required]}
        />
        <Field
          component={SignUpField}
          type="text"
          label="Would you like finished compost back, or would like to donate it to New Haven Farms?"
          name="donate"
          validate={required}
        />
      </div>
    )
  }
  render() {
    const { formValues, submitUser, history } = this.props
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
                onClick={() => submitUser(formValues, history)}
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

SignUpPage4 = connect(mapStateToProps, actions)(withRouter(SignUpPage4))

export default SignUpPage4
