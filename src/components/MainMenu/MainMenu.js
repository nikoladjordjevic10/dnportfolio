import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainMenuStyle from "./style";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
            <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
              <img src="images/logoSmallWhite.png" alt="logoSmallWhite" />
            </Link>
          </div>
          <div className="mainMenuLogoText">
            <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
              <img src="images/logoTextWhite.png" alt="logoTextWhite" />
            </Link>
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
          <HashLink
            smooth
            to="/#work"
            onClick={() => setOpenMainMenu(!openMainMenu)}
          >
            <li>{translation.work[1]}</li>
          </HashLink>
          <Link to="/info" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.info[1]}</li>
          </Link>
          <Link to="/contact" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.contact[1]}</li>
          </Link>
          <Link
            to="/get-in-touch"
            onClick={() => setOpenMainMenu(!openMainMenu)}
          >
            <li>{translation.letsWorkTogether[1]}</li>
          </Link>
          {/* <Link to="/" onClick={() => setOpenMainMenu(!openMainMenu)}>
            <li>{translation.shop[1]}</li>
          </Link> */}
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
