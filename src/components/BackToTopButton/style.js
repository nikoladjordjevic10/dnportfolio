import styled from "styled-components";

export default styled.div`
  .backToTopBtn {
    position: relative;
    .backToTopImg {
      position: fixed;
      bottom: 40px;
      right: 25px;
      z-index: 20;
      /* height: 40px;
      width: 40px; */
    }
  }

  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
