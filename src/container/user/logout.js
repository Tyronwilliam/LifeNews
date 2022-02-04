import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { logoutUser } from "../../action/userAction";

const Logout = (props) => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    props.logoutUser();
    window.localStorage.removeItem("token");
    setRedirect(true);
  }, [props]);

  return <div>{redirect && <Navigate to="/login" />}</div>;
};
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
