import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_NAME_SUCCESS,
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
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAILURE:
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.error };
    case UPDATE_USER_NAME_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    case LOGOUT:
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
