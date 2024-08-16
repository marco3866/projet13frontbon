// src/pages/UserPage/UserPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import './UserPage.css';
import { fetchUser } from '../../actions/authActions';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!user) {
      dispatch(fetchUser(token));
    }
  }, [token, user, navigate, dispatch]);

  if (!user) {
    return <p>Loading...</p>; // Ou rediriger vers la page de connexion
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <section className="account">
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        </section>
        <section className="account">
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        </section>
        <section className="account">
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default UserPage;