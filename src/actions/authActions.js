import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
    const { token } = response.data.body;

    localStorage.setItem('token', token);
    dispatch({ type: LOGIN_SUCCESS, payload: { token } });

    // Après connexion, récupérer les informations utilisateur
    dispatch(fetchUser(token));
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message });
  }
};

export const fetchUser = (token) => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const user = response.data.body;
    dispatch({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, error: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};
