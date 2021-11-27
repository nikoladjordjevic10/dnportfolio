import React from "react";
import WorkPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import { Link } from "react-router-dom";

const WorkPage = () => {
  return (
    <WorkPageStyle>
      <HeaderSmallLogo />
      <div className="workPageWrapper">
        <div className="workPageTitle">work</div>
        <div className="workPageGrouping">
          <div className="workPageLogo">
            <Link to="/">
              <img src="images/workLogo.png" alt="workLogo" />
              <div className="workPageLogoTitle">logo</div>
            </Link>
          </div>
          <div className="workPageBranding">
            <Link to="/">
              <img src="images/workBranding.png" alt="workBranding" />
              <div className="workPageBrandingTitle">branding</div>
            </Link>
          </div>
          <div className="workPageWebDesign">
            <Link to="/">
              <img src="images/workWebDesign.png" alt="workWebDesign" />
              <div className="workPageWebDesignTitle">web design</div>
            </Link>
          </div>
          <div className="workPageComputerGraphic">
            <Link to="/">
              <img
                src="images/workComputerGraphic.png"
                alt="workComputerGraphic"
              />
              <div className="workPageComputerGraphicTitle">
                computer graphic
              </div>
            </Link>
          </div>
        </div>
      </div>
    </WorkPageStyle>
  );
};

export default WorkPage;
