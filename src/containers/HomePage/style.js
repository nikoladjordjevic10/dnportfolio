import styled from "styled-components";

export default styled.div`
  .homePageWrapper {
    width: 80%;
    margin: 0 auto;
  }
  .homePageMainHero {
    position: relative;
    max-width: 100%;
    .homePageMainHeroImage {
      padding-top: 2rem;
      position: absolute;
      top: 0;
      right: 0;
      img {
        width: 100%;
      }
    }
    .homePageHeroTitle {
      padding-top: 2rem;
    }
  }
  .homePageSecondaryHero {
    width: 100%;
    min-height: 50vh;
    position: relative;
    .homePageSecondaryHeroImage {
      position: absolute;
      right: 0;
      padding-bottom: 4rem;
      img {
        width: 100%;
      }
    }
  }
  .homePageHeroTitle {
    padding-bottom: 3rem;
    p:first-child {
      padding: 11rem 0 1rem 0;
    }
    p:nth-child(2) {
      text-align: justify;
    }
    p {
      font-size: 1.7rem;
      span {
        font-weight: 700;
      }
    }
  }
  .homePageHeroProfile {
    position: relative;
    .homePageHeroProfileDot {
      position: absolute;
      top: 0;
      left: 0;
    }
    .homePageHeroProfileImage {
      position: absolute;
      top: 6rem;
      right: 0;
    }
  }
  .letsWorkButton {
    background-color: #2cbaa9;
    width: 60%;
    margin: 2rem auto 4rem;
    padding: 1rem;
    text-align: center;
    font-size: 1.3rem;
    border-radius: 0.3rem;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;
