import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import useStyles from './style';

import { context } from '../userProvider';

function NavBar() {
  const classes = useStyles();
  const isAuthenticated = useContext(context);

  return (
    <>
      <AppBar position="fixed" className={classes.navbar_appBar}>
        <Toolbar className={classes.navbar_toolBar}>
          <Link to="/" className="link">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disabled={!isAuthenticated}
            >
              <HomeIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
          <Link to="/food" className="link">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disabled={!isAuthenticated}
            >
              <ControlPointIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
          <Link to="/myprofile" className="link">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disabled={!isAuthenticated}
            >
              <MoreHorizIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;
