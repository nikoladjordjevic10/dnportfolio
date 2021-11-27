import styled from "styled-components";

export default styled.div`
  .headerWrapper {
    width: 80%;
    margin: 0 auto;
    .headerMobile {
      padding-top: 2rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .headerLogo {
        display: flex;
        align-items: baseline;
        .headerLogoImage {
          padding-bottom: 1rem;
        }
        .headerLogoText {
          margin-left: 1rem;
        }
        .headerLogoImage,
        .headerLogoText {
          img {
            width: 100%;
          }
        }
      }
      .headerMenu {
        width: 2rem;
        img {
          width: 100%;
        }
      }
    }
  }
`;
