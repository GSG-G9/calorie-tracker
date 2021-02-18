import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import notFoundPic from './notfound.png';

const useStyle = makeStyles((theme) => ({
  pic: {
    width: '60%',
    height: '50%',
    backgroundColor: theme.customColors[2],
    '@media (min-device-width: 600px)': {
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
