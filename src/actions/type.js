export const BASE_URL = process.env.NODE_ENV === 'production' ? "https://connectdev-api.onrender.com/api/v1" : "http://localhost:5050/api/v1"

export const SET_ALERT = "SET_ALERT";
export const REVOME_ALERT = "REVOME_ALERT";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

export const LOGOUT = "LOGOUT";

export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILES";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const DELETED_ACCOUNT = "DELETED_ACCOUNT";

export const GET_REPOS = "GET_REPOS";
