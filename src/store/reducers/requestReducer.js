import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from "../constants";

const initialState = {
  robots: [],
  isPending: false,
  error: ""
};

export const requestRobots = ( state = initialState , action ) => {
  switch ( action.type ) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state
  }
};
