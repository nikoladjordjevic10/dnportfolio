import styled from "styled-components";

export default styled.div`
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
  }
  .homePageWrapper {
    width: 80%;
    margin: 0 auto;
  }
  .homePageSecondaryHero {
    width: 100%;
    position: relative;
    .homePageSecondaryHeroImage {
      position: absolute;
      right: 0;
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
`;

// .homePageHeroProfile {
//   display: flex;
//   justify-content: space-between;
//   padding-top: 4rem;
//   .homePageHeroProfileD {
//     position: absolute;
//     right: 0;
//     padding-bottom: 4rem;
//   }
//   .homePageHeroProfileImage {
//     padding-top: 5.8rem;
//     width: 10rem;

//     img {
//       width: 100%;
//     }
//   }
// }
