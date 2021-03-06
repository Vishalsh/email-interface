import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from 'constants/routes';
import Layout from 'features/layout/Layout';
import Login from 'pages/login/Login';
import Mailbox from 'pages/mailbox/Mailbox';

export const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path={routes.LOGIN} component={Login}/>
    {
      isLoggedIn ?
        <Layout>
          <Switch>
            <Route path={routes.DASHBOARD} component={() => <h1>DASHBOARD</h1>}/>
            <Route path={routes.LAYOUTS} component={() => <h1>LAYOUTS</h1>}/>
            <Route path={routes.GRAPHS} component={() => <h1>GRAPHS</h1>}/>
            <Route path={routes.MAILBOX} component={Mailbox}/>
            <Route path={routes.METRICS} component={() => <h1>METRICS</h1>}/>
            <Route path={routes.WIDGETS} component={() => <h1>WIDGETS</h1>}/>
            <Route path={routes.FORMS} component={() => <h1>FORMS</h1>}/>
            <Route path={routes.APP_VIEWS} component={() => <h1>APP VIEWS</h1>}/>
          </Switch>
        </Layout>
        :
        <Redirect to={routes.LOGIN}/>
    }
  </Switch>
);

Routes.defaultProps = {
  isLoggedIn: false
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = (store) => ({
  isLoggedIn: store.user.data.id !== undefined
});

export default connect(mapStateToProps, null, null, { pure: false })(Routes);
