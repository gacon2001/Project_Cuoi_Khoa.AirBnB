
import api from "utils/api";
import * as ActionType from "./constants";

export const actAddRoomApi = (data, history) => {
  return (dispatch) => {
    dispatch(actAddRoomRequest());
    api
    //16
      .post("rooms", data)
      .then((success) => {
        dispatch(actAddRoomSuccess(success.data));
        //!chuyển trang qua list room theo cái locationId mà mình chọn
        history.push(`/list-rooms/${data.locationId}`);
      })
      .catch((error) => {
        dispatch(actAddRoomFailed(error));
        alert("failed");
      });
  };
};
const actAddRoomRequest = () => {
  return {
    type: ActionType.ADD_ROOM_REQUEST,
  };
};
const actAddRoomSuccess = (data) => {
  return {
    type: ActionType.ADD_ROOM_SUCCESS,
    payload: data,
  };
};
const actAddRoomFailed = (error) => {
  return {
    type: ActionType.ADD_ROOM_FAILED,
    payload: error,
  };
};
