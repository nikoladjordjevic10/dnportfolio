import React, { useState, useEffect } from "react";
import BackToTopButtonStyle from "./style";

const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    return () => {
      setShowTopBtn(false);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackToTopButtonStyle>
      {showTopBtn && (
        <div className="backToTopBtn">
          <img
            src="/images/upArrow.png"
            alt="BackToTopImage"
            className="backToTopImg"
            onClick={goToTop}
          />
        </div>
      )}
    </BackToTopButtonStyle>
  );
};

export default BackToTopButton;
