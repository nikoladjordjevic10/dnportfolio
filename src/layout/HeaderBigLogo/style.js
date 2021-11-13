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
      .headerLogoImage {
        padding-bottom: 1rem;
      }
      .headerLogoImage,
      .headerLogoText {
        width: 80%;
        img {
          width: 100%;
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
