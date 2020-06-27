import axios from "axios";
import { BASE_URL, GET_PROFILE, PROFILE_ERROR } from "./type";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "../actions/alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  // console.log(localStorage.token);
}

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`${BASE_URL}/profile`, formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    // console.log('create-p', error.response)
    // return
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });

    const errors = error.response.data.errors;
    console.log(errors[0].msg)
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }
  }
};
