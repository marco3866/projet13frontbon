// Importation des fonctions nécessaires depuis Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
// Importation de redux-thunk, un middleware qui permet d'écrire des actions qui retournent des fonctions
import thunk from 'redux-thunk';
// Importation du réducteur d'authentification qui gère l'état de l'authentification
import authReducer from './reducers/authReducer';

// Combinaison des réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
  auth: authReducer, // Ici, on n'a qu'un seul réducteur, mais on peut en ajouter d'autres
});

// Création du store Redux en appliquant le middleware Thunk pour gérer les actions asynchrones
const store = createStore(rootReducer, applyMiddleware(thunk));

// Exportation du store pour qu'il puisse être utilisé dans l'application
export default store;
