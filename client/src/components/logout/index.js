import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert';
import Loading from '../Loading';
import { context } from '../userProvider';

function Logout() {
  const [, setIsAuthenticated] = useContext(context);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoading, setShowLoading] = useState(true);
  useEffect(async () => {
    try {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      await axios.get('/api/v1/logout', {
        cancelToken: source.token,
      });
      setShowLoading(false);
      setIsAuthenticated(false);
      history.push('/');
      setErrorMessage('success');
      return () => source.cancel('Operation canceled by the user.');
    } catch (err) {
      setShowLoading(false);
      return setErrorMessage(
        err.response ? err.response.data.message : 'Something went wrong !! '
      );
    }
  }, []);
  return showLoading ? (
    <Loading circleSize={100} />
  ) : (
    <Alert errorMessage={errorMessage} successMessage="logout Successfully" />
  );
}

export default Logout;
