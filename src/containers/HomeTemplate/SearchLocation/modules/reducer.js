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

    case ActionType.DELETE_LOCATION_REQUEST:
      state.loading = true;
      state.error = null;
      return { ...state };
    case ActionType.DELETE_LOCATION_SUCCESS: {
      let listLocation = { ...state.listLocation };
      const index = state.listLocation.findIndex((location) => {
        return location._id === action.payload;
      });
      if (index != -1) {
        listLocation.splice(index, 1);
        state.listLocation = listLocation;
      }
      return { ...state };
    }
    case ActionType.DELETE_LOCATION_FAILED:
      state.loading = false;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default fetchListLocationReducer;
