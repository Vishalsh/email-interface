import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'constants/routes';
import Mailbox from 'pages/mailbox/Mailbox';
import Header from 'features/header/Header';

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
