import React, { useState, useEffect } from "react";
import { saveArticle } from "../../api/article";
import { connect } from "react-redux";
import { loadArticle } from "../../action/article/articleAction";
import Image from "../../assets/news-default/image.jpg";
import "../../App";
import { getAllArticle } from "../../api/article";
import LogoScience from "../../assets/news-default/science.svg";
import LogoSport from "../../assets/news-default/sports.svg";
import LogoTech from "../../assets/news-default/tech.svg";
import LogoSante from "../../assets/news-default/sante.svg";
import LogoDivert from "../../assets/news-default/divertissement.svg";
import LogoBusiness from "../../assets/news-default/business.png";
import LogoHome from "../../assets/news-default/home.svg";
import BackToTop from "./backToTop";
const Temp = (props) => {
  const [err, setErr] = useState(null);
  const [text, setText] = useState("J'aime");
  const [disabled, setDisabled] = useState(false);
  const [isSending, setIsSending] = useState(false);
  let articleInRedux = props.article.article;
  let string = props.description;
  let length = 300;
  let limitDesc = string.substring(0, length);
  let newArrWithTitle = [];
  let allLogo = [
    { LogoHome },
    { LogoBusiness },
    { LogoDivert },
    { LogoSante },
    { LogoSport },
    { LogoScience },
    { LogoTech },
  ];
  // Fonction j'aime ça
  useEffect(() => {
    getAllArticle(props.user.infos.id)
      .then((res) => {
        props.loadArticle(res.result);
      })
      .catch((err) => {
        return err;
      });
    sort(articleInRedux);
    if (newArrWithTitle.indexOf(props.title) > -1) {
      setDisabled(true);
      setText("J'aime ça");
    }
  }, []);

  useEffect(() => {
    getAllArticle(props.user.infos.id)
      .then((res) => {
        props.loadArticle(res.result);
      })
      .catch((err) => {
        return err;
      });
    sort(articleInRedux);
    if (newArrWithTitle.indexOf(props.title) > -1) {
      setDisabled(true);
      setText("J'aime ça");
    }
  }, [isSending]);

  // Creer un nouveau tableaux avec les titre de chaque article
  const sort = (arr) => {
    let newTitlte;
    for (let value of Object.values(arr)) {
      // console.log(value.title, "my value");
      newTitlte = value.title;
      newArrWithTitle.push(newTitlte);
    }
  };

  const addArticle = () => {
    let data = {
      title: props.title,
      description: props.description,
      url: props.url,
      image: props.image,
      category: props.category,
      published_at: props.published_at,
      users_id: props.user.infos.id,
    };

    // pVerifie si le titre d'un article correspond à celui que l'on souhaite enregistrer
    if (newArrWithTitle.indexOf(data.title) > -1) {
      setDisabled(true);
      loadArticle();
      setText("J'aime ça");
    } else {
      //Si aucun article en Redux alors nous pouvons le sauvegarder
      saveArticle(data)
        .then((res) => {
          if (res.status === 200) {
            setText("✔️");
            setDisabled(true);

            loadArticle();
          } else if (res.status === 500) {
            setErr(res.msg);
          }
        })
        .catch((err) => {
          return err;
        });
    }
  };

  const SwitchLogo = (category) => {
    switch (category) {
      case "general":
        return allLogo[0].LogoHome;
      case "business":
        return allLogo[1].LogoBusiness;
      case "entertainment":
        return allLogo[2].LogoDivert;
      case "health":
        return allLogo[3].LogoSante;
      case "science":
        return allLogo[5].LogoScience;
      case "sports":
        return allLogo[4].LogoSport;

      case "technology":
        return allLogo[6].LogoTech;
    }
  };
  return (
    <div className="default-container">
      <div className="head-card">
        <div className="circle">
          <img src={SwitchLogo(props.category)} alt="" />{" "}
        </div>
        <p>{props.source}</p>
      </div>
      <h1>{props.title}</h1>
      {/* Image */}
      <div className="image">
        {props.image === null ? (
          <a href={props.url}>
            <img src={Image} alt={props.title} />
          </a>
        ) : (
          <a href={props.url}>
            <img src={props.image} alt={props.title} />
          </a>
        )}
      </div>
      {/* Description */}
      <p>{limitDesc}...</p>

      <div className="extra_info">
        <ul className="cat">
          <li>#{props.category}</li>
          {/* <li>{props.published_at}</li> */}
        </ul>
        <button
          className="buton"
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            setIsSending(true);
            addArticle();
          }}
        >
          {text}
        </button>
      </div>
      <BackToTop />
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    user: store.user,
    article: store.article,
  };
};
const mapDispatchToProps = {
  loadArticle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Temp);
