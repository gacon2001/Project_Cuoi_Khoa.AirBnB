import * as ActionType from "./constants";
import api from "utils/api";

export const actSignUp = (user) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    api
      .post("auth/register", user)
      .then((result) => {
        alert("Đăng ký thành công. Xin mời đăng nhập");
        dispatch(actSignUpSuccess(result.data));
        document.getElementById("signUpModal").click();
      })
      .catch((error) => {
        dispatch(actSignUpFailed(error));
      });
  };
};
export const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};
export const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};
export const actSignUpFailed = (error) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: error,
  };
};
