import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';

import mailboxActions from './mailbox.actions';
import loadingStates from 'constants/loadingStates';
import Emails from 'features/emails/Emails';
import NoEmail from 'features/emails/noEmail/NoEmail';
import classes from './Mailbox.module.scss';
import EmailDetails from 'features/emails/emailDetails/EmailDetails';

export class Mailbox extends Component {
  componentDidMount() {
    const { match, getEmails, mailbox } = this.props;

    if (mailbox.loadingState === loadingStates.AT_REST) {
      getEmails(match.params.mailbox);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { match, getEmails, mailbox } = nextProps;

    if ((match.params.mailbox !== this.props.match.params.mailbox) && mailbox.loadingState === loadingStates.AT_REST) {
      getEmails(match.params.mailbox);
    }
  }

  render() {
    const { match, mailbox } = this.props;

    return (
      <section className={classes.mailbox}>
        <header className={classes.header}>
          <h1 className={classes.name}>{match.params.mailbox}</h1>
        </header>

        {
          mailbox.emails.length > 0 ?
            <Emails mailbox={match.params.mailbox} ids={mailbox.emails}/>
            :
            <NoEmail />
        }

        <Route path={`${match.url}/:id`} component={EmailDetails}/>
      </section>
    );
  }
}

Mailbox.defaultProps = {
  mailbox: {
    emails: [],
    loadingState: loadingStates.AT_REST
  }
};

Mailbox.propTypes = {
  match: PropTypes.object.isRequired,
  mailbox: PropTypes.shape({
    emails: PropTypes.array,
    loadingState: PropTypes.string,
  }),
  getEmails: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  mailbox: store.mailbox[ownProps.match.params.mailbox]
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmails: mailboxActions.getEmails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
