import styled from "styled-components";

export default styled.div`
  .getInTouchPageWrapper {
    width: 80%;
    margin: 0 auto;
    .getInTouchPageTitle {
      padding-top: 2rem;
      color: #2cbaa9;
      font-size: 1.5rem;
      font-weight: 500;
    }
    .getInTouchPageSubtitle {
      padding: 1.2rem 0;
      font-size: 1.6rem;
    }
    .getInTouchPageForm {
      width: 100%;
      input,
      textarea {
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        border: none;
        border: 2px solid #b4bec8;
        border-radius: 0.4rem;
        box-shadow: none;
      }
      input::placeholder,
      textarea::placeholder {
        color: #b4bec8;
      }
      input {
        font-size: 1.3rem;
        padding: 0.5rem;
      }
      input + input {
        margin-top: 2rem;
      }
      textarea {
        margin-top: 2rem;
        padding: 1rem 0.5rem;
        font-size: 1.4rem;
      }
      .textareaWithError {
        margin-top: 0;
      }
      button {
        margin: 4rem 0;
        background-color: #2cbaa9;
        width: 100%;
        border-radius: 0.3rem;
        border: none;
        padding: 0.5rem 0;
        color: white;
        font-size: 1.4rem;
      }
      .errorMsg {
        color: red;
        margin-top: 0.25rem;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 14px;
      }
      .errorBorder {
        border: 2px solid red;
      }
    }
  }
`;
