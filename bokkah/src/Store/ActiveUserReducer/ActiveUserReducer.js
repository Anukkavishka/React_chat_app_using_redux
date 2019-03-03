import { SET_ACTIVE_USER_ID } from "../ActionTypes/ActionTypes";
//import store from "../PrimaryStore";

export default function activeUserId(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      //console.log(action.payload + " inside the reducer");
      return action.payload;

    default:
      //console.log("inside the reducers default block");
      return state;
  }
}
