
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

export const actFetchListEvaluateApi = (_id) => {
  return (dispatch) => {
    dispatch(actFetchListEvaluateRequest());
    api
    //24
      .get(`reviews/byRoom?roomId=${_id}`)
      .then((success) => {
        dispatch(actFetchListEvaluateSuccess(success.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actFetchListEvaluateFailed(error));
      });
  };
};
const actFetchListEvaluateRequest = () => {
  return {
    type: ActionType.FETCH_LIST_EVALUATE_REQUEST,
  };
};
const actFetchListEvaluateSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_EVALUATE_SUCCESS,
    payload: data,
  };
};
const actFetchListEvaluateFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_EVALUATE_FAILED,
    payload: error,
  };
};

export const actBookingRoomApi = (booking) => {
  return (dispatch) => {
    dispatch(actBookingRoomRequest());
    api
    //21
      .post("rooms/booking", booking)
      .then((success) => {
        dispatch(actBookingRoomSuccess(success.data));
        alert("success")
      })
      .catch((error) => {
        dispatch(actBookingRoomFailed(error));
        alert("failed")
      });
  };
};
const actBookingRoomRequest = () => {
  return {
    type: ActionType.BOOKING_ROOM_REQUEST,
  };
};
const actBookingRoomSuccess = (data) => {
  return {
    type: ActionType.BOOKING_ROOM_SUCCESS,
    payload: data,
  };
};
const actBookingRoomFailed = (error) => {
  return {
    type: ActionType.BOOKING_ROOM_FAILED,
    payload: error,
  };
};