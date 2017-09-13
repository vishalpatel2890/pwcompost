//logic to render single field and label
import React, { Component } from 'react'
import { RadioButtonGroup } from 'material-ui/RadioButton'

class SignUpRadioField extends Component {
  render() {
    const { input, label, children, meta: { error, touched } } = this.props

    return (
      <div>
        <RadioButtonGroup
          fullWidth={true}
          errorText={touched && error}
          {...input}
          onChange={(event, index, value) => input.onChange(value)}
          children={children}
        />
      </div>
    )
  }
}

export default SignUpRadioField
