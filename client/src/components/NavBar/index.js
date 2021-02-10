import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import useStyles from './style';

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.navbar_appBar}>
        <Toolbar className={classes.navbar_toolBar}>
          <Link to="/" className="link">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
          <Link to="/food" className="link">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ControlPointIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
          <Link to="/myprofile" className="link">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MoreHorizIcon className={classes.nav_icons} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;
