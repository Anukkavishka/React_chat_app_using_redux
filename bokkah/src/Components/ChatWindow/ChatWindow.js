import React from "react";
import store from "../../Store/PrimaryStore";
import Header from "../Header/Header";
import Chats from "../Chats/Chats";
import _ from "lodash";
import "./ChatWindow.css";
import MessegeInput from "../MessegeInputField/MessegeInput";
const ChatWindow = ({ activeUserId }) => {
  //console.log(activeUserId);
  const state = store.getState();
  //console.log(state); //grab current state from the redux store
  const activeUser = state.contacts.contacts[activeUserId]; //we are getting the activated users user profile
  //console.log(activeUser);
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessegeInput value={typing} />
    </div>
  );
};

export default ChatWindow;
