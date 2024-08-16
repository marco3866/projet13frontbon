// src/pages/UserPage/UserPage.js
import React from 'react';
import { useSelector } from 'react-redux'; // Importer useSelector pour récupérer les données de l'utilisateur
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Account from '../../components/Account/Account';
import './UserPage.css';

const UserPage = () => {
  const { user } = useSelector((state) => state.auth); // Récupérer les informations de l'utilisateur depuis Redux

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{user ? `${user.firstName} ${user.lastName}` : 'User'}!</h1>
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
