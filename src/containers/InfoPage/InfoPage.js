import React from "react";
import InfoPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const InfoPage = () => {
  return (
    <InfoPageStyle>
      <HeaderSmallLogo />
      <div className="infoPageWrapper">
        <div className="infoPageTitle">info</div>
        <div className="infoPageAbout">
          <p>
            Rođen u <span>Valjevu, Srbija</span> <br />
            27.10.1983 god.
          </p>
          <p>
            * Kao dete pokazao sklonost ka kreativnošću, izmišlja svetove i
            situacije, bezbrižno se igrajući.
          </p>
          <p>
            <span>Sa 5 godina polazi u likovnu školu, </span>srednju završava u
            nadi da će jednog dana postati arhitekta, ali njegov put kreće u
            drugu stranu i vodi ga na{" "}
            <span>Politehničku Akademiju u Beogradu.</span> Ispostavlja se da
            uziva u dizajniranju više nego u projektovanju. Upisuje se na smer
            za grafički dizajn i tehnologiju, koju završava 2009. god, stiče
            zvanje <span>strukovni dizajner.</span>
          </p>
          <p>
            * Tokom studiranja volontira i stiče iskustvo u štamparskim firmama
            i dizajn studijima.
          </p>
          <br />
          <p>
            Interesuje ga slikarstvo, vajarstvo, fotografija, arhitektura i
            tehnologija. Veliki je <span>ljubitelj prirode</span> gde uglavnom
            pronalazi inspiraciju za svoj rad.
          </p>
          <br />
          <p>
            Pobeđivao je na nagradnim konkursima za brendiranje i izradu
            vizuelnog identiteta na internet platformama.
          </p>
          <p>-2007 god. drugo mesto na konkursu za plakat kompanije "Lukoil"</p>
          <p>Učestvovao je na nekoliko grupnih izložbi u zemlji.</p>
          <br />
          <p className="italic">
            *Pored dizajna pokazao je i organizatorske sposobnosti, sa grupom
            entuzijasta organizovao je izložbu mladih umetnika u Valjevu 2012
            godine. ReFESTanimacija, izložba Valjevskog potencijala.
          </p>
        </div>
        <div className="infoPageGallery">
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
        </div>
        <div className="hlturquoise">
          <img src="images/HLturquoise.png" alt="HLturquoise" />
        </div>
      </div>
      <BackToTopButton />
    </InfoPageStyle>
  );
};

export default InfoPage;
