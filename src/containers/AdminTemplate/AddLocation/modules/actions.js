
import api from "utils/api";
import * as ActionType from "./constants";

export const actAddLocationApi = (location, history) => {
  return (dispatch) => {
    dispatch(actAddLocationRequest());
    api
    //7
      .post("locations", location)
      .then((success) => {
        dispatch(actAddLocationSuccess(success.data));
        history.push('/manage-locations-and-rooms');
      })
      .catch((error) => {
        dispatch(actAddLocationFailed(error));
        alert("failed");
      });
  };
};
const actAddLocationRequest = () => {
  return {
    type: ActionType.ADD_LOCATION_REQUEST,
  };
};
const actAddLocationSuccess = (data) => {
  return {
    type: ActionType.ADD_LOCATION_SUCCESS,
    payload: data,
  };
};
const actAddLocationFailed = (error) => {
  return {
    type: ActionType.ADD_LOCATION_FAILED,
    payload: error,
  };
};
