import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import favIcon from '../../images/favicon.ico';
import { context } from '../userProvider';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: 'auto',
    backgroundColor: theme.customColors[3],
    color: 'white',
  },
  scale_img: {
    widtth: '45px',
    height: '45px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '15px 1060px auto 8px',
  },
  logout_link: {
    textDecoration: 'none',
  },
  logout_btn: {
    color: 'white',
    fontSize: '16.5px',
    marginTop: '9px',
    fontWeight: 'bold',
  },
}));

const DesktopNavBar = () => {
  const classes = useStyles();
  const [isAuthenticated] = useContext(context);
  return (
    <BottomNavigation className={classes.footer}>
      <img alt="scale" src={favIcon} className={classes.scale_img} />
      <span className={classes.logo}>CalTrack</span>
      {!isAuthenticated && (
        <Link to="/logout" className={classes.logout_link}>
          <Button className={classes.logout_btn}>log out</Button>
        </Link>
      )}
    </BottomNavigation>
  );
};

export default DesktopNavBar;
