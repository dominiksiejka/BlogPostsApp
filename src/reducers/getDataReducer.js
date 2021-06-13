import { FETCH_DATA } from "../actions/actionCreator";
import { FETCH_POST } from "../actions/actionCreator";
import { DELETE_POST } from "../actions/actionCreator";
export const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return state.filter((itm) => itm.id !== action.payload);
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getSinglePost = (state = "", action) => {
  if (action.type === FETCH_POST) {
    return action.payload;
  }
  return state;
};
