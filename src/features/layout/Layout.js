import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'constants/routes';
import Header from 'features/header/Header';
import Sidebar from 'features/sidebar/Sidebar';
import Mailbox from 'pages/mailbox/Mailbox';

import classes from './Layout.module.scss';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    })
  };

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <div className={classes.wrapper}>
        <Sidebar isOpen={isSidebarOpen}/>

        <div className={classes.right}>
          <Header onClickHamburger={this.toggleSidebar}/>
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={Mailbox}/>
              <Route path={routes.DASHBOARD} component={() => <h1>DASHBOARD</h1>}/>
              <Route path={routes.LAYOUTS} component={() => <h1>LAYOUTS</h1>}/>
              <Route path={routes.GRAPHS} component={() => <h1>GRAPHS</h1>}/>
              <Route path={routes.MAILBOX} component={Mailbox}/>
              <Route path={routes.METRICS} component={() => <h1>METRICS</h1>}/>
              <Route path={routes.WIDGETS} component={() => <h1>WIDGETS</h1>}/>
              <Route path={routes.FORMS} component={() => <h1>FORMS</h1>}/>
              <Route path={routes.APP_VIEWS} component={() => <h1>APP VIEWS</h1>}/>
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout;
