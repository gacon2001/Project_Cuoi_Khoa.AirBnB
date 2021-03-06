import * as ActionType from "./constants";

const initialState = {
  loading: false,
  detailRoom: null,
  error: null,
  listEvaluate: [],
  bookingRoom: "",
  imageRoom: "",
};

const fetchDetailRoomsForRentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DETAIL_ROOM_REQUEST: {
      state.loading = true;
      state.detailRoom = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_ROOM_SUCCESS: {
      state.loading = false;
      state.detailRoom = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_ROOM_FAILED: {
      state.loading = false;
      state.detailRoom = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_LIST_EVALUATE_REQUEST: {
      state.loading = true;
      state.listEvaluate = [];
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_EVALUATE_SUCCESS: {
      state.loading = false;
      state.listEvaluate = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_EVALUATE_FAILED: {
      state.loading = false;
      state.listEvaluate = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.BOOKING_ROOM_REQUEST: {
      state.loading = true;
      state.bookingRoom = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.BOOKING_ROOM_SUCCESS: {
      state.loading = false;
      state.bookingRoom = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.BOOKING_ROOM_FAILED: {
      state.loading = false;
      state.bookingRoom = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.DELETE_EVALUATE_REQUEST: {
      state.loading= true;
      state.error = null;
      return {...state};
    }
    case ActionType.DELETE_EVALUATE_SUCCESS: {
      let listEvaluate = {...state.listEvaluate};
      const index = state.listEvaluate.findIndex((evaluate)=>{
        return evaluate._id === action.payload;
      });
      if(index != -1){
        listEvaluate.splice(index, 1);
        state.listEvaluate =  listEvaluate;
      }
      return {...state};
    }
    case ActionType.BOOKING_ROOM_FAILED:
      state.loading= false;
      state.error = action.payload;
      return {...state};
    default:
      return { ...state };
  }
};

export default fetchDetailRoomsForRentReducer;
