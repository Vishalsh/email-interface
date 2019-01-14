import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import InputWithLabel from 'components/inputWithLabel/InputWithLabel';
import Button from 'components/button/Button';
import { isEmailValid } from 'utilities/formValidators';
import userActions from 'features/user/user.actions'
import classes from './Login.module.scss';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    const { email, password } = this.state;
    event.preventDefault();

    this.props.login({ email, password });
  };

  isFormValid = () => {
    const { email, password } = this.state;

    return password && isEmailValid(email);
  };

  render() {
    const { email, password } = this.state;

    return (
      <section className={classes.login}>
        <form>
          <InputWithLabel label="email" value={email} onChange={this.onChange}/>
          <InputWithLabel label="password" value={password} onChange={this.onChange} inputType="password"/>

          <Button type="primary" onClick={this.submit} disabled={!this.isFormValid()}>
            Compose Mail
          </Button>
        </form>
      </section>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  login: userActions.login
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);
