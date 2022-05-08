import React from "react";
import WorkBrandingPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const WorkBrandingPage = () => {
  return (
    <WorkBrandingPageStyle>
      <HeaderSmallLogo />
      <div className="workBrandingPageWrapper">
        <div className="workBrandingPageLinks">
          <img src="images/backArrow.png" alt="backArrow" />
          <Link to="/work">
            <span>work</span>
          </Link>
          <img src="images/delimiter.png" alt="delimiter" />
          <span>branding</span>
        </div>
      </div>
      <div className="workBrandingPageImages">
        {/* GARDEN DESIGN SECTION */}
        <div className="gardenDesign">
          <div className="gardenDesignLogo">
            <img src="images/work/branding/garden-design/logo.png" alt="logo" />
          </div>

          <div className="gardenDesignCards">
            <img
              src="images/work/branding/garden-design/cards.png"
              alt="cards"
            />
          </div>

          <div className="gardenDesignFolder">
            <img
              src="images/work/branding/garden-design/folder.png"
              alt="folder"
            />
          </div>

          <div className="gardenDesignShirts">
            <img
              src="images/work/branding/garden-design/shirts.png"
              alt="shirts"
            />
            <img
              src="images/work/branding/garden-design/bgPartial.png"
              alt="bgPartial"
            />
          </div>

          <div className="gardenDesignWebSite">
            <div className="workBrandingPageWrapper">
              <img
                src="images/work/branding/garden-design/webSite1.png"
                alt="webSite1"
              />
              <img
                src="images/work/branding/garden-design/webSite2.png"
                alt="webSite2"
              />
            </div>
          </div>

          <div className="gardenDesignCar">
            <div className="workBrandingPageWrapper">
              <img
                src="images/work/branding/garden-design/carRight.png"
                alt="carRight"
              />
              <div className="carRearHood">
                <img
                  src="images/work/branding/garden-design/carRear.png"
                  alt="carRear"
                />
                <img
                  src="images/work/branding/garden-design/carHood.png"
                  alt="carHood"
                />
              </div>
              <img
                src="images/work/branding/garden-design/carLive.png"
                alt="carLive"
              />
            </div>
          </div>

          <div className="gardenDesignTruck">
            <div>
              <img
                src="images/work/branding/garden-design/truckLeft.png"
                alt="truckLeft"
              />
            </div>
            <img
              src="images/work/branding/garden-design/truckRight.png"
              alt="truckRight"
            />
            <div className="workBrandingPageWrapper">
              <div className="gardenDesignTruckLive">
                <img
                  src="images/work/branding/garden-design/truckLive.png"
                  alt="truckLive"
                />
              </div>
            </div>
          </div>

          <div className="gardenDesignCaddy">
            <img
              src="images/work/branding/garden-design/caddy.png"
              alt="caddy"
            />
          </div>

          <div className="gardenDesignDelimiter">
            <img
              src="images/work/branding/garden-design/delimiter.png"
              alt="delimiter"
            />
          </div>
        </div>
        {/* GROUP BRAND NEW SECTION */}
      </div>
      <BackToTopButton />
    </WorkBrandingPageStyle>
  );
};

export default WorkBrandingPage;
