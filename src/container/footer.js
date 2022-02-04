import React from "react";
import { Link } from "react-router-dom";
import LogoTwitter from "../assets/news-default/twitter.png";
import LogoFacebook from "../assets/news-default/facebook.png";
import LogoInstagram from "../assets/news-default/instagram.png";
import LogoYoutube from "../assets/news-default/youtube.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div id="icone" className="social">
        <img src={LogoTwitter} alt="Logo Twitter" />
        <img src={LogoFacebook} alt="Logo Facebook" />
        <img src={LogoInstagram} alt="Logo Instagram" />
        <img src={LogoYoutube} alt="Logo Youtube" />
      </div>
      <div id="icone" className="media">
        <p>
          <Link to="/" className="footer-link">
            Home
          </Link>{" "}
        </p>
        <p>Services</p>
        <p>About</p>
        <p>Terms</p>
        <p>Private Policy</p>
      </div>
    </div>
  );
};

export default Footer;
