
import { locale } from "moment";
import { api } from "utils/api";
import * as ActionType from "./constants";

export const actAddEvaluateApi = (_idRoom, evaluate, history ) => {
  return (dispatch) => {
    dispatch(actAddEvaluateRequest());
    api
    //23
      .post(`reviews?roomId=${_idRoom}`, evaluate)
      .then((success) => {
        dispatch(actAddEvaluateSuccess(success.data));
        // alert("success");
        history.push(`/detail-room-admin/${_idRoom}`)
      })
      .catch((error) => {
        dispatch(actAddEvaluateFailed(error));
        // alert("failed");
      });
  };
};
const actAddEvaluateRequest = () => {
  return {
    type: ActionType.ADD_EVALUATE_REQUEST,
  };
};
const actAddEvaluateSuccess = (data) => {
  return {
    type: ActionType.ADD_EVALUATE_SUCCESS,
    payload: data,
  };
};
const actAddEvaluateFailed = (error) => {
  return {
    type: ActionType.ADD_EVALUATE_FAILED,
    payload: error,
  };
};
