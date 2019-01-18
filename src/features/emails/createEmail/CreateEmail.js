import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Button from 'components/button/Button';
import emailActions from 'features/emails/emails.actions';
import InputWithLabel from 'components/inputWithLabel/InputWithLabel';
import { isEmailValid } from 'utilities/formValidators';
import classes from './CreateEmail.module.scss';

export class CreateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        to: '',
        cc: '',
        subject: '',
        body: ''
      }
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    const { email } = this.state;

    this.setState({
      email: {
        ...email,
        [name]: value
      }
    })
  };

  isFormValid = () => {
    const { to } = this.state.email;

    return isEmailValid(to);
  };

  submit = (event) => {
    const { email } = this.state;
    event.preventDefault();

    this.props.sendEmail(email);
  };

  render() {
    const { email } = this.state;
    const { to, cc, subject, body } = email;

    return (
      <section className={classes.createEmail}>
        <form>
          <InputWithLabel label="to" value={to} onChange={this.onChange}/>
          <InputWithLabel label="cc" value={cc} onChange={this.onChange}/>
          <InputWithLabel label="subject" value={subject} onChange={this.onChange}/>
          <InputWithLabel label="body" value={body} onChange={this.onChange}/>

          <Button type="primary" onClick={this.submit} disabled={!this.isFormValid()}>
            Compose Mail
          </Button>
        </form>
      </section>
    );
  }
}

CreateEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sendEmail: emailActions.sendEmail
}, dispatch);


export default connect(null, mapDispatchToProps)(CreateEmail);
