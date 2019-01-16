import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classes from './EmailDetails.module.scss';

export const EmailDetails = (props) => {
  const {
    email
  } = props;

  return (
    <section className={classes.emailDetails}>
      <div className="row middle-sm">
        <h1>{email.subject}</h1>
        <div>
          <span className={`${classes.category} ${email.category}`}>{email.category}</span>
        </div>
      </div>

      <div className={`${classes.detailRow} row`}>
        <div className="col-sm-6">
          <span className={classes.label}>From: </span>
          <span>{`${email.sender.name} <${email.sender.email}>`}</span>
        </div>
        <div className="col-sm-6 end-sm">
          <span>{email.dateTime}</span>
        </div>
      </div>

      <p>{email.body}</p>
    </section>
  );
};

EmailDetails.propTypes = {
  email: PropTypes.object.isRequired
};

const mapStateToProps = (store, ownProps) => ({
  email: store.emails[ownProps.match.params.id]
});

export default connect(mapStateToProps)(EmailDetails);
