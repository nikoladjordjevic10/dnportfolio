import React from "react";
import WorkLogoPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const WorkLogoPage = () => {
  return (
    <WorkLogoPageStyle>
      <HeaderSmallLogo />
      <div className="workLogoPageWrapper">
        <div className="workLogoPageLinks">
          <img src="images/backArrow.png" alt="backArrow" />
          <Link to="/work">
            <span>work</span>
          </Link>
          <img src="images/delimiter.png" alt="delimiter" />
          <span>logo</span>
        </div>
      </div>
      <div className="workLogoPageImages">
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo01.png" alt="logo01" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo02.png" alt="logo02" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo03.png" alt="logo03" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo04.png" alt="logo04" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo05.png" alt="logo05" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo06.png" alt="logo06" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo07.png" alt="logo07" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo08.png" alt="logo08" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo09.png" alt="logo09" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo10.png" alt="logo10" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo11.png" alt="logo11" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo12.png" alt="logo12" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo13.png" alt="logo13" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo14.png" alt="logo14" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo15.png" alt="logo15" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo16.png" alt="logo16" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo17.png" alt="logo17" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo18.png" alt="logo18" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo19.png" alt="logo19" />
        </div>
        <div className="workLogoPageImage">
          <img src="images/work/logo/logo20.png" alt="logo20" />
        </div>
      </div>
      <BackToTopButton />
    </WorkLogoPageStyle>
  );
};

export default WorkLogoPage;
