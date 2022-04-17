
import api from "utils/api";
import * as ActionType from "./constants";

export const actFetchDetailLocationApi = (_id) => {
  return (dispatch) => {
    dispatch(actFetchDetailLocationRequest());
    api
    //10
      .get(`locations/${_id}`)
      .then((success) => {
        dispatch(actFetchDetailLocationSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailLocationFailed(error));
      });
  };
};
const actFetchDetailLocationRequest = () => {
  return {
    type: ActionType.FETCH_DETAIL_LOCATION_REQUEST,
  };
};
const actFetchDetailLocationSuccess = (data) => {
  return {
    type: ActionType.FETCH_DETAIL_LOCATION_SUCCESS,
    payload: data,
  };
};
const actFetchDetailLocationFailed = (error) => {
  return {
    type: ActionType.FETCH_DETAIL_LOCATION_FAILED,
    payload: error,
  };
};
