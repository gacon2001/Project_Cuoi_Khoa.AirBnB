
import { api } from "utils/api";
import * as ActionType from "./constants";

export const actSigninAdminApi = (signin, history) => {
  return (dispatch) => {
    dispatch(actSigninAdminRequest());
    api
      .post("auth/login", signin)
      .then((success) => {
        if (success.data.user.type !== "ADMIN") {
          return Promise.reject({
            response: {
              data: "ONLY ADMIN TO ACCESS",
            },
          });
        }
        localStorage.setItem("Admin", JSON.stringify(success.data));
        history.replace("/list-user");
        dispatch(actSigninAdminSuccess(success.data));
      })
      .catch((error) => {
        alert("can/t access")
        dispatch(actSigninAdminFailed(error));
      });
  };
};
const actSigninAdminRequest = () => {
  return {
    type: ActionType.SIGNIN_REQUEST,
  };
};
const actSigninAdminSuccess = (data) => {
  return {
    type: ActionType.SIGNIN_SUCCESS,
    payload: data,
  };
};
const actSigninAdminFailed = (error) => {
  return {
    type: ActionType.SIGNIN_FAILED,
    payload: error,
  };
};
