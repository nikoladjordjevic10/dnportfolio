import React from "react";
import MainMenuStyle from "./style";
import { Link } from "react-router-dom";

const MainMenu = ({ openMainMenu, setOpenMainMenu }) => {
  return (
    <MainMenuStyle openMainMenu={openMainMenu}>
      <div className="mainMenuWrapper">
        <div className="mainMenuLogo">
          <div className="mainMenuLogoImage">
            <img src="images/logoImgWhite.png" alt="logoImgWhite" />
          </div>
          <div className="mainMenuLogoText">
            <img src="images/logoTextWhite.png" alt="logoTextWhite" />
          </div>
        </div>
        <div className="mainMenuCloseIcon">
          <img
            src="images/closeWhite.png"
            alt="closeWhite"
            onClick={() => setOpenMainMenu(!openMainMenu)}
          />
        </div>
        <div className="mainMenuNavigation">
          <Link to="/">
            <li>work</li>
          </Link>
          <Link to="/">
            <li>info</li>
          </Link>
          <Link to="/">
            <li>contact</li>
          </Link>
          <Link to="/">
            <li>lets work together</li>
          </Link>
        </div>
        <div className="mainMenuLanguage">
          <Link to="/">srb</Link>
          <Link to="/">eng</Link>
        </div>
      </div>
    </MainMenuStyle>
  );
};

export default MainMenu;
