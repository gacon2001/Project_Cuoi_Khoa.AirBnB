import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  editLocation: "",
};

const editLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_LOCATION_REQUEST: {
      state.loading = true;
      state.editLocation = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_LOCATION_SUCCESS: {
      state.loading = false;
      state.editLocation = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.EDIT_LOCATION_FAILED: {
      state.loading = false;
      state.editLocation = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default editLocationReducer;
