import { LOAD_ARTICLE } from "../action/article/action-type";

const initialState = {
  article: [],
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE:
      return { article: action.payload };
      break;

    default:
      return state;
      break;
  }

  return state;
};
export default ArticleReducer;
