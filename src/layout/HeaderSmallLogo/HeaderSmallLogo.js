import React, { useState } from "react";
import HeaderSmallLogoStyle from "./style";
import { useNavigate } from "react-router-dom";
import MainMenu from "../../components/MainMenu/MainMenu";

const HeaderSmallLogo = () => {
  const [openMainMenu, setOpenMainMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderSmallLogoStyle>
      <MainMenu openMainMenu={openMainMenu} setOpenMainMenu={setOpenMainMenu} />

      <div className="headerWrapper">
        <header className="headerMobile">
          <div className="headerLogo">
            <div className="headerLogoImage">
              <img
                src="images/logoSmall.png"
                alt="logoSmall "
                onClick={() => navigate("/")}
              />
            </div>
            <div className="headerLogoText">
              <img src="images/logoTextCaps.png" alt="logoTextCaps" />
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
    </HeaderSmallLogoStyle>
  );
};

export default HeaderSmallLogo;
