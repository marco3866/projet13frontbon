// src/reducers/authReducer.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token };
    case 'FETCH_USER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAILURE:
    case 'FETCH_USER_FAILURE':
      return { ...state, loading: false, error: action.error };
    case LOGOUT:
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
