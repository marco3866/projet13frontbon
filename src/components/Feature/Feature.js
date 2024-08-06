// src/components/Feature/Feature.js

import React from 'react';
import chatIcon from '../../assets/images/icon-chat.png'; // Importation de l'icône de chat
import moneyIcon from '../../assets/images/icon-money.png'; // Importation de l'icône de l'argent
import securityIcon from '../../assets/images/icon-security.png'; // Importation de l'icône de sécurité
import './Feature.css';

const Feature = ({ iconSrc, title, description }) => {
  // Sélection de l'icône en fonction du type
  let icon;
  switch (iconSrc) {
    case 'chat':
      icon = chatIcon;
      break;
    case 'money':
      icon = moneyIcon;
      break;
    case 'security':
      icon = securityIcon;
      break;
    default:
      icon = chatIcon; // Par défaut, utilise l'icône de chat si le type n'est pas reconnu
  }

  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
