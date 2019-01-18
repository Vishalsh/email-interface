import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/button/Button';
import Folders from 'features/mailboxAside/folders/Folders';
import Categories from 'features/mailboxAside/categories/Categories';
import Labels from 'features/mailboxAside/labels/Labels';
import routes from 'constants/routes';
import classes from './MailboxAside.module.scss';

const MailboxAside = () => {
  return (
    <section className={classes.mailboxAside}>
      <Button type="primary" onClick={() => alert('compose')}>
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

export default MailboxAside;
