import React from 'react';
import { Alert } from '@material-ui/lab';
import { string, node } from 'prop-types';

const AlertComponent = ({ errorMessage, component, ...rest }) => {
  switch (errorMessage) {
    case '':
      return null;
    case 'success':
      return component;
    default:
      return (
        <Alert {...rest} variant="outlined" severity="error">
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
