
import api from "utils/api";
import * as ActionType from "./constants";


export const actUploadImageRoomApi = (_idRoom, room) => {
  return (dispatch) => {
    dispatch(actUploadImageRoomRequest());
    api
    //22
      .post(`rooms/upload-image/${_idRoom}`, room)
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

export const actUploadImageLocationApi = (_id, imageLocation) => {
  return (dispatch) => {
      dispatch(actUploadImageLocationRequest());
      api
      //12
      .put(`locations/upload-images/${_id}`, imageLocation) 
      .then((success)=>{
          dispatch(actUploadImageLocationSuccess(success.data));
      })
      .catch((error)=>{
          dispatch(actUploadImageLocationFailed(error));
      })
  }
} 
const actUploadImageLocationRequest = ()=>{
  return {
      type: ActionType.UPLOAD_IMAGE_LOCATION_REQUEST
  }
}
const actUploadImageLocationSuccess = (data) => {
return {
  type: ActionType.UPLOAD_IMAGE_LOCATION_SUCCESS,
  payload: data,
}
}
const actUploadImageLocationFailed = (error) => {
  return{
      type: ActionType.UPLOAD_IMAGE_LOCATION_FAILED,
      payload: error,
  }
}

