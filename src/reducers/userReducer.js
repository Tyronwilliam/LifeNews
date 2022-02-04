import { CONNECT_USER, LOGOUT_USER } from "../action/action-type";

const initialState = {
  infos: null,
  isLogged: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_USER:
      return { infos: action.payload, isLogged: true };
      break;
    case LOGOUT_USER:
      return initialState;
      break;
    default:
  }
  return state;
};
export default UserReducer;
