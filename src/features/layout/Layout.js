import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'constants/routes';
import Header from 'features/header/Header';
import Mailbox from 'pages/mailbox/Mailbox';

const Layout = () => (
  <>
  <Header />

  <main>
    <Switch>
      <Route exact path="/" component={Mailbox}/>
      <Route path={routes.MAILBOX} component={Mailbox}/>
    </Switch>
  </main>
  </>
);

export default Layout;
