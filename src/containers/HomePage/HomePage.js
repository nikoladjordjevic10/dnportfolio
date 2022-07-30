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
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designer</span> is a <br />{" "}
              contradictory <br />
            </p>
            <p>
              By combining ideas and skills, with <span>minimal</span> use of{" "}
              <span>elements</span>, creating a <span>strong</span> visual{" "}
              <span>message</span>.
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
