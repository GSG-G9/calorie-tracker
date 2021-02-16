import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, Instagram, Twitter, LinkedIn } from '@material-ui/icons';
import { Typography, Box, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'none',
    '@media (min-device-width: 600px)': {
      backgroundColor: theme.customColors[3],
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      bottom: '0px',
      width: '100%',
      top: 'auto',
      height: '8.5vh',
      boxShadow: `-2px -10px 10px ${theme.customColors[1]}`,
    },
  },
  icons_box: {
    color: 'white',
    marginLeft: '4em',
  },

  footer_icon: {
    color: 'white',
    fontSize: '1.7rem',
    '@media (min-device-width: 900px)': {
      fontSize: '1.8rem',
    },
  },
  footer_text: {
    fontSize: '0.75rem',
    paddingTop: '1.25em',
    paddingRight: '3em',
    '@media (min-device-width: 900px)': {
      fontSize: '1rem',
      paddingRight: '3em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Box className={classes.icons_box}>
        <IconButton>
          <Facebook className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <Instagram className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <Twitter className={classes.footer_icon} />
        </IconButton>
        <IconButton>
          <LinkedIn className={classes.footer_icon} />
        </IconButton>
      </Box>

      <Typography className={classes.footer_text}>
        {' '}
        @ 2020 all rights reserved by CalTrack
      </Typography>
    </div>
  );
};

export default Footer;
