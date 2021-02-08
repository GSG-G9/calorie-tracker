import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const { node } = PropTypes;
export const context = createContext();

function userProvider({ children }) {
  const userState = useState({
    isAuthenticated: false,
    userId: undefined,
    userName: undefined,
  });
  return <context.Provider value={userState}>{children}</context.Provider>;
}

userProvider.propTypes = {
  children: node.isRequired,
};
export default userProvider;
