import axios from "axios";
import { config } from "../config";

export const saveUser = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/register", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const loginUser = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/login", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
export const forgotPassword = (data) => {
  return axios
    .post(config.api_url + "/LifeNews/v1/user/forgot", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
