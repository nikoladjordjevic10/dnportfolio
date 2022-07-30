import styled from "styled-components";

export default styled.div`
  .infoPageWrapper {
    width: 80%;
    margin: 0 auto;
    .infoPageTitle {
      padding-top: 2rem;
      color: #2cbaa9;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .infoPageAbout {
      padding-top: 1.5rem;
      p {
        padding: 0.5rem 0;
        font-size: 1.1rem;
        line-height: 1.3;
        span {
          font-weight: 700;
        }
      }
    }
    .italic {
      font-style: italic;
    }
    /* .infoPageGallery {
      padding-top: 2rem;
      .infoPageVideo {
        padding-top: 2rem;
      }
    } */
    .hlturquoise {
      padding-top: 8rem;
      padding-bottom: 2rem;
      text-align: center;
    }
  }
`;
