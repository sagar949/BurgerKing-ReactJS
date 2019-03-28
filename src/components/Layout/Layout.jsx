import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from './../Navigation/NavigationItems/SideDrawer/SideDrawer';

const Layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
