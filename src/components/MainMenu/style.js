import styled from "styled-components";

export default styled.div`
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ openMainMenu }) =>
    openMainMenu ? "translateX(0)" : "translateX(100%)"};
  z-index: 10;
  background-color: #2cbaa9;
  width: 100vw;
  height: 100vh;
  .mainMenuWrapper {
    position: relative;
    width: 80%;
    margin: 0 auto;
    .mainMenuLogo {
      padding-top: 3rem;
      display: flex;
      align-items: baseline;
      .mainMenuLogoText {
        margin-left: 1rem;
      }
    }
    .mainMenuCloseIcon {
      position: absolute;
      right: 0;
      top: 2rem;
    }
    .mainMenuNavigation {
      color: white;
      font-size: 2rem;
      padding-top: 2rem;
      a {
        color: white;
      }
      li {
        list-style-type: none;
        padding: 1.25rem 0;
      }
    }
    .mainMenuLanguage {
      display: flex;
      font-size: 0.9rem;
      text-transform: uppercase;
      padding-top: 5rem;
      span {
        color: white;
      }
      span:first-child {
        margin-right: 2rem;
      }
    }
  }
`;
