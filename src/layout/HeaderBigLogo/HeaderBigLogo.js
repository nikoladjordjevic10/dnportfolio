import React, { useState } from "react";
import HeaderBigLogoStyle from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";

const HeaderBigLogo = ({ openLogoPage, setOpenLogoPage }) => {
  const [openMainMenu, setOpenMainMenu] = useState(false);

  return (
    <HeaderBigLogoStyle>
      <MainMenu openMainMenu={openMainMenu} setOpenMainMenu={setOpenMainMenu} />

      <div className="headerWrapper">
        <header className="headerMobile">
          <div className="headerLogo">
            <div
              className="headerLogoImage"
              onClick={() => setOpenLogoPage(!openLogoPage)}
            >
              <img src="images/logoBig.png" alt="logoBig" />
            </div>
            <div className="headerLogoText">
              <img src="images/logoText.png" alt="logoText" />
            </div>
          </div>
          <div className="headerMenu">
            <img
              src="images/mobileMenu.png"
              alt="mobileMenu"
              onClick={() => setOpenMainMenu(!openMainMenu)}
            />
          </div>
        </header>
      </div>
    </HeaderBigLogoStyle>
  );
};

export default HeaderBigLogo;
