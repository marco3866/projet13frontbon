// Importation des types d'actions depuis le fichier d'actions
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_NAME_SUCCESS,
} from '../actions/authActions';

// État initial pour l'authentification, contenant le token, le statut de chargement, les erreurs et les informations utilisateur
const initialState = {
  token: localStorage.getItem('token') || null, // Récupère le token du localStorage pour persister la session
  loading: false, // Indicateur de chargement
  error: null, // Pour stocker les erreurs éventuelles
  user: null, // Informations de l'utilisateur connecté
};

// Réducteur d'authentification qui modifie l'état en fonction de l'action reçue
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action pour indiquer que le login est en cours
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    // Action lorsque le login a réussi, on stocke le token dans l'état
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };

    // Action pour stocker les informations utilisateur après les avoir récupérées
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    // Action lorsque le login ou la récupération des infos utilisateur échoue
    case LOGIN_FAILURE:
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Action pour mettre à jour le nom de l'utilisateur
    case UPDATE_USER_NAME_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };

    // Action pour déconnecter l'utilisateur, on réinitialise l'état
    case LOGOUT:
      return { ...state, token: null, user: null };

    // Par défaut, on retourne l'état inchangé
    default:
      return state;
  }
};

// Exportation du réducteur pour qu'il puisse être combiné avec d'autres réducteurs dans le store
export default authReducer;
