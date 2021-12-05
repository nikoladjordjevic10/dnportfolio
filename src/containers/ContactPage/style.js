import styled from "styled-components";

export default styled.div`
  .contactPageWrapper {
    width: 80%;
    margin: 0 auto;
    .contactPageTitle {
      padding-top: 2rem;
      color: #2cbaa9;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .contactPageInfo {
      padding-top: 2rem;
      font-size: 1.1rem;
      span {
        margin-right: 0.5rem;
      }
      .contactPagePhone {
        padding-top: 1rem;
        font-weight: 700;
        span:nth-child(2) {
          margin: 0 1.5rem;
        }
      }
      .contactPageSkype {
        padding-top: 3rem;
      }
      .contactPageMail {
        padding-top: 1rem;
      }
      .contactPageSocials {
        padding-top: 3rem;
        li {
          list-style-type: none;
          border-bottom: 1px solid #2cbaa9;
          padding: 0.5rem 0;
          a,
          a:visited {
            color: black;
          }
        }
      }
      .hlturquoise {
        padding-top: 3.5rem;
        padding-bottom: 2rem;
        text-align: center;
      }
    }
  }
`;
