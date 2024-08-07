import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
    const { token } = response.data.body;
    dispatch({ type: LOGIN_SUCCESS, payload: { token } });
    // Stocker le token dans le local storage ou dans un cookie
    localStorage.setItem('token', token);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};
