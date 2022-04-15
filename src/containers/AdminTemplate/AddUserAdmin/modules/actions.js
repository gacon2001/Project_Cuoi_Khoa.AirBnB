import * as ActionType from "./constants";
import api from "utils/api";

export const actAddUserApi = (user, history) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("users", user)
      .then((success) => {
        dispatch(actAddUserSuccess(success.data));
        history.push("/list-user");
      })
      .catch((error) => {
        console.log(error);
        dispatch(actAddUserFailed(error));
        alert("Add Failed");
      });
  };
};
const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
