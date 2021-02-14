import React from 'react';
import { Alert } from '@material-ui/lab';
import { string } from 'prop-types';

const AlertComponent = ({ errorMessage }) => {
  switch (errorMessage) {
    case '':
      return null;
    case 'success':
      return (
        <Alert variant="outlined" severity="success">
          Registration Successful
        </Alert>
      );
    default:
      return (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      );
  }
};

AlertComponent.propTypes = {
  errorMessage: string.isRequired,
};
export default AlertComponent;
