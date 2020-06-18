import {
  SERVICES_LOADING,
  SERVICES_LOAD_SUCCEED,
  SERVICES_LOAD_FAILED
} from "../actions/services.js";

const initialState = {
  servicesLoadingState: "",
  error: null,
  items: [],
  categories: []
};

export const servicesReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVICES_LOADING:
      return { ...state, servicesLoadingState: "loading" };
    case SERVICES_LOAD_SUCCEED:
      const { items, categories } = payload;
      return {
        ...state,
        error: null,
        servicesLoadingState: "succeed",
        items,
        categories
      };
    case SERVICES_LOAD_FAILED:
      return {
        ...initialState,
        servicesLoadingState: "failed",
        error: payload
      };

    default:
      return state;
  }
};
