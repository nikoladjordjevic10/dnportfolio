import React from "react";
import WorkLogoPageStyle from "./style";
import WorkLogoData from "./WorkLogoData";
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
        {WorkLogoData &&
          WorkLogoData.map((item, index) => (
            <div className="workLogoPageImage" key={index}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
      </div>
      <BackToTopButton />
    </WorkLogoPageStyle>
  );
};

export default WorkLogoPage;
