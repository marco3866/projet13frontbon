// Importation des modules et composants nécessaires
import React, { useEffect, useState } from 'react'; // Import de React et des hooks useEffect et useState
import { useSelector, useDispatch } from 'react-redux'; // Import des hooks Redux pour accéder au store et dispatcher des actions
import { useNavigate } from 'react-router-dom'; // Import du hook useNavigate pour la navigation entre les pages
import Header from '../../components/Header/Header'; 
import Footer from '../../components/Footer/Footer'; 
import Account from '../../components/Account/Account'; 
import './UserPage.css'; 
import { fetchUser } from '../../actions/authActions'; // Import de l'action fetchUser pour récupérer les informations de l'utilisateur
import EditNameForm from '../../components/EditNameForm/EditNameForm'; // Import du composant EditNameForm pour modifier le nom de l'utilisateur

// Déclaration du composant UserPage
const UserPage = () => {
  const dispatch = useDispatch(); // Initialisation de useDispatch pour envoyer des actions au store Redux
  const navigate = useNavigate(); // Initialisation de useNavigate pour naviguer vers d'autres pages
  const { token, user } = useSelector((state) => state.auth); // Sélection des données "token" et "user" depuis le state Redux
  const [isEditing, setIsEditing] = useState(false); // Création d'un état local pour gérer le mode édition du nom de l'utilisateur

  // useEffect pour vérifier si l'utilisateur est authentifié et pour récupérer ses informations
  useEffect(() => {
    if (!token) { // Si aucun token n'est présent, cela signifie que l'utilisateur n'est pas authentifié
      navigate('/login'); // Redirection vers la page de connexion
    } else if (!user) { // Si le token est présent mais que les infos utilisateur ne sont pas encore chargées
      dispatch(fetchUser(token)); // Envoi de l'action pour récupérer les informations de l'utilisateur
    }
  }, [token, user, navigate, dispatch]); // Dépendances du useEffect : cette fonction se ré-exécute si l'une de ces valeurs change

  // Si les informations utilisateur ne sont pas encore chargées, afficher un message de chargement
  if (!user) {
    return <p>Loading...</p>; // Affichage d'un message temporaire pendant le chargement des données utilisateur
  }

  // Rendu du composant UserPage
  return (
    <>
      <Header /> {/* Affiche le composant Header */}
      <main className="main bg-dark"> {/* Section principale avec un fond sombre */}
        <div className="header"> {/* Conteneur pour le titre de la page */}
          <h1>Welcome back<br />{`${user.firstName} ${user.lastName}`}!</h1> {/* Affichage du message de bienvenue avec le nom complet de l'utilisateur */}
          {!isEditing ? ( // Si l'utilisateur n'est pas en mode édition
            <button className="edit-button" onClick={() => setIsEditing(true)}> {/* Bouton pour activer le mode édition */}
              Edit Name
            </button>
          ) : ( // Si l'utilisateur est en mode édition
            <EditNameForm onCancel={() => setIsEditing(false)} /> // Affichage du formulaire de modification du nom avec une option pour annuler
          )}
        </div>
        <section className="account"> {/* Section pour le premier compte bancaire */}
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" /> {/* Affichage du compte courant */}
        </section>
        <section className="account"> {/* Section pour le deuxième compte bancaire */}
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" /> {/* Affichage du compte d'épargne */}
        </section>
        <section className="account"> {/* Section pour le troisième compte bancaire */}
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" /> {/* Affichage du compte de carte de crédit */}
        </section>
      </main>
      <Footer /> {/* Affiche le composant Footer */}
    </>
  );
};

// Export du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default UserPage;
