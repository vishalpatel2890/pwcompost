//logic to render single field and label
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class SignUpField extends Component {
  render() {
    const { input, label, meta: { error, touched } } = this.props

    return (
      <div>
        <TextField
          fullWidth={true}
          errorText={touched && error}
          hintText={label}
          {...input}
        />
      </div>
    )
  }
}

export default SignUpField
