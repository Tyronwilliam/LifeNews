import React, { useState } from "react";
import { loginUser } from "../../api/user";
import { Navigate, Link } from "react-router-dom";
//
//
//

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(null);
  const onSubmit = () => {
    let data = {
      email: email,
      password: password,
    };
    loginUser(data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        window.localStorage.setItem("token", res.token);
        setRedirect(true);
        return res;
      } else {
        setErr(res.msg);
      }
    });
  };

  return (
    <div>
      {redirect && <Navigate to="/" />}

      <div className="container-login">
        <form
          className="default-form"
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
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          {err !== null && <p className="error-login">{err}</p>}
          <button type="submit">Se connecter</button>
        </form>

        <Link className="link" to="/forgot">
          Mot de passe oublié
        </Link>
      </div>
    </div>
  );
};

export default Login;
