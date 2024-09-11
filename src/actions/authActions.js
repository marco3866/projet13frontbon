// Importation de la bibliothèque Axios pour effectuer les appels API
import axios from 'axios';

// Déclaration des types d'actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const UPDATE_USER_NAME_SUCCESS = 'UPDATE_USER_NAME_SUCCESS';

// Action pour gérer la connexion de l'utilisateur
export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST }); // Indique que la requête de login a commencé
  try {
    // Envoi de la requête POST à l'API pour authentifier l'utilisateur
    const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
    const { token } = response.data.body;

    // Stockage du token dans le localStorage pour persistance
    localStorage.setItem('token', token);
    // Dispatch de l'action LOGIN_SUCCESS avec le token
    dispatch({ type: LOGIN_SUCCESS, payload: { token } });

    // Récupération des informations utilisateur après une connexion réussie
    dispatch(fetchUser(token));
  } catch (error) {
    // Dispatch de l'action LOGIN_FAILURE si la requête échoue
    dispatch({ type: LOGIN_FAILURE, error: error.message });
  }
};

// Action pour récupérer les informations utilisateur
export const fetchUser = (token) => async (dispatch) => {
  try {
    // Envoi de la requête POST à l'API pour récupérer les infos utilisateur
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: { Authorization: `Bearer ${token}` } // Ajout du token dans les en-têtes pour l'authentification
    });
    const user = response.data.body;
    // Dispatch de l'action FETCH_USER_SUCCESS avec les infos utilisateur
    dispatch({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    // Dispatch de l'action FETCH_USER_FAILURE en cas d'échec
    dispatch({ type: FETCH_USER_FAILURE, error: error.message });
  }
};

// Action pour mettre à jour le nom de l'utilisateur
export const updateUserName = (token, firstName, lastName) => async (dispatch) => {
  try {
    // Envoi de la requête PUT à l'API pour mettre à jour le nom de l'utilisateur
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
      firstName,
      lastName
    }, {
      headers: { Authorization: `Bearer ${token}` } // Ajout du token dans les en-têtes
    });
    // Dispatch de l'action UPDATE_USER_NAME_SUCCESS avec le nouveau nom
    dispatch({ type: UPDATE_USER_NAME_SUCCESS, payload: response.data.body });
  } catch (error) {
    console.error('Error updating user name:', error); // Gestion des erreurs
  }
};

// Action pour déconnecter l'utilisateur
export const logout = () => {
  localStorage.removeItem('token'); // Suppression du token du localStorage
  return { type: LOGOUT }; // Dispatch de l'action LOGOUT pour réinitialiser l'état
};
