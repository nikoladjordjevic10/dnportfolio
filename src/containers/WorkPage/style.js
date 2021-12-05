import styled from "styled-components";

export default styled.div`
  .workPageWrapper {
    width: 80%;
    margin: 0 auto;
    .workPageTitle {
      padding-top: 2rem;
      color: #2cbaa9;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .workPageGrouping {
      padding-top: 1.5rem;
      .workPageLogo,
      .workPageBranding,
      .workPageWebDesign,
      .workPageComputerGraphic {
        position: relative;
        padding-bottom: 2rem;
        img {
          width: 100%;
        }
        .workPageLogoTitle,
        .workPageBrandingTitle,
        .workPageWebDesignTitle,
        .workPageComputerGraphicTitle {
          position: absolute;
          color: #2cbaa9;
          font-size: 2rem;
          font-weight: 700;
        }
        .workPageLogoTitle {
          top: 38%;
          left: 40%;
        }
        .workPageBrandingTitle {
          top: 38%;
          left: 30%;
        }
        .workPageWebDesignTitle {
          top: 38%;
          left: 24%;
        }
        .workPageComputerGraphicTitle {
          top: 32%;
          left: 24%;
          text-align: center;
          max-width: 50%;
        }
      }
    }
    .hlturquoise {
      padding-top: 0.5rem;
      padding-bottom: 2rem;
      text-align: center;
    }
  }
`;
