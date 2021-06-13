import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { getSinglePost } from "./getDataReducer";
import { getDataReducer } from "./getDataReducer";

export default combineReducers({
  blogs: getDataReducer,
  singlePost: getSinglePost,
  form: formReducer,
});
