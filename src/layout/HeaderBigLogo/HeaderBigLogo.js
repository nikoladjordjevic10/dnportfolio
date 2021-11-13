import React, { useState } from "react";
import HeaderStyle from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";

const HeaderBigLogo = () => {
  const [openMainMenu, setOpenMainMenu] = useState(false);

  return (
    <HeaderStyle>
      <MainMenu openMainMenu={openMainMenu} setOpenMainMenu={setOpenMainMenu} />
      <div className="headerWrapper">
        <header className="headerMobile">
          <div className="headerLogo">
            <div className="headerLogoImage">
              <img src="images/logoImg.png" alt="logoImg" />
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
    </HeaderStyle>
  );
};

export default HeaderBigLogo;
