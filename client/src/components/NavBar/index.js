import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import useStyles from './style';
import Popover from '../Popover';
import { context } from '../userProvider';

function NavBar() {
  const classes = useStyles();
  const [isAuthenticated] = useContext(context);
  console.log(isAuthenticated);
  const [isClicked, setIsClicked] = useState(true);

  const toggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.navbar_appBar}>
        <Toolbar className={classes.navbar_toolBar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.icon}
            disabled={!isAuthenticated}
          >
            <Link to="/" className="link">
              <HomeIcon
                style={{
                  color: isAuthenticated ? '#FFFFFF' : '#00262F',
                }}
                className={classes.nav_icons}
              />
            </Link>
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disabled={!isAuthenticated}
            onClick={toggle}
          >
            {isClicked ? (
              <ControlPointIcon
                className={classes.nav_icons}
                style={{
                  color: isAuthenticated ? '#FFFFFF' : '#00262F',
                }}
              />
            ) : (
              <IndeterminateCheckBoxOutlinedIcon
                className={classes.nav_icons}
              />
            )}
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disabled={!isAuthenticated}
          >
            <Link to="/myprofile" className="link">
              <MoreHorizIcon
                className={classes.nav_icons}
                style={{
                  color: isAuthenticated ? '#FFFFFF' : '#00262F',
                }}
              />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      {!isClicked && <Popover />}
    </>
  );
}
export default NavBar;
