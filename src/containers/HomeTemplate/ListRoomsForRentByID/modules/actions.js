
import api from "utils/api";
import * as ActionType from "./constants";

export const actFetchListRoomsForRentByIDApi = (_id) => {
  return (dispatch) => {
    dispatch(actFetchListRoomsForRentByIDRequest());
    api
    //17
      .get(`rooms?locationId=${_id}`)
      .then((success) => {
        dispatch(actFetchListRoomsForRentByIDSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actFetchListRoomsForRentByIDFailed(error));
      });
  };
};
const actFetchListRoomsForRentByIDRequest = () => {
  return {
    type: ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_REQUEST,
  };
};
const actFetchListRoomsForRentByIDSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_SUCCESS,
    payload: data,
  };
};
const actFetchListRoomsForRentByIDFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_FAILED,
    payload: error,
  };
};


export const actDeleteRoomApi = (_id) => {
  return (dispatch) => {
      dispatch(actDeleteRoomRequest());
      api.delete(`rooms/${_id}`)
      .then((success)=>{
          dispatch(actDeleteRoomSuccess(success.data));
          alert("Delete Successfully");
          window.location.reload(true);
      })
      .catch((error)=>{
          dispatch(actDeleteRoomFailed(error));
      })
  }
} 
const actDeleteRoomRequest = ()=>{
  return {
      type: ActionType.DELETE_ROOM_REQUEST
  }
}
const actDeleteRoomSuccess = (data) => {
return {
  type: ActionType.DELETE_ROOM_SUCCESS,
  payload: data,
}
}
const actDeleteRoomFailed = (error) => {
  return{
      type: ActionType.DELETE_ROOM_FAILED,
      payload: error,
  }
}
