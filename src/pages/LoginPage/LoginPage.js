// src/pages/LoginPage/LoginPage.js

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <LoginForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
