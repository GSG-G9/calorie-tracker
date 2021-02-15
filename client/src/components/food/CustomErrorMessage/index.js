import React from 'react';
import { Alert } from '@material-ui/lab';
import { string, node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.customColors[6],
    padding: '0 10px',
    borderRadius: '10px',
    height: '200px',
    overflow: 'auto',
  },
}));
const AlertComponent = ({ errorMessage, component }) => {
  const classes = useStyle();
  switch (errorMessage) {
    case '':
      return null;
    case 'success':
      return component;
    default:
      return (
        <Alert className={classes.list} variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      );
  }
};

AlertComponent.propTypes = {
  errorMessage: string.isRequired,
  component: node.isRequired,
};
export default AlertComponent;
