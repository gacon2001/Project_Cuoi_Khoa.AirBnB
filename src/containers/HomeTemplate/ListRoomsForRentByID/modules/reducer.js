import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listRooms: [],
  error: null,
};

const fetchListRoomsForRentByIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_REQUEST: {
      state.loading = true;
      state.listRooms = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_SUCCESS: {
      state.loading = false;
      state.listRooms = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_ROOMS_FOR_RENT_BY_ID_FAILED: {
      state.loading = false;
      state.listRooms = null;
      state.error = action.payload;
      return { ...state };
    }


    default:
      return { ...state };
  }
};

export default fetchListRoomsForRentByIDReducer;
