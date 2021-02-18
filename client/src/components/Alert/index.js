import React from 'react';
import { Alert } from '@material-ui/lab';
import { string } from 'prop-types';

const AlertComponent = ({ errorMessage, successMessage }) => {
  switch (errorMessage) {
    case '':
      return null;
    case 'success':
      return (
        <Alert variant="outlined" severity="success">
          {successMessage}
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
  successMessage: string,
};
AlertComponent.defaultProps = { successMessage: 'Registration Successful' };

export default AlertComponent;
