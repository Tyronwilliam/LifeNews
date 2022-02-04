import React, { useEffect, useState } from "react";
import { getAllArticle } from "../../api/article";
import { loadArticle } from "../../action/article/articleAction";
import { connect } from "react-redux";
import { deleteArticle } from "../../api/article";
import Image from "../../assets/news-default/image.jpg";

const Myaccount = (props) => {
  // Tableau vide des favoris
  const [fav, setFav] = useState([]);

  // Récupération des articles par Id de l'user
  useEffect(() => {
    setTimeout(() => {
      let user_id = props.params.id;
      getAllArticle(user_id).then((res) => {
        setFav(res.result);
      });
    }, 500);
  }, [props.params.id]);
  // Suppression d'un favoris
  const deleteFav = (id) => {
    deleteArticle(id)
      .then((res) => {
        if (res.status === 200) {
          getAllArticle(props.user.infos.id).then((res) => {
            setFav(res.result);
          });
        }
      })
      .catch((err) => {
        return err
      });
  };

  return (
    <div className="container_from_account">
      <h1 className="titre-account">Mes favoris</h1>
      <div id="container-flex-account">
        {fav.map((favs, index) => {
          return (
            <div id="style-account" key={index}>
              {" "}
              <h1>{favs.title}</h1>
              <div className="image">
                {favs.image === null ? (
                  <a href={favs.url}>
                    <img src={Image} alt={favs.title} />
                  </a>
                ) : (
                  <a href={favs.url}>
                    <img src={favs.image} alt={favs.title} />
                  </a>
                )}
              </div>
              <p>{favs.description}..</p>
              <div>
                <ul className="cat">
                  <li>#{favs.category}</li>
                  {/* <li>{props.published_at}</li> */}
                </ul>
              </div>
              <button
                className="buton"
                onClick={(e) => {
                  e.preventDefault();
                  const id = favs.id;
                  deleteFav(id);
                }}
              >
                Supprimer
              </button>
            </div>
          );
        })}
      </div>
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
  // Data layer des favoris
  loadArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Myaccount);
