import { LOAD_ARTICLE } from "./action-type";
export const loadArticle = (article) => {
  return function (dispatch) {
    dispatch({
      type: LOAD_ARTICLE,
      payload: article,
    });
  };
};
