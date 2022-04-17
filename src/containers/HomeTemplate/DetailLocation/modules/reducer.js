import * as ActionType from "./constants";

const initialState = {
  loading: false,
  detailLocation: null,
  error: null,
};

const fetchDetailLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DETAIL_LOCATION_REQUEST: {
      state.loading = true;
      state.detailLocation = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_LOCATION_SUCCESS: {
      state.loading = false;
      state.detailLocation = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_LOCATION_FAILED: {
      state.loading = false;
      state.detailLocation = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default fetchDetailLocationReducer;
