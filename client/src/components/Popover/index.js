import React from 'react';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import useStyles from './style';

const Popover = (props) => {
  const { setIsClicked } = props;
  const classes = useStyles();
  return (
    <>
      <Box className={classes.btns_container}>
        <Link to="/food" className={classes.links}>
          <Button
            onClick={() => setIsClicked(true)}
            variant="contained"
            className={classes.popover_btns}
          >
            🥗 Food
          </Button>
        </Link>
        <Link to="/exercise" className={classes.links}>
          <Button
            onClick={() => setIsClicked(true)}
            variant="contained"
            className={classes.popover_btns}
          >
            🚴‍♂️ Exercise
          </Button>
        </Link>
      </Box>
    </>
  );
};

Popover.propTypes = {
  setIsClicked: func.isRequired,
};

export default Popover;
