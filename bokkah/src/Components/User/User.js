import React from "react";
import "./User.css";
import store from "../../Store/PrimaryStore";
import { setActiveUserId } from "../../Store/Actions/Actions";

const User = ({ user }) => {
  const { name, profile_pic, status } = user; // individual components of a object is mapped to seperate variables

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  //console.log(user_id + "  inside user.js");
  store.dispatch(setActiveUserId(user_id)); //this is where the defined actions are actually dispatched into affect the store
}

export default User;
