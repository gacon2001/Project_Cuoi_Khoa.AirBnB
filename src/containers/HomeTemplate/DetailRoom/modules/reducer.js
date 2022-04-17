import * as ActionType from "./constants";

const initialState = {
  loading: false,
  detailRoom: null,
  error: null,
};

const fetchDetailRoomsForReducer = (state = initialState, action) => {
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

    default:
      return { ...state };
  }
};

export default fetchDetailRoomsForReducer;
