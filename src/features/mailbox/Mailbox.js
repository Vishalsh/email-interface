import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';

import mailboxActions from './mailbox.actions';
import loadingStates from 'constants/loadingStates';
import Emails from 'features/emails/Emails';
import NoEmail from 'features/emails/noEmail/NoEmail';
import EmailDetails from 'features/emails/emailDetails/EmailDetails';
import CreateEmail from 'features/emails/createEmail/CreateEmail';
import MailboxHeader from 'features/mailbox/mailboxHeader/MailboxHeader';
import classes from './Mailbox.module.scss';

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

  onClickDeleteEmails = () => {
    const { match, deleteEmails } = this.props;

    deleteEmails(match.params.mailbox);
  };

  render() {
    const { match, mailbox, isCreateEmailPopupOpen } = this.props;

    return (
      <section className={classes.mailbox}>
        <MailboxHeader mailbox={match.params.mailbox} onClickDeleteEmails={this.onClickDeleteEmails}/>

        {
          mailbox.emails.length > 0 ?
            <Emails mailbox={match.params.mailbox} ids={mailbox.emails}/>
            :
            <NoEmail />
        }

        <Route path={`${match.url}/:id`} component={EmailDetails}/>

        {
          isCreateEmailPopupOpen &&
          <CreateEmail />
        }
      </section>
    );
  }
}

Mailbox.defaultProps = {
  mailbox: {
    emails: [],
    loadingState: loadingStates.AT_REST
  },
  isCreateEmailPopupOpen: false
};

Mailbox.propTypes = {
  match: PropTypes.object.isRequired,
  mailbox: PropTypes.shape({
    emails: PropTypes.array,
    loadingState: PropTypes.string,
  }),
  isCreateEmailPopupOpen: PropTypes.bool.isRequired,
  getEmails: PropTypes.func.isRequired,
  deleteEmails: PropTypes.func.isRequired,
};

const mapStateToProps = (store, ownProps) => ({
  mailbox: store.mailbox[ownProps.match.params.mailbox],
  isCreateEmailPopupOpen: store.emails.isCreateEmailPopupOpen
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmails: mailboxActions.getEmails,
  deleteEmails: mailboxActions.deleteEmails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
