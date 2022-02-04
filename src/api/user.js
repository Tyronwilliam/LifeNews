import axios from "axios";
import { config } from "../config";

export const saveUser = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/register", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/login", data)
    .then((res) => {
      console.log(res.data, "Je viens de user axios Login");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const forgotPassword = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/user/forgot", data)
    .then((res) => {
      console.log(res, "Je viens de user forgotPass");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
