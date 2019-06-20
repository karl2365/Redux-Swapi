import {SUCCESS, FAILURE, FETCH }  from "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SUCCESS: 
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: null

      }
    case FETCH:
      return{
        ...state,
        isFetching: true,
        error: null
      }
    case FAILURE: 
      return{
        ...state,
        error: 'Error',
        isFetching: false

      }
    default:
      return state;
  }
};
