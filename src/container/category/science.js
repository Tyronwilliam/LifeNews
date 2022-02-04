import Temp from "./default";
import React, { useState, useEffect } from "react";
import axios from "axios";
let api_Key = "90424e42e0434157b9eff5fdaff7026b";
const Science = () => {
  const [article, setArticle] = useState([]);
  // Récupération de la date d'aujourdhui pour avoir les dernieres News
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  //requete URL vers Mediastack pour récupérer les articles
  const url = `https://api.mediastack.com/v1/news?access_key=${api_Key}&categories=science&languages=en,-de&date=${date}`;
  //   const url = `http://api.mediastack.com/v1/news?access_key=${api_Key}&categories=science&languages=fr&countries=fr`;

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
        <div id="container-flex-from-page" className="science-from-page">
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

export default Science;
