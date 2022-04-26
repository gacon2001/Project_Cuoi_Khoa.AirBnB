import * as ActionType from "./constants";
import { api } from "utils/api";

export const actEditLocationApi = (_id, locationUpdate, history) => {
  return (dispatch) => {
    dispatch(actEditLocationRequest());
    api
      .put(`locations/${_id}`, locationUpdate)
      .then((success) => {
        dispatch(actEditLocationSuccess(success.data));
        history.push("/manage-locations-and-rooms")
      })
      .catch((error) => {
        // console.log(error);
        dispatch(actEditLocationFailed(error));
        alert("'Failed");
      });
  };
};
const actEditLocationRequest = () => {
  return {
    type: ActionType.EDIT_LOCATION_REQUEST,
  };
};
const actEditLocationSuccess = (data) => {
  return {
    type: ActionType.EDIT_LOCATION_SUCCESS,
    payload: data,
  };
};
const actEditLocationFailed = (error) => {
  return {
    type: ActionType.EDIT_LOCATION_FAILED,
    payload: error,
  };
};
