import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, LinkedIn, Instagram, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
    height: '55vh',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8vh',
    '@media (min-device-width: 600px)': {
      marginTop: '15vh',
      width: '80vw',
      height: '50vh',
      justifyContent: 'space-around',
    },
    '@media (min-device-width: 1200px)': {
      justifyContent: 'space-around',

      width: '80vw',
      height: '65vh',
    },
  },
  title_box: {
    height: '11%',
    width: '100%',
    borderTop: `0.15em solid ${theme.customColors[2]}`,
    borderBottom: `0.15em solid ${theme.customColors[2]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.customColors[6],
    '@media (min-device-width: 1200px)': {
      width: '75%',
      height: '17%',
    },
  },
  title: {
    fontSize: '1.57rem',
    fontWeight: 'bold',
    color: theme.customColors[2],
    '@media (min-device-width: 900px)': {
      fontSize: '1.8rem',
    },
  },
  content_box: {
    height: '57%',
    width: '83%',

    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      width: '80%',
      height: '48%',
    },
    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      width: '80%',
      height: '48%',
    },
    '@media (min-device-width: 1200px)': {
      height: '35%',
      width: '66%',
    },
  },
  icons_box: {
    height: '12%',
    width: '40%',
    color: theme.customColors[2],
    '@media (min-device-width: 600px)': {
      width: '30%',
    },
  },
  icon: {
    width: '18%',
    marginRight: '0.2em',
    '@media (min-device-width: 600px)': {
      width: '20%',
    },
  },
  content: {
    fontSize: '1.2rem',
    textAlign: 'center',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      fontSize: '2rem',
    },
    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      fontSize: '2.5rem',
    },
    '@media (min-device-width: 1200px)': {
      fontSize: '1.8rem',
    },
  },
}));
const ContactUs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.title_box}>
        <Typography className={classes.title}>Contact Us</Typography>
      </Box>
      <Box className={classes.content_box}>
        <Typography className={classes.content}>
          App for calculating working out hours, calories burnt while
          workingout, weight progress (loss and gain), and chart shows weekly
          progress.
        </Typography>
      </Box>
      <Box className={classes.icons_box}>
        <Facebook fontSize="large" className={classes.icon} />
        <Instagram fontSize="large" className={classes.icon} />
        <LinkedIn fontSize="large" className={classes.icon} />
        <Twitter fontSize="large" className={classes.icon} />
      </Box>
    </Box>
  );
};

export default ContactUs;
