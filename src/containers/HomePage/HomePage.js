import React, { useState } from "react";
import HomePageStyle from "./style";
import HeaderBigLogo from "../../layout/HeaderBigLogo/HeaderBigLogo";
import LogoPage from "../LogoPage/LogoPage";

const HomePage = () => {
  const [openLogoPage, setOpenLogoPage] = useState(false);
  return (
    <HomePageStyle>
      <HeaderBigLogo
        openLogoPage={openLogoPage}
        setOpenLogoPage={setOpenLogoPage}
      />
      <div className="homePageMainHero">
        <div className="homePageMainHeroImage">
          <img src="images/heroN.png" alt="heroN" />
        </div>
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
      <div className="homePageSecondaryHero">
        <div className="homePageSecondaryHeroImage">
          <img src="images/heroD.png" alt="heroD" />
        </div>
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
      <LogoPage openLogoPage={openLogoPage} setOpenLogoPage={setOpenLogoPage} />
    </HomePageStyle>
  );
};

export default HomePage;
