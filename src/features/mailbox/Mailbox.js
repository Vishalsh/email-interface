import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Mailbox.module.scss';

const Mailbox = (props) => {
  const { match } = props;

  return (
    <section className={classes.mailbox}>
      <header className={classes.header}>
        <h1 className={classes.name}>{match.params.mailbox}</h1>
      </header>
    </section>
  );
};

Mailbox.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Mailbox;
