import React from "react";
import { useEffect, useState } from "react";
function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);
  // Event au scroll , gestion du comportement (anim) affichage
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
    return { backToTop, setBackToTop };
  }, [backToTop]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <div className="container-button">
      {backToTop && <div className="back-to-top" onClick={scrollUp}></div>}
    </div>
  );
}

export default BackToTop;
