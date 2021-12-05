import constants from "./actionTypes";

export const updateLanguage = (payload) => ({
  type: constants.UPDATE_LANGUAGE,
  payload,
});
