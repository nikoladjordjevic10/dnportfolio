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
  }
`;
