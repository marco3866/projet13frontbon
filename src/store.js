// src/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres réducteurs ici si nécessaire
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
