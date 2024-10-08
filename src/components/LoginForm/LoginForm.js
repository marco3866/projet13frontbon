import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions';
import './LoginForm.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token, user } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (token && user) {
      console.log("User Token:", token); // Log du token
      navigate('/user');
    }
  }, [token, user, navigate]);

  return (
    <>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="sign-in-button" disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};

export default LoginForm;