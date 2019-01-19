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
    const { toggleCreateEmailPopup } = this.props;
    const { email } = this.state;
    const { to, cc, subject, body } = email;

    return (
      <div className={classes.modalPopup}>
        <div className={classes.overlay}/>
        <section className={classes.createEmail}>
          <form>
            <InputWithLabel label="to" value={to} onChange={this.onChange}/>
            <InputWithLabel label="cc" value={cc} onChange={this.onChange}/>
            <InputWithLabel label="subject" value={subject} onChange={this.onChange}/>
            <InputWithLabel textarea label="body" value={body} onChange={this.onChange}/>

            <div className="row">
              <div className="col-sm-6">
                <Button type="primary"
                        className={classes.submitButton}
                        onClick={this.submit}
                        disabled={!this.isFormValid()}>
                  Send
                </Button>
              </div>
              <div className="col-sm-6">
                <Button type="default"
                        onClick={toggleCreateEmailPopup}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

CreateEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  toggleCreateEmailPopup: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sendEmail: emailActions.sendEmail,
  toggleCreateEmailPopup: emailActions.toggleCreateEmailPopup
}, dispatch);

export default connect(null, mapDispatchToProps)(CreateEmail);
