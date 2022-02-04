import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { forgotPassword } from "../../api/user";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(null);
  const onSubmit = () => {
    let data = {
      email: email,
    };
    forgotPassword(data).then((res) => {
      console.log(res);
      setErr(res.msg);
    });
    setRedirect(true);
  };
  return (
    <div className="container-login">
      {redirect && <Navigate to="/login" />}
      {err !== null && <p>{err}</p>}
      <form className="default-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input type="submit" value="Changer mon mot de passe" />
      </form>
    </div>
  );
};

export default Forgot;
