import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from "../ActionTypes/ActionTypes";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id //id para is returned when the setActivated()dispatched and reducers action.type equals to that type
});

//setting up the value of the input field to a state variable ' typing: "" '

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});
