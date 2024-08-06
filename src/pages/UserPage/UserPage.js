// src/pages/UserPage/UserPage.js

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import './UserPage.css';

const UserPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
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
