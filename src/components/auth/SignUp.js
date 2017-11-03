import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as authActions from '../../actions/authActions';
import FormInput from '../shared/FormInput';


const mapStateToProps = (state) => ({
  errorMessage: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

class SignUp extends React.Component {
  handleFormSubmit = ({email, password}) => {
    this.props.authActions.signUpUser({email, password});
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset>
          <label>Email:</label>
          <Field
            type="email"
            component={FormInput}
            name="email"
          />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field
            type="password"
            component={FormInput}
            name="password"
          />
        </fieldset>
        <fieldset>
          <label>Confirm password:</label>
          <Field
            type="password"
            component={FormInput}
            name="passwordConfirm"
          />

        </fieldset>

        {this.renderAlert()}

        <button type="submit">Sign up</button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match'
  }

  return errors;
};

SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default reduxForm({
  form: 'signUpForm',
  validate
})(SignUp);