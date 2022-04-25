import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  editEvaluate: "",
  detailEvaluate: null,
};

const editEvaluateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_EVALUATE_REQUEST: {
      state.loading = true;
      state.editEvaluate = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_EVALUATE_SUCCESS: {
      state.loading = false;
      state.editEvaluate = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.EDIT_EVALUATE_FAILED: {
      state.loading = false;
      state.editEvaluate = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_EVALUATE_REQUEST: {
      state.loading = true;
      state.detailEvaluate = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_EVALUATE_SUCCESS: {
      state.loading = false;
      state.detailEvaluate = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_EVALUATE_FAILED: {
      state.loading = false;
      state.detailEvaluate = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default editEvaluateReducer;
