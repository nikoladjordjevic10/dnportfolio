import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainMenuStyle from "./style";
import { Link } from "react-router-dom";
import { updateLanguage } from "../../store/translation/actions";

const MainMenu = ({ openMainMenu, setOpenMainMenu }) => {
  const dispatch = useDispatch();
  const translation = useSelector((state) => state.translation.messages);

  const handleLanguage = (language) => {
    dispatch(updateLanguage(language));
  };

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
            <li>{translation.work[1]}</li>
          </Link>
          <Link to="/info" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.info[1]}</li>
          </Link>
          <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.contact[1]}</li>
          </Link>
          <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.letsWorkTogether[1]}</li>
          </Link>
        </div>
        <div className="mainMenuLanguage">
          <span onClick={() => handleLanguage("srp")}>srb</span>
          <span onClick={() => handleLanguage("en")}>eng</span>
        </div>
      </div>
    </MainMenuStyle>
  );
};

export default MainMenu;
