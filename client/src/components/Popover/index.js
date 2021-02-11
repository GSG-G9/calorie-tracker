import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';

const Popover = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.btns_container}>
        <Link to="/food" className={classes.links}>
          <Button variant="outlined" className={classes.popover_btns}>
            🥗 food
          </Button>
        </Link>
        <Link to="/exercise" className={classes.links}>
          <Button variant="outlined" className={classes.popover_btns}>
            🚴‍♂️ exersise
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Popover;
