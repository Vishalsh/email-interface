import React from 'react';
import PropTypes from 'prop-types';

const EmailListItem = (props) => {
  const {
    email
  } = props;

  return (
    <li>
      <article className="row">
        <span className="col-sm-2">{email.sender.name}</span>
        <span className="col-sm-1">{email.category}</span>
        <span className="col-sm-6">{email.body}</span>
        <span className="col-sm-1">{email.attachments}</span>
        <span className="col-sm-2">{email.dateTime}</span>
      </article>
    </li>
  );
};

EmailListItem.propTypes = {
  email: PropTypes.object.isRequired
};

export default EmailListItem;
