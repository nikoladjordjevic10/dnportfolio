import React, { useState } from "react";
import LogoPageStyle from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";
import { useNavigate } from "react-router-dom";

const LogoPage = ({ openLogoPage, setOpenLogoPage }) => {
  const [openMainMenu, setOpenMainMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <LogoPageStyle openLogoPage={openLogoPage}>
      <MainMenu openMainMenu={openMainMenu} setOpenMainMenu={setOpenMainMenu} />
      <div className="logoPageWrapper">
        <div className="headerWrapper">
          <header className="headerMobile">
            <div className="headerLogo">
              <div className="headerLogoImage">
                <img
                  src="images/logoBigTrans.png"
                  alt="logoBigTrans"
                  onClick={() => {
                    setOpenLogoPage(!openLogoPage);
                    navigate("/");
                  }}
                />
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
        <div className="logoPageImages">
          <div className="logoPageImageBuild">
            <img src="images/logoBuild1.png" alt="logoBuild1" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild2.png" alt="logoBuild2" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild3.png" alt="logoBuild3" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild4.png" alt="logoBuild4" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild5.png" alt="logoBuild5" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild6.png" alt="logoBuild6" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild7.png" alt="logoBuild7" />
          </div>
          <div className="logoPageImageBuild">
            <img src="images/logoBuild8.png" alt="logoBuild8" />
          </div>
        </div>
      </div>
    </LogoPageStyle>
  );
};

export default LogoPage;
