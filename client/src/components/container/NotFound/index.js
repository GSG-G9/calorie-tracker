import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import notFoundPic from './notfound.png';

const useStyle = makeStyles((theme) => ({
  pic: {
    width: '90%',
    height: '80%',
    marginTop: '25vh',
    backgroundColor: theme.customColors[2],
    '@media (min-device-width: 600px)': {
      marginTop: '1rem',
      width: '70%',
      height: '60%',
    },
  },
}));

const NotFound = () => {
  const classes = useStyle();
  return <img className={classes.pic} src={notFoundPic} alt="not found" />;
};

export default NotFound;
