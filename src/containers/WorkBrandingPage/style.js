import styled from "styled-components";

export default styled.div`
  .workBrandingPageWrapper {
    width: 80%;
    margin: 0 auto;
    .workBrandingPageLinks {
      display: flex;
      margin-top: 2rem;
      align-items: center;
      a:visited {
        color: black;
      }
      span {
        padding: 0 0.5rem;
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
  .workBrandingPageImages {
    margin-top: 2rem;
    /* Garden Design */
    .gardenDesignLogo {
      height: 5.5rem;
      background-color: #b8d548;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gardenDesignFolder {
      text-align: center;
    }
    .gardenDesignShirts {
      margin-top: 5rem;
      position: relative;
      img:nth-child(2) {
        position: absolute;
        top: -15%;
        right: 0;
        z-index: -1;
      }
    }
    .gardenDesignWebSite {
      margin-top: 5rem;
      img:nth-child(2) {
        margin-top: 1rem;
      }
    }
    .gardenDesignCar {
      margin: 4rem 0 2rem 0;
      .carRearHood {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .gardenDesignTruck {
      margin: 3rem 0;
      div {
        text-align: right;
      }
      .gardenDesignTruckLive {
        margin-top: 2rem;
      }
    }
    .gardenDesignCaddy {
      text-align: center;
    }
    .gardenDesignDelimiter {
      margin-bottom: 3rem;
      text-align: center;
    }
    /* Group Brand New */
    .groupBrandNewLogo {
      height: 5.5rem;
      background-color: #cdcaca;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .groupBrandNewMemorandum {
      padding: 2.5rem 0 0 2rem;
    }
    .groupBrandNewCards {
      padding-top: 2.5rem;
      .card1,
      .card2,
      .card3 {
        display: flex;
        width: 90%;
      }
      .card1 {
        justify-content: flex-start;
        margin-left: 2rem;
      }
      .card2 {
        justify-content: center;
      }
      .card3 {
        padding-top: 0.5rem;
        justify-content: flex-end;
      }
    }
    .groupBrandNewPlanner,
    .groupBrandNewShirts {
      padding: 2rem 0;
    }
    .groupBrandNewGreetingCards {
      padding: 2rem 0;
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .groupBrandNewCover {
      padding-top: 2rem;
      width: 80%;
      margin: 0 auto;
    }
    .groupBrandNewWallpapers {
      padding-top: 3rem;
    }
    .groupBrandNewFlyers {
      padding-top: 3rem;
      display: flex;
      width: 80%;
      margin: 0 auto;
      flex-direction: column;
      img {
        &:nth-child(2) {
          padding-top: 2rem;
        }
      }
    }
    .groupBrandNewDelimiter {
      margin-top: 1rem;
      margin-bottom: 3rem;
      text-align: center;
    }
    /* KOD Concept Store */
  }
`;
