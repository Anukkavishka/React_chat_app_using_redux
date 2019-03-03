import user from "./UserReducer/UserReducer";
import contacts from "./ContactReducer/ContactReducer";
import activeUserId from "./ActiveUserReducer/ActiveUserReducer";
import messages from "./MessegeReducer/MessegeReducer";
import typing from "./TypingReducer/TypingReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing
  //these are variable names that mapped to functions defined in reducers and then in reducers
  //get them from static_data.js file.
});
