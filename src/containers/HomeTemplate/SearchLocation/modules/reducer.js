import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listLocation: [],
  error: null,
};

const fetchListLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_LOCATION_REQUEST: {
      state.loading = true;
      state.listLocation = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_LOCATION_SUCCESS: {
      state.loading = false;
      state.listLocation = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_LIST_LOCATION_FAILED: {
      state.loading = false;
      state.listLocation = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default fetchListLocationReducer;
