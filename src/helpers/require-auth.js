import React, { useState, useEffect } from "react";
import { Navigate, useParams /*useNavigate*/ } from "react-router-dom";
import { config } from "../config";
import axios from "axios";
import { connectUser } from "../action/userAction";
import { connect } from "react-redux";
import { loadArticle } from "../action/article/articleAction";
import { getAllArticle } from "../api/article";

const RequireAuth = (props) => {
  const params = useParams();

  const Child = props.child;

  // gestion des state
  const [redirect, setRedirect] = useState(false);

  // au chargement de chaque component
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null && props.auth) {
      setRedirect(true);
    } else {
      if (props.user.isLogged === false) {
        axios
          .get(config.api_url + "/LifeNews/v1/checkToken", {
            headers: { "x-access-token": token },
          })
          .then((response) => {
            if (response.data.status !== 200) {
              if (props.auth === true) {
                setRedirect(true);
              }
            } else {
              console.log("connecté", response.data);
              props.connectUser(response.data.user[0]);
              getAllArticle(response.data.user[0].id)
                .then((res) => {
                  console.log(res.result, "On est ou la");
                  props.loadArticle(res.result);
                })
                .catch((err) => {
                  console.log(err, "Happen?");
                });
            }
          })
          .catch((err) => console.log("Error checktoken", err));
      }
    }
  }, [props]);

  if (redirect) {
    return <Navigate to="/login" />;
  }
  return <Child {...props} params={params} />;
};
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = {
  connectUser,
  loadArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
