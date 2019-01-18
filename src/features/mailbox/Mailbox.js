import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';

import mailboxActions from './mailbox.actions';
import loadingStates from 'constants/loadingStates';
import { INBOX } from 'constants/mailbox';
import Button from 'components/button/Button';
import Emails from 'features/emails/Emails';
import NoEmail from 'features/emails/noEmail/NoEmail';
import InboxUnreadEmailsCount from 'features/mailbox/inboxUnreadEmailsCount/InboxUnreadEmailsCount';
import EmailDetails from 'features/emails/emailDetails/EmailDetails';
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
    const { match, mailbox } = this.props;

    return (
      <section className={classes.mailbox}>
        <header className={classes.header}>
          <div className="row">
            <h1 className={`${classes.name} col-sm-6`}>
              {match.params.mailbox}
              {
                match.params.mailbox === INBOX &&
                <>(<InboxUnreadEmailsCount showBadge={false}/>)</>
              }
            </h1>
          </div>
          <div className={`${classes.mailboxActions} row`}>
            <div className="col-sm-8 flex">
              <Button type="default" className={classes.actionButton}>
                <i className={`icon icon-refresh ${classes.iconRefresh}`}/>
                <span>Refresh</span>
              </Button>
              <Button type="default" className={classes.actionButton}>
                <i className="icon icon-eye"/>
              </Button>
              <Button type="default" className={classes.actionButton}>
                <i className="icon icon-bang"/>
              </Button>
              <Button type="default" onClick={this.onClickDeleteEmails} className={classes.actionButton}>
                <i className="icon icon-delete"/>
              </Button>
            </div>
            <div className="col-sm-4 end-xs flex">
              <Button type="default">
                <i className="icon icon-left"/>
              </Button>
              <Button type="default" className={classes.paginationRightButton}>
                <i className="icon icon-right"/>
              </Button>
            </div>
          </div>
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
  getEmails: PropTypes.func.isRequired,
  deleteEmails: PropTypes.func.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  mailbox: store.mailbox[ownProps.match.params.mailbox]
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getEmails: mailboxActions.getEmails,
  deleteEmails: mailboxActions.deleteEmails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
