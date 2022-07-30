import styled from "styled-components";

export default styled.div`
  .workLogoPageWrapper {
    width: 80%;
    margin: 0 auto;
    .workLogoPageLinks {
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
  .workLogoPageImages {
    margin-top: 2rem;
    .workLogoPageImage {
      img {
        width: 100%;
      }
    }
  }
`;
