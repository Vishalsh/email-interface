import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'features/header/Header';
import Sidebar from 'features/sidebar/Sidebar';

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
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
