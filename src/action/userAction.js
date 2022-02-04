import { CONNECT_USER, LOGOUT_USER } from "./action-type";
// Connection de l'user
export const connectUser = (user) => {
  return function (dispatch) {
    dispatch({
      type: CONNECT_USER,
      payload: user,
    });
  };
};
// Gestion de la déco dispactch de l'event et de la data null 
export const logoutUser = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });
  };
};
