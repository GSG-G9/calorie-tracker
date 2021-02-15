import React, { useContext, useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';

import useStyles from './style';
import Popover from '../Popover';
import { context } from '../userProvider';
import AddFoodIcon from '../AddFoodIcon';

function NavBar() {
  const classes = useStyles();
  const [isAuthenticated] = useContext(context);
  const [isClicked, setIsClicked] = useState(true);

  const toggle = () => (isAuthenticated ? setIsClicked(!isClicked) : '');
  return (
    <>
      <AppBar position="fixed" className={classes.navbar_appBar}>
        <Toolbar className={classes.navbar_toolBar}>
          <Link to={isAuthenticated ? '/' : ''} className="link">
            <HomeIcon
              className={
                isAuthenticated ? classes.nav_icons : classes.nav_icons_disabled
              }
            />
          </Link>
          <AddFoodIcon
            isClicked={isClicked}
            onClick={toggle}
            className={
              isAuthenticated ? classes.nav_icons : classes.nav_icons_disabled
            }
          />
          <Link to={isAuthenticated ? '/myprofile' : ''} className="link">
            <MoreHorizIcon
              className={
                isAuthenticated ? classes.nav_icons : classes.nav_icons_disabled
              }
            />
          </Link>
        </Toolbar>
      </AppBar>
      {!isClicked && <Popover />}
    </>
  );
}
export default NavBar;
