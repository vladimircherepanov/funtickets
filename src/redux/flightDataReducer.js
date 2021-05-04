import {
  LOAD_FLIGHT_DATA,
  SORT_FLIGHT_DATA,
  GET_SORT_DIRECTION,
  SORT_BY_DURATION,
  SORT_BY_DURATION_DESR
} from "../redux/types";

const initialState = {
  flightData: [],
  sortDecreased: false,
  sortByDurationDecr: false
};

export const flightDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FLIGHT_DATA:
      return {
        ...state,
        flightData: action.payload.data
      };

    case SORT_FLIGHT_DATA:
      return {
        ...state,
        flightData: action.payload.sortedData
      };

    case SORT_BY_DURATION:
      return {
        ...state,
        flightData: action.payload.sorted
      };
    case GET_SORT_DIRECTION:
      return {
        ...state,
        sortDecreased: !action.payload.sortDirection
      };

    case SORT_BY_DURATION_DESR:
      return {
        ...state,
        sortByDurationDecr: !action.payload.sortDirection
      };

    default:
      return state;
  }
};
