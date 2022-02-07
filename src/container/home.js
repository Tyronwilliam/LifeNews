import Temp from "./category/default";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loadArticle } from "../action/article/articleAction";
// import Default from "./category/default";
let api_Key = "b553f2c49acbd2be136f327e016d4390";

const Home = () => {
  const [article, setArticle] = useState([]);

  // Récupération de la date d'aujourdhui pour avoir les dernieres News
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  //requete URL vers Mediastack pour récupérer les articles
  const url = `https://api.mediastack.com/v1/news?access_key=${api_Key}&categories=general&languages=fr&countries=fr&date=${date}`;

  // Chargement des article au rendu de la page
  useEffect(() => {
    getArticle();
  }, []);
  //Requete axios pour recuperer les articles
  const getArticle = () => {
    axios
      .get(url)
      .then((res) => {
        //On attribue les article à notre variable  article
        setArticle(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="container_from_page">
      {article.length > 0 && (
        <div id="container-flex-from-page" className="home-from-page">
          {article.map((articles, index) => {
            return (
              <div id="style-card" key={index}>
                <Temp
                  key={index}
                  title={articles.title}
                  url={articles.url}
                  image={articles.image}
                  description={articles.description}
                  source={articles.source}
                  category={articles.category}
                  published_at={articles.published_at}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = {
  loadArticle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
