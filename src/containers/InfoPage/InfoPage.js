import React from "react";
import { useSelector } from "react-redux";
import InfoPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const InfoPage = () => {
  const translation = useSelector((state) => state.translation.messages);

  return (
    <InfoPageStyle>
      <HeaderSmallLogo />
      <div className="infoPageWrapper">
        <div className="infoPageTitle">{translation.info[1]}</div>
        <div className="infoPageAbout">
          <p>
            {translation.infoPageText1[1]}
            <span>{translation.infoPageText1[2]}</span> <br />
            {translation.infoPageText1[3]}
          </p>
          <p>{translation.infoPageText2[1]}</p>
          <p>
            <span>{translation.infoPageText3[1]}</span>
            {translation.infoPageText3[2]}
            <span>{translation.infoPageText3[3]}</span>
            {translation.infoPageText3[4]}
            <span>{translation.infoPageText3[5]}</span>
          </p>
          <p>{translation.infoPageText4[1]}</p>
          <br />
          <p>
            {translation.infoPageText5[1]}
            <span>{translation.infoPageText5[2]}</span>
            {translation.infoPageText5[3]}
          </p>
          <br />
          <p>{translation.infoPageText6[1]}</p>
          <p>{translation.infoPageText7[1]}</p>
          <p>{translation.infoPageText8[1]}</p>
          <br />
          <p className="italic">{translation.infoPageText9[1]}</p>
        </div>
        {/* <div className="infoPageGallery">
          <div className="infoPageImage">
            <img
              src="images/info/infoPageNewspaper.png"
              alt="infoPageNewspaper"
            />
          </div>
          <div className="infoPageVideo">
            <img src="images/info/infoPageVideo.png" alt="infoPageVideo" />
          </div>
        </div>
        <div className="infoPageAbout">
          <p>Trenutno živi i stvara u Crnoj Gori.</p>
        </div> */}
        <div className="hlturquoise">
          <img src="images/HLturquoise.png" alt="HLturquoise" />
        </div>
      </div>
      <BackToTopButton />
    </InfoPageStyle>
  );
};

export default InfoPage;
