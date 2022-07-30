import React, { useState } from "react";
import { useSelector } from "react-redux";
import GetInTouchStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import { NotificationManager } from "react-notifications";

const GetInTouch = () => {
  const translation = useSelector((state) => state.translation.messages);

  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullNameError: "",
    emailError: "",
    messageError: "",
  });

  const { fullName, email, message } = formInfo;

  const validateForm = () => {
    let fullNameError = "";
    let emailError = "";
    let messageError = "";

    const trimFullName = fullName.trim();
    const trimEmail = email.trim();
    const trimMessage = message.trim();

    // Checking if fullName is empty
    if (trimFullName.length === 0) {
      fullNameError = translation.fullNameError[1];
    }

    // Checking if email is empty and to check if is valid format
    if (trimEmail.length === 0) {
      emailError = translation.emailError[1];
    } else if (
      !trimEmail.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailError = translation.emailError[2];
    }

    // Checking if message is empty
    if (trimMessage.length === 0) {
      messageError = translation.messageError[1];
    }

    if (fullNameError || emailError || messageError) {
      setErrors({
        fullNameError,
        emailError,
        messageError,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setErrors({ errors });
    } else {
      NotificationManager.error(translation.formSubmitError[1], "", 2000);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  return (
    <GetInTouchStyle>
      <HeaderSmallLogo />
      <div className="getInTouchPageWrapper">
        <div className="getInTouchPageTitle">get in touch</div>
        <p className="getInTouchPageSubtitle">Leave me a message</p>
        <form className="getInTouchPageForm" onSubmit={handleSubmit}>
          <input
            className={`${errors.fullNameError ? "errorBorder" : ""}`}
            type="text"
            name="fullName"
            placeholder="Full name"
            value={fullName}
            onChange={handleChange}
          />
          {errors.fullNameError && (
            <div className="errorMsg">{errors.fullNameError}</div>
          )}

          <input
            className={`${errors.emailError ? "errorBorder" : ""}`}
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
          />
          {errors.emailError && (
            <div className="errorMsg">{errors.emailError}</div>
          )}

          <textarea
            className={`${
              errors.messageError
                ? errors.emailError
                  ? "textareaWithError errorBorder"
                  : "errorBorder"
                : ""
            }`}
            name="message"
            placeholder="Your Message"
            rows="7"
            value={message}
            onChange={handleChange}
          />
          {errors.messageError && (
            <div className="errorMsg">{errors.messageError}</div>
          )}
          <button>send</button>
        </form>
      </div>
    </GetInTouchStyle>
  );
};

export default GetInTouch;
