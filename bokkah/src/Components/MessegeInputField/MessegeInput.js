import React from "react";
import store from "../../Store/PrimaryStore";
import { setTypingValue, sendMessage } from "../../Store/Actions/Actions";
import "./MessegeInput.css";

const messageInput = ({ value }) => {
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  //first retrieve the current state object
  const state = store.getState();
  //this will add the messege value in the input to the active users messege log.
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default messageInput;
