import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import useStyles from './style';

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.container}
          >
            <Grid item className={classes.item} container>
              <Link to="/">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className={classes.button}
                >
                  <HomeIcon className={classes.icons} />
                </IconButton>
              </Link>
            </Grid>
            <Grid item className={classes.item} container>
              <Link to="/food">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <ControlPointIcon className={classes.icons} />
                </IconButton>
              </Link>
            </Grid>

            <Grid item className={classes.item} container>
              <Link to="/myprofile">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MoreHorizIcon className={classes.icons} />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;
