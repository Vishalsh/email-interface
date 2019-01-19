import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Button from 'components/button/Button';
import emailActions from 'features/emails/emails.actions';
import Folders from 'features/mailboxAside/folders/Folders';
import Categories from 'features/mailboxAside/categories/Categories';
import Labels from 'features/mailboxAside/labels/Labels';
import classes from './MailboxAside.module.scss';

export const MailboxAside = (props) => {
  const { toggleCreateEmailPopup } = props;

  return (
    <section className={classes.mailboxAside}>
      <Button type="primary" onClick={toggleCreateEmailPopup}>
        Compose Mail
      </Button>

      <section>
        <h4 className={classes.heading}>FOLDERS</h4>
        <Folders />
      </section>

      <section>
        <h4 className={classes.heading}>CATEGORIES</h4>
        <Categories />
      </section>

      <section>
        <h4 className={classes.heading}>LABELS</h4>
        <Labels />
      </section>
    </section>
  )
};

MailboxAside.propTypes = {
  toggleCreateEmailPopup: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCreateEmailPopup: emailActions.toggleCreateEmailPopup
}, dispatch);

export default connect(null, mapDispatchToProps)(MailboxAside);
