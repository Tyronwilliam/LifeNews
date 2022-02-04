import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import "../App";
import Logo from "../assets/news-default/information.png";
import LogoScience from "../assets/news-default/science.svg";
import LogoSport from "../assets/news-default/sports.svg";
import LogoTech from "../assets/news-default/tech.svg";
import LogoSante from "../assets/news-default/sante.svg";
import LogoDivert from "../assets/news-default/divertissement.svg";
import LogoBusiness from "../assets/news-default/business.png";
import LogoHome from "../assets/news-default/home.svg";
import LogoSearch from "../assets/news-default/search.png";
const Header = (props) => {
  const [inputResponse, setInputResponse] = useState("");
  const [err, setErr] = useState(false);

  const [max, setMax] = useState(false);

  let navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(0);
  // Redirection lié à la recherche
  const onSubmitSearch = () => {
    if (inputResponse.length > 0) {
      setErr(false);
      navigate("/search/" + inputResponse, { replace: true });
    } else {
      setErr(true);
    }
  };

  useEffect(() => {
    // changmenet de class lié à la taille de la fenetre
    const changeClass = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (windowWidth < 805) {
        setMax(true);
      } else {
        setMax(false);
      }
      console.log("update width");
    };
    // Appel de la fonction change class lorsque la fenetre change
    window.addEventListener("resize", changeClass);

    return () => window.removeEventListener("resize", changeClass);
  }, [windowWidth]);

  return (
    <header>
      <div className="container__title__img">
        <div className="logo-container">
          <img src={Logo} alt="Logo Life News" className="logo" />
        </div>
        <h1>LIFE NEWS</h1>
      </div>
      <nav>
        {props.user.isLogged !== true && (
          <div className="nav">
            <Link to="/login" className="nav-false">
              Se connecter
            </Link>

            <Link to="/register" className="nav-false">
              S'enregistrer
            </Link>
          </div>
        )}
        {props.user.isLogged && (
          <div className="nav">
            <div id="search">
              <form
                className="form-header"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmitSearch();
                }}
              >
                <input
                  type="search"
                  name="search-bar"
                  id="search-bar"
                  placeholder="Recherche par mot clé"
                  onChange={(e) => {
                    console.log(e.currentTarget.value);
                    setInputResponse(e.currentTarget.value);
                  }}
                />
                <div className="container-button">
                  <button className="button-search" type="submit">
                    <img
                      src={LogoSearch}
                      alt="Logo search"
                      className="logo-search"
                    />
                  </button>
                </div>
              </form>
              {err ? (
                <p className="err">Veuillez remplir le champ ci-dessus</p>
              ) : (
                false
              )}
            </div>
            <div className="link-header">
              <Link to="/logout" className="nav-option">
                <p>Se déconnecter</p>
              </Link>
              <Link
                to={"/account/" + props.user.infos.id}
                className="nav-option"
              >
                <p>Mon compte</p>
              </Link>
            </div>
          </div>
        )}
      </nav>
      {props.user.isLogged === true && (
        <div className={max ? "burger" : "nav-bar"}>
          {max && (
            <>
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>
            </>
          )}
          <div className={max ? "container-nav-burger" : "nav-bar-flex"}>
            <Link
              to="/"
              className={max ? "burger-nav" : "nav_bar_link general "}
            >
              <div className="container-logo-theme">
                <p>Général</p>
                <img
                  src={LogoHome}
                  className="logo-nav-bar home"
                  alt="Logo Home"
                />
              </div>
            </Link>

            <Link
              to="/business"
              className={max ? "burger-nav" : "nav_bar_link business "}
            >
              <div className="container-logo-theme">
                <p>Business</p>
                <img
                  src={LogoBusiness}
                  className="logo-nav-bar commerce"
                  alt="Logo Business"
                />
              </div>
            </Link>

            <Link
              to="/entertainment"
              className={max ? "burger-nav" : "nav_bar_link entertainment "}
            >
              <div className="container-logo-theme divert">
                <p>Entertainment</p>
                <img
                  src={LogoDivert}
                  className="divertissement"
                  alt="Logo Divertissement"
                />
              </div>
            </Link>

            <Link
              to="/sante"
              className={max ? "burger-nav" : "nav_bar_link sante "}
            >
              <div className="container-logo-theme">
                <p>Santé</p>
                <img
                  src={LogoSante}
                  className="logo-nav-bar sante"
                  alt="Logo Sante"
                />
              </div>
            </Link>

            <Link
              to="/science"
              className={max ? "burger-nav" : "nav_bar_link science "}
            >
              <div className="container-logo-theme">
                <p>Science</p>
                <img
                  src={LogoScience}
                  className="logo-nav-bar savoir"
                  alt="Logo Science"
                />
              </div>
            </Link>

            <Link
              to="/sports"
              className={max ? "burger-nav" : "nav_bar_link sport "}
            >
              <div className="container-logo-theme">
                <p>Sport</p>
                <img
                  src={LogoSport}
                  className="logo-nav-bar gym"
                  alt="Logo Sport"
                />
              </div>
            </Link>

            <Link
              to="/technologie"
              className={max ? "burger-nav" : "nav_bar_link tech "}
            >
              <div className="container-logo-theme techno">
                <p>Technologie</p>
                <img
                  src={LogoTech}
                  className="logo-nav-bar technologie"
                  alt="Logo Technologie"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
