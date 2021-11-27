import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: ${({ openLogoPage }) => (openLogoPage ? "0" : "-100%")};
  transition: left 0.3s ease-in-out;
  z-index: 20;
  width: 100vw;
  background-color: white;
  .logoPageWrapper {
    width: 80%;
    margin: 0 auto;
    .headerWrapper {
      width: 100%;
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
    .logoPageImages {
      margin-top: 3rem;
      .logoPageImageBuild {
        text-align: center;
        margin-bottom: 2rem;
        &:nth-child(n + 5):nth-child(-n + 7) {
          margin-bottom: 4rem;
        }
        &:last-child {
          margin-bottom: 6rem;
        }
      }
    }
  }
`;
