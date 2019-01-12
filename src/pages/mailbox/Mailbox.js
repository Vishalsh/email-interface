import React, { Component } from 'react';

import MailboxAside from 'features/mailboxAside/MailboxAside';

class Mailbox extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <MailboxAside />
        </div>
        <div className="col-sm-9">
          <h1>Inbox</h1>
        </div>
      </div>
    );
  }
}

export default Mailbox;
