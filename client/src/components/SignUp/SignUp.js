import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SignUpPage1 from './SignUpPage1'
import SignUpPage2 from './SignUpPage2'
import SignUpPage3 from './SignUpPage3'
import SignUpPage4 from './SignUpPage4'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <SignUpPage1 onSubmit={this.nextPage} />}
        {page === 2 &&
          <SignUpPage2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <SignUpPage3
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 4 &&
          <SignUpPage4 previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    )
  }
}

export default reduxForm({ form: 'signupForm' })(SignUp)
