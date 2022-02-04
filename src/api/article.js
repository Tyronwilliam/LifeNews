import axios from "axios";
import { config } from "../config";
export const getAllArticle = (user_id) => {
  const token = window.localStorage.getItem("token");
  return axios
    .get(config.api_url + "/LifeNews/v1/all/" + user_id, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
export const saveArticle = (data) => {
  const token = window.localStorage.getItem("token");

  return axios
    .post(config.api_url + "/LifeNews/v1/save/", data, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      console.log(res, "sauvegarde article from article ");
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const deleteArticle = (id) => {
  const token = window.localStorage.getItem("token");
  return axios
    .delete(config.api_url + "/LifeNews/v1/delete/" + id, {
      headers: { "x-access-token": token },
    })
    .then((res) => {
      console.log(res, "delete from article");
      return res;
    })
    .catch((err) => {
      return err;
    });
};
