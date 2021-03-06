import { api } from "utils/api";
import * as ActionType from "./constants";

export const actUploadImageRoomApi = (_idRoom, room) => {
  return (dispatch) => {
    dispatch(actUploadImageRoomRequest());
    var formData = new FormData();
    formData.append("room", room); //(name: key postman, value: tham số mà mình nhận gtri truyền vô)
    api
      //22
      .post(`rooms/upload-image/${_idRoom}`, formData)
      .then((success) => {
        dispatch(actUploadImageRoomSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actUploadImageRoomFailed(error));
      });
  };
};
const actUploadImageRoomRequest = () => {
  return {
    type: ActionType.UPLOAD_IMAGE_ROOM_REQUEST,
  };
};
const actUploadImageRoomSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_IMAGE_ROOM_SUCCESS,
    payload: data,
  };
};
const actUploadImageRoomFailed = (error) => {
  return {
    type: ActionType.UPLOAD_IMAGE_ROOM_FAILED,
    payload: error,
  };
};

export const actUploadImageLocationApi = (_id, location) => {
  return (dispatch) => {
    dispatch(actUploadImageLocationRequest());
    var formData = new FormData();
    formData.append("location", location);
    api
      //12
      .post(`locations/upload-images/${_id}`, formData)
      .then((success) => {
        dispatch(actUploadImageLocationSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actUploadImageLocationFailed(error));
      });
  };
};
const actUploadImageLocationRequest = () => {
  return {
    type: ActionType.UPLOAD_IMAGE_LOCATION_REQUEST,
  };
};
const actUploadImageLocationSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_IMAGE_LOCATION_SUCCESS,
    payload: data,
  };
};
const actUploadImageLocationFailed = (error) => {
  return {
    type: ActionType.UPLOAD_IMAGE_LOCATION_FAILED,
    payload: error,
  };
};
