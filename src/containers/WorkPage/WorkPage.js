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
            <Link to="/work-logo">
              <img src="images/work/workLogo.png" alt="workLogo" />
              <div className="workPageLogoTitle">logo</div>
            </Link>
          </div>
          <div className="workPageBranding">
            <Link to="/">
              <img src="images/work/workBranding.png" alt="workBranding" />
              <div className="workPageBrandingTitle">branding</div>
            </Link>
          </div>
          <div className="workPageWebDesign">
            <Link to="/">
              <img src="images/work/workWebDesign.png" alt="workWebDesign" />
              <div className="workPageWebDesignTitle">web design</div>
            </Link>
          </div>
          <div className="workPageComputerGraphic">
            <Link to="/">
              <img
                src="images/work/workComputerGraphic.png"
                alt="workComputerGraphic"
              />
              <div className="workPageComputerGraphicTitle">
                computer graphic
              </div>
            </Link>
          </div>
          <div className="hlturquoise">
            <img src="images/HLturquoise.png" alt="HLturquoise" />
          </div>
        </div>
      </div>
    </WorkPageStyle>
  );
};

export default WorkPage;
