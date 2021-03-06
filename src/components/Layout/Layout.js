import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css'

const layout = (props) => (
  <Fragment>
    <div>backdrop</div>
    <SideDrawer />
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Fragment>
)

export default layout;