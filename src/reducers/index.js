import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ArticleReducer from "./articleReducer";
const rootReducer = combineReducers({
  user: UserReducer,
  article: ArticleReducer,
});

export default rootReducer;
