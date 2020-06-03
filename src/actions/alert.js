import { v4 as uuid_v4 } from "uuid";

import { SET_ALERT, REVOME_ALERT } from "./type";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuid_v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, alertType },
  });

  setTimeout(() => dispatch({ type: REVOME_ALERT, payload: id }), timeout);
};
