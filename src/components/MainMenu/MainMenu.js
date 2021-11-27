import React from "react";
import MainMenuStyle from "./style";
import { Link } from "react-router-dom";

const MainMenu = ({ openMainMenu, setOpenMainMenu }) => {
  return (
    <MainMenuStyle openMainMenu={openMainMenu}>
      <div className="mainMenuWrapper">
        <div className="mainMenuLogo">
          <div className="mainMenuLogoImage">
            <img src="images/logoSmallWhite.png" alt="logoSmallWhite" />
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
          <Link to="/work" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>work</li>
          </Link>
          <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>info</li>
          </Link>
          <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>contact</li>
          </Link>
          <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
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
