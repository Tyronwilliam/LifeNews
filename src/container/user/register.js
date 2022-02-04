import React, { useState } from "react";
import { saveUser } from "../../api/user";
import { Navigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(null);

  const onSubmit = () => {
    let data = {
      email: email,
      password: password,
      prenom: prenom,
      nom: nom,
      adresse: adresse,
      codePostal: codePostal,
      ville: ville,
      telephone: telephone,
    };

    saveUser(data)
      .then((res) => {
        console.log("Je viens de register saveUser", res);
        if (res.status === 200) {
          setRedirect(true);
        } else {
          setErr(res.msg);
        }
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container-register">
      {redirect && <Navigate to="/login" />}
      {err !== null && <p>{err}</p>}
      <h1>S'enregistrez :</h1>
      <form
        className="form-register"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="nom"
          name="nom"
          onChange={(e) => {
            setNom(e.currentTarget.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="prenom"
          name="prenom"
          onChange={(e) => {
            setPrenom(e.currentTarget.value);
          }}
        />{" "}
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <input
          type="text"
          placeholder="adresse"
          name="adresse"
          onChange={(e) => {
            setAdresse(e.currentTarget.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="codePostal"
          name="codePostal"
          onChange={(e) => {
            setCodePostal(e.currentTarget.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="ville"
          name="ville"
          onChange={(e) => {
            setVille(e.currentTarget.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="telephone"
          name="telephone"
          onChange={(e) => {
            setTelephone(e.currentTarget.value);
          }}
        />
        <button type="submit">S'enregistrer</button>
      </form>
    </div>
  );
};

export default Register;
