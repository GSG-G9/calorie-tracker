import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const { node } = PropTypes;
export const context = createContext();

function userProvider({ children }) {
  const isAuthenticated = useState(false);
  return (
    <context.Provider value={isAuthenticated}>{children}</context.Provider>
  );
}

userProvider.propTypes = {
  children: node.isRequired,
};
export default userProvider;
