import axios from "axios";
import {
  BASE_URL,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  DELETED_ACCOUNT,
  CLEAR_PROFILE,
  GET_REPOS
} from "./type";
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

export const getProfiles = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE
  })

  try {
    const res = await axios.get(`${BASE_URL}/profile`);

    dispatch({
      type: GET_PROFILES,
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

export const getProfileByID = (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/profile/user/${user_id}`);

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

export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
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
    const errors = error.response.data.errors;

    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${BASE_URL}/profile/experience`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience created", "success"));

    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `${BASE_URL}/profile/education`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education created", "success"));

    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.delete(
      `${BASE_URL}/profile/experience/${id}`,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Experience successfully removed", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(id)
    // return;
    const res = await axios.delete(
      `${BASE_URL}/profile/education/${id}`,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Education successfully removed", "success"));
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  try {
    if (window.confirm("Are you sure? This can not be reversed")) {
      await axios.delete(`${BASE_URL}/profile`);

      dispatch({
        type: CLEAR_PROFILE,
      });

      dispatch({
        type: DELETED_ACCOUNT,
      });

      dispatch(setAlert("Your account has been permanently deleted"));
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      // Fetch the first error message in errors array
      dispatch(setAlert(errors[0].msg, "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
