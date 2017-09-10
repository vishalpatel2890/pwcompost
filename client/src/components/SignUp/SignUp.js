import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Responsive from 'react-responsive'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Default = ({ children }) =>
  <Responsive minWidth={500} children={children} />
const Mobile = ({ children }) =>
  <Responsive maxWidth={500} children={children} />

const buttonStyle = {
  color: '#2c9ee7',
  fontSize: 20
}

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <Default>
          <div>
            <form
              onSubmit={this.props.handleSubmit(values => console.log(values))}
            >
              <Field type="text" name="title" component="input" />
              <RaisedButton
                type="submit"
                label="Submit"
                fullWidth={true}
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

export default reduxForm({ form: 'signupForm' })(SignUp)
