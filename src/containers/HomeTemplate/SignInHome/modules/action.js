import * as ActionType from "./constants";
import api from "utils/api";
export const actSignInApi = (user) => {
  return (dispatch) => {
    dispatch(actSignInRequest());
    api
      .post("auth/login", user)
      .then((success) => {
        localStorage.setItem("Admin", JSON.stringify(success.data));
        dispatch(actSigninSuccess(success.data));
        alert("Đăng nhập thành công");
        // Close Modal
        if (document.getElementById("signInModal")) {
          document.getElementById("signInModal").click();
        }
      })
      .catch((error) => {
        dispatch(actSignInFailed(error));
      });
  };
};
export const actSignInRequest = () => {
  return {
    type: ActionType.SIGNIN_REQUEST,
  };
};
export const actSigninSuccess = (data) => {
  return {
    type: ActionType.SIGNIN_SUCCESS,
    payload: data,
  };
};
export const actSignInFailed = (error) => {
  return {
    type: ActionType.SIGNIN_FAILED,
    payload: error,
  };
};