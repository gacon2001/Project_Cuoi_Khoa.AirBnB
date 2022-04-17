
import api from "utils/api";
import * as ActionType from "./constants";


export const actFetchDetailRoomApi = (_id) => {
  return (dispatch) => {
    dispatch(actFetchDetailRoomRequest());
    api
    //18
      .get(`rooms/${_id}`)
      .then((success) => {
        dispatch(actFetchDetailRoomSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actFetchDetailRoomFailed(error));
      });
  };
};
const actFetchDetailRoomRequest = () => {
  return {
    type: ActionType.FETCH_DETAIL_ROOM_REQUEST,
  };
};
const actFetchDetailRoomSuccess = (data) => {
  return {
    type: ActionType.FETCH_DETAIL_ROOM_SUCCESS,
    payload: data,
  };
};
const actFetchDetailRoomFailed = (error) => {
  return {
    type: ActionType.FETCH_DETAIL_ROOM_FAILED,
    payload: error,
  };
};