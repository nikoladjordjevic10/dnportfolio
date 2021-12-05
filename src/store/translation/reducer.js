import constants from "./actionTypes";

const setLanguage = (language) => {
  let messages = {};
  switch (language) {
    case "srp":
      messages = Object.assign(messages, require("../../translation/srp.json"));
      break;
    default:
    case "en":
      messages = Object.assign(messages, require("../../translation/en.json"));
      break;
  }
  return messages;
};

const initState = {
  locale: "en",
  messages: setLanguage("en"),
};

const translation = (state = initState, action) => {
  const { type, payload } = action;
  if (action === undefined) return state;
  switch (type) {
    case constants.UPDATE_LANGUAGE:
      return {
        locale: payload,
        messages: setLanguage(payload),
      };
    default:
      return state;
  }
};

export default translation;
