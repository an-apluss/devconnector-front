import axios from "axios";
import {
  BASE_URL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/type";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

// Load data of authenticated user
export const loadUser = () => async (dispatch) => {
  const token = localStorage.token;
  if (token) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get(`${BASE_URL}/auth`);
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register a new user
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${BASE_URL}/users/register`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //load authenticated user's data
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      // errors.forEach((error) => {
      //   dispatch(setAlert(error.msg, "danger"));
      // });
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login a user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${BASE_URL}/auth`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // Load data of authenticated user
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      // errors.forEach((error) => {
      //   dispatch(setAlert(error.msg, "danger"));
      // });
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout the user
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
