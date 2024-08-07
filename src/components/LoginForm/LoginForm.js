// src/components/LoginForm/LoginForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../actions/authActions';
import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {token && <button onClick={() => dispatch(logout())}>Logout</button>}
      </form>
    </>
  );
};

export default LoginForm;
