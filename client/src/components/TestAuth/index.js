import React, { useContext } from 'react';
import { context } from '../userProvider';

function TestAuth() {
  const [userData, setUserData] = useContext(context);
  const handleLogin = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    await req.json();
    setUserData({ ...userData, isAuthenticated: true });
  };
  const handleLogout = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    await req.json();
    setUserData({ ...userData, isAuthenticated: false });
  };
  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
export default TestAuth;

export function AuthComponent() {
  const [{ isAuthenticated }] = useContext(context);
  return isAuthenticated && <p>I am auth Paragraph</p>;
}
