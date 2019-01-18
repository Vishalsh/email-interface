import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from 'constants/routes';
import MailboxAside from 'features/mailboxAside/MailboxAside';
import MailboxFeature from 'features/mailbox/Mailbox';

const Mailbox = (props) => {
  const { match } = props;

  return (
    <div className="row">
      <div className="col-sm-3">
        <MailboxAside />
      </div>
      <div className="col-sm-9">
        <Switch>
          <Redirect exact from={routes.MAILBOX} to={routes.INBOX}/>
          <Route path={`${match.url}/:mailbox`} component={MailboxFeature}/>
        </Switch>
      </div>
    </div>
  );
};

export default Mailbox;
