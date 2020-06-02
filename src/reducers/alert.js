import { SET_ALERT, REVOME_ALERT } from "../actions/type";
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REVOME_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
