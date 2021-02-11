import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import useStyles from './style';
import Popover from '../Popover';
import { context } from '../userProvider';

function NavBar() {
  const classes = useStyles();
  const isAuthenticated = useContext(context);
  const [isClickedPlusIcon, setIsClicked] = useState(false);

  const handelClick = () => {
    setIsClicked(true);
  };

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
              className={classes.icon}
            >
              <HomeIcon
                style={{ color: 'white' }}
                className={classes.nav_icons}
              />
            </IconButton>
          </Link>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            // disabled={!isAuthenticated}
            onClick={handelClick}
          >
            <ControlPointIcon className={classes.nav_icons} />
          </IconButton>

          <Link to="/myprofile" className="link">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disabled={!isAuthenticated}
            >
              <MoreHorizIcon
                style={{ color: 'white' }}
                className={classes.nav_icons}
              />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      {isClickedPlusIcon && <Popover />}
    </>
  );
}
export default NavBar;
