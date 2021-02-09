import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './style.css';

const useStyles = makeStyles((theme) => ({
  icons: {
    width: 50,
    height: 40,
    color: theme.customColors.white,
  },
  container: {
    backgroundColor: 'green',
  },
  item: {
    width: '25%',
  },
  appBar: {
    bottom: 0,
    top: '88%',
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          alignItems: 'center',
        }}
        className={classes.appBar}
      >
        <Toolbar
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <Grid container spacing={2} justify="center">
            <Grid item className={classes.item}>
              <Link exact to="/">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <HomeIcon className={classes.icons} />
                </IconButton>
              </Link>
            </Grid>
            <Grid item className={classes.item}>
              <Link to="/food">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <ControlPointIcon className={classes.icons} />
                </IconButton>
              </Link>
            </Grid>

            <Grid item className={classes.item}>
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
