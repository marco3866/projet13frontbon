// src/components/Account/Account.js

import React from 'react';
import './Account.css';

const Account = ({ title, amount, description }) => {
  return (
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{description}</p>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

export default Account;
