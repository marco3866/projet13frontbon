// src/pages/UserPage/UserPage.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import './UserPage.css';
import { fetchUser } from '../../actions/authActions';
import EditNameForm from '../../components/EditNameForm/EditNameForm';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else if (!user) {
      dispatch(fetchUser(token));
    }
  }, [token, user, navigate, dispatch]);

  if (!user) {
    return <p>Loading...</p>; // Redirect to login page or show a loading message
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{`${user.firstName} ${user.lastName}`}!</h1>
          {!isEditing ? (
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          ) : (
            <EditNameForm onCancel={() => setIsEditing(false)} />
          )}
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
