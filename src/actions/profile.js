import axios from "axios";
import { BASE_URL, GET_PROFILE, PROFILE_ERROR } from "./type";
import setAuthToken from "../utils/setAuthToken";
// import { setAlert } from "../actions/alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log(localStorage.token);
}

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data.profile,
    });
  } catch (error) {
    console.error(error.response.data);

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
