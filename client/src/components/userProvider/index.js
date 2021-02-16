import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const { node } = PropTypes;
export const context = createContext();

function userProvider({ children }) {
  const isAuthenticated = useState(false);
  const [, setIsAuth] = isAuthenticated;

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const request = async () => {
      try {
        await axios.get('/api/v1/isAuth', {
          cancelToken: source.token,
        });
        return setIsAuth(true);
      } catch (err) {
        return setIsAuth(false);
      }
    };
    request();
    return () => source.cancel('Operation canceled by the user.');
  }, []);
  return (
    <context.Provider value={isAuthenticated}>{children}</context.Provider>
  );
}

userProvider.propTypes = {
  children: node.isRequired,
};
export default userProvider;
