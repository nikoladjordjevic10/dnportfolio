import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomePageStyle from "./style";
import HeaderBigLogo from "../../layout/HeaderBigLogo/HeaderBigLogo";
import LogoPage from "../LogoPage/LogoPage";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const HomePage = () => {
  const [openLogoPage, setOpenLogoPage] = useState(false);
  const translation = useSelector((state) => state.translation.messages);

  return (
    <HomePageStyle>
      <HeaderBigLogo
        openLogoPage={openLogoPage}
        setOpenLogoPage={setOpenLogoPage}
      />
      {/* Main Hero Section */}
      <div className="homePageMainHero">
        <div className="homePageMainHeroImage">
          <img src="images/heroN.png" alt="heroN" />
        </div>
        <div className="homePageWrapper">
          <div className="homePageHeroTitle">
            <p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {translation.homePageText1[1]}
              </span>
              {translation.homePageText1[2]}
              <br />
              {translation.homePageText1[3]}
              <br />
            </p>

            <p>
              {translation.homePageText2[1]}
              <span>{translation.homePageText2[2]}</span>
              {translation.homePageText2[3]}
              <span>{translation.homePageText2[4]}</span>
              {translation.homePageText2[5]}
              <span>{translation.homePageText2[6]}</span>
              {translation.homePageText2[7]}
              <span>{translation.homePageText2[8]}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Hero Section */}
      <div className="homePageSecondaryHero">
        <div className="homePageSecondaryHeroImage">
          <img src="images/heroD.png" alt="heroD" />
        </div>
        <div className="homePageWrapper">
          <div className="homePageHeroProfile">
            <div className="homePageHeroProfileDot">
              <img src="images/heroDot.png" alt="heroDot" />
            </div>
            <div className="homePageHeroProfileImage">
              <img src="images/heroProfile.png" alt="heroProfile" />
            </div>
          </div>
        </div>
      </div>

      {/* Lets work together Button */}
      <div className="homePageWrapper">
        <div className="letsWorkButton">
          <Link to="/get-in-touch">{translation.letsWorkTogether[1]}</Link>
        </div>
      </div>

      {/* Work Section */}
      <div id="work">
        <div className="homePageWrapper"></div>
      </div>
      <LogoPage openLogoPage={openLogoPage} setOpenLogoPage={setOpenLogoPage} />
      <BackToTopButton />
    </HomePageStyle>
  );
};

export default HomePage;
